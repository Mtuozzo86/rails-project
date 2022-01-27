import "./App.css";
import NavBar from "./NavBar";
import CreateAccount from "./CreateAccount";

function App() {
  return (
    <div>
      <NavBar />
      <div className="App">
        <form>
          <div>
            Login: <input type="text"></input>
          </div>
          <div>
            Password: <input type="password"></input>
          </div>
          <button type="submit">Enter</button>
        </form>
      </div>
      <CreateAccount />
    </div>
  );
}

export default App;
