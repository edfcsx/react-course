import React, { useState } from 'react';
import Person from './components/person';
import './App.css';

const App: React.FC = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Eduardo', age: 25 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
  });

  const switchNameHandler = () => {
    setPersonsState({
      ...personsState,
      persons: [
        { id: 1, name: 'Eduardo', age: 32 },
        { id: 2, name: 'Manu', age: 29 },
        { id: 3, name: 'Stephanie', age: 27 },
      ],
    });
  };

  const nameChangeHandler = (event: any) => {
    event.persist();
    const { value, id } = event.target;
    const { persons } = personsState;

    const index = persons.findIndex((person) => person.name === id);

    persons[index] = {
      ...persons[index],
      name: value,
    };

    setPersonsState({ persons });
  };

  const style = {
    backgroundColor: 'white',
    font: 'inherit',
    border: '1px solid blue',
    padding: '8px',
    cursor: 'pointer',
  };

  return (
    <div className="App">
      <h1>Hi i&apos;m react App</h1>
      <p>This is really working</p>
      <button
        style={style}
        onClick={switchNameHandler}
        type="button"
      >
        Switch name
      </button>
      {
        personsState.persons.map((person) => (
          <Person
            key={person.id}
            name={person.name}
            age={person.age}
            click={switchNameHandler}
            change={nameChangeHandler}
          />
        ))
      }
    </div>
  );
};

export default App;
