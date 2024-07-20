import { getAuth, onAuthStateChanged, signOut } from 'firebase/auth'
import React, { useEffect, useState } from 'react'
import { app } from '../config/firebase/firebaseconfig'
import { useNavigate } from 'react-router-dom'

const Home = () => {
  const auth =getAuth(app)
  const navigate =useNavigate()
useEffect(()=>{
  onAuthStateChanged(auth, (user) => {
    if (user) {
     
      const uid = user.uid;
    console.log(uid);
    } else {
console.log('please login first!');
navigate('/')
    }
  });
  
})

  
  const [error,setError]=useState()
  
function logOutUser(){
 
signOut(auth).then(() => {
  navigate('/')
}).catch((error) => {
  setError('Oops! look likes a problem occured');
});
}

  return (
    <><h1>home</h1>
   <button className="btn btn-outline btn-error" onClick={logOutUser}>LogOut</button>
   <h1 className='text-center mt-8'>{error}</h1>
    </>
  )
}

export default Home