import Joke from "./Joke";
import { useJokesQuery } from "../hooks/useJokesQuery";

const JokeList = () => {
  const { data: jokes, isLoading, isError } = useJokesQuery();
  if (isLoading) return <p>Loading...</p>;
  if (isError) return <p>Error fetching tasks</p>;

  return (
    <div>
      <h3>Programmer Jokes</h3>
      {jokes.map((joke) => (
        <Joke key={joke.id} joke={joke} />
      ))}
    </div>
  );
};

export default JokeList;
