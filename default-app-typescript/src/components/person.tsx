import React from 'react';
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
  } = props;

  return (
    <div className="person">
      <p>{`i'm ${name} have a ${age} years old!`}</p>
      <input type="text" id={name} onChange={change} value={name} />
    </div>
  );
};

export default Person;
