import React, { Fragment, useState } from "react";
import { useDispatch } from "react-redux";
import { seatBookingCheckout } from "../../../redux/actions/BookingCheckout";

export default function Seat(props) {
  const [bookingSeat, setbookingSeat] = useState(false);
  let dispatch = useDispatch();
  const handleOnclikBooking = () => {
    setbookingSeat(!bookingSeat);
    dispatch(seatBookingCheckout(props.seat))
  };
  return (
    <Fragment>
      {props.seat.daDat === true ? (
        <div className="hangGhe">
          <button
            disabled
            type="button"
            className={`btn btn-chuachonDisable`}
          ></button>
        </div>
      ) : (
        <Fragment>
          {props.seat.loaiGhe === "Thuong" ? (
            <div className="hangGhe">
              <button
                onClick={handleOnclikBooking}
                type="button"
                
                className={bookingSeat === false ?`btn btn-chuachon`:'btn btn-ghedangchon'}
              ></button>
            </div>
          ) : (
            <div className="hangGhe">
              <button
                onClick={handleOnclikBooking}
                type="button"
                className={bookingSeat === false ?`btn btn-chuachon2`:'btn btn-ghedangchon'}
              ></button>
            </div>
          )}
        </Fragment>
      )}
    </Fragment>
  );
}
