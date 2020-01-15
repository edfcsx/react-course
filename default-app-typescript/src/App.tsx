import React, { useState } from 'react';
import Radium from 'radium';
import Person from './components/person';
import UserInput from './components/userInput';
import UserOutput from './components/userOutput';
import Validation from './components/validation';
import Char from './components/char';
import './App.css';

const App: React.FC = () => {
  const [personsState, setPersonsState] = useState({
    persons: [
      { id: 1, name: 'Eduardo', age: 25 },
      { id: 2, name: 'Manu', age: 29 },
      { id: 3, name: 'Stephanie', age: 26 },
    ],
    showPersons: false,
  });

  const [userState, setUserState] = useState({
    userName: 'Edfcsx',
  });

  const [exerciseListState, setExerciseListState] = useState({
    userInput: '',
  });

  const [globalState, setGlobalState] = useState({
    showExercise: false,
    showListExercise: false,
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

  const userChangeHandler = (event: any) => {
    setUserState({ userName: event.target.value });
  };

  const nameChangeHandler = (event: any, personId: any) => {
    const persons = [...personsState.persons];

    const index = persons.findIndex((p) => p.id === personId);

    persons[index] = {
      ...persons[index],
      name: event.target.value,
    };

    setPersonsState({
      ...personsState,
      persons,
    });
  };

  const togglePersonsHandler = () => {
    setPersonsState({
      ...personsState,
      showPersons: !personsState.showPersons,
    });
  };

  const toggleExerciseHandler = () => {
    setGlobalState({
      ...globalState,
      showExercise: !globalState.showExercise,
    });
  };

  const toggleExerciseListerHandler = () => {
    setGlobalState({
      ...globalState,
      showListExercise: !globalState.showListExercise,
    });
  };

  const deletePersonHandler = (personIndex: number) => {
    const persons = [...personsState.persons];
    persons.splice(personIndex, 1);

    setPersonsState({
      ...personsState,
      persons,
    });
  };

  const changeUserInputExerciseList = (event: any) => {
    setExerciseListState({
      userInput: event.target.value,
    });
  };

  const deleteUserInputExerciseListCaracter = (index: number): void => {
    const userInput = exerciseListState.userInput.split('');
    userInput.splice(index, 1);

    const newText = userInput.join('');

    setExerciseListState({
      ...exerciseListState,
      userInput: newText,
    });
  };

  const charList = exerciseListState.userInput.split('')
    .map((ch, index) => {
      const randomIndex = Math.random().toFixed(20);
      return (
        <Char
          character={ch}
          key={randomIndex}
          click={() => deleteUserInputExerciseListCaracter(index)}
        />
      );
    });

  let personsList = null;

  const style = {
    btnTogglePersons: {
      backgroundColor: 'green',
      color: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer',
      borderRadius: '2px',
      ':hover': {
        backgroundColor: 'lightgreen',
        color: 'black',
      },
    },
  };

  if (personsState.showPersons) {
    personsList = personsState.persons.map((person, index) => (
      <Person
        key={person.id}
        name={person.name}
        age={person.age}
        click={() => deletePersonHandler(index)}
        change={(event: any) => nameChangeHandler(event, person.id)}
      />
    ));

    style.btnTogglePersons.backgroundColor = 'red';
    style.btnTogglePersons[':hover'] = {
      backgroundColor: 'salmon',
      color: 'black',
    };
  }

  return (
    <div className="App">
      <h1>Hi i&apos;m react App</h1>
      <p className="red bold">This is really working</p>

      <div className="header-btn-container">
        <button className="switchNameButton" onClick={switchNameHandler} type="button">
          Switch name
        </button>

        <button type="button" onClick={togglePersonsHandler} style={style.btnTogglePersons}>
          { personsState.showPersons && 'Hide Persons' }
          { !personsState.showPersons && 'Show Persons' }
        </button>

        <button type="button" onClick={toggleExerciseHandler}>
          { globalState.showExercise && 'Hide Exercise' }
          { !globalState.showExercise && 'Show Exercise' }
        </button>

        <button type="button" onClick={toggleExerciseListerHandler}>
          { globalState.showExercise && 'Hide List Exercise' }
          { !globalState.showExercise && 'Show List Exercise' }
        </button>
      </div>

      { personsList }

      {
        personsState.persons.length === 0 && personsState.showPersons
        && <h1>No have persons to show!</h1>
      }

      {
        globalState.showExercise && (
          <div>
            <UserInput change={userChangeHandler} userName={userState.userName} />
            <div className="userOutputContainer">
              <UserOutput userName={userState.userName} />
              <UserOutput userName={userState.userName} />
              <UserOutput userName="Felipe!" />
            </div>
          </div>
        )
      }

      {
        globalState.showListExercise && (
          <div>
            <input onChange={changeUserInputExerciseList} value={exerciseListState.userInput} />
            <p>{exerciseListState.userInput}</p>
            <Validation textLength={exerciseListState.userInput.length} />
            { charList }
          </div>
        )
      }

    </div>
  );
};

export default Radium(App);
