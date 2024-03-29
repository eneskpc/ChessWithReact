import React from "react";
import ReactDOM from "react-dom";
import * as serviceWorker from "./serviceWorker";
import Game from "./components/Game";
import "bootstrap/scss/bootstrap-reboot.scss";
import "bootstrap/scss/bootstrap-grid.scss";
import "@fortawesome/fontawesome-free/css/all.min.css";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import PieceReducer from "./reducers/PieceReducer";
import ActionTypes from "./ActionTypes";
import TeamReducer from "./reducers/TeamReducer";

const RootReducer = combineReducers({
  Pieces: PieceReducer,
  CurrentTeam: TeamReducer,
});

const store = createStore(RootReducer, {
  Pieces: [],
  CurrentTeam: "white",
});

store.dispatch({ type: ActionTypes.ResetGame });

ReactDOM.render(
  <Provider store={store}>
    <Game />
  </Provider>,
  document.getElementById("root")
);

serviceWorker.unregister();
