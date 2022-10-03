import { configureStore } from '@reduxjs/toolkit'
import { type } from 'os'
import { useDispatch } from 'react-redux'
import { errorSlice } from './slice'

export const store = configureStore({
 reducer: errorSlice.reducer,
})

// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch

export const useAppDispatch :()=> AppDispatch = useDispatch

