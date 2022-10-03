import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { Error, ErrorType } from '../../types/errortypes'
import { useAppDispatch } from './store'

interface InitialErrorState{
    errorListe:Error[]
}

const initialState : InitialErrorState = {
  errorListe: []
}
export const errorSlice = createSlice({
  name: 'error',
  initialState: initialState,
  reducers: {
    addError(state, action:PayloadAction<{
        type:ErrorType,
        title:string,
        message:string,
        handleClose:(id:number)=>void
    }>) {
        let helpArray = [...state.errorListe]
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
            errorListe:helpArray
        })
    },
    clearError(state,action) {
        let helpArray = [...state.errorListe]
        helpArray.splice(action.payload.id,1)
        return ({
            errorListe:helpArray
        })
    },
  },
})


export const { addError,clearError } = errorSlice.actions

export default errorSlice.reducer