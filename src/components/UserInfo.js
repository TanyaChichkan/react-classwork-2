import React from 'react';
import UserForm from './form/UserForm';

const imgUrl = 'https://www.pngkey.com/png/detail/114-1149878_setting-user-avatar-in-specific-size-without-breaking.png';

const UserInfo=({id})=>{
  return (
    <div id={id}>
      <img src={imgUrl} alt="User avatar" width="300" height="200"/>
      <UserForm/>
    </div>
  )
};

export default UserInfo;