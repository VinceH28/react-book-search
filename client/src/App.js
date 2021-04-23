import "./App.css";
import Navbar from "./components/Navbar/Navbar";
import Header from "./components/Header/Header";
import Jumbotron from "./components/Jumbotron/Jumbotron";

function App() {
  return (
    <div className="App">
      <Header />
      <Navbar />
      <Jumbotron/>
    </div>
  );
}

export default App;