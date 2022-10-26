import React from 'react';

type NumericInputProps = {
  label: string;
  dataTestID?: string;
};

const NumericInput = React.forwardRef<HTMLInputElement, NumericInputProps>(
  ({ label, dataTestID }, ref) => {
    const preventSigns = ['.', '+', 'i', 'I', 'e', 'E'];

    const handleEventPreventBySign: React.KeyboardEventHandler<
      HTMLInputElement
    > = (event) => preventSigns.includes(event.key) && event.preventDefault();

    return (
      <label>
        <span>{label}</span>
        <input
          data-testid={dataTestID}
          ref={ref}
          type="number"
          onKeyDown={handleEventPreventBySign}
        />
      </label>
    );
  }
);

export default NumericInput;
