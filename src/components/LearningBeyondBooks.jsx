import React from 'react';

const learningMoments = [
  {
    label: 'Culture',
    image: '/image/02.webp',
    className: 'learning-circle learning-circle-large learning-circle-left',
  },
  {
    label: 'Creativity',
    image: '/image/cca13.webp',
    className: 'learning-circle learning-circle-medium learning-circle-top',
  },
  {
    label: 'Teamwork',
    image: '/image/508156078_122235017180192910_7876871399596625689_n.webp',
    className: 'learning-circle learning-circle-small learning-circle-right',
  },
  {
    label: 'Sports',
    image: '/image/aam46.webp',
    className: 'learning-circle learning-circle-small learning-circle-lower-left',
  },
  {
    label: 'Art',
    image: '/image/656180855_122278451030192910_256945773651336968_n.webp',
    className: 'learning-circle learning-circle-large learning-circle-bottom',
  },
  {
    label: 'Discovery',
    image: '/image/657051011_122278442678192910_4830634205277214454_n.webp',
    className: 'learning-circle learning-circle-medium learning-circle-lower-right',
  },
];

export default function LearningBeyondBooks() {
  return (
    <section
      id="learning-beyond-books"
      className="learning-beyond-section"
      aria-labelledby="learning-beyond-title"
    >
      <div className="learning-beyond-stage">
        <div className="learning-copy">
          <h2 id="learning-beyond-title">
            <span>LEARNING BEYOND</span>
            <strong>BOOKS</strong>
          </h2>
          <p>
            From academics and sports to creativity, culture and teamwork, children
            discover what they enjoy and learn more about who they can become.
          </p>
        </div>

        <div className="learning-circles-mobile-grid">
          {learningMoments.map((moment) => (
            <figure className={moment.className} key={moment.label} tabIndex={0}>
              <img src={moment.image} alt={`${moment.label} at Pitts Modern School`} />
              <figcaption className="learning-circle-overlay">
                <span>{moment.label}</span>
              </figcaption>
            </figure>
          ))}
        </div>

        <span className="learning-dot learning-dot-red learning-dot-one" aria-hidden="true" />
        <span className="learning-dot learning-dot-blue learning-dot-two" aria-hidden="true" />
        <span className="learning-dot learning-dot-pink learning-dot-three" aria-hidden="true" />
        <span className="learning-dot learning-dot-green learning-dot-four" aria-hidden="true" />
        <span className="learning-dot learning-dot-cyan learning-dot-five" aria-hidden="true" />
      </div>
    </section>
  );
}

