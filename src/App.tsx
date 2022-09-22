
import { useSelector } from 'react-redux';
import ErrorComponent from './components/errorComponent/errorComponent';
import Homescreen from './screens/homescreen/homescreen';
import { addError, errorSlice } from './store/error/slice';
import { RootState, store, useAppDispatch } from './store/error/store';
import { useEffect } from 'react'

function App() {
  const errorliste = useSelector((state:RootState)=>state.errorListe)
  
  return (
  <>
    <Homescreen />
    <ErrorComponent errorListe={errorliste}/>
  </>)
}

export default App;
