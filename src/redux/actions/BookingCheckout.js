import axios from "axios";
import swal from "sweetalert";
import { settings } from "../../util/setting";
import { BOOKING_CHECKOUT, SEAT_BOOKING_CHECKOUT } from "../const/ManagerBookingType";

export const seatBookingCheckout = (seat) => ({
  type: SEAT_BOOKING_CHECKOUT,
  seat,
});
export const sentSeatBooking = (seat) => {
  const userLG = JSON.parse(localStorage.getItem(settings.USER_LOGIN));
  return async (dispatch) => {
    try {
      const result = await axios({
        url: `${settings.domain}/QuanLyDatVe/DatVe`,
        method: "POST",
        data: seat,
        headers: {
          Authorization: `Bearer ${userLG.accessToken}`,
        },
      });
      swal(`${result.data}`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    } catch (err) {
      swal(`Have some error, ${err.response?.data}`);
      setTimeout(() => {
        window.location.reload();
      }, 1000);
    }
  };
};
