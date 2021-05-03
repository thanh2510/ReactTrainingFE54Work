import React from "react";
import style from "./CommingSoon.css";

export default function CommingSoon(props) {
  return (
    <div className="comingSoon" id="Theaters">
      <div
        className="comingSoon__bg"
        style={{ backgroundImage: "url(./img/slide-7.png)" }}
      />
      <div className="container">
        <h1 className="newIn__title comingSoon__title">COMING SOON</h1>
        <div className="comingSoon__content">
          <div className="col-sm-5 comingSoon__left">
            <span className="title">Adventure, Drama, Sci-Fi </span>
            <h3 className="comingSoon__name">Deepwater Horizon</h3>
            <p className="comingSoon__rating">
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
              <i className="material-icons">star_rate</i>
            </p>
            <div className="date">
              <i className="material-icons">date_range</i> 30 September, 2017
            </div>
            <p>
              A dramatization of the April 2010 disaster, when the offshore
              drilling rig Deepwater Horizon exploded and created the worst oil
              spill in U.S. history.
            </p>
            <p>
              <a href="#" className="comingSoon__button arrow-button">
                More info
              </a>
            </p>
          </div>
          <div className="col-sm-6 comingSoon__right">
            <a
              href="https://www.youtube.com/watch?v=K601I5gP0_I"
              className="popup-youtube"
            >
              <i className="material-icons">play_arrow</i>
              <img src="./img/slide-1-video.png" className="img-fluid" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
