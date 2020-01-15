import React from 'react';

interface InputProps {
  character: string;
  click: any;
}

const char: React.FC<InputProps> = (props: InputProps) => {
  const style = {
    display: 'inline-block',
    padding: '16px',
    margin: '16px',
    border: '1px solid black',
  };

  const { character, click } = props;

  return (
    <div style={style} onClick={click} onKeyPress={() => {}} role="button" tabIndex={0}>
      <p>{character}</p>
    </div>
  );
};

export default char;
