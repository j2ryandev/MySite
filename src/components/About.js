import React from 'react';
import {SVG_Twitter, SVG_Facebook, SVG_Instagram, SVG_GitHub, SVG_Youtube, SVG_LinkedIn} from '../../public/svg/svg'

export default function About() {
  return (
    <>
      {/* Section About */}
      <section id="about" className="section_about">
        <div className="container narrow">
          <div className="about_me">
            <div className="about_me_text">
              <p>A senior software engineer with 8+ years of hands-on experience in the development of
complex and dynamic Web applications, using the latest technologies.
              </p>
            </div>
            <div className="about_me_more">
              <ul>
                <li>
                  <a href="http://www.linkedin.com//" target="_blank" title="linkedin.com">
                    <SVG_LinkedIn/>
                  </a>
                </li>
                <li>
                  <a href="https://www.facebook.com/" target="_blank" title="facebook.com">
                    <SVG_Facebook/>
                  </a>
                </li>
                {/* <li>
                  <a href="#" target="_blank" title="instagram.com">
                    <SVG_Instagram/>
                  </a>
                </li> */}
                <li>
                  <a href="https://www.github.com" target="_blank" title="github.com">
                    <SVG_GitHub/>
                  </a>
                </li>
                <li>
                  <a href="#" target="_blank" title="youtube.com">
                    <SVG_Youtube/>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
      {/* /Section About */}
    </>
  );
}

