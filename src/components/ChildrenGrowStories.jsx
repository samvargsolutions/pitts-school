import React from 'react';

const storyPanels = [
  {
    key: 'seen',
    eyebrow: 'A place where children feel known...',
    cutout: '/image/508106751_122235019598192910_2677457905750902582_n.webp',
    cutoutAlt: 'Smiling Pitts Modern School students',
    photos: [
      {
        image: '/image/657648950_122278627682192910_3316470583572254992_n.webp',
        alt: 'Pitts Modern School teacher guiding a student',
      },
    ],
    words: ['When children feel seen,', 'they grow in confidence.'],
    highlights: ['seen,'],
  },
  {
    key: 'world',
    eyebrow: 'School should open up the world...',
    photos: [
      {
        image: '/image/dc13.webp',
        alt: 'Student performing a cultural dance',
      },
      {
        image: '/image/459679975_122182238516192910_2352708045737928534_n.webp',
        alt: 'Students learning through a hands-on activity',
      },
    ],
    words: ['From culture to', 'hands-on learning,', 'every day brings', 'something new.'],
    highlights: ['hands-on learning,'],
  },
  {
    key: 'growth',
    eyebrow: 'Growth happens in many ways...',
    cutout: '/image/aam69.webp',
    cutoutAlt: 'Pitts Modern School students growing with confidence',
    photos: [
      {
        image: '/image/basketball2.webp',
        alt: 'Students playing sports together',
      },
      {
        image: '/image/508156078_122235017180192910_7876871399596625689_n.webp',
        alt: 'Students building teamwork through play',
      },
    ],
    words: ['Sports, teamwork, and', 'new experiences help', 'children grow for life.'],
    highlights: ['teamwork,'],
  },
];

function renderHeadlineLine(line, highlights) {
  const match = highlights.find((highlight) => line.includes(highlight));

  if (!match) {
    return line;
  }

  const [before, after] = line.split(match);

  return (
    <>
      {before}
      <mark>{match}</mark>
      {after}
    </>
  );
}

export default function ChildrenGrowStories() {
  return (
    <section id="children-grow-stories" className="children-stories-section" aria-label="Children grow through school life">
      <div className="children-stories-inner">
        {storyPanels.map((panel, index) => (
          <article className={`story-panel story-panel-${panel.key}`} key={panel.key}>
            {index === 0 && <span className="story-panel-rule" aria-hidden="true" />}
            <span className="story-panel-wave story-panel-wave-a" aria-hidden="true" />
            <span className="story-panel-wave story-panel-wave-b" aria-hidden="true" />
            <span className="story-panel-blob" aria-hidden="true" />
            <span className="story-panel-dots" aria-hidden="true" />

            {panel.cutout && (
              <figure className="story-panel-cutout">
                <img src={panel.cutout} alt={panel.cutoutAlt} />
              </figure>
            )}

            <div className="story-panel-copy">
              <p>{panel.eyebrow}</p>
              <h2>
                {panel.words.map((line) => (
                  <span key={line}>{renderHeadlineLine(line, panel.highlights)}</span>
                ))}
              </h2>
            </div>

            <div className="story-panel-photos">
              {panel.photos.map((photo, photoIndex) => (
                <figure className={`story-panel-photo story-panel-photo-${photoIndex + 1}`} key={photo.alt}>
                  <img src={photo.image} alt={photo.alt} />
                </figure>
              ))}
            </div>
          </article>
        ))}
      </div>
    </section>
  );
}
