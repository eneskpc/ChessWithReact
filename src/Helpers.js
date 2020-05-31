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
    case "Knight":
      return (
        newLocation === piece.location - 17 ||
        newLocation === piece.location - 15 ||
        newLocation === piece.location - 10 ||
        newLocation === piece.location - 6 ||
        newLocation === piece.location + 6 ||
        newLocation === piece.location + 10 ||
        newLocation === piece.location + 15 ||
        newLocation === piece.location + 17
      );
    case "Bishop":
      return (
        (piece.location - newLocation) % 9 === 0 ||
        (piece.location - newLocation) % 7 === 0
      );
    default:
      return false;
  }
};
