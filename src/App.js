import JokeList from "./components/JokeList";
import JokeFilter from "./components/JokeFilter";
import JokeForm from "./components/JokeForm";
import Notification from "./components/Notification";
import "./App.css";

const App = () => {
  return (
    <div>
      <Notification />
      <h2>Code Jokes Central: Laugh While You Code</h2>
      <JokeFilter />
      <JokeList />
      <JokeForm />
    </div>
  );
};

export default App;
