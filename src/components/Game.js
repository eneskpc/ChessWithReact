import React, { Component } from "react";
import Cell from "./Cell";
import { connect } from "react-redux";
import { PrimaryButton } from "@fluentui/react";
import ActionTypes from "../ActionTypes";
import { getTheme } from "@fluentui/react";

const theme = getTheme();

class Game extends Component {
  CreatorBoard = () => {
    let lastPieces = [];
    for (let index = 1; index <= 64; index++) {
      const realtedPiece = this.props.Pieces.find(
        (p) => p.location === index
      ) || { location: index };
      let backColor = "#fff";
      if (realtedPiece && realtedPiece.selected) {
        backColor = theme.palette.themeTertiary;
      } else if (Math.ceil(index / 8) % 2 !== 0) {
        if (index % 2 === 0) {
          backColor = theme.palette.themeDarker;
        } else {
          backColor = "#fff";
        }
      } else {
        if (index % 2 === 0) {
          backColor = "#fff";
        } else {
          backColor = theme.palette.themeDarker;
        }
      }

      lastPieces = [
        ...lastPieces,
        <Cell backColor={backColor} key={index} Piece={realtedPiece} />,
      ];
    }
    return lastPieces;
  };

  render() {
    const currentTeamStyle = {
      color:
        this.props.CurrentTeam === "white" ? "#fff" : theme.palette.themeDarker,
      textShadow: `-1px 0 ${
        this.props.CurrentTeam === "white" ? theme.palette.themeDarker : "#fff"
      }, 0 1px ${
        this.props.CurrentTeam === "white" ? theme.palette.themeDarker : "#fff"
      }, 1px 0 ${
        this.props.CurrentTeam === "white" ? theme.palette.themeDarker : "#fff"
      }, 0 -1px ${
        this.props.CurrentTeam === "white" ? theme.palette.themeDarker : "#fff"
      }`,
      fontSize: "30px",
    };

    return (
      <div className="d-flex justify-content-center align-items-center">
        <div
          style={{
            width: "100vw",
            maxWidth: "600px",
          }}
        >
          <div
            className="d-flex justify-content-between align-items-center"
            style={{
              margin: "20px 0",
            }}
          >
            <PrimaryButton
              onClick={() => {
                this.props.dispatch({
                  type: ActionTypes.ResetGame,
                });
              }}
            >
              Yeni Oyun
            </PrimaryButton>
            <div className="d-inline-flex justify-content-center align-items-center">
              Hamle Sırası :
              <i className="fas fa-chess-king ml-3" style={currentTeamStyle} />
            </div>
          </div>
          <div>{this.CreatorBoard().map((cell) => cell)}</div>
        </div>
      </div>
    );
  }
}

export default connect((state) => state)(Game);
