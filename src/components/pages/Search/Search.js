import React, { Component } from "react";

import API from "../../../utils/SearchAPI";
import breedsAPI from "../../../utils/BreedsAPI"
import SearchCard from "./SearchCard"
import ResultList from "./ResultList"

class SearchResultContainer extends Component {
  state = {
    search: "",
    breeds: [],
    results: []
  };

  // When this component mounts, search the Giphy API for pictures of kittens
  componentDidMount() {
    this.searchDog("");
    this.breed()
  }
 
  breed = () => {
    breedsAPI.search()
      .then(res => {
        this.setState({ breeds: res.data.message})})
      .catch(err => console.log(err));
  };

  searchDog = query => {
    API.search(query)
      .then(res => {
        this.setState({ results: res.data.message})})
      .catch(err => console.log(err));
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
          breeds ={this.state.breeds}
        />
        <ResultList results={this.state.results} />
      </div>
    );
  }
}

export default SearchResultContainer;
