import React from "react";


export default function CardBody(props){
    return (<div className="card text-center">
        <div className="card-header bg-primary text-white">
          Click Like or Dislike
        </div>

        <div className="card-body">
          <img src={props.currentDog} alt="..."/>
          <hr />
          <button className="btn btn-danger" onClick={props.Decrement}>
            Dislike
          </button>
          <button className="btn btn-primary" onClick={props.Increment}>
            Like
          </button>
        </div>
      </div>)
}