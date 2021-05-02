import { ADD_COMMENT, DECREMENT_LIKES, FETCH_IMAGES_FAILURE, FETCH_IMAGES_REQUEST, FETCH_IMAGES_SUCESS, FILTERKEY_CHANGE, INCREMENT_LIKES, SORTKEY_CHANGE } from "./picgramTypes"
import axios from 'axios';

export const fetchImages = () => {
    return (dispatch) => {
        dispatch(fetchImagesRequest())
        axios
            .get('https://raw.githubusercontent.com/Lokenath/MyRepo/master/Test/package.json')
            .then(response => {
                // response.data is the users
                const posts = response.data.pics
                dispatch(fetchImagesSuccess(posts))
            })
            .catch(error => {
                // error.message is the error message
                dispatch(fetchImagesFailure(error.message))
            })
    }
}

export const fetchImagesRequest = () => {
    return {
        type: FETCH_IMAGES_REQUEST
    }
}



export const fetchImagesSuccess = images => {
    return {
        type: FETCH_IMAGES_SUCESS,
        payload: images
    }

}

export const fetchImagesFailure = error => {
    return {
        type: FETCH_IMAGES_FAILURE,
        payload: error
    }
}

export const incrementLikes = id =>{
    return {
        type: INCREMENT_LIKES,
        payload: id
    }
}

export const decrementLikes = id =>{
    return {
        type: DECREMENT_LIKES,
        payload: id
    }
}

export const filterKeyChanges = key =>{
    return {
        type : FILTERKEY_CHANGE,
        payload :key
    }
}

export const sortKeyChanges = key =>{
    return {
        type : SORTKEY_CHANGE,
        payload :key
    }
}

export const insertComment = commentPayload =>{
    return {
        type: ADD_COMMENT,
        payload: commentPayload
    }
}