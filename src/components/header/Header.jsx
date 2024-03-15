import React from 'react';
import Navbar from '../navbar/Navbar';
import './header.css';

const Header = () => {
  return (
    <div className="app__header">
      <div className="app__header__2">
        <div className="app__header__title-column">
          <div className="app__header__title-box">
            <img
              loading="lazy"
              src="https://cdn.builder.io/api/v1/image/assets/TEMP/03936b82ae95818a131b6fe47af920abb9286a20f23865459051672ec448ae09?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
              className="app__header__dots"
            />
            <div className="app__header__title-box2">
              <div className="app__header__title">Front-End React Developer</div>
              <div className="app__header__line" />
              <div className="app__header__paragraph">
                Hi, I'm Gabriel Tambare. A passionate Front-end React
                Developer based in Santa Cruz, Bolivia. 
              </div>
              <div className="app__header__logos">
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/06369a331897d6d51d4cb67cfc1a2ecf970862075e0fecca3a47adb957b3cf4e?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
                  className="app__header__github-logo"
                />
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/0c86352c0a895fd660caf5912a7e89c62fffc009dd7853cdf9feb1222853f713?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
                  className="app__header__linkedin-logo"
                />
              </div>
            </div>
          </div>
        </div>
        <div className="app__header__photo-column">
          <img
            loading="lazy"
            srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/14316242ada61cb25f0fefc156c43080bb547004ff14696610a808c3d9112c8a?apiKey=98e930f8e11a4ca795d74fd9501a4b81&"
            className="app__header__portrait"
          />
        </div>
      </div>
    </div>
  );
};

export default Header;

