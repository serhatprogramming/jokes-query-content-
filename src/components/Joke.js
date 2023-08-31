import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJoke } from "../services/api";
import { useContext } from "react";
import NotificationContext from "../contexts/NotificationContext";

const Joke = ({ joke }) => {
  const queryClient = useQueryClient();
  const { dispatch } = useContext(NotificationContext);

  const updateJokeMutation = useMutation(updateJoke, {
    onSuccess: () => queryClient.invalidateQueries("jokes"),
  });

  const handleUpvote = () => {
    dispatch({
      type: "SET_NOTIFICATION",
      message: `Upvote for ${joke.joke}`,
      notificationType: "info",
    });
    updateJokeMutation.mutate({ ...joke, votes: joke.votes + 1 });
  };

  const handleDownvote = () => {
    dispatch({
      type: "SET_NOTIFICATION",
      message: `Downvote for ${joke.joke}`,
      notificationType: "warning",
    });
    updateJokeMutation.mutate({ ...joke, votes: joke.votes - 1 });
  };

  const handleToggleFavorite = () => {
    dispatch({
      type: "SET_NOTIFICATION",
      message: !joke.favorite ? "Added to favorites" : "Removed from favorites",
      notificationType: !joke.favorite ? "info" : "warning",
    });
    updateJokeMutation.mutate({ ...joke, favorite: !joke.favorite });
  };

  return (
    <div>
      <p>{joke.joke}</p>
      <div>
        <button onClick={handleUpvote}>Upvote</button>
        <span> {joke.votes} </span>
        <button onClick={handleDownvote}>Downvote</button>
      </div>
      <div>
        <span>
          <em>{joke.favorite ? "Favorite Joke " : ""}</em>
        </span>
        <span
          style={{ textDecoration: "underline", cursor: "pointer" }}
          onClick={handleToggleFavorite}
        >
          {joke.favorite ? "Remove from Favorites" : "Add to Favorites"}
        </span>
      </div>
      <hr />
    </div>
  );
};

export default Joke;
