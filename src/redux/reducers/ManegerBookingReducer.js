import { settings } from "../../util/setting";
import {
  BOOKING_CHECKOUT,
  SEAT_BOOKING_CHECKOUT,
} from "../const/ManagerBookingType";
const stateDefault = {
  seatBooking: [],
  totalMoney: 0,
  listSeat: [],
  seat: {},
  // **
  seatSend: {
    maLichChieu: 0,
    danhSachVe: [],
    taiKhoanNguoiDung: "string",
  },
  seatResult:[]
};
export const ManegerBookingReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case SEAT_BOOKING_CHECKOUT: {
      let index = state.seatBooking.findIndex(
        (seat) => seat.maGhe === action.seat.maGhe
      );
      if (index == -1) {
        // khoong co ghe do
        state.seatBooking = [...state.seatBooking, action.seat];
        state.totalMoney += action.seat.giaVe;
        state.listSeat = [...state.listSeat, action.seat.tenGhe];
        // **
        let maGheUD = { maGhe: action.seat.giaVe, giaVe: action.seat.maGhe };
        state.seatSend.danhSachVe = [...state.seatSend.danhSachVe, maGheUD];
      } else {
        state.seatBooking = state.seatBooking.filter(
          (item) => item.maGhe != action.seat.maGhe
        );
        state.totalMoney -= action.seat.giaVe;
        state.listSeat = state.listSeat.filter(
          (item) => item != action.seat.tenGhe
        );
        let arr = state.seatSend.danhSachVe.splice(index, 1);
      }
      state.seat = action.seat;
      state.seatSend = { ...state.seatSend };
      // ****** setup Model
      return { ...state };
    }
  }
  return { ...state };
};
