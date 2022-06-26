import { createSlice } from "@reduxjs/toolkit";

/*
Cards example structure
cards: {
    cards: {
      '789': {
        id: '789',
        front: 'front text',
        back: 'back text'
      },
      '101': {
        id: '101',
        front: 'front text',
        back: 'back text'
      },
      '102': {
        id: '102',
        front: 'front text',
        back: 'back text'
      }
    }
  }
*/

const initialState = {
  cards: {}
};

export const cardsSlice = createSlice({
  name: 'cards',
  initialState: initialState,
  reducers: {
    addCard: (state, action) => {
      state.cards[action.payload.id] = action.payload;
    }
  }

});

export const selectCards = (state) => state.cards.cards;
export const {addCard} = cardsSlice.actions;
export default cardsSlice.reducer;
