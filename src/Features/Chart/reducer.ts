import { createSlice, PayloadAction } from 'redux-starter-kit';

export type ApiErrorAction = {
  error: string;
};

const initialState = {
  chartData: [],
};

const slice = createSlice({
  name: 'chart',
  initialState,
  reducers: {
    chartApiErrorReceived: (state:any, action: PayloadAction<ApiErrorAction>) => state,
  },
});

export const reducer = slice.reducer;
export const actions = slice.actions;
