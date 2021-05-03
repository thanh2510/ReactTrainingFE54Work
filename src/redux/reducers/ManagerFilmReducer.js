import {
  GET_DATA_CINEMA,
  GET_DATA_CINEMA_WITH_ID_CINEMA,
  GET_DATA_CINEMA_WITH_ID_CINEMA_BHD,
  GET_DATA_FILM,
  GET_DATA_FILM_LIST_CINEMA,
  GET_DATA_FILM_SEARCH,
  GET_DATA_FILM_WITH_ID_CINEMA,
} from "../const/ManagerFilmType";

const stateDefault = {
  arrFilm: [{}],
  thongTinPhongVe: {},
  arrFilmSearch: {},
  arrCinema: [{}],
  arrCinemaWithIdCinema: [{}],
  arrFilmWithIdCinema: [{}],
  arrFilmListCinema: [{}],
  arrFilmListCinemaSystem:[{}]
};
export const QuanLyPhimReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case GET_DATA_FILM: {
      return { ...state, arrFilm: action.dataFilm };
    }
    case GET_DATA_FILM_SEARCH: {
      return { ...state, arrFilmSearch: action.dataFilmSearch };
    }
    case GET_DATA_CINEMA: {
      return { ...state, arrCinema: action.dataCinema };
    }
    case GET_DATA_CINEMA_WITH_ID_CINEMA: {
      return { ...state, arrCinemaWithIdCinema: action.dataCinemaWithIdCinema };
    }
    case GET_DATA_FILM_WITH_ID_CINEMA: {
      return { ...state, arrFilmWithIdCinema: action.dataFilmWithIdCinema };
    }
    case GET_DATA_FILM_LIST_CINEMA: {
      return { ...state, arrFilmListCinema: action.dataFilmListCinema };
    }
    case   GET_DATA_CINEMA_WITH_ID_CINEMA_BHD: {
      return { ...state, arrFilmListCinemaSystem: action.theaterSystemArray };
    }
  }
  return { ...state };
};
