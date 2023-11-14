import axios from 'axios';

export const fetchUserData = async (): Promise<UserData> => {
  const response = await axios.get<UserData>('http://localhost:3000/users');
  return response.data;
};
export const patchUserData = async (userData: Partial<UserData>): Promise<UserData> => {
  const { id, ...updatedFields } = userData;
  const response = await axios.patch<UserData>(`http://localhost:3000/users/${id}`, updatedFields);
  return response.data;
};
export const createUserData = async (userData: UserAddData): Promise<UserData> => {
  const response = await axios.post<UserData>('http://localhost:3000/users', userData);
  return response.data;
};
export const deleteUserData = async (id: number): Promise<void> => {
  await axios.delete(`http://localhost:3000/users/${id}`);
};