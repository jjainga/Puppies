import React, { Component } from "react";
import DiscoverCard from "./DiscoverCard";
import API from "../../../utils/RandomDogAPI"

class Discover extends Component {
  //sets the state of the inital state of the app
  state ={
    count: 0,
    currentDog:""
  };
  //function for the event handler
  handleIncrement = () => {
    this.setState({ count: this.state.count + 1 });
    this.searchDog();
  };
  //function for the event handler
  handleDecrement = () => {
    if(this.state.count > 0)
    this.setState({ count: this.state.count - 1 });
    this.searchDog();
  };

  componentDidMount() {
      this.searchDog()
  }

  searchDog = () => 
    API.search()
      .then(res => {
          console.log(res)
        this.setState({ currentDog: res.data.message})})
      .catch(err => console.log(err));
      
      
      render() {
          return (
              <DiscoverCard count={this.state.count} Increment={this.handleIncrement} Decrement={this.handleDecrement} currentDog={this.state.currentDog} />
              );
            }
        }

export default Discover;
