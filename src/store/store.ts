import { configureStore, ThunkAction, Action } from '@reduxjs/toolkit';
import { Dispatch } from 'redux';
import detailsReducer from 'src/pages/Details/Details.reducer';


export const store = configureStore({
  reducer: {
    details: detailsReducer
  },
});

export type AppDispatch = typeof store.dispatch | any;
export type RootState = ReturnType<typeof store.getState>;
export type AppThunk<ReturnType = void> = ThunkAction<
  ReturnType,
  RootState,
  unknown,
  Action<string>
>;
