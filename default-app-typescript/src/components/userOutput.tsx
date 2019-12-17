import React from 'react';
import './userOutput.css';

interface InputProps {
  userName?: string;
}

const userOutput: React.FC<InputProps> = (props: InputProps) => {
  const {
    userName,
  } = props;

  return (
    <div className="userOutput">
      <p>{`Username: ${userName}`}</p>
      <p>A new component!</p>
    </div>
  );
};

export default userOutput;
