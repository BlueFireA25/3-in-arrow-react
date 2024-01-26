import { Square } from "./Square";

interface BoardConfig {
  board: string[];
  updateBoard: (index: number) => void;
}

export function Board({ board, updateBoard }: BoardConfig) {
  return (
    <section className="game">
      {board.map((square, index) => {
        return (
          <Square key={index} index={index} updateBoard={updateBoard}>
            {square}
          </Square>
        );
      })}
    </section>
  );
}
