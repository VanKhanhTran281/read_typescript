import React, { useState } from 'react';
import { useAppDispatch } from '../../redux/store';
import { createUser } from '../../redux/actions';

interface UserFormAddProps {
  onAddUser: () => void;
}

const UserFormAdd: React.FC<UserFormAddProps> = ({ onAddUser }) => {
  const dispatch = useAppDispatch();
  const [userData, setUserData] = useState<UserAddData>({
    name: '',
    username: '',
    email: '',
    address: {
      street: '',
      suite: '',
      city: '',
      zipcode: '',
      geo: {
        lat: '',
        lng: '',
      },
    },
    phone: '',
    website: '',
    company: {
      name: '',
      catchPhrase: '',
      bs: '',
    },
  });

  const handleSubmit = async (event: React.FormEvent) => {
    event.preventDefault();

    await dispatch(createUser(userData));
    onAddUser();
    resetForm();
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    const { name, value } = event.target;

    if (name === 'name') {
      setUserData((prevData) => ({
        ...prevData,
        name: value,
      }));
    } else if (name === 'username') {
      setUserData((prevData) => ({
        ...prevData,
        username: value,
      }));
    } else if (name === 'email') {
      setUserData((prevData) => ({
        ...prevData,
        email: value,
      }));
    } else if (name === 'street') {
      setUserData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          street: value,
        },
      }));
    } else if (name === 'city') {
      setUserData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          city: value,
        },
      }));
    } else if (name === 'zipcode') {
      setUserData((prevData) => ({
        ...prevData,
        address: {
          ...prevData.address,
          zipcode: value,
        },
      }));
    } else if (name === 'phone') {
      setUserData((prevData) => ({
        ...prevData,
        phone: value,
      }));
    } else if (name === 'website') {
      setUserData((prevData) => ({
        ...prevData,
        website: value,
      }));
    } else if (name === 'companyName') {
      setUserData((prevData) => ({
        ...prevData,
        company: {
          ...prevData.company,
          name: value,
        },
      }));
    } else if (name === 'catchPhrase') {
      setUserData((prevData) => ({
        ...prevData,
        company: {
          ...prevData.company,
          catchPhrase: value,
        },
      }));
    } else if (name === 'bs') {
      setUserData((prevData) => ({
        ...prevData,
        company: {
          ...prevData.company,
          bs: value,
        },
      }));
    }
  };

  const resetForm = () => {
    setUserData({
      name: '',
      username: '',
      email: '',
      address: {
        street: '',
        suite: '',
        city: '',
        zipcode: '',
        geo: {
          lat: '',
          lng: '',
        },
      },
      phone: '',
      website: '',
      company: {
        name: '',
        catchPhrase: '',
        bs: '',
      },
    });
  };

  const [showForm, setShowForm] = useState(false);
  const toggleForm = () => {
    setShowForm(!showForm);
    resetForm();
  };

  return (
    <div>
      {showForm ? (
        <form style={{ marginLeft: '200px',display:'flex' }} onSubmit={handleSubmit}>
          
          <div >
            <h3 style={{fontSize:"20px",color:'red'}}>Thêm mới người dùng</h3>
            <div style={{display:'flex'}}>
              <label>Tên:</label>
              <input style={{marginLeft:'10px'}} type="text" name="name" value={userData.name} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Tên đăng nhập:</label>
              <input style={{marginLeft:'10px'}} type="text" name="username" value={userData.username} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Email:</label>
              <input style={{marginLeft:'10px'}} type="email" name="email" value={userData.email} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Địa chỉ:</label>
              <input style={{marginLeft:'10px'}} type="text" name="street" value={userData.address.street} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Thành phố:</label>
              <input style={{marginLeft:'10px'}} type="text" name="city" value={userData.address.city} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Mã bưu điện:</label>
              <input style={{marginLeft:'10px'}} type="text" name="zipcode" value={userData.address.zipcode} onChange={handleChange} />
            </div>
          </div>
          <div style={{marginLeft:'30px',marginTop:"35px"}}>
            <div style={{display:'flex'}}>
              <label >Số điện thoại:</label>
              <input style={{marginLeft:'10px'}} type="text" name="phone" value={userData.phone} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Website:</label>
              <input style={{marginLeft:'10px'}} type="text" name="website" value={userData.website} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Tên công ty:</label>
              <input type="text" name="companyName" value={userData.company.name} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>Catch Phrase:</label>
              <input style={{marginLeft:'10px'}} type="text" name="catchPhrase" value={userData.company.catchPhrase} onChange={handleChange} />
            </div>
            <div style={{display:'flex'}}>
              <label>BS:</label>
              <input style={{marginLeft:'10px'}} type="text" name="bs" value={userData.company.bs} onChange={handleChange} />
            </div>
          </div>
          <button style={{ marginLeft: '5px', backgroundColor: '#6596f7', color: 'black', border: '1px solid black' ,height:'50px',marginTop:'50px' }} type="submit">Lưu</button>
          <button style={{ marginLeft: '5px', backgroundColor: '#6596f7', color: 'black', border: '1px solid black' ,height:'50px',marginTop:'50px'}} onClick={toggleForm}>Hủy</button>
        </form>
      ) : (
        <button style={{ marginLeft: '5px', backgroundColor: '#6596f7', color: 'black', border: '1px solid black' }} onClick={toggleForm}>Thêm mới người dùng</button>
      )}
    </div>

  );
};

export default UserFormAdd;