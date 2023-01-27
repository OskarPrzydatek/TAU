type ButtonProps = {
  label: string;
  onClick: () => void;
};

export const Button: React.FC<ButtonProps> = ({
  label,
  onClick,
}: ButtonProps) => {
  return (
    <button className="new-game-button" onClick={onClick}>
      {label}
    </button>
  );
};
