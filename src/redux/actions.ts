import { createAsyncThunk, createAction } from '@reduxjs/toolkit';
import { fetchUserData,patchUserData,createUserData,deleteUserData } from './api';


export const fetchUser = createAsyncThunk<UserData, void>('user/fetchUser', async () => {
  const userData = await fetchUserData();
  return userData;
});
export const updateUserData = createAction<UserData>('user/updateUserData');
export const updateUser = createAsyncThunk<UserData, Partial<UserData>>(
  'user/updateUser',
  async (userData) => {
    const updatedUserData = await patchUserData(userData);
    return updatedUserData;
  }
);
export const createUser = createAsyncThunk<UserData, UserAddData>(
  'user/createUser',
  async (userData) => {
    const createdUserData = await createUserData(userData);
    return createdUserData;
  }
);
export const deleteUser = createAsyncThunk('user/deleteUser', async (id:number) => {
  const deleteData = await deleteUserData(id);
  return deleteData;
});