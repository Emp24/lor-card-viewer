import React, { Component } from "react";
import LazyLoad from "react-lazy-load";
import { fullData } from "../utils/api-calls";
import Filterbar from "./filterbar";
import { filteration } from "../utils/filteration";
class Cards extends Component {
  state = {
    data: [],
    currentRegions: [],
    currentCosts: [],
    currentKeywords: [],
  };

  async componentDidMount() {
    const promise = fullData();
    const data = await promise;
    this.setState({ data: data });
  }
  //Adds and removes costs from the state array (currentCosts)
  handleCost = (cost) => {
    let newCosts = [...this.state.currentCosts];
    if (newCosts.includes(cost)) {
      newCosts = newCosts.filter((c) => c !== cost);
    } else {
      newCosts.push(cost);
    }
    this.setState({ currentCosts: newCosts });
  };
  //Adds and removes regions from the state array (currentRegions)
  handleRegion = (region) => {
    let newRegions = [...this.state.currentRegions];
    if (newRegions.includes(region)) {
      newRegions = newRegions.filter((r) => r !== region);
    } else {
      newRegions.push(region);
    }

    this.setState({ currentRegions: newRegions });
  };
  //Adds and removes keywords from the state array (currentKeywords)
  handleKeyword = (keyword) => {
    let newKeywords = [...this.state.currentKeywords];
    if (newKeywords.includes(keyword)) {
      newKeywords = newKeywords.filter((k) => k !== keyword);
    } else {
      newKeywords.push(keyword);
    }
    this.setState({ currentKeywords: newKeywords });
  };

  render() {
    const cards = filteration(
      this.state.data,
      this.state.currentRegions,
      this.state.currentCosts,
      this.state.currentKeywords
    );
    return (
      <React.Fragment>
        <Filterbar
          currentCosts={this.state.currentCosts}
          currentRegions={this.state.currentRegions}
          currentKeywords={this.state.currentKeywords}
          handleRegion={this.handleRegion}
          handleCost={this.handleCost}
          handleKeyword={this.handleKeyword}
        />
        {cards.map((card) => {
          return (
            <img
              loading="lazy"
              src={"./img/cards/" + card.cardCode + ".png"}
              alt={card.name}
              className="img rounded float-start"
              key={card.cardCode}
              style={{}}
            />
          );
        })}
      </React.Fragment>
    );
  }
}

export default Cards;
