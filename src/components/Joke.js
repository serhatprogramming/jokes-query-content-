const Joke = ({ joke }) => {
  const handleUpvote = () => {
    console.log("upvote", joke.id);
  };

  const handleDownvote = () => {
    console.log("downvote", joke.id);
  };

  const handleToggleFavorite = () => {
    console.log("toggle", joke.id);
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
