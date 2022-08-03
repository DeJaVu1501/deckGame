export interface Square {
  row: number,
  col: number,
}

export type Deck = Square[]

export interface Option {
  value: number,
  label: string,
}

export interface Game {
  isGameStarted: boolean,
  hoveredSquares: Square[],
  modes: Option[],
  selectedMode: number,
}