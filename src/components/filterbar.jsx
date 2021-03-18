import React, { Component } from "react";
import { getKeywords } from "../utils/api-calls";
class Filterbar extends Component {
  //Todo: get the state from the backend instead of hard coding
  state = {
    cost: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    regions: [
      "Noxus",
      "Demacia",
      "Ionia",
      "Freljord",
      "Shadow Isles",
      "Piltover & Zaun",
    ],
    keywords: [],
  };
  async componentDidMount() {
    const keywords = await getKeywords();
    this.setState({ keywords: keywords });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-light">
        <i className="fs-5">Region</i>
        <form className="container-fluid justify-content-start">
          {this.state.regions.map((region) => {
            return (
              <a
                href="#"
                className={
                  this.props.currentRegion === region
                    ? "btn btn-danger"
                    : "btn btn-dark"
                }
                key={region}
                onClick={() => {
                  if (this.props.currentRegion === region)
                    this.props.handleRegion("All Cards");
                  else {
                    this.props.handleRegion(region);
                  }
                }}
              >
                {region}
              </a>
            );
          })}
        </form>
        <i className="fs-5">Cost</i>
        <form className="container-fluid justify-content-start">
          {this.state.cost.map((cost) => {
            return (
              <a
                href="#"
                className={
                  this.props.currentCost === cost
                    ? "btn btn-danger"
                    : "btn btn-dark"
                }
                key={cost}
                onClick={() => {
                  if (this.props.currentCost === cost)
                    this.props.handleCost(-1);
                  else {
                    this.props.handleCost(cost);
                  }
                }}
              >
                {cost}
              </a>
            );
          })}
        </form>
        <i className="fs-5">Keywords</i>
        <form className="container-fluid justify-content-start">
          {this.state.keywords.map((keyword) => {
            return (
              <a
                href="#"
                className={
                  this.props.currentKeyword === keyword
                    ? "btn btn-danger"
                    : "btn btn-dark"
                }
                key={keyword}
                onClick={() => {
                  if (this.props.keyword === keyword)
                    this.props.handleKeyword("none");
                  else {
                    this.props.handleKeyword(keyword);
                  }
                }}
              >
                {keyword}
              </a>
            );
          })}
        </form>
      </nav>
    );
  }
}

export default Filterbar;
