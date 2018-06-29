import React from 'react';
// import {connect} from 'react-redux'; //Don't need to connect since don't need to set up props or do any actions here.

import Header from './header';
import GuessSection from './guess-section';
import StatusSection from './status-section';
import InfoSection from './info-section';

export default class Game extends React.Component {
  // constructor(props) {                                 //comment out: using react-redux library for state management.
  //   super(props);
  //   this.state = {
  //     guesses: [],
  //     feedback: 'Make your guess!',
  //     auralStatus: '',
  //     correctAnswer: Math.round(Math.random() * 100) + 1
  //   };
  // }

  render() {
  //const { feedback, guesses, auralStatus } = this.state; //comment out after react-redux since putting state all in STORE.
  //Don't need props in components since the props have states passed in 
  //from store to their components in each individual file.
    return (
      <div>
        <Header />
        <main role="main">
          <GuessSection />  
          <StatusSection /> 
          <InfoSection />
        </main>
      </div>
    );
  }
}

// export default connect()(Game);