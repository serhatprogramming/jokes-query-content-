import Joke from "./Joke";
import { useJokesQuery } from "../hooks/useJokesQuery";
import { useContext } from "react";
import FilterContext from "../contexts/FilterContext";

const JokeList = () => {
  const { filter } = useContext(FilterContext);
  const { data: jokes, isLoading, isError } = useJokesQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching tasks</p>;

  const filteredJokes =
    filter === "all"
      ? jokes
      : jokes.filter((joke) => joke.favorite === (filter === "favorites"));

  return (
    <div>
      <h3>Programmer Jokes</h3>
      {filteredJokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
