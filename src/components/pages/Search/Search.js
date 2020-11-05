import React, { Component } from "react";

import API from "../../../utils/SearchAPI";
import SearchCard from "./SearchCard"
import ResultList from "./ResultList"

class SearchResultContainer extends Component {
  state = {
    search: "",
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchDog("");
  }

  searchDog = query => {
    API.search(query)
      .then(res => {
          console.log(res)
        this.setState({ results: res.data.message})})
      .catch(err => console.log(err));
      console.log(this.state.results)
  };

  handleInputChange = event => {
    const name = event.target.name;
    const value = event.target.value;
    this.setState({
      [name]: value
    });
  };

  // When the form is submitted, search the Giphy API for `this.state.search`
  handleFormSubmit = event => {
    event.preventDefault();
    this.searchDog(this.state.search);
    this.setState({search: ""})
  };

  render() {

    return (
      <div>
        <SearchCard
          search={this.state.search}
          handleFormSubmit={this.handleFormSubmit}
          handleInputChange={this.handleInputChange}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
