import { useMutation, useQueryClient } from "@tanstack/react-query";
import { createJoke } from "../services/api";
import { useContext } from "react";
import NotificationContext from "../contexts/NotificationContext";

const JokeForm = () => {
  const { dispatch } = useContext(NotificationContext);

  const queryClient = useQueryClient();

  const addJokeMutation = useMutation(createJoke, {
    onSuccess: (createdJoke) => {
      dispatch({
        type: "SET_NOTIFICATION",
        message: `New joke "${createdJoke.joke}" added successfully!`,
        notificationType: "info",
      });
      queryClient.invalidateQueries("jokes");
    },
  });

  const handleSubmit = async (event) => {
    event.preventDefault();
    const jokeText = event.target.joke.value;
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
