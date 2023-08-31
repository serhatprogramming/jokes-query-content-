import FilterContext from "../contexts/FilterContext";
import { useContext } from "react";

const JokeFilter = () => {
  const { dispatch } = useContext(FilterContext);

  const onFilterChange = (event) => {
    const selectedValue = event.target.value;
    dispatch({ type: "SET_FILTER", filter: selectedValue });
  };

  return (
    <div className="joke-filter">
      <span>
        <strong>Filter Jokes </strong>
      </span>
      <select onChange={onFilterChange}>
        <option value="all">All Jokes</option>
        <option value="favorites">My Favorites</option>
      </select>
    </div>
  );
};

export default JokeFilter;
