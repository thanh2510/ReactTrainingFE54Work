const stateDefault = {
  userLogin: {},
};
export const ManagerUserReducer = (state = stateDefault, action) => {
  switch (action.type) {
    case "LOGIN": {
      return { ...state, userLogin: action.resultLogin };
    }
  }
  return { ...state };
};
