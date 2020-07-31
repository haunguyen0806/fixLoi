import React, { Component } from "react";

export default class Movie extends Component {
  render() {
    const { movie } = this.props;
    return (
      <div className="container col-sm-3 list_Movie">
        <div className="content_movie">
          <img src={movie.hinhAnh} alt="" />
          <div className="hoverInfo">
            <i className="fa fa-play"></i>
          </div>
        </div>
        
        <div className="pb-3 pt-2">
            <h4>{movie.tenPhim}</h4>
            <p>{movie.tenPhu}</p>
          </div>
      </div>
    );
  }
}
