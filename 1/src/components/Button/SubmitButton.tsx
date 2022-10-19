type SubmitButtonProps = {
  label: string;
  dataTestId?: string;
};

export default function SubmitButton({ label, dataTestId }: SubmitButtonProps) {
  return (
    <button data-testid={dataTestId} type="submit">
      {label}
    </button>
  );
}
