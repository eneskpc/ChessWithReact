import React, { Component } from "react";
import Piece from "./Piece";
import { connect } from "react-redux";
import ActionTypes from "../ActionTypes";
import { getTheme } from "@fluentui/react";

const theme = getTheme();

export class Cell extends Component {
  piece_onClick = (e) => {
    let relatedPiece = this.props.Pieces.find((p) => p.selected);
    if (relatedPiece && relatedPiece.location !== this.props.Piece.location) {
      this.props.dispatch({
        type: ActionTypes.MovePiece,
        payload: this.props.Piece.location,
      });
      relatedPiece = this.props.Pieces.find((p) => p.selected);
      if (!relatedPiece) {
        this.props.dispatch({
          type: ActionTypes.ChangeTeam,
        });
      }
    } else {
      if (this.props.Piece.team === this.props.CurrentTeam) {
        this.props.dispatch({
          type: ActionTypes.SelectPiece,
          payload: this.props.Piece.location,
        });
      }
    }
  };

  render() {
    return (
      <div
        className="d-inline-flex justify-content-center align-items-center"
        style={{
          width: "12.5vw",
          height: "12.5vw",
          maxWidth: "75px",
          maxHeight: "75px",
          border: `1px solid ${theme.palette.themeDarker}`,
          backgroundColor: this.props.backColor,
        }}
        onClick={this.piece_onClick.bind(this)}
      >
        <Piece
          type={this.props.Piece.type}
          location={this.props.Piece.location}
          team={this.props.Piece.team}
        />
      </div>
    );
  }
}

export default connect((state) => state)(Cell);
