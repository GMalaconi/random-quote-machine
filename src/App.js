import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      quote: "",
      author: ""
    }
  }
  
  async getQuote() {
    const response = await fetch('https://gist.githubusercontent.com/camperbot/5a022b72e96c4c9585c32bf6a75f62d9/raw/e3c6895ce42069f0ee7e991229064f167fe8ccdc/quotes.json');
    const data = await response.json();
    let randomNum = Math.floor(Math.random() * data.quotes.length);
    let randomQuote = data.quotes[randomNum];
    
    this.setState({
      quote: randomQuote.quote,
      author: randomQuote.author
    });
  }
  
  componentDidMount() {
    this.getQuote();
  }
  
  newQuote() {
    this.getQuote();
  }
  
  render() {
    let twitterUrl = `https://twitter.com/intent/tweet?text=${this.state.quote}`;
    return (
      <div id="quote-box">
        <div id="text">{this.state.quote}</div>
        <div id="author">-{this.state.author}</div>
        <button id="new-quote" onClick={this.newQuote.bind(this)}>new quote</button>
        <a id="tweet-quote" target="_top" href={twitterUrl}>tweet it</a>
      </div>
    )
  }
}

export default App;
