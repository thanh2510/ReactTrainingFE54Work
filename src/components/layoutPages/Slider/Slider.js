import React from "react";
import style from './Slider.css'


export default function Slider(props) {
  return (
    <div className="movieCarousel">
      <div id="carouselMovie" className="carousel slide carousel-fade">
        <ol className="carousel-indicators container">
          <li
            data-target="#carouselMovie"
            data-slide-to={0}
            className="active"
          />
          <li data-target="#carouselMovie" data-slide-to={1} />
          <li data-target="#carouselMovie" data-slide-to={2} />
        </ol>
        <div className="carousel-inner">
          <div className="carousel-item bg-item1 active" style={{backgroundImage:'url(./slider/bg2.jpg)'}}>
            <div className="container carousel-caption d-md-block content-banner">
              <span className="text-yellow">ACTION, ADVENTURE, FANTASY</span>
              <h1>End of the World: Part II</h1>
              <p className="text-blurb">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum.
              </p>
              <div className="buttons">
                <span>PG</span>
                <a
                  href="https://www.youtube.com/watch?v=ADBe9c1sUmE"
                  className="popup-youtube"
                >
                  <button className="btn-trailer">
                    <i className="fa fa-play mr-2" /> PLAY TRAILER
                  </button>
                </a>
              </div>
            </div>
            <div className="overlay" />
          </div>
          <div className="carousel-item bg-item2" style={{backgroundImage:'url(./slider/bg4.jpg)'}}>
            <div className="container carousel-caption d-md-block content-banner">
              <span className="text-yellow">ACTION, ADVENTURE, FANTASY</span>
              <h1>End of the World: Part II</h1>
              <p className="text-blurb">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum.
              </p>
              <div className="buttons">
                <span>PG</span>
                <a
                  href="https://www.youtube.com/watch?v=ADBe9c1sUmE"
                  className="popup-youtube"
                >
                  <button className="btn-trailer">
                    <i className="fa fa-play mr-2" /> PLAY TRAILER
                  </button>
                </a>
              </div>
            </div>
            <div className="overlay" />
          </div>
          <div className="carousel-item bg-item3" style={{backgroundImage:'url(./slider/bg3.jpg)'}}>
            <div className="container carousel-caption d-md-block content-banner">
              <span className="text-yellow">ACTION, ADVENTURE, FANTASY</span>
              <h1>End of the World: Part II</h1>
              <p className="text-blurb">
                Claritas est etiam processus dynamicus, qui sequitur mutationem
                consuetudium lectorum. Mirum est notare quam littera gothica,
                quam nunc putamus parum.
              </p>
              <div className="buttons">
                <span>PG</span>
                <a
                  href="https://www.youtube.com/watch?v=ADBe9c1sUmE"
                  className="popup-youtube"
                >
                  <button className="btn-trailer">
                    <i className="fa fa-play mr-2" /> PLAY TRAILER
                  </button>
                </a>
              </div>
            </div>
            <div className="overlay" />
          </div>
        </div>
        {/* <img className="img-scroll" src="./Logo/scroll-arrow.svg" alt /> */}
      </div>
    </div>
  );
}
