import { REQ_POST, REQ_SUCCESS, REQ_FAIL } from '../constants/postConstants'
import { USER_NAME } from '../constants/userName'

const intialState = {
    postData: [],
    loading : false,
    colorFlag : "nothing"
}

 const reducer = (state: any = intialState, action: any) => {

    switch (action.type) {
        case REQ_POST:
            return ({
                loading : true
            })

        case REQ_SUCCESS:
            return ({
                ...state,
                loading : false,
                postData : action.payload
            })

        case REQ_FAIL:
            return ({
                flag: action.payload
            })

        case USER_NAME:
            return { 
                colorFlag : action.flag
            }

        default:
            return state
    }

}

export default reducer;