import React, { forwardRef } from 'react';
import './customInput.scss';

interface InputProps extends React.HTMLProps<HTMLInputElement> {
  label?: string;
  error?: string;
}

const CustomInput = forwardRef(
  (props: InputProps, ref: React.Ref<HTMLInputElement>) => {
    const { label, error, ...inputProps } = props;
    return (
      <label>
        {label}
        <input {...inputProps} ref={ref} />
        {error && <p>{error}</p>}
      </label>
    );
  }
);

export default CustomInput;
