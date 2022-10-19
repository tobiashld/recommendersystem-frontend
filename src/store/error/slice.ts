import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Error, ErrorType } from '../../types/errortypes'

interface InitialErrorState{
    errorListe:Error[],
    colorScheme:'light'|'dark',
    currentClientStatus:'online'|'offline'
}

const initialState : InitialErrorState = {
  errorListe: [],
  colorScheme:'light',
  currentClientStatus:'offline'
}
export const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    changeColorScheme(state,action:PayloadAction<{
        colorScheme:'light'|'dark'
    }>){
        return ({
            ...state,
            colorScheme:action.payload.colorScheme
            
        })
    },
    changeClientStatus(state,action:PayloadAction<{
        clientStatus:'offline'|'online'
    }>){
        return ({
            ...state,
            currentClientStatus:action.payload.clientStatus
        })
    },
    addError(state, action:PayloadAction<{
        type:ErrorType,
        title:string,
        message:string,
        handleClose:(id:number)=>void
    }>) {
        let helpArray : any = [...state.errorListe]
        let id = state.errorListe.length+1
        helpArray.push({
            id:id,
            type:action.payload.type,
            title:action.payload.title,
            message:action.payload.message,
            handleClose:()=>action.payload.handleClose(id)
        })
        
        setTimeout(action.payload.handleClose,5000)
        return ({
            ...state,
            errorListe:helpArray,
            
        })
    },
    clearError(state,action) {
        let helpArray = [...state.errorListe]
        helpArray.splice(action.payload.id,1)
        return ({
            ...state,
            errorListe:helpArray
        })
    },
  },
})


export const { addError,clearError,changeColorScheme,changeClientStatus } = errorSlice.actions

export default errorSlice.reducer