import React from 'react';
import './App.css';


const Quoting = ({quotes}) => {
  const [getindex, setindex] = React.useState(3);
  const [quote, setQuote] = React.useState("hey");

  const change = () => {
    console.log('here');
    let index = Math.floor(Math.random() * (+5 - +0)) + +0
    setindex(index);
    setQuote(quotes[index].quote);
  }
 
  return (
    <div style={{ maxWidth: "50%"}}>      
      <div>
      {quotes[getindex].quote}
      </div>
      <p>-</p><div className="speaker">{quotes[getindex].speaker}</div>
      <div style={{ marginTop: '1em'}} ><button className="button" onClick={()=>change()}>New Quote</button></div>

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
      quote: "If you can lock yourself in a closet and just groove man, don't rob yourself of that.",
      speaker: "Bill Withers"
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
