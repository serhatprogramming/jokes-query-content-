import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJoke } from "../services/api";

const JokeForm = () => {
  const queryClient = useQueryClient();

  const addJokeMutation = useMutation(createJoke, {
    onSuccess: () => {
      queryClient.invalidateQueries("jokes");
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jokeText = event.target.joke.value;
    console.log("joke text: ", jokeText);
    addJokeMutation.mutate({ joke: jokeText, votes: 0, favorite: false });
    event.target.joke.value = "";
  };

  return (
    <div>
      <h3>Why not another joke?</h3>
      <form onSubmit={handleSubmit}>
        <input type="text" placeholder="Enter a new joke" name="joke" />
        <button type="submit">Add Joke</button>
      </form>
    </div>
  );
};

export default JokeForm;
