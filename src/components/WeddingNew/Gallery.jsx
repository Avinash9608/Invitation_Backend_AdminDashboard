import React from 'react';
import gallery1 from '../assets/images/gallery-1.jpg';
import gallery2 from '../assets/images/gallery-2.jpg';
import gallery3 from '../assets/images/gallery-3.jpg';
import gallery4 from '../assets/images/gallery-4.jpg';
import gallery5 from '../assets/images/gallery-5.jpg';
import gallery6 from '../assets/images/gallery-6.jpg';
import gallery7 from '../assets/images/gallery-7.jpg';
import gallery8 from '../assets/images/gallery-8.jpg';
import gallery9 from '../assets/images/gallery-9.jpg';

const Gallery = () => {
  return (
    <>
      <div id="fh5co-gallery" className="fh5co-section-gray">
        <div className="container">
          <div className="row">
            <div className="col-md-8 col-md-offset-2 text-center fh5co-heading animate-box">
              <span>Our Memories</span>
              <h2>Wedding Gallery</h2>
              <p>
                Far far away, behind the word mountains, far from the countries Vokalia and
                Consonantia, there live the blind texts.
              </p>
            </div>
          </div>
          <div className="row row-bottom-padded-md">
            <div className="col-md-12">
              <ul id="fh5co-gallery-list">
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery1})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery1}>
                    <div className="case-studies-summary">
                      <span>14 Photos</span>
                      <h2>Two Glas of Juice</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery2})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery2} className="color-2">
                    <div className="case-studies-summary">
                      <span>30 Photos</span>
                      <h2>Timer starts now!</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery3})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery3} className="color-3">
                    <div className="case-studies-summary">
                      <span>90 Photos</span>
                      <h2>Beautiful sunset</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery4})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery4} className="color-4">
                    <div className="case-studies-summary">
                      <span>12 Photos</span>
                      <h2>Company's Conference Room</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery5})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery5} className="color-3">
                    <div className="case-studies-summary">
                      <span>50 Photos</span>
                      <h2>Useful baskets</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery6})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery6} className="color-4">
                    <div className="case-studies-summary">
                      <span>45 Photos</span>
                      <h2>Skater man in the road</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery7})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery7} className="color-4">
                    <div className="case-studies-summary">
                      <span>35 Photos</span>
                      <h2>Two Glas of Juice</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery8})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery8} className="color-5">
                    <div className="case-studies-summary">
                      <span>90 Photos</span>
                      <h2>Timer starts now!</h2>
                    </div>
                  </a>
                </li>
                <li
                  className="one-third animate-box"
                  data-animate-effect="fadeIn"
                  style={{
                    backgroundImage: `url(${gallery9})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                  }}
                >
                  <a href={gallery9} className="color-6">
                    <div className="case-studies-summary">
                      <span>56 Photos</span>
                      <h2>Beautiful sunset</h2>
                    </div>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Gallery;
