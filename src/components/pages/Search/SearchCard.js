import React from "react";

function SearchCard(props) {
  return (
    <form>
      <div className="form-group text-center">
        <datalist id="breeds">
          {props.breeds.map(breed => <option>{breed}</option>)}
        </datalist>
        <label htmlFor="search">Search:</label>
        <input
          onChange={props.handleInputChange}
          data
          value={props.search}
          name="search"
          type="text"
          className="form-control text-center"
          placeholder="Search for a Gif"
          id="search"
          list="breeds"
        />
        <button onClick={props.handleFormSubmit} className="btn btn-primary mt-3">
          Search
        </button>
      </div>
    </form>
  );
}

export default SearchCard;