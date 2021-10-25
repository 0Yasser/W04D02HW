import logo from './logo.svg';
import './App.css';
import Twitter from './components/Tweet'

function App() {
  let twitter=[
    {
        name: "khaled",
        image:"./images/avatar1.png",
        tweets: ["Hello Twitter","Follow me"]
    },
    {
        name: "Yasser",
        image:"./images/avatar2.png",
        tweets: ["I've just learn coding","Visca Barca"]
    },
    {
        name: "Mohammed",
        image:"./images/avatar3.png",
        tweets: ["Thank you"]
    },
]

  return (
    <div className="App">
      <header className="App-header">
      <Twitter name={twitter[0].name} image={twitter[0].image} tweets={twitter[0].tweets}></Twitter>
      <Twitter name={twitter[1].name} image={twitter[1].image} tweets={twitter[1].tweets}></Twitter>
      <Twitter name={twitter[2].name} image={twitter[2].image} tweets={twitter[2].tweets}></Twitter>
      </header>
    </div>
  );
}

export default App;
