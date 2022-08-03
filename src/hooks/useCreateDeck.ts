import { useMemo, useState } from "react";
import { Deck } from "../interfaces/Game";

export const useCreateDeck = (field: number): Deck[] | null => {
  const [deck, setDeck] = useState<Deck[] | null>(null);

  useMemo(() => {
    setDeck(Array.from(Array(field)).map((row, rowIndex) => {
      const rowArray = Array.from(Array(field));
      return rowArray.map((cell, cellIndex) => ({
        row: rowIndex + 1, col: cellIndex + 1
      }))
    }))
  }, [field]);

  return deck;
}