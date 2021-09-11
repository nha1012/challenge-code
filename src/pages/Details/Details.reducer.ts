import { createSlice, createAsyncThunk } from '@reduxjs/toolkit'
import { getStandupItemById } from 'src/apis/standups.api'
import { RootState } from 'src/store/store'


const initialState: DetailsState = {
  loading: false
}


export const fetchStandupDetails = createAsyncThunk(
  'details/fetch-details-standup',
  async (id: string) => {
    const response = await getStandupItemById(id)
    return response
  }
)

export const detailsSlice = createSlice({
  name: 'details',
  initialState,
  reducers: {
  },
  extraReducers: (builder) => {
    builder      
      .addCase(fetchStandupDetails.pending, (state) => {
        state.loading = true;
      })
      .addCase(fetchStandupDetails.fulfilled, (state, action) => {
        state.loading = false;
        state.standup = action.payload
      })
      .addCase(fetchStandupDetails.rejected, (state, action) => {
        state.loading = false;
      });
    }
})


export const selectCount = (state: RootState) => state.details

export default detailsSlice.reducer
