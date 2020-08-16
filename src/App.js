import React from 'react';
import './App.css';


function Quoting(props) {
  const [index, setindex] = React.useState(4);
  const change = newValue => setindex(Math.floor(Math.random() * (+6 - +0)) + +0);
  return (
    <div style={{ maxWidth: "100%" }}>
      <div className="quote">
        "{props.quotes[index].quote}"
      </div>
      <div className="speaker">
        -{props.quotes[index].speaker}
      </div>

      <div><button className="button" onClick={change}>New Quote</button></div>

    </div>
  );

}




function App() {
  const quotes = [
    {
      quote: "Knowing what's right doesn't mean much unless you do what's right.",
      speaker: "Theodore Roosevelt"
    },
    {
      quote: "A short saying often contains much wisdom.",
      speaker: "Sophocles"
    },
    {
      quote: "The only true wisdom is in knowing you know nothing.",
      speaker: "Socrates"
    },
    {
      quote: "Folks are usually about as happy as they make their minds up to be.",
      speaker: "Abraham Lincoln"
    },
    {
      quote: "My real life was when I was just a working guy. You know, it's OK to head out for Wonderful. But on your way to Wonderful, you're gonna have to pass through All Right. And when you get to All Right, take a good look around, and get used to it, because that may be as far as you're gonna go.",
      speaker: "Bill Withers"
    },
    {
      quote: "Nowadays, if you don't read the news you uninformed. If you do read the news your misinformed.",
      speaker: "Denzel Washingtion"
    },
  ];

  return (
    <div className="App">
      <header className="App-header">
        <div>
        </div>

        <Quoting quotes={quotes} />

      </header>
    </div>
  );
}

export default App;
