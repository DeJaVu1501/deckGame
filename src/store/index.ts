import { combineReducers, configureStore } from "@reduxjs/toolkit";
import { playgroundApi } from "../api/playground";
import gameReducer from "./game/gameSlice";

const rootReducer = combineReducers({
  [playgroundApi.reducerPath]: playgroundApi.reducer,
  game: gameReducer,
});

export const store = configureStore({
  reducer: rootReducer,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(
    playgroundApi.middleware
  )
});

export type RootState = ReturnType<typeof store.getState>
export type AppDispatch = typeof store.dispatch