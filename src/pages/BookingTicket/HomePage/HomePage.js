import React, { Fragment } from "react";
import BookingSearch from "../../../components/layoutPages/BookingSearch/BookingSearch";
import CommingSoon from "../../../components/layoutPages/CommingSoon/CommingSoon";
import CommingSoonList from "../../../components/layoutPages/CommingSoonList/CommingSoonList";
import HomeCinemaComplex from "../../../components/layoutPages/HomeCinemaComplex/HomeCinemaComplex";
import MovieTheaters from "../../../components/layoutPages/MovieTheaters/MovieTheaters";
import Slider from "../../../components/layoutPages/Slider/Slider";
document.title = "Movie Start";

export default function HomePage(props) {
  return (
    <Fragment>
      <Slider />
      <BookingSearch />
      <MovieTheaters />
      <CommingSoon />
      <CommingSoonList />
      <HomeCinemaComplex />
    </Fragment>
  );
}
