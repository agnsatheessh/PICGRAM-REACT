import { ADD_COMMENT, DECREMENT_LIKES, FETCH_IMAGES_FAILURE, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCESS, FILTERKEY_CHANGE, INCREMENT_LIKES, SORTKEY_CHANGE } from "./picgramTypes"

const initialState = {
    loading : false,
    posts : [],
    error : '',
    filterKey : '',
    sortKey : '',
}

const picGramReducer = (state = initialState, action) =>{
    switch (action.type) {
        case  FETCH_IMAGES_REQUEST : return {
            ...state,
            loading : true
        }
        case FETCH_IMAGES_SUCESS : return {
            ...state,
            loading : false,
            posts : action.payload,
            error : ''
        }
        case FETCH_IMAGES_FAILURE : return {
            ...state,
            loading : false,
            posts : [],
            error : action.payload
        }
        case INCREMENT_LIKES  : return{
            ...state,
            posts : [
                /* ...state.posts.slice(0,action.payload),
                {...state.posts[action.payload],likes: state.posts[action.payload].likes + 1},
                ...state.posts.slice(action.payload+1), */
                ...state.posts.map(post => (post.id === action.payload ) ? {...post, likes : post.likes+1} :  post)
            ]
        }
        case DECREMENT_LIKES  : return{
            ...state,
            posts : [
                /* ...state.posts.slice(0,action.payload),
                {...state.posts[action.payload],likes: state.posts[action.payload].likes - 1},
                ...state.posts.slice(action.payload+1), */
                ...state.posts.map(post => (post.id === action.payload ) ? {...post, likes : post.likes-1} :  post)
            ]
        }
        case FILTERKEY_CHANGE : return{
            ...state,           
            filterKey: action.payload              
        }
        case SORTKEY_CHANGE : return{
            ...state,           
            sortKey: action.payload              
        }
        case ADD_COMMENT  : return{
            ...state,
            posts : [
                ...state.posts.map(post => (post.id === action.payload.id ) ? {...post, comments : [...post.comments,action.payload.comment]} :  post)
            ]
        }
        default : return state 

    }
}



export default picGramReducer;