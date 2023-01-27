type ModalProps = {
  onClickModalButton: () => void;
};

export const Modal: React.FC<ModalProps> = ({
  onClickModalButton,
}: ModalProps) => {
  return (
    <div className="modal center-flex">
      <div className="modal__content--wrapper center-flex">
        <p>You Won!</p>

        <button className="modal__content--button" onClick={onClickModalButton}>
          Play Again!
        </button>
      </div>
    </div>
  );
};
