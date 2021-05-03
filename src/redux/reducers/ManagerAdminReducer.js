import {
  ADMIN_ALL_USER,
  ADMIN_DP_CLICK_STYLE,
  ADMIN_GET_MEMBER,
  ADMIN_SEARCH_USER,
  ADMIN_USERCLICK,
  DELETE_ACCOUTN_ADMIN,
} from "../const/ManagerAdmin";

const stateDefault = {
  arrMember: {},
  clickStyle: "Member List",
  arrAllUser: [],
  arrSearchUser: [],
  itemClick:{}
};
export const ManagerAdminReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case ADMIN_GET_MEMBER: {
      return { ...state, arrMember: action.dataMember };
    }
    case ADMIN_DP_CLICK_STYLE: {
      return { ...state, clickStyle: action.clickStyle };
    }
    case ADMIN_ALL_USER: {
      return { ...state, arrAllUser: action.dataAllMember };
    }
    case ADMIN_SEARCH_USER: {
      return { ...state, arrSearchUser: action.arrSearchUser };
    }
    case ADMIN_USERCLICK: {
      return { ...state, itemClick: action.itemCl };
    }case DELETE_ACCOUTN_ADMIN: {
      return { ...state };
    }
  }
  return { ...state.arrSearchUser };
};
