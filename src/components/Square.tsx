interface SquareConfig {
  children?: string;
  isSelected?: boolean;
  updateBoard?: (index: number) => void;
  index?: number;
}

export const Square = ({
  children,
  isSelected,
  updateBoard,
  index,
}: SquareConfig) => {
  const className = `square ${isSelected ? "is-selected" : ""}`;

  const handleClick = () => {
    if (!updateBoard) {
      throw new Error("updateBoard is not defined");
    }

    updateBoard(index || 0);
  };

  return (
    <div onClick={handleClick} className={className}>
      {children}
    </div>
  );
};
