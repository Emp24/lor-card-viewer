import React, { Component } from "react";
import { getKeywords, getRegions } from "../utils/api-calls";
class Filterbar extends Component {
  //Todo: get the state from the backend instead of hard coding
  //States contain a list of objects coming from the API, they contain all the information needed (description)
  state = {
    cost: [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10],
    regions: [],
    keywords: [],
  };
  async componentDidMount() {
    const keywordsData = await getKeywords();
    const regionsData = await getRegions();
    //Sorting the keywords alphabatically (A to Z)
    keywordsData.sort((a, b) => {
      let fa = a.name.toLowerCase();
      let fb = b.name.toLowerCase();

      if (fa < fb) {
        return -1;
      }
      if (fa > fb) {
        return 1;
      }
      return 0;
    });
    this.setState({ regions: regionsData });
    this.setState({ keywords: keywordsData });
  }

  render() {
    return (
      <nav className="navbar navbar-dark bg-light">
        <i className="fs-5">Region</i>
        <form className="container-fluid justify-content-start">
          {this.state.regions.map((region) => {
            return (
              <div>
                <a
                  href="#"
                  className={
                    this.props.currentRegions.includes(region.name)
                      ? "btn btn-danger"
                      : "btn btn-dark"
                  }
                  key={region.name}
                  onClick={() => {
                    this.props.handleRegion(region.name);
                  }}
                >
                  {region.name}
                </a>
                <img
                  src={region.iconAbsolutePath}
                  className="img rounded float-start"
                  style={{ width: 40, height: 34 }}
                ></img>
              </div>
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
                  this.props.currentCosts.includes(cost)
                    ? "btn btn-danger"
                    : "btn btn-dark"
                }
                key={cost}
                onClick={() => {
                  this.props.handleCost(cost);
                }}
                role="button"
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
                  this.props.currentKeywords.includes(keyword.name)
                    ? "btn btn-danger"
                    : "btn btn-dark"
                }
                key={keyword.nameRef}
                onClick={() => {
                  this.props.handleKeyword(keyword.name);
                }}
              >
                {keyword.name}
              </a>
            );
          })}
        </form>
        <div class="dropdown">
          <a
            className="btn btn-secondary dropdown-toggle"
            href="#"
            role="button"
            id="dropdownMenuLink"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            Keywords
          </a>

          <ul
            className="dropdown-menu"
            aria-labelledby="dropdownMenuLink"
            style={{ overflow: "auto", maxHeight: 300 }}
          >
            {this.state.keywords.map((keyword) => {
              return (
                <li>
                  <a className="dropdown-item" href="#">
                    {keyword.name}
                  </a>
                </li>
              );
            })}
          </ul>
        </div>
      </nav>
    );
  }
}

export default Filterbar;
