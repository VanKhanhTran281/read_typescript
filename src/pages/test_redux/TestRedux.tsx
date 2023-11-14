import React, { useEffect} from 'react';
import { useSelector} from 'react-redux';
import { fetchUser } from '../../redux/actions';
import { RootState,useAppDispatch } from '../../redux/store';
import UserFormUpdate from './UserFormUpdate';
import UserFormAdd from './UserFormAdd';

const TestRedux: React.FC = () => {
  const dispatch = useAppDispatch();
  const userData = useSelector((state: RootState) => state.user.data);
  const userDataArray = userData ? Object.values(userData) : [];

  
  const fetchData = ()=>{
    
      dispatch(fetchUser());
  }
  useEffect(() => {
    fetchData()
  }, [userDataArray]);

  if (!userData) {
    return <div>Loading...</div>;
  }

  const handleUpdateUser = (updatedUser: UserData) => {
    dispatch(fetchUser());
  };

  const handleAddUser = () => {
    dispatch(fetchUser());
  };

  return (
    <div>
      <UserFormAdd onAddUser={handleAddUser} />
      
      {userDataArray.length > 0 && userDataArray.map((user) => (
        <div key={user.id} style={{borderBottom:'1px solid black',paddingTop:'10px'}}>
          <div style={{display:'flex',marginLeft:'-50px'}}>
            <h3>Người dùng: {user.id}</h3>
            <UserFormUpdate user={user} onUpdateUser={handleUpdateUser} reload={fetchData} />
          </div>
          <p>Name: {user.name}</p>
          <p>{user.email}</p>
          <p>{user.address?.street}</p>
          <p>{user.address?.city}, {user.address?.zipcode}</p>
          <p>{user.phone}</p>
          <p>{user.website}</p>
          <p>{user.company?.name}</p>
          <p>{user.company?.catchPhrase}</p>
          <p>{user.company?.bs}</p>
        </div>
      ))}
    </div>
  );
};

export default TestRedux;
// import React, { useEffect} from 'react';
// import { useSelector} from 'react-redux';
// import { fetchUser } from '../../redux/actions';
// import { RootState,useAppDispatch } from '../../redux/store';
// import UserFormUpdate from './UserFormUpdate';
// import UserFormAdd from './UserFormAdd';

// const TestRedux: React.FC = () => {
//   const dispatch = useAppDispatch();
//   const userData = useSelector((state: RootState) => state.user.data);
//   const userDataArray = userData ? Object.values(userData) : [];

//   useEffect(() => {
//     dispatch(fetchUser());
//   }, [dispatch]);

//   if (!userData) {
//     return <div>Loading...</div>;
//   }

//   const handleUpdateUser = (updatedUser: UserData) => {
//     dispatch(fetchUser());
//   };

//   return (
//     <div>

//       {userDataArray.length > 0 && userDataArray.map((user) => (
//         <div key={user.id} style={{borderBottom:'1px solid black',paddingTop:'10px'}}>
//           <div style={{display:'flex',marginLeft:'-50px'}}>
//             <h3>Người dùng: {user.id}</h3>
//             <UserFormUpdate user={user} onUpdateUser={handleUpdateUser} />
//           </div>
//           <p>Name: {user.name}</p>
//           <p>{user.email}</p>
//           <p>{user.address?.street}</p>
//           <p>{user.address?.city}, {user.address?.zipcode}</p>
//           <p>{user.phone}</p>
//           <p>{user.website}</p>
//           <p>{user.company?.name}</p>
//           <p>{user.company?.catchPhrase}</p>
//           <p>{user.company?.bs}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default TestRedux;