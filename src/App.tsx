
import { useSelector } from 'react-redux';
import ErrorComponent from './components/errorComponent/errorComponent';
import Homescreen from './screens/homescreen/homescreen';
import { RootState, useAppDispatch } from './store/error/store';
import { useEffect, useState } from 'react'
import serviceFunctions from './service/backendconnection';
import BackendNotReachable from './screens/backendnotreachable/backendnotreachable';
import useThemeDetector from './hooks/useThemeDetector';
import { changeColorScheme } from './store/error/slice';
import OfflineHomescreen from './screens/offlinehomescreen/offlinehomescreen';

function App(props:{status:'online'|'offline'}) {

  const errorliste = useSelector((state:RootState)=>state.errorListe)
  const [backendOnline,setBackendOnline] = useState(false)
  const isDarkMode = useThemeDetector();
  const dispatch = useAppDispatch()
  dispatch(changeColorScheme({colorScheme:isDarkMode?'dark':'light'}))
  useEffect(()=>{
    if(!backendOnline && props.status === "online"){
      serviceFunctions.suchFilmeZuVolltext("test",(response:any)=>{
        
        setBackendOnline(true)
      })
    }
  })
  
  
  return (
  <>
    {(props.status === 'online')?
        (backendOnline) ?
          <>
            <Homescreen />
            <ErrorComponent errorListe={errorliste}/>
          </>
          :
          <BackendNotReachable />
      :
      <OfflineHomescreen />
    }
    
  </>)
}

export default App;
