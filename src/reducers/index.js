import {SET_GUESSES, SET_AURALSTATUS, SET_RESTARTGAME} from '../actions';

const initialState = {
    guesses: [],
    feedback: 'Make your guess, Roger!',
    auralStatus: '',
    correctAnswer: Math.floor(Math.random() * 100) + 1
};

export const hotOrColdReducer = (state=initialState, action) => {  
    if (action.type === SET_GUESSES) {
    	let guess = parseInt(action.guesses, 10);

    	if (isNaN(guess)) {
      		return Object.assign({}, state, { feedback: 'Please enter a valid number' });
    	}

    	const difference = Math.abs(guess - state.correctAnswer);

	    let feedback;
	    if (difference >= 50) {
	      feedback = 'You\'re Ice Cold...';
	    } else if (difference >= 30) {
	      feedback = 'You\'re Cold...';
	    } else if (difference >= 10) {
	      feedback = 'You\'re Warm.';
	    } else if (difference >= 1) {
	      feedback = 'You\'re Hot!';
	    } else {
	      feedback = 'You got it!';
	    }  

	    return Object.assign({}, state, { feedback: feedback, guesses: [...state.guesses, guess] });
    }

    else if (action.type === SET_AURALSTATUS) {
    	// const {guesses, feedback} = state;	//Can also use object destructuring to make variables from state object.
    	const pluralize = state.guesses.length !== 1;

    	let  auralStatus = `Here's the status of the game right now: ${state.feedback} You've made ${state.guesses.length} ${pluralize ? 'guesses' : 'guess'}.`;

    	if (state.guesses.length > 0) {
      		auralStatus += ` ${pluralize ? 'In order of most- to least-recent, they are' : 'It was'}: ${state.guesses.reverse().join(', ')}`;
    	}

        return Object.assign({}, state, {
            auralStatus: auralStatus 		//ES6 can just do {auralStatus} for short.
        });
    }

    else if (action.type === SET_RESTARTGAME) {
        return Object.assign({}, state, {
            guesses: [],
      		feedback: 'Make your guess!',
      		auralStatus: '',
      		correctAnswer: Math.floor(Math.random() * 100) + 1
        });
    }
    return state;
};