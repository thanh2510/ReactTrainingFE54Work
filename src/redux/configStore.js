import {applyMiddleware, combineReducers, createStore} from 'redux';
//Cài đặt middleware redux thunk 
import reduxThunk from 'redux-thunk'
import { ManagerAdminReducer } from './reducers/ManagerAdminReducer';
import { QuanLyPhimReducer } from './reducers/ManagerFilmReducer';
import { ManagerUserReducer } from './reducers/ManagerUserReducer';
import { ManegerBookingReducer } from './reducers/ManegerBookingReducer';



const rootReducer = combineReducers({
    //Nơi định nghĩa các reducer trong hệ thông
    QuanLyPhimReducer,// Reducer GET APIs
    ManagerUserReducer,
    ManegerBookingReducer,
    ManagerAdminReducer,
});


export const store = createStore(rootReducer,applyMiddleware(reduxThunk));