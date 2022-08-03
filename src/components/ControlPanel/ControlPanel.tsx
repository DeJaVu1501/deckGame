import { FC } from "react";
import { useAppDispatch, useAppSelector } from "../../hooks/store";
import { selectMode, setGameStatus } from "../../store/game/gameSlice";
import { useGetPlaygroundsQuery } from "../../api/playground";
import Select from "react-select";
import { Option } from "../../interfaces/Game";
import "./styles.scss";

export const ControlPanel: FC = () => {
  const dispatch = useAppDispatch();
  const { isGameStarted, modes } = useAppSelector(state => state.game);
  const { data, isLoading } = useGetPlaygroundsQuery();

  const onChangeMode = (option: Option | null) => {
    option && dispatch(selectMode(option.value))
  }

  const handleSetGameStatus = () => {
    dispatch(setGameStatus(!isGameStarted));
  };

  return (
    <div className="control__panel">
      <Select
        className="control__panel__mode"
        isLoading={isLoading}
        options={modes}
        onChange={onChangeMode}
        placeholder="Pick mode"
      />
      <button className="control__panel__btn" onClick={handleSetGameStatus}>
        {!isGameStarted ? "Start" : "Finish"}
      </button>

    </div>
  );
};