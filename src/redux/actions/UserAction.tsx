import { forwardRef } from 'react';
import {USER_NAME} from '../constants/userName'

export const saveUserName = (data : any)=>async (dispatch : any)=>{

    // console.log("i m inside the action: ")
    console.log("data is : " , data)
    // const getRes = await waitAndGO;
    // console.log("getRes" , (getRes == "")?"nothing" : getRes)
    // setIsLoading(true);
    const SEARCH_URI = 'https://api.github.com/search/users';
    fetch(`${SEARCH_URI}?q=${data}+in:login&page=1&per_page=50`)
      .then((resp) => resp.json())
      .then(({total_count , items} : any) => {
        // setOptions(items);
        // setIsLoading(false);
        if(total_count == 0)
        {
            dispatch({type : USER_NAME , flag : true})
        }
        else{
            dispatch({type : USER_NAME , flag : false})
        }
    });

}

