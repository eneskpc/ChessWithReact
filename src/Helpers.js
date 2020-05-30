import ActionTypes from "./ActionTypes";

export const ResetGame = (dispatch) => {
  dispatch({
    type: ActionTypes.ResetGame,
  });
  dispatch({
    type: ActionTypes.ResetTeam,
  });
};

export const PieceRule = (piece, newLocation) => {
  switch (piece.type) {
    case "Pawn":
      return (
        (piece.team === "white" && newLocation + 8 === piece.location) ||
        (piece.team === "black" && newLocation - 8 === piece.location)
      );
    case "Rook":
      let minValueInRow = piece.location - (piece.location % 8);
      let maxValueInRow = piece.location + (8 - (piece.location % 8));

      if (minValueInRow === piece.location) {
        minValueInRow = piece.location - 8;
      }

      if (maxValueInRow === piece.location + 8) {
        maxValueInRow = piece.location;
      }

      return (
        piece.location % 8 === newLocation % 8 ||
        (newLocation > minValueInRow && newLocation <= maxValueInRow)
      );
    default:
      return false;
  }
};
