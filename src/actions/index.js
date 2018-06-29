export const SET_GUESSES = 'SET_GUESSES';
export const setGuesses = guesses => ({
    type: SET_GUESSES,
    guesses
});

export const SET_AURALSTATUS = 'SET_AURALSTATUS';
export const setAuralStatus = auralStatus => ({
    type: SET_AURALSTATUS,
    auralStatus
});

export const SET_RESTARTGAME = 'SET_RESTARTGAME';
export const setRestartGame = restartGame => ({	 //actually nothing passed in to restart game. New GUESS # is in reducer.
    type: SET_RESTARTGAME,						 //can also pass it in
    restartGame
});