type ButtonProps = {
  label: string;
  dataTestID?: string;
  onClick: () => void;
};

export default function Button({ label, dataTestID, onClick }: ButtonProps) {
  return (
    <button data-testid={dataTestID} onClick={onClick}>
      {label}
    </button>
  );
}
