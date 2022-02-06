import { useState } from "react";
import initializeFirebase from "../Firebase/firebase.init"
import { getAuth, createUserWithEmailAndPassword, signOut, onAuthStateChanged, signInWithEmailAndPassword } from "firebase/auth";
import { useEffect } from "react";

initializeFirebase();


const useFirebase=()=>{
    const [user, setUser]= useState({})
const [isLoading, setisLoading]=useState(true);
const [AuthError, setAuthError]=useState('')
    const auth = getAuth();

const registerUser=(email, password, location, history)=>{
  setisLoading(true)
    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
        // Signed in
        const destination = location?.state?.from || '/';
                history.replace(destination); 
        setAuthError('') ;
        // ...
      })
      .catch((error) => {
        
        setAuthError(error.message) ;
        // ..
      })
      .finally(()=>{setisLoading(false)})
}
const loginUser=(email, password, location, history)=>{
  setisLoading(true)
    signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    // Signed in 
    const destination = location?.state?.from || '/';
                history.replace(destination);
    setAuthError('') ;
    // ...
  })
  .catch((error) => {
   
    setAuthError(error.message) ;
  })
  .finally(()=>{setisLoading(false)});
}

useEffect(()=>{
  setisLoading(true)
    onAuthStateChanged(auth, (user) => {
        if (user) {
          setUser(user)
        } else {
         setUser({})
        }
        setisLoading(false)

      });
},[])

const logoutUser=()=>{
  setisLoading(true)
    signOut(auth).then(() => {
        // Sign-out successful.
      }).catch((error) => {
        // An error happened.
      })
      .finally(()=>{setisLoading(false)});
}

return{
    user,
    AuthError,
    isLoading,
    registerUser,
    loginUser,
    logoutUser
}
}
export default useFirebase;