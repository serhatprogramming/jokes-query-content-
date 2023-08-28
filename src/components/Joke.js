import { useMutation, useQueryClient } from "@tanstack/react-query";
import { updateJoke } from "../services/api";

const Joke = ({ joke }) => {
  const queryClient = useQueryClient();

  const updateJokeMutation = useMutation(updateJoke, {
    onSuccess: () => queryClient.invalidateQueries("jokes"),
  });

  const handleUpvote = () => {
    updateJokeMutation.mutate({ ...joke, votes: joke.votes + 1 });
  };

  const handleDownvote = () => {
    updateJokeMutation.mutate({ ...joke, votes: joke.votes - 1 });
  };

  const handleToggleFavorite = () => {
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
