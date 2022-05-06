import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import axios from 'axios';

export const getPosts = createAsyncThunk(
    'posts/getPOsts',
    async (_, { dispatch, getState, rejectWithValue }) => {
        const { pageSize, currentPage } = getState().main;
        try {
            dispatch(setIsLoading(true))
            const response = await axios.get(`https://jsonplaceholder.typicode.com/posts?_page=${currentPage}&_limit=${pageSize}`)
            dispatch(setPosts(response.data))
            dispatch(setTotalPostsCount(response.headers['x-total-count']))
            dispatch(setIsLoading(false))
            return response.data
        } catch (err) {
            return rejectWithValue(err.response.data)
        }
    }
)

const initialState = {
    posts: [],
    totalPostsCount: 0,
    pageSize: 10,
    currentPage: 1,
    isLoading: true
}

const mainSlice = createSlice({
    name: 'posts',
    initialState,
    reducers: {
        setPosts(state, action) {
            state.posts = action.payload
        },
        setTotalPostsCount(state, action) {
            state.totalPostsCount = action.payload
        },
        setCurrentPage(state, action) {
            state.currentPage = action.payload
        },
        setIsLoading(state, action) {
            state.isLoading = action.payload
        }
    },
})

export const { setPosts, setTotalPostsCount, setCurrentPage, setIsLoading } = mainSlice.actions
export default mainSlice.reducer