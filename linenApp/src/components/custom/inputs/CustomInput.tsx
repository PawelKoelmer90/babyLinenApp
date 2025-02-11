import React, { HTMLInputTypeAttribute, useRef, useState } from 'react';
import './customInput.scss';

interface Props {
  checked?: boolean;
  className?: string;
  disabled?: boolean;
  onChange?: (e: React.ChangeEvent<HTMLInputElement>) => void;
  placeholder: string;
  submitButton?: boolean;
  submitButtonFunction?: (value: string) => void;
  submitButtonText?: string;
  type?: HTMLInputTypeAttribute;
}

const CustomInput = ({
  placeholder,
  type,
  className,
  submitButton,
  submitButtonText,
  submitButtonFunction,
}: Props) => {
  const [value, setValue] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  const handleClearInput = () => {
    if (inputRef.current) {
      inputRef.current.value = '';
    }
  };

  return (
    <>
      <input
        ref={inputRef}
        className={className}
        placeholder={placeholder}
        type={type}
        onChange={(e: React.ChangeEvent<HTMLInputElement>) =>
          setValue(e.target.value)
        }
      />
      {submitButton && (
        <button
          onClick={() => {
            submitButtonFunction && submitButtonFunction(value);
            handleClearInput();
          }}
        >
          {submitButtonText}
        </button>
      )}
    </>
  );
};

export default CustomInput;
