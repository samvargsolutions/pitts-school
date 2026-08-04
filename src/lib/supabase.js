import { createClient } from '@supabase/supabase-js';

const supabaseUrl = import.meta.env.VITE_SUPABASE_URL || '';
const supabaseAnonKey = import.meta.env.VITE_SUPABASE_ANON_KEY || '';

export const isSupabaseConfigured = Boolean(supabaseUrl && supabaseAnonKey);

export const supabase = isSupabaseConfigured
  ? createClient(supabaseUrl, supabaseAnonKey)
  : null;

/**
 * Uploads an image file directly to Supabase Storage ('site-assets' bucket)
 * Returns the public URL of the uploaded image.
 */
export async function uploadImageToSupabase(file) {
  if (!supabase || !isSupabaseConfigured) return null;

  try {
    const fileExt = file.name ? file.name.split('.').pop() : 'webp';
    const fileName = `${Date.now()}_${Math.random().toString(36).substring(2, 9)}.${fileExt}`;
    const filePath = `uploads/${fileName}`;

    const { error: uploadError } = await supabase.storage
      .from('site-assets')
      .upload(filePath, file, {
        cacheControl: '3600',
        upsert: true,
      });

    if (uploadError) {
      console.warn('Supabase storage upload error:', uploadError.message);
      return null;
    }

    const { data: publicUrlData } = supabase.storage
      .from('site-assets')
      .getPublicUrl(filePath);

    return publicUrlData?.publicUrl || null;
  } catch (err) {
    console.warn('Failed to upload image to Supabase:', err);
    return null;
  }
}

/**
 * Fetches site content JSON document from Supabase Database ('site_content' table)
 */
export async function fetchSiteContentFromSupabase() {
  if (!supabase || !isSupabaseConfigured) return null;

  try {
    const { data, error } = await supabase
      .from('site_content')
      .select('content')
      .eq('key', 'pitts_site_content')
      .single();

    if (error && error.code !== 'PGRST116') {
      console.warn('Supabase fetch content error:', error.message);
      return null;
    }

    return data?.content || null;
  } catch (err) {
    console.warn('Error fetching content from Supabase:', err);
    return null;
  }
}

/**
 * Saves/Upserts site content JSON document to Supabase Database ('site_content' table)
 */
export async function saveSiteContentToSupabase(content) {
  if (!supabase || !isSupabaseConfigured) return false;

  try {
    const { error } = await supabase
      .from('site_content')
      .upsert(
        {
          key: 'pitts_site_content',
          content,
          updated_at: new Date().toISOString(),
        },
        { onConflict: 'key' }
      );

    if (error) {
      console.warn('Supabase save content error:', error.message);
      return false;
    }

    return true;
  } catch (err) {
    console.warn('Error saving content to Supabase:', err);
    return false;
  }
}

/**
 * Subscribes to Supabase Realtime changes for instant global updates
 */
export function subscribeToSupabaseRealtime(onUpdate) {
  if (!supabase || !isSupabaseConfigured) return () => {};

  try {
    const channel = supabase
      .channel('site_content_live')
      .on(
        'postgres_changes',
        { event: '*', schema: 'public', table: 'site_content' },
        (payload) => {
          if (payload.new && payload.new.content) {
            onUpdate(payload.new.content);
          }
        }
      )
      .subscribe();

    return () => {
      supabase.removeChannel(channel);
    };
  } catch (err) {
    console.warn('Supabase realtime subscription error:', err);
    return () => {};
  }
}

