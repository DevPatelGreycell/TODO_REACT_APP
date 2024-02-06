import { isConstructorDeclaration } from 'typescript'
import axois from 'axios'
import { REQ_FAIL, REQ_POST, REQ_SUCCESS } from '../constants/postConstants'
import axios from 'axios'

export const viewPost = () => async (dispatch: any) => {
    console.log("hello i m inside the viewpost")
    let res = undefined;
    try {
        dispatch({ type: REQ_POST })
        res = await axois('https://jsonplaceholder.org/posts')
        dispatch({type : REQ_SUCCESS , payload : res.data})
    }
    catch (error : any) {
        dispatch({type : REQ_FAIL , payload : error.message})
        console.log(error)
    }
}