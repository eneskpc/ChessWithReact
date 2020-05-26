import ActionTypes from "../ActionTypes";

const TeamReducer = (state = "white", { type, payload }) => {
  switch (type) {
    case ActionTypes.ChangeTeam:
      return state === "white" ? "black" : "white";
    default:
      return state;
  }
};

export default TeamReducer;
