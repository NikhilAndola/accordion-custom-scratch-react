import React from 'react';
import './style.css';
import Accordion from './accordion/Accordion';

export default function App() {
  return (
    <div>
      <Accordion
        title="what is your name?"
        content="hello how are you?what's up with the task today!"
      />
      <Accordion
        title="how old are you?"
        content="hello how are you?what's up with the task today!"
      />
      <Accordion
        title="when is your birthday?"
        content="hello how are you?what's up with the task today!"
      />
    </div>
  );
}
