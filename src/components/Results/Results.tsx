import { FC } from "react";
import { useAppSelector } from "../../hooks/store";
import { v4 as uuidv4 } from "uuid";
import "./styles.scss";

export const Results: FC = () => {
  const { hoveredSquares } = useAppSelector(state => state.game);
  return (
    <div className="results">
      <h1>Hover Squares</h1>
      <ul className="results__list">
        {hoveredSquares.length
          ? hoveredSquares.map(({ row, col }) => (
          <li className="results__list__item" key={uuidv4()}>
            <p>{`row: ${row}`}</p>
            <p>{`col: ${col}`}</p>
          </li>
          )
        )
          : <span>Try to hover square!</span>
        }
      </ul>
    </div>
  )
}