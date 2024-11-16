import React, { useEffect } from 'react'
import './App.css';
import Navbar from './components/Navbar/Navbar';
import LandingPage from './components/Landing/LandingPage';
import { useDispatch, useSelector} from 'react-redux'
import { fetchAllData } from './Task/KanbanTask';
import Loading from './components/Loading/Loading';

const App = () => {
  const dispatch = useDispatch();
  const {allTickets} = useSelector(state => state.DataReducer);
   
  useEffect(() => {
    dispatch(fetchAllData());
  }, [dispatch])

  return allTickets ? (
    <div style={{paddingTop : "10px"}} >
      <Navbar/>
      <hr style={{marginTop : "10px"}} />
      <LandingPage/>
    </div>
  ) : <Loading/>
}

export default App