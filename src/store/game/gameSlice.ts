import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { Game, Square } from "../../interfaces/Game";
import { Playground } from "../../interfaces/Playground";
import { playgroundApi } from "../../api/playground";

const initialState: Game = {
  isGameStarted: false,
  hoveredSquares: [],
  modes: [],
  selectedMode: 5,
};

const successGetModes = (state: Game, action: PayloadAction<Playground[]>) => {
  state.modes = action.payload.map(mode => ({
    value: mode.field,
    label: mode.name,
  }));
}

export const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    setGameStatus: (state: Game, action: PayloadAction<boolean>) => {
      state.isGameStarted = action.payload;
    },
    setHoverSquare: (state: Game, action: PayloadAction<Square>) => {
      const hoveredElement = state.hoveredSquares.find(({ col, row }) => col === action.payload.col && row === action.payload.row);
      state.hoveredSquares = hoveredElement
        ? state.hoveredSquares.filter(({ col, row }) =>
           col !== hoveredElement.col || row !== hoveredElement.row
        )
        : [...state.hoveredSquares, action.payload];
    },
    selectMode: (state: Game, action: PayloadAction<number>) => {
      state.hoveredSquares = [];
      state.isGameStarted = false;
      state.selectedMode = action.payload;
    },
  },
  extraReducers: builder => {
    builder.addMatcher(playgroundApi.endpoints.getPlaygrounds.matchFulfilled, successGetModes);
  },
});

export const { setGameStatus, setHoverSquare, selectMode } = gameSlice.actions;

export default gameSlice.reducer;