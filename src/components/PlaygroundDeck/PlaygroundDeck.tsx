import React, { FC, useEffect, useState } from "react";
import { v4 as uuidv4 } from "uuid";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { useCreateDeck } from "../../hooks/useCreateDeck";
import { setHoverSquare } from "../../store/game/gameSlice";
import { Square } from "../../interfaces/Game";
import "./styles.scss";

export const PlaygroundDeck: FC = () => {
  const dispatch = useAppDispatch();
  const { hoveredSquares, selectedMode, isGameStarted } = useAppSelector(state => state.game);
  const deck = useCreateDeck(selectedMode);
  const [hoverSquare, setHoveredSquare] = useState<Square>();

  useEffect(() => {
    hoverSquare && dispatch(setHoverSquare(hoverSquare));
  }, [hoverSquare])

  const onHoverSquare = (event: React.MouseEvent<HTMLTableCellElement, MouseEvent>, square: Square) => {
    if (isGameStarted) {
      setHoveredSquare(square)
    }
  }

  const checkSelectedSquare = (square: Square): boolean => {
    const isSelectedSquare = hoveredSquares.find(({ row, col }) => col === square.col && row === square.row);
    return !!isSelectedSquare;
  }

  return (
    <table className="playground__deck">
      <tbody className="playground__deck__body">
      {deck?.map((cells) => (
          <tr key={uuidv4()} className="playground__deck__body__row">
            {cells.map((cell) => (
              <td
                onMouseOver={(event) => onHoverSquare(event, cell)}
                key={uuidv4()}
                className={checkSelectedSquare(cell) ? 'playground__deck__body__row__cell__selected' : 'playground__deck__body__row__cell'}
                width={50}
                height={50}>
              </td>
            ))}
          </tr>
        )
      )}
      </tbody>
    </table>
  );
};