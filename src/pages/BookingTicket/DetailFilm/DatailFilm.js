import axios from "axios";
import React, { Fragment } from "react";
import { useEffect } from "react";
import { Route } from "react-router-dom";
import DetailBlurTop from "../../../components/layoutDetail/DetailBlurTop/DetailBlurTop";
import InfoDetail from "../../../components/layoutDetail/InfoDetail/InfoDetail";


export default function DatailFilm(props) {
    const maPhim = props.match.params.maPhim;
    return (
        <Route>
            <DetailBlurTop maPhim={maPhim}/>
            <InfoDetail maPhim={maPhim}/>
        </Route>
    )
}


