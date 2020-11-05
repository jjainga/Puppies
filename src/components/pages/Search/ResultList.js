import React from "react";

function ResultList(props) {
    console.log(props)
  return (
    <ul className="list-group">
      {props.results.map(result => (
        <li className="list-group-item" key={result}>
          <img alt={result} className="img-fluid" src={result} />
        </li>
      ))}
    </ul>
  );
}

export default ResultList;
