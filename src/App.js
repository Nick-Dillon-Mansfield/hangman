import React, { Component } from 'react';
import './App.css';
import Header from './components/Header'
import Instructions from './components/Instructions'
import AnswerInputBox from './components/AnswerInputBox'
import GuessAnswer from './components/GuessAnswer'
import GuessList from './components/GuessList'


class App extends Component {
  state = {
    answer : '',
    guess : '',
    guesses : ['a', 't', 'u'],
    guessLimit : 10
  }
  render() {
    return (
      <div className="App">
      <Header />
      <Instructions />
      {this.state.answer === '' ? <AnswerInputBox setAnswer={this.setAnswer} /> : <GuessAnswer answer={this.state.answer} />  }
      <GuessList guesses={this.state.guesses} />

      
      </div>
    );
  }

  setAnswer = (inputAnswer) => {
    console.log(inputAnswer)
    this.setState({answer: inputAnswer}) 
  }

}

export default App;
