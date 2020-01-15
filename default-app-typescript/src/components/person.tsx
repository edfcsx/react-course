import React from 'react';
import Radium from 'radium';
import './person.css';

interface InputProps {
  name?: any;
  age?: any;
  change?: any;
  children?: any;
  click?: any;
}

const Person: React.FC<InputProps> = (props: InputProps) => {
  const {
    name,
    age,
    change,
    click,
  } = props;

  const style = {
  };

  return (
    <div className="person" style={style}>
      <button onClick={click} type="button" className="btn-exclude">x</button>
      <p>{`i'm ${name} have a ${age} years old!`}</p>
      <input type="text" id={name} onChange={change} value={name} className="input-text" />
    </div>
  );
};

export default Radium(Person);
