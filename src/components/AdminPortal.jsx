import React, { useMemo, useState } from 'react';
import { Download, Eye, Image as ImageIcon, Link2, Lock, LogOut, Menu, Plus, RotateCcw, Save, ShieldCheck, Trash2, Upload, User, X } from 'lucide-react';
import { defaultSiteContent, getSiteContent, normalizeAssetUrl, normalizeLinkUrl, resetSiteContent, routeLinks, saveSiteContent, useSiteContent } from '../context/siteContent';
import { isSupabaseConfigured, uploadImageToSupabase } from '../lib/supabase';

const ADMIN_SESSION_KEY = 'pittsModernSchool.adminSession';
const ADMIN_CONFIGURED_USER = import.meta.env.VITE_ADMIN_USER || 'pittsadmin';
const ADMIN_CONFIGURED_PASSWORD = import.meta.env.VITE_ADMIN_PASSWORD || 'pittspasswordmodularadmin2';

const modules = [
  { id: 'popup', label: 'Popup Announcement', path: 'popup', type: 'object', fields: ['enabled', 'title', 'subtitle', 'body', 'image', 'ctaLabel', 'ctaHref'] },
  { id: 'announcements', label: 'Announcement Bar', path: 'header.announcements', type: 'array', fields: ['text', 'href'] },
  { id: 'quickActions', label: 'Quick Actions', path: 'header.quickActions', type: 'array', fields: ['title', 'href'] },
  { id: 'latestHighlights', label: 'Latest Highlights', path: 'latestHighlights', type: 'array', fields: ['title', 'date', 'excerpt', 'category', 'image', 'href'] },
  { id: 'upcomingEvents', label: 'Upcoming Events', path: 'upcomingEvents', type: 'array', fields: ['month', 'day', 'weekday', 'title', 'type', 'time', 'image', 'excerpt', 'href'] },
  { id: 'notices', label: 'Notice Board', path: 'notices', type: 'array', fields: ['day', 'month', 'label', 'department', 'title', 'content', 'attachmentName', 'href'] },
  { id: 'newsletters', label: 'Newsletters', path: 'newsletters', type: 'array', fields: ['title', 'date', 'summary', 'image', 'href'] },
  { id: 'resultsConfig', label: 'Results — Session & Links', path: 'results', type: 'object', fields: ['year', 'bulletinHref'] },
  { id: 'resultTags', label: 'Results — Class Tags', path: 'results.tags', type: 'array', fields: ['name'] },
  { id: 'toppers', label: 'Results — Toppers', path: 'results.toppers', type: 'array', fields: ['rank', 'name', 'score', 'className', 'image', 'position', 'tone'] },
  { id: 'landmarks', label: 'Results — Landmark Moments', path: 'results.landmarkSlides', type: 'array', fields: ['image', 'tag', 'caption'] },
  { id: 'faculty', label: 'Faculty Library', path: 'contentLibrary.faculty', type: 'array', fields: ['name', 'post', 'qualification', 'department', 'wing', 'experience', 'email', 'image'] },
  { id: 'sports', label: 'Sports Library', path: 'contentLibrary.sports', type: 'array', fields: ['title', 'date', 'image', 'text', 'href'] },
  { id: 'activities', label: 'Activities Library', path: 'contentLibrary.culturalActivities', type: 'array', fields: ['title', 'date', 'image', 'text', 'href'] },
  { id: 'gallery', label: 'Gallery Library', path: 'contentLibrary.gallery', type: 'array', fields: ['title', 'category', 'image', 'caption'] },
];

const internalLinkOptions = [
  ['Home', routeLinks.home],
  ['About Us', routeLinks.about],
  ['Our Story', routeLinks.story],
  ['Management', routeLinks.management],
  ["Principal's Desk", routeLinks.principal],
  ['Infrastructure', routeLinks.infrastructure],
  ['News & Notices', routeLinks.news],
  ['Events Calendar', routeLinks.events],
  ['Newsletters', routeLinks.newsletters],
  ['Faculty', routeLinks.faculty],
  ['CBSE Result', routeLinks.results],
  ['Admission Test Result', routeLinks.admissionResults],
  ['Other Result', routeLinks.otherResults],
  ['Sports', routeLinks.sports],
  ['Co-curricular Activities', routeLinks.cultural],
  ['School Rules', routeLinks.rules],
  ['Parent Rules', routeLinks.parentRules],
  ['School Disclosure', routeLinks.disclosure],
  ['Gallery', routeLinks.gallery],
  ['Contact', routeLinks.contact],
  ['Admin', routeLinks.admin],
  ['Admission News', routeLinks.admissions],
  ['Online Pay', routeLinks.payments],
  ['ERP Login', routeLinks.erp],
  ['Privacy', routeLinks.privacy],
];

function getAtPath(source, path) {
  return path.split('.').reduce((value, key) => (value ? value[key] : undefined), source);
}

function setAtPath(source, path, nextValue) {
  const keys = path.split('.');
  const clone = structuredClone(source);
  let cursor = clone;
  keys.slice(0, -1).forEach((key) => {
    cursor[key] = cursor[key] || {};
    cursor = cursor[key];
  });
  cursor[keys[keys.length - 1]] = nextValue;
  return clone;
}

function emptyItem(fields) {
  return fields.reduce((item, field) => ({ ...item, [field]: field === 'enabled' ? true : '' }), {});
}

function humanLabel(field) {
  return field.replace(/([A-Z])/g, ' $1').replace(/^./, (letter) => letter.toUpperCase());
}

function isAssetField(field) {
  return /(image|photo|cover|file|document|pdf)/i.test(field);
}

function isLinkField(field) {
  return /(href|link|url)/i.test(field);
}

const IMAGE_UPLOAD_LIMIT = 12 * 1024 * 1024;
const DOCUMENT_UPLOAD_LIMIT = 900 * 1024;
const TARGET_IMAGE_BYTES = 180 * 1024;
const MAX_IMAGE_SIDE = 1400;

function fileToDataUrl(file) {
  return new Promise((resolve, reject) => {
    const reader = new FileReader();
    reader.onload = () => resolve(reader.result);
    reader.onerror = reject;
    reader.readAsDataURL(file);
  });
}

function loadImageSource(source) {
  return new Promise((resolve, reject) => {
    const image = new Image();
    image.onload = () => resolve(image);
    image.onerror = reject;
    image.src = source;
  });
}

function canvasToBlob(canvas, type, quality) {
  return new Promise((resolve) => canvas.toBlob(resolve, type, quality));
}

async function blobToDataUrl(blob) {
  return fileToDataUrl(blob);
}

async function compressImageToWebp(source, options = {}) {
  const maxSide = options.maxSide || MAX_IMAGE_SIDE;
  const targetBytes = options.targetBytes || TARGET_IMAGE_BYTES;
  const image = await loadImageSource(source);
  const scale = Math.min(1, maxSide / Math.max(image.naturalWidth || image.width, image.naturalHeight || image.height));
  const width = Math.max(1, Math.round((image.naturalWidth || image.width) * scale));
  const height = Math.max(1, Math.round((image.naturalHeight || image.height) * scale));
  const canvas = document.createElement('canvas');
  canvas.width = width;
  canvas.height = height;
  const context = canvas.getContext('2d', { alpha: true });
  context.drawImage(image, 0, 0, width, height);

  let bestBlob = null;
  for (const quality of [0.82, 0.72, 0.62, 0.52, 0.42]) {
    const blob = await canvasToBlob(canvas, 'image/webp', quality);
    if (!blob) continue;
    bestBlob = blob;
    if (blob.size <= targetBytes) break;
  }

  if (!bestBlob) return source;
  return blobToDataUrl(bestBlob);
}

async function prepareUploadedFile(file) {
  if (file.type.startsWith('image/')) {
    if (file.size > IMAGE_UPLOAD_LIMIT) {
      window.alert('This image is too large. Please choose an image under 12 MB.');
      return '';
    }

    if (isSupabaseConfigured) {
      const publicUrl = await uploadImageToSupabase(file);
      if (publicUrl) return publicUrl;
    }

    const originalDataUrl = await fileToDataUrl(file);
    return compressImageToWebp(originalDataUrl, { maxSide: 1000, targetBytes: 80 * 1024 });
  }

  if (file.size > DOCUMENT_UPLOAD_LIMIT) {
    window.alert('This document is too large for browser local storage. Put it in the public folder and paste its path or URL here.');
    return '';
  }

  return fileToDataUrl(file);
}

async function readDroppedFile(file, onChange) {
  const prepared = await prepareUploadedFile(file);
  if (prepared) onChange(prepared);
}

function rejectFileForLinkField() {
  window.alert('This is a link field. Choose an internal page from the dropdown or type/paste an external URL. Upload images in an Image field.');
}

async function optimizeContentForStorage(value) {
  if (typeof value === 'string') {
    if (value.startsWith('data:image/') && value.length > TARGET_IMAGE_BYTES * 2) {
      try {
        return await compressImageToWebp(value);
      } catch {
        return value;
      }
    }
    return value;
  }

  if (Array.isArray(value)) {
    return Promise.all(value.map((item) => optimizeContentForStorage(item)));
  }

  if (value && typeof value === 'object') {
    const entries = await Promise.all(Object.entries(value).map(async ([key, item]) => [key, await optimizeContentForStorage(item)]));
    return Object.fromEntries(entries);
  }

  return value;
}

function cleanInvalidLinkUploads(value, keyName = '') {
  if (typeof value === 'string') {
    if (isLinkField(keyName) && value.startsWith('data:')) return '';
    return value;
  }

  if (Array.isArray(value)) {
    return value.map((item) => cleanInvalidLinkUploads(item));
  }

  if (value && typeof value === 'object') {
    return Object.fromEntries(Object.entries(value).map(([key, item]) => [key, cleanInvalidLinkUploads(item, key)]));
  }

  return value;
}

function getStorageBytes(value) {
  return new Blob([JSON.stringify(value)]).size;
}

function describeBytes(bytes) {
  if (bytes < 1024) return `${bytes} B`;
  if (bytes < 1024 * 1024) return `${Math.round(bytes / 1024)} KB`;
  return `${(bytes / (1024 * 1024)).toFixed(1)} MB`;
}

function getQuotaMessage(error, content) {
  const size = describeBytes(getStorageBytes(content));
  if (error?.name === 'QuotaExceededError') return `Save failed: browser storage is full (${size}). Remove large documents or use public-folder links.`;
  return `Save failed (${size}). Export JSON or remove large uploaded files.`;
}

function FieldInput({ field, value, onChange }) {
  if (field === 'enabled') {
    return (
      <label className="admin-toggle-field">
        <input type="checkbox" checked={Boolean(value)} onChange={(event) => onChange(event.target.checked)} />
        <span>{Boolean(value) ? 'Enabled' : 'Disabled'}</span>
      </label>
    );
  }

  if (field === 'className') {
    const siteContent = useSiteContent();
    const tagsList = siteContent?.results?.tags || [];
    const classOptions = tagsList.map(t => t.name).filter(Boolean);
    return (
      <label className="admin-field">
        <span>{humanLabel(field)}</span>
        <select
          value={value || ''}
          onChange={(event) => onChange(event.target.value)}
          className="admin-internal-link-picker"
          style={{ width: '100%', marginTop: '0.35rem', display: 'block' }}
        >
          <option value="">Select a class tag...</option>
          {classOptions.map((opt) => (
            <option key={opt} value={opt}>{opt}</option>
          ))}
        </select>
      </label>
    );
  }

  const isLong = ['body', 'subtitle', 'text', 'caption', 'excerpt', 'note'].includes(field);
  const isImage = field.toLowerCase().includes('image');
  const isLink = isLinkField(field);
  const acceptsDrop = isAssetField(field) || isLink;
  const acceptsFileUpload = isAssetField(field);
  const [isUploading, setIsUploading] = useState(false);

  const handleDrop = async (event) => {
    if (!acceptsDrop) return;
    event.preventDefault();
    const file = event.dataTransfer.files?.[0];
    if (file && isLink) {
      rejectFileForLinkField();
      return;
    }
    if (file && isAssetField(field)) {
      setIsUploading(true);
      try {
        await readDroppedFile(file, onChange);
      } finally {
        setIsUploading(false);
      }
      return;
    }
    const droppedText = event.dataTransfer.getData('text/uri-list') || event.dataTransfer.getData('text/plain');
    if (droppedText) onChange(isLink ? normalizeLinkUrl(droppedText) : normalizeAssetUrl(droppedText, droppedText.trim()));
  };

  const handleTextChange = (event) => {
    const nextValue = event.target.value;
    if (isLink) {
      onChange(normalizeLinkUrl(nextValue, nextValue));
      return;
    }
    if (isAssetField(field)) {
      onChange(normalizeAssetUrl(nextValue, nextValue));
      return;
    }
    onChange(nextValue);
  };

  const handleFilePick = async (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    setIsUploading(true);
    try {
      await readDroppedFile(file, onChange);
      event.target.value = '';
    } finally {
      setIsUploading(false);
    }
  };

  const handleInternalLinkPick = (event) => {
    if (!event.target.value) return;
    onChange(event.target.value);
  };

  const previewImage = normalizeAssetUrl(value);
  const fileAccept = isImage ? 'image/*' : '*/*';
  const selectedInternalValue = internalLinkOptions.some(([, href]) => href === value) ? value : '';

  return (
    <label
      className={`admin-field ${acceptsDrop ? 'admin-field-droppable' : ''}`}
      onDragOver={(event) => acceptsDrop && event.preventDefault()}
      onDrop={handleDrop}
    >
      <span>{humanLabel(field)}</span>
      {isLink && (
        <select className="admin-internal-link-picker" value={selectedInternalValue} onChange={handleInternalLinkPick} aria-label={`Choose internal page for ${humanLabel(field)}`}>
          <option value="">Choose internal page...</option>
          {internalLinkOptions.map(([label, href]) => (
            <option key={`${label}-${href}`} value={href}>{label} - {href}</option>
          ))}
        </select>
      )}
      <div className={`admin-input-wrap ${acceptsDrop || isImage || isLink ? '' : 'admin-input-plain'}`}>
        {isImage && <ImageIcon size={15} />}
        {isLink && <Link2 size={15} />}
        {isLong ? (
          <textarea value={value || ''} onChange={handleTextChange} rows={3} />
        ) : (
          <input value={value || ''} onChange={handleTextChange} />
        )}
        {acceptsFileUpload && (
          <span className={`admin-file-picker ${isUploading ? 'is-uploading' : ''}`}>
            <input type="file" accept={fileAccept} onChange={handleFilePick} aria-label={`Upload ${humanLabel(field)}`} disabled={isUploading} />
            <Upload size={14} />
            {isUploading ? 'Optimizing' : 'Upload'}
          </span>
        )}
      </div>
      {isImage && previewImage && <img className="admin-field-thumb" src={previewImage} alt="" />}
      {acceptsDrop && <small className="admin-drop-hint">Drop a file, image, document or URL here.</small>}
    </label>
  );
}

function EventCalendarPreview({ events = [] }) {
  const [activeIndex, setActiveIndex] = useState(0);
  const activeEvent = events[activeIndex] || events[0] || {};

  return (
    <div className="admin-calendar-preview">
      <div className="admin-calendar-preview-grid">
        {events.slice(0, 9).map((event, index) => (
          <button
            key={`${event.month}-${event.day}-${index}`}
            className={index === activeIndex ? 'active' : ''}
            onClick={() => setActiveIndex(index)}
            type="button"
          >
            <span>{event.month || 'MMM'}</span>
            <strong>{event.day || '--'}</strong>
          </button>
        ))}
      </div>
      <aside className="admin-calendar-preview-detail">
        <span>{activeEvent.weekday || 'Event'} {activeEvent.month || ''} {activeEvent.day || ''}</span>
        <h3>{activeEvent.title || 'Add an event title'}</h3>
        <p>{activeEvent.time || 'Add event timing'}</p>
        {normalizeAssetUrl(activeEvent.image) && <img src={normalizeAssetUrl(activeEvent.image)} alt="" />}
        <a href={normalizeLinkUrl(activeEvent.href, '/events')} target="_blank" rel="noreferrer">Preview event link</a>
      </aside>
    </div>
  );
}

function LoginPanel({ onLogin }) {
  const [user, setUser] = useState(() => window.localStorage.getItem('pittsAdmin.rememberedUser') || '');
  const [password, setPassword] = useState('');
  const [year, setYear] = useState('2026-27');
  const [remember, setRemember] = useState(() => window.localStorage.getItem('pittsAdmin.remember') === 'true');
  const [error, setError] = useState('');

  const submit = (event) => {
    event.preventDefault();
    if (user.trim() === ADMIN_CONFIGURED_USER && password === ADMIN_CONFIGURED_PASSWORD) {
      if (remember) {
        window.localStorage.setItem(ADMIN_SESSION_KEY, 'true');
        window.localStorage.setItem('pittsAdmin.rememberedUser', user);
        window.localStorage.setItem('pittsAdmin.remember', 'true');
      } else {
        window.localStorage.removeItem('pittsAdmin.rememberedUser');
        window.localStorage.removeItem('pittsAdmin.remember');
      }
      window.sessionStorage.setItem(ADMIN_SESSION_KEY, 'true');
      onLogin();
      return;
    }
    setError('Invalid User ID or Password. Please try again.');
  };

  return (
    <main className="admin-login-page">
      <div className="admin-login-panel">
        <img src="/image/logo.webp" alt="Pitts Modern School" />
        <h1>Please Enter Login Information</h1>
        <form onSubmit={submit}>
          <label>
            <User size={17} />
            <input value={user} onChange={(event) => setUser(event.target.value)} placeholder="Please Enter User Id" />
          </label>
          <label>
            <Lock size={17} />
            <input value={password} onChange={(event) => setPassword(event.target.value)} type="password" placeholder="Please Enter Password" />
          </label>
          <select value={year} onChange={(event) => setYear(event.target.value)}>
            <option>2026-27</option>
            <option>2025-26</option>
            <option>2024-25</option>
          </select>
          <div className="admin-login-row">
            <label className="admin-remember"><input type="checkbox" checked={remember} onChange={(event) => setRemember(event.target.checked)} /> Remember Me</label>
            <button type="submit">Submit</button>
          </div>
          {error && <p className="admin-login-error">{error}</p>}
        </form>
        <a href="/contact">I forgot my password <span aria-hidden="true">-&gt;</span></a>
      </div>
    </main>
  );
}

export default function AdminPortal() {
  const [isAuthed, setIsAuthed] = useState(() => window.sessionStorage.getItem(ADMIN_SESSION_KEY) === 'true' || window.localStorage.getItem(ADMIN_SESSION_KEY) === 'true');
  const [content, setContent] = useState(() => getSiteContent());
  const [activeId, setActiveId] = useState('latestHighlights');
  const [savedLabel, setSavedLabel] = useState('Saved locally');
  const [saveState, setSaveState] = useState('saved');
  const [isSaving, setIsSaving] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const activeModule = useMemo(() => modules.find((module) => module.id === activeId) || modules[0], [activeId]);
  const activeValue = getAtPath(content, activeModule.path);

  if (!isAuthed) return <LoginPanel onLogin={() => setIsAuthed(true)} />;

  const updateContent = (updater) => {
    setContent((current) => (typeof updater === 'function' ? updater(current) : updater));
    setSaveState('dirty');
    setSavedLabel('Unsaved changes');
  };

  const updateObjectField = (field, value) => {
    updateContent((current) => setAtPath(current, activeModule.path, { ...getAtPath(current, activeModule.path), [field]: value }));
  };

  const updateItem = (index, field, value) => {
    updateContent((current) => {
      const currentItems = getAtPath(current, activeModule.path) || [];
      const nextItems = [...currentItems];
      nextItems[index] = { ...nextItems[index], [field]: value };
      return setAtPath(current, activeModule.path, nextItems);
    });
  };

  const addItem = () => updateContent((current) => setAtPath(current, activeModule.path, [...(getAtPath(current, activeModule.path) || []), emptyItem(activeModule.fields)]));
  const removeItem = (index) => updateContent((current) => setAtPath(current, activeModule.path, (getAtPath(current, activeModule.path) || []).filter((_, itemIndex) => itemIndex !== index)));

  const save = async () => {
    setIsSaving(true);
    setSaveState('dirty');
    setSavedLabel('Optimizing uploads & syncing cloud...');
    try {
      const cleanedContent = cleanInvalidLinkUploads(content);
      const optimizedContent = await optimizeContentForStorage(cleanedContent);
      saveSiteContent(optimizedContent);
      setSaveState('saved');
      const syncNotice = isSupabaseConfigured ? 'Synced to Supabase' : 'Synced to Cloud';
      setSavedLabel(`Saved & ${syncNotice} at ${new Date().toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}`);
    } catch (error) {
      console.error('Could not save admin changes.', error);
      setSaveState('error');
      setSavedLabel(getQuotaMessage(error, content));
    } finally {
      setIsSaving(false);
    }
  };

  const reset = () => {
    const next = resetSiteContent();
    updateContent(next);
    setSaveState('saved');
    setSavedLabel('Defaults restored & synced');
  };

  const exportJson = () => {
    const blob = new Blob([JSON.stringify(content, null, 2)], { type: 'application/json' });
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = 'pitts-site-content.json';
    link.click();
    URL.revokeObjectURL(url);
  };

  const importJson = (event) => {
    const file = event.target.files?.[0];
    if (!file) return;
    const reader = new FileReader();
    reader.onload = () => {
      try {
        const next = JSON.parse(reader.result);
        updateContent(next);
        setSavedLabel('Imported. Review, then save.');
      } catch {
        setSaveState('error');
        setSavedLabel('Import failed: invalid JSON');
      }
    };
    reader.readAsText(file);
  };

  const logout = () => {
    window.sessionStorage.removeItem(ADMIN_SESSION_KEY);
    window.localStorage.removeItem(ADMIN_SESSION_KEY);
    setIsAuthed(false);
  };

  const showPopupAgain = () => {
    window.localStorage.removeItem('hideAdmissionPopup');
    setSaveState('saved');
    setSavedLabel('Popup will show again on the website after refresh');
  };

  const selectModule = (id) => {
    setActiveId(id);
    setIsMobileMenuOpen(false);
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <main className="admin-portal-page">
      {/* MOBILE TOP BAR WITH HAMBURGER BUTTON */}
      <div className="admin-mobile-header">
        <button className="admin-mobile-hamburger" onClick={() => setIsMobileMenuOpen(true)} aria-label="Open admin menu">
          <Menu size={22} />
          <span>Modules</span>
        </button>
        <span className="admin-mobile-active-module">{activeModule.label}</span>
      </div>

      {/* MOBILE DRAWER OVERLAY */}
      {isMobileMenuOpen && (
        <div className="admin-mobile-drawer-backdrop" onClick={() => setIsMobileMenuOpen(false)}>
          <div className="admin-mobile-drawer-box" onClick={(e) => e.stopPropagation()}>
            <div className="admin-mobile-drawer-head">
              <div className="admin-brand">
                <img src="/image/logo.webp" alt="" />
                <span>Pitts Admin Menu</span>
              </div>
              <button onClick={() => setIsMobileMenuOpen(false)} aria-label="Close menu"><X size={22} /></button>
            </div>
            <nav className="admin-mobile-drawer-nav">
              {modules.map((module) => (
                <button
                  key={module.id}
                  className={activeId === module.id ? 'active' : ''}
                  onClick={() => selectModule(module.id)}
                >
                  <span>{module.label}</span>
                </button>
              ))}
            </nav>
            <button className="admin-logout" style={{ marginTop: '1rem' }} onClick={logout}>
              <LogOut size={16} /> Logout
            </button>
          </div>
        </div>
      )}

      <aside className="admin-sidebar">
        <a className="admin-brand" href="/">
          <img src="/image/logo.webp" alt="" />
          <span>Pitts Control<small>Website admin</small></span>
        </a>
        <nav aria-label="Admin modules">
          {modules.map((module) => (
            <button key={module.id} className={activeId === module.id ? 'active' : ''} onClick={() => selectModule(module.id)}>
              {module.label}
            </button>
          ))}
        </nav>
        <button className="admin-logout" onClick={logout}><LogOut size={16} /> Logout</button>
      </aside>

      <section className="admin-workspace">
        <header className="admin-topbar">
          <div>
            <p><ShieldCheck size={16} /> Local safe draft</p>
            <h1>{activeModule.label}</h1>
          </div>
          <div className="admin-actions">
            <span className={`admin-save-status ${saveState}`}>{savedLabel}</span>
            <button onClick={reset}><RotateCcw size={16} /> Reset</button>
            {(activeModule.id === 'popup' || activeModule.id === 'popupLinks') && <button onClick={showPopupAgain}><Eye size={16} /> Show Popup Again</button>}
            <button onClick={exportJson}><Download size={16} /> Export</button>
            <label className="admin-import"><Upload size={16} /> Import<input type="file" accept="application/json" onChange={importJson} /></label>
            <button className="admin-save" onClick={save} disabled={isSaving}><Save size={16} /> {isSaving ? 'Saving...' : 'Save Changes'}</button>
          </div>
        </header>

        <div className="admin-edit-layout">
          <section className="admin-editor-card">
            <div className="admin-editor-head">
              <div>
                <h2>Edit module</h2>
                <p>Changes are stored locally and appear on connected home sections after saving.</p>
              </div>
              {activeModule.type === 'array' && <button onClick={addItem}><Plus size={16} /> Add Item</button>}
            </div>

            {activeModule.type === 'object' ? (
              <div className="admin-object-grid">
                {activeModule.id === 'resultsConfig' && (
                  <div style={{ gridColumn: '1 / -1', background: '#EFF6FF', border: '1px solid #BFDBFE', borderRadius: '10px', padding: '1rem 1.2rem', marginBottom: '0.5rem' }}>
                    <strong style={{ color: '#1E40AF', fontSize: '0.88rem' }}>ℹ️ How to edit results:</strong>
                    <ul style={{ margin: '0.4rem 0 0 1.2rem', color: '#1D4ED8', fontSize: '0.83rem', lineHeight: 1.6 }}>
                      <li><b>year</b> — the session label shown on the home &amp; results page (e.g. <code>2025-26</code>)</li>
                      <li><b>bulletinHref</b> — URL or internal link for the "View Full Results" button</li>
                      <li>To add/remove class tabs (Class X, Class XII…) use <b>Results — Class Tags</b> in the sidebar</li>
                      <li>To add/edit student toppers use <b>Results — Toppers</b> in the sidebar</li>
                    </ul>
                  </div>
                )}
                {activeModule.fields.map((field) => (
                  <FieldInput key={field} field={field} value={activeValue?.[field]} onChange={(value) => updateObjectField(field, value)} />
                ))}
              </div>
            ) : (
              <div className="admin-row-list">
                {['faculty', 'gallery', 'sports', 'activities'].includes(activeModule.id) && (
                  <div style={{ background: '#F0FDF4', border: '1px solid #BBF7D0', borderRadius: '10px', padding: '0.9rem 1.2rem', marginBottom: '1rem' }}>
                    <strong style={{ color: '#166534', fontSize: '0.85rem' }}>
                      {activeModule.id === 'faculty' && '👩‍🏫 Faculty Library — data shown on the /faculty page. Use wing: senior / primary / admin'}
                      {activeModule.id === 'gallery' && '🖼️ Gallery Library — photos shown on the /gallery page. Use category: academics / cca / sports / events / campus'}
                      {activeModule.id === 'sports' && '🏆 Sports Library — items shown on the /sports page'}
                      {activeModule.id === 'activities' && '🎭 Activities Library — items shown on the /CulturalCoCulturalActivity page'}
                    </strong>
                  </div>
                )}
                {(activeValue || []).map((item, index) => (
                  <article className="admin-data-row" key={`${activeModule.id}-${index}`}>
                    <div className="admin-data-row-head">
                      <strong>{String(index + 1).padStart(2, '0')}</strong>
                      <button onClick={() => removeItem(index)} aria-label="Remove item"><Trash2 size={16} /></button>
                    </div>
                    <div className="admin-data-fields">
                      {activeModule.fields.map((field) => (
                        <FieldInput key={field} field={field} value={item[field]} onChange={(value) => updateItem(index, field, value)} />
                      ))}
                    </div>
                  </article>
                ))}
              </div>
            )}

            {activeModule.id === 'popup' && (
              <div className="admin-nested-section">
                <div className="admin-editor-head" style={{ marginTop: '2rem', paddingTop: '1.5rem', borderTop: '1px solid #e2e8f0' }}>
                  <div>
                    <h3 style={{ margin: 0, fontSize: '1.1rem', fontWeight: 800, color: '#0B427E' }}>Popup Link Items</h3>
                    <p style={{ margin: '0.2rem 0 0', fontSize: '0.85rem', color: '#64748B' }}>Manage the list of important links shown inside the popup modal.</p>
                  </div>
                  <button onClick={() => updateContent((current) => setAtPath(current, 'popup.links', [...(current.popup?.links || []), { label: '', note: '', href: '' }]))}>
                    <Plus size={16} /> Add Link Item
                  </button>
                </div>
                <div className="admin-row-list" style={{ marginTop: '1rem' }}>
                  {(content.popup?.links || []).map((item, index) => (
                    <article className="admin-data-row" key={`popuplink-${index}`}>
                      <div className="admin-data-row-head">
                        <strong>{String(index + 1).padStart(2, '0')}</strong>
                        <button
                          onClick={() => updateContent((current) => setAtPath(current, 'popup.links', (current.popup?.links || []).filter((_, i) => i !== index)))}
                          aria-label="Remove item"
                        >
                          <Trash2 size={16} />
                        </button>
                      </div>
                      <div className="admin-data-fields">
                        {['label', 'note', 'href'].map((field) => (
                          <FieldInput
                            key={field}
                            field={field}
                            value={item[field]}
                            onChange={(value) => updateContent((current) => {
                              const nextLinks = [...(current.popup?.links || [])];
                              nextLinks[index] = { ...nextLinks[index], [field]: value };
                              return setAtPath(current, 'popup.links', nextLinks);
                            })}
                          />
                        ))}
                      </div>
                    </article>
                  ))}
                </div>
              </div>
            )}
          </section>

          <aside className="admin-preview-card">
            <div className="admin-preview-head"><Eye size={16} /><span>Live preview</span></div>
            {activeModule.id === 'popup' ? (
              <div className="admin-preview-list" style={{ padding: '0.5rem' }}>
                <article style={{ display: 'flex', flexDirection: 'column', gap: '0.6rem', textAlign: 'center' }}>
                  <strong style={{ fontSize: '1.1rem', color: '#0B427E' }}>{activeValue?.title || 'Admissions Open!'}</strong>
                  {activeValue?.subtitle && <small style={{ color: '#475569', fontSize: '0.82rem' }}>{activeValue.subtitle}</small>}
                  {(normalizeAssetUrl(activeValue?.image) || '/image/admission_popup.webp') && (
                    <img
                      src={normalizeAssetUrl(activeValue?.image) || '/image/admission_popup.webp'}
                      alt=""
                      style={{ width: '100%', borderRadius: '10px', maxHeight: '180px', objectFit: 'cover' }}
                      onError={(e) => { e.currentTarget.src = '/image/admission_popup.webp'; }}
                    />
                  )}
                  {activeValue?.body && <p style={{ fontSize: '0.82rem', color: '#334155', margin: 0, textAlign: 'left' }}>{activeValue.body}</p>}
                  {(content.popup?.links || []).length > 0 && (
                    <div style={{ display: 'flex', flexDirection: 'column', gap: '0.35rem', margin: '0.4rem 0', textAlign: 'left' }}>
                      {(content.popup?.links || []).slice(0, 3).map((lnk, i) => (
                        <div key={i} style={{ padding: '0.4rem 0.6rem', border: '1px solid #e2e8f0', borderRadius: '6px', fontSize: '0.78rem', fontWeight: 600, color: '#0B427E' }}>
                          {lnk.label || `Link ${i + 1}`}
                        </div>
                      ))}
                    </div>
                  )}
                  {activeValue?.ctaLabel && (
                    <div style={{ background: '#10b981', color: '#fff', padding: '0.6rem', borderRadius: '999px', fontSize: '0.8rem', fontWeight: 800, textAlign: 'center' }}>
                      {activeValue.ctaLabel}
                    </div>
                  )}
                </article>
              </div>
            ) : activeModule.id === 'upcomingEvents' ? (
              <EventCalendarPreview events={activeValue || []} />
            ) : (
              <div className="admin-preview-list">
                {activeModule.type === 'array' ? (activeValue || []).slice(0, 4).map((item, index) => (
                  <article key={index}>
                    {normalizeAssetUrl(item.image) && <img src={normalizeAssetUrl(item.image)} alt="" />}
                    <strong>{item.title || item.name || item.text || item.caption || `Item ${index + 1}`}</strong>
                    <small>{item.href || item.time || item.score || item.role || 'Ready to publish'}</small>
                  </article>
                )) : (
                  <article>
                  {normalizeAssetUrl(activeValue?.image) && <img src={normalizeAssetUrl(activeValue.image)} alt="" />}
                    <strong>{activeValue?.title || activeValue?.primaryLabel}</strong>
                    <small>{activeValue?.subtitle || activeValue?.body || activeValue?.ctaHref}</small>
                  </article>
                )}
              </div>
            )}
            <a className="admin-site-link" href="/" target="_blank" rel="noreferrer">Open website preview</a>
          </aside>
        </div>
      </section>
    </main>
  );
}
