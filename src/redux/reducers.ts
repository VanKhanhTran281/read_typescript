import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchUser } from './actions';
import { Draft,produce} from 'immer';

interface UserState {
  data: UserData | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  data: null,
  loading: false,
  error: null,
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    updateUserData: (state, action: PayloadAction<UserData>) => {
      const updatedUserData = action.payload;
      
      if (Array.isArray(state.data)) {
        const existingUser = state.data.find(user => user.id === updatedUserData.id);
        if (existingUser) {
          Object.assign(existingUser, updatedUserData);
        }
      }
    },
    addUserData: (state, action: PayloadAction<UserData>) => {
      const newUserData = action.payload;
      
      if (state.data) {
        const dataArray = state.data as unknown as UserData[];
        dataArray.push(newUserData);
      }
    },
    deleteUser: (state: Draft<UserState>, action: PayloadAction<number>) => {
      const id = action.payload;
      state.data = produce(state.data, (draft: Draft<UserData>[]) => {
        if (Array.isArray(draft)) {
          draft = draft.filter(user => user.id !== id);
        }
      });
    },
  },
  extraReducers: (builder) => {
    builder.addCase(fetchUser.pending, (state) => {
      state.loading = true;
      state.error = null;
    });
    
    builder.addCase(fetchUser.fulfilled, (state, action: PayloadAction<UserData>) => {
      state.loading = false;
      state.data = action.payload;
    });
    
    builder.addCase(fetchUser.rejected, (state, action) => {
      state.loading = false;
      state.error = action.error.message || 'Failed to fetch user data.';
    });
  },
});


export const { updateUserData,addUserData,deleteUser} = userSlice.actions;
export default userSlice.reducer;