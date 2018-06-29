import React from 'react';

import Feedback from './feedback';
import GuessForm from './guess-form';

export default function GuessSection(props) {
//props set up in feedback file have their state passed in in that file, so don't need to put them here.
  return (
    <section aria-label="Guess section" aria-describedby="feedback">
      <Feedback /> 
      <GuessForm />
    </section>
  );
}


