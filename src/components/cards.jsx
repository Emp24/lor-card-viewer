import React, { Component } from "react";
import { fullData } from "../utils/api-calls";
import Filterbar from "./filterbar";
import { filteration } from "../utils/filteration";
class Cards extends Component {
  state = {
    data: [],
    currentRegion: "All Cards",
    currentCost: -1,
    currentKeyword: "none",
  };

  async componentDidMount() {
    const promise = fullData();
    const data = await promise;
    this.setState({ data: data });
  }
  handleCost = (cost) => {
    this.setState({ currentCost: cost });
  };
  handleRegion = (region) => {
    this.setState({ currentRegion: region });
  };
  handleKeyword = (keyword) => {
    this.setState({ currentKeyword: keyword });
  };

  render() {
    const cards = filteration(
      this.state.data,
      this.state.currentRegion,
      this.state.currentCost,
      this.state.currentKeyword
    );
    return (
      <React.Fragment>
        <Filterbar
          currentCost={this.state.currentCost}
          currentRegion={this.state.currentRegion}
          currentKeyword={this.state.currentKeyword}
          handleRegion={this.handleRegion}
          handleCost={this.handleCost}
          handleKeyword={this.handleKeyword}
        />
        {cards.map((card) => {
          return (
            <img
              src={"./img/cards/" + card.cardCode + ".png"}
              alt={card.name}
              className="img rounded float-start"
              key={card.cardCode}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Cards;
