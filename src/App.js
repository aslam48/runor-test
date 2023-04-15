import './App.css';
import { useEffect } from 'react';
import {Routes, Route, Navigate} from 'react-router-dom'
import Home from './pages/Home/Home';
import Error from './pages/Error/Error';
import Login from './pages/Login/Login';
import Signup from './pages/Signup/Signup';
import Sidebar from './components/Sidebar/Sidebar'
import { useDispatch, useSelector} from 'react-redux';
import Profile from './pages/Profile/Profile';
import ProfileSetup from './pages/ProfileSetup/ProfileSetup';
import { getAllProfiles } from './features/profile/profileSlice';

function App() {
  
  const { user } = useSelector(store => store.auth)
  const {isOpen} = useSelector( store => store.sidebar)

  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(getAllProfiles())
  }, [])
  
  
  // useEffect(() => {
  //     const getUser = async() =>{
  //         fetch('https://runor-backend.onrender.com/api/auth/login/success', {
  //           credentials: 'include',
  //           method: 'GET',
  //           headers: {
  //             Accept: 'application/json',
  //             'Content-Type': 'application/json',
  //             'Access-Control-Allow-Credential': true,
  //             'Authorization': `Bearer ${document.cookie.startsWith('jwt') }`
  //           },
  //         })
  //         .then((res)=>{
  //           return res.json()
  //         })
  //         .then((data) =>{
  //           console.log('received: ', data)
  //           dispatch(setUser(data.user))
  //         })
  //       .catch((error)=>{
  //           console.log(error)
  //           dispatch(clearUser())
  //       })
  //   }
  //   getUser()
  // }, [dispatch])
  
  return (
    <div className='relative'>
        <Routes>
          <Route path='/' element={<Home />}/>
          <Route path='/login' element={ user? <Navigate to='/' />: <Login /> }/>
          <Route path='/signup' element={ user? <Navigate to='/' />: <Signup /> }/>
          <Route path='/profile' element={!user? <Navigate to='/'/>: <Profile />} />
          <Route path='/service-profile' element={!user? <Navigate to='/'/>: <ProfileSetup />} />
          <Route path='*' element={<Error/>} />
        </Routes>
        { isOpen && <Sidebar />}
    </div>
  );
}

export default App;
