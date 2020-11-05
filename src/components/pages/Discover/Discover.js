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
      const randomNumber = Math.floor(Math.random()*5);
      if(randomNumber === 1) {
          this.setState({ count: this.state.count + 1 });
        }
    this.searchDog();
  };
  //function for the event handler
  handleDecrement = () => {
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
              <div>
              <DiscoverCard 
              count={this.state.count} 
              Increment={this.handleIncrement} 
              Decrement={this.handleDecrement} 
              currentDog={this.state.currentDog} />

              <h3 className="text-center alert-success" role="alert">{this.state.count} like you too!</h3>
              </div>
              );
              
            }
        }
    

export default Discover;
