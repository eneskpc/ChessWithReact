import ActionTypes from "../ActionTypes";
import { PieceRule } from "../Helpers";

const PieceReducer = (state = [], { type, payload }) => {
  let relatedPiece = null;
  switch (type) {
    case ActionTypes.MoviePiece:
      return state;

    case ActionTypes.ResetGame:
      let pieces = [
        {
          location: 1,
          type: "Rook",
          team: "black",
          selected: false,
        },
        {
          location: 2,
          type: "Knight",
          team: "black",
          selected: false,
        },
        {
          location: 3,
          type: "Bishop",
          team: "black",
          selected: false,
        },
        {
          location: 4,
          type: "Queen",
          team: "black",
          selected: false,
        },
        {
          location: 5,
          type: "King",
          team: "black",
          selected: false,
        },
        {
          location: 6,
          type: "Bishop",
          team: "black",
          selected: false,
        },
        {
          location: 7,
          type: "Knight",
          team: "black",
          selected: false,
        },
        {
          location: 8,
          type: "Rook",
          team: "black",
          selected: false,
        },
      ];

      for (let index = 1; index <= 8; index++) {
        pieces = [
          ...pieces,
          {
            location: index + 8,
            type: "Pawn",
            team: "black",
            selected: false,
          },
        ];
      }

      pieces = [
        ...pieces,
        {
          location: 48,
          type: "Knight",
          team: "white",
          selected: false,
        },
      ];

      for (let index = 49; index <= 56; index++) {
        pieces = [
          ...pieces,
          {
            location: index,
            type: "Pawn",
            team: "white",
            selected: false,
          },
        ];
      }

      pieces = [
        ...pieces,
        {
          location: 57,
          type: "Rook",
          team: "white",
          selected: false,
        },
        {
          location: 58,
          type: "Knight",
          team: "white",
          selected: false,
        },
        {
          location: 59,
          type: "Bishop",
          team: "white",
          selected: false,
        },
        {
          location: 60,
          type: "Queen",
          team: "white",
          selected: false,
        },
        {
          location: 61,
          type: "King",
          team: "white",
          selected: false,
        },
        {
          location: 62,
          type: "Bishop",
          team: "white",
          selected: false,
        },
        {
          location: 63,
          type: "Knight",
          team: "white",
          selected: false,
        },
        {
          location: 64,
          type: "Rook",
          team: "white",
          selected: false,
        },
      ];

      return pieces;

    case ActionTypes.SelectPiece:
      if (!state.find((p) => p.location === payload)) {
        return state;
      }
      relatedPiece = state.find((p) => p.location === payload);
      relatedPiece.selected = !relatedPiece.selected;
      state = state.filter((p) => p.location !== payload);
      state = [...state, relatedPiece];
      return state;

    case ActionTypes.MovePiece:
      if (state.find((p) => p.location === payload)) {
        return state;
      }
      relatedPiece = state.find((p) => p.selected);
      if (PieceRule(relatedPiece, payload)) {
        state = state.filter((p) => p.location !== relatedPiece.location);
        relatedPiece.selected = false;
        relatedPiece.location = payload;
        state = [...state, relatedPiece];
      }
      return state;

    default:
      return state;
  }
};

export default PieceReducer;
