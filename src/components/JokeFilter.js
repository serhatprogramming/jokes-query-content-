const JokeFilter = () => {
  const onFilterChange = (event) => {
    const selectedValue = event.target.value;
    console.log("filter: ", selectedValue);
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
