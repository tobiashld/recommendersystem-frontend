
import { useSelector } from 'react-redux';
import ErrorComponent from './components/errorComponent/errorComponent';
import Homescreen from './screens/homescreen/homescreen';
import { RootState, useAppDispatch } from './store/error/store';
import { useEffect, useState } from 'react'
import serviceFunctions from './service/backendconnection';
import BackendNotReachable from './screens/backendnotreachable/backendnotreachable';
import useThemeDetector from './hooks/useThemeDetector';
import { addError, changeClientStatus, changeColorScheme, clearError } from './store/error/slice';
import OfflineHomescreen from './screens/offlinehomescreen/offlinehomescreen';
import { db } from './store/indexedDB';

function App(props:{status:'online'|'offline'}) {

  const errorliste = useSelector((state:RootState)=>state.errorListe)
  const [backendOnline,setBackendOnline] = useState(false)
  const isDarkMode = useThemeDetector();
  const dispatch = useAppDispatch()

  dispatch(changeColorScheme({colorScheme:isDarkMode?'dark':'light'}))

  useEffect(()=>{
    dispatch(changeClientStatus({clientStatus:props.status}))
  },[props,props.status,dispatch])

  useEffect(()=>{
    if(!backendOnline && props.status === "online"){
      serviceFunctions.suchFilmeZuVolltext("test",(response:any)=>{
        setBackendOnline(true)
      })
    }else{
      db.table("filmitems").count().then(count=>{
        if(count > 0){
          setBackendOnline(true)
        }else{
          dispatch(addError({
            type:"warning",
            title:"Offline",
            message:"Sie sind Offline und es wurden noch keine Filme gecached",
            handleClose:(id:number)=>dispatch(clearError({id:id}))
          }))
        }
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
      (backendOnline) ?
          <>
            <Homescreen />
            <ErrorComponent errorListe={errorliste}/>
          </>
          :
          <OfflineHomescreen />
    }
    
  </>)
}

export default App;
