
import { useSelector } from 'react-redux';
import ErrorComponent from './components/errorComponent/errorComponent';
import Homescreen from './screens/homescreen/homescreen';
import { addError, errorSlice } from './store/error/slice';
import { RootState, store, useAppDispatch } from './store/error/store';
import { useEffect, useState } from 'react'
import serviceFunctions from './service/backendconnection';
import BackendNotReachable from './screens/backendnotreachable/backendnotreachable';


function App() {
  const errorliste = useSelector((state:RootState)=>state.errorListe)
  const [backendOnline,setBackendOnline] = useState(false)
  useEffect(()=>{
    if(!backendOnline){
      console.log("begin")
      serviceFunctions.suchFilmeZuVolltext("test",(response:any)=>{
        console.log("end")
        setBackendOnline(true)
      })
    }
  })
  
  
  return (
  <>
    {backendOnline?
      <>
        <Homescreen />
        <ErrorComponent errorListe={errorliste}/>
      </>
      :
      <BackendNotReachable />
    }
    
  </>)
}

export default App;
