import React, { Component } from "react";
import { connect } from "react-redux";
import { getTheme } from "@fluentui/react";

const theme = getTheme();

class Piece extends Component {
  getPieceFont = (pieceType, team) => {
    const style = {
      color: team === "white" ? "#fff" : theme.palette.themeDarker,
      textShadow: `-1px 0 ${
        team === "white" ? theme.palette.themeDarker : "#fff"
      }, 0 1px ${
        team === "white" ? theme.palette.themeDarker : "#fff"
      }, 1px 0 ${
        team === "white" ? theme.palette.themeDarker : "#fff"
      }, 0 -1px ${team === "white" ? theme.palette.themeDarker : "#fff"}`,
      fontSize: "30px",
    };

    switch (pieceType) {
      case "King":
        return <i className="fas fa-chess-king" style={style} />;
      case "Queen":
        return <i className="fas fa-chess-queen" style={style} />;
      case "Bishop":
        return <i className="fas fa-chess-bishop" style={style} />;
      case "Knight":
        return <i className="fas fa-chess-knight" style={style} />;
      case "Rook":
        return <i className="fas fa-chess-rook" style={style} />;
      case "Pawn":
        return <i className="fas fa-chess-pawn" style={style} />;
      default:
        return (
          <i
            className="fas fa-circle"
            style={{ ...style, color: "transparent", textShadow: "none" }}
          ></i>
        );
    }
  };

  render() {
    return this.getPieceFont(this.props.type, this.props.team);
  }
}

export default connect((state) => state)(Piece);
