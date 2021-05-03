import { createBrowserHistory } from "history";
import { BrowserRouter, Route, Switch, Router } from "react-router-dom";
import HomePage from "./pages/BookingTicket/HomePage/HomePage";
import DatailFilm from "./pages/BookingTicket/DetailFilm/DatailFilm";
import { HomeTemplate } from "./templates/HomeTemplate";
import RegisterAccount from "./pages/BookingTicket/RegisterAccount/RegisterAccount";
import { RegisterAccountTemplate } from "./templates/RegisterAccountTemplate";
import LayoutLogin from "./components/LayoutLogin/LayoutLogin";
import LayoutUserProfile from "./components/LayoutUserProfile/LayoutUserProfile";
import Checkout from "./components/layoutBookingCheckout/Checkout/Checkout";
import { BookingTemplate } from "./templates/BookingTemplate";
import { AdminTemplate } from "./templates/AdminTemplate";
import Admin from "./pages/Admin/Admin";
import style from "./App.css";
import MemberList from "./components/layoutAdmin/Member/MemberList";

export const history = createBrowserHistory();

function App() {
  return (
    <Router history={history}>
      <div className="snowflakes">
        <div className="snowflake">❅</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
        <div className="snowflake">❅</div>
        <div className="snowflake">❆</div>
        <div className="snowflake">❄</div>
      </div>
      <Switch>
        {/* *BOOKING* */}
        <HomeTemplate path="/home" Component={HomePage} />
        <HomeTemplate exact path='/moviedetail/:maPhim' Component={DatailFilm}/>
        <HomeTemplate exact path='/profile' Component={LayoutUserProfile}/>
        {/* ** */}
        <RegisterAccountTemplate exact path='/register' Component={RegisterAccount}/>
        <RegisterAccountTemplate exact path='/login' Component={LayoutLogin}/>
        {/* ** */}
        <BookingTemplate exact path='/checkout/:maLichChieu' Component={Checkout}/>
        {/* *ADMIN* */}
        <AdminTemplate exact path='/admin' Component={Admin}/>
        <AdminTemplate exact path='/admin/member' Component={MemberList}/>
        <HomeTemplate exact path="/" Component={HomePage} />
      </Switch>
    </Router>
  );
}

export default App;
