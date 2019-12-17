import React from 'react';

interface InputProps {
  change?: any;
  userName?: string;
}

const userInput: React.FC<InputProps> = (props: InputProps) => {
  const {
    change,
    userName,
  } = props;

  return (
    <input type="text" value={userName} onChange={change} id={userName} />
  );
};

export default userInput;
