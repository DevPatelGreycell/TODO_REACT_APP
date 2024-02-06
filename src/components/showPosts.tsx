import {connect} from 'react-redux';
import {viewPost} from '../redux/actions/PostAction'
import { Extension } from 'typescript';
import React from 'react';

interface Iprops {
    flag : boolean,
    clickMe : Function
}

class showPost extends React.Component<any>{
    
    render()
    {
        return(
            <>
            <button onClick={()=>{
                this.props.clickMe()
            }}>CLick Me</button>
            <br />
            {(this.props.flag) ? "loading...." :(this.props.data == "[]")?
            "empty.." :
            JSON.parse(this.props.data).map((val: any , index : any)=>{
                    return <h3>{val.title}</h3>
            })
            }
            </>
        )
    }
}

const sendReqProps = (dispatch : any)=>{
    return(
        {
            clickMe : ()=>dispatch(viewPost())
        }
    )
}

const viewDataProps = (data : any)=>{
   
   console.log("data is : " , data.reducer.loading ,typeof data.reducer.postData);
   return({
    flag : data.reducer.loading,
    data : JSON.stringify(data.reducer.postData)
   })
}

export default connect(viewDataProps , sendReqProps)(showPost)