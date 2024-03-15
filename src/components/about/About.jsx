import React from 'react';
import './about.css';

const About = () => {
  return (
    <div className="app__about__div">
      <div className="app__about__div-2">
        <div className="app__about__div-3">
          <div className="app__about__column">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ae90ed9c2ddee0ec6288e36e8bc3765fe86a030b7b68a44853ee88c7e324958b?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
              className="app__about__img"
            />
          </div>
          <div className="app__about__column-2">
            <div className="app__about__div-4">
              <div className="app__about__div-5">About me</div>
              <div className="app__about__div-6" />
              <div className="app__about__div-7">
                Hey, my name is Stefan, and I'm a Frontend Developer. My
                passion is to create and develop a clean UI/UX for my
                users.My main stack currently is React/Next.js in
                combination with Tailwind CSS and TypeScript.
              </div>
              <div className="app__about__div-8">
                <div className="app__about__div-9">More</div>
                <div className="app__about__div-10">CV</div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="app__about__div-11">
        <div className="app__about__div-12">
          <div className="app__about__div-13">josegabriel.jgtc42@gmail.com</div>
          <img
            loading="lazy"
            src="https://cdn.builder.io/api/v1/image/assets/TEMP/ea84402e090d479b2ed7d09085096707ca8b8c1f0c50c3507222edc33658f862?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
            className="app__about__img-2"
          />
        </div>
      </div>
    </div>
  );
};

export default About;
