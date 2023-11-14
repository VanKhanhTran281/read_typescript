
import React, { useState, useEffect } from 'react';
import { useAppDispatch } from '../../redux/store';
import { updateUserData, fetchUser,deleteUser } from '../../redux/actions';
import { patchUserData,deleteUserData } from '../../redux/api'; 

interface UserFormProps {
  user: UserData;
  onUpdateUser: (updatedUser: UserData) => void;
   reload?: () => void
}

const UserFormUpdate: React.FC<UserFormProps> = ({ user, onUpdateUser ,reload}) => {
  const dispatch = useAppDispatch();
  const [name, setName] = useState(user.name || '');
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    setName(user.name || '');
  }, [user]);

  const handleEditClick = () => {
    setIsEditing(true);
  };

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();
    const updatedUser: UserData = {
      ...user,
      name: name,
    };
    const updatedUserData = await patchUserData(updatedUser);
    await dispatch(updateUserData(updatedUserData));
    await dispatch(fetchUser());
    onUpdateUser(updatedUserData);
    setIsEditing(false);
  };
  const handleDeleteClick = async () => {
      await deleteUserData(user.id); 
      dispatch(deleteUser(user.id)); 
      reload?.();
  };

  if (isEditing) {
    return (
      <form style={{ marginLeft:'400px'}} onSubmit={handleSubmit}>
        <h3>Sửa ở đây: </h3>
        <input style={{marginLeft:'5px'}} type="text" value={name} onChange={(event) => setName(event.target.value)} />
        <button style={{marginLeft:'5px',backgroundColor:'#6596f7',color:'black' ,border:'1px solid black'}}  type="submit">Save</button>
      </form>
    );
  }

  return (
    <div >
      <button style={{marginLeft:'50px',backgroundColor:'#6596f7',color:'black' ,border:'1px solid black'}} type="button" onClick={handleEditClick}>Sửa</button>
      <button style={{marginLeft:'50px',backgroundColor:'#6596f7',color:'black' ,border:'1px solid black'}} type="button" onClick={handleDeleteClick}>Xóa</button>
    </div>
  );
};

export default UserFormUpdate;