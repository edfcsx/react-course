import React from 'react';

interface InputProps {
  textLength: number;
}

const validation: React.FC<InputProps> = (props: InputProps) => {
  const { textLength } = props;

  let validationMessage = 'Text to short!';

  if (textLength > 5) {
    validationMessage = 'Text long enough!';
  }

  return (
    <div>
      <p>{validationMessage}</p>
    </div>
  );
};

export default validation;
