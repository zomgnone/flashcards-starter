import { createSlice } from "@reduxjs/toolkit";
import { addQuizId } from '../topics/topicsSlice';

// create new quiz and add it's ID to topics
export const addQuizThunk = (quiz) => {
  const { id, topicId } = quiz;
  return (dispatch) => {
    dispatch(quizzesSlice.actions.addQuiz(quiz));
    dispatch(addQuizId({ quizId: id, topicId: topicId }));
  }
}

/*
Quizzes example structure:
quizzes: {
  quizzes: {
    '456': {
      id: '456',
      topicId: '123',
      name: 'quiz for example topic',
      cardIds: ['789', '101', '102']
    }
  }
}
*/

const initialState = {
  quizzes: {}
};

export const quizzesSlice = createSlice({
  name: 'quizzes',
  initialState: initialState,
  reducers: {
    addQuiz: (state, action) => {
      state.quizzes[action.payload.id] = action.payload;
    }
  }
});


export const selectQuizzes = (state) => state.quizzes.quizzes;
export const { addQuiz } = quizzesSlice.actions;
export default quizzesSlice.reducer;
