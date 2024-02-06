import React from "react"
import { connect } from "react-redux"
import {saveUserName} from "../redux/actions/UserAction"
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import {faCheck , faCircleXmark , faSpinner} from '@fortawesome/free-solid-svg-icons'


interface Iprops{
    saveData : Function,
    flag : String
}


class Name extends React.Component<Iprops, any>{

        constructor(props : Iprops)
        {
            super(props)
            {
                this.state = {
                    c : "gray",
                    time : ""

                }
            }
        }

     
        componentDidUpdate(prevProps: any, prevState: any){        

            console.log(prevProps.flag , "pre::" , this.props.flag)
            if(prevProps.flag != this.props.flag)
            {
                if(this.props.flag == "true")
                {
                    console.log("hello i m inside the true..")
                    this.setState({c : "green"})
                }
                else
                {
                    console.log("hello i m inside the false..")
                    this.setState({c : "red"})
                }
            }
            

        }


        saveMe = (event : any)=>{
         

                clearTimeout(this.state.time);
                this.setState({time : setTimeout(wait, 2000)});
                const temp = this.props.saveData
                function wait()
                {   
                    // console.log("i m inside the actions...")
                    temp(event.target.value)        
                }
                // console.log('loading.....')
        }

        render() {
            return(<>
                <div style={{textAlign : "center"}}>
                <h2>Validate The UserName</h2>
                <input type="text" style={{border :`3px solid ${this.state.c}`}} onChange={this.saveMe}/>{" "}{(this.state.c == "green") ? <FontAwesomeIcon icon={faCheck}/> : (this.props.flag == "nothing") ? "": <FontAwesomeIcon icon={faCircleXmark}/> }
                </div>
            </>)
        }
}

const showDataProps =(state : any)=>{
     console.log("value of flag is : ", state.reducer.colorFlag)
    return({
        flag : String(state.reducer.colorFlag)
    })
}

const datatoRedux = (dispatch : any)=>{
    return(
        {
            saveData : (data : any)=>dispatch(saveUserName(data))
        }
    )
}

export default connect(showDataProps ,datatoRedux )(Name)