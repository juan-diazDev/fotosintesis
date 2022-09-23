import React from 'react'
import { useSelector } from 'react-redux';
import Sidebar from '../Home/Sidebar';

const FullProfile = () => {
  const user = useSelector(state => state)
  console.log('🚀 ~ file: index.tsx ~ line 6 ~ FullProfile ~ user', user);
  return (
    <main>
      <Sidebar />
      <div>FullProfile</div>
    </main>
  )
}

export default FullProfile;
