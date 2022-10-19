import React from 'react';

type InputProps = {
  label: string;
  placeholder: string;
  type?: 'text' | 'number' | 'password';
  inputTestId?: string;
  labelTestId?: string;
};

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ label, placeholder, type, inputTestId, labelTestId }, ref) => {
    return (
      <label>
        <span data-testid={labelTestId}>{label}</span>
        <input
          data-testid={inputTestId}
          ref={ref}
          type={type ?? 'text'}
          placeholder={placeholder}
        />
      </label>
    );
  }
);
