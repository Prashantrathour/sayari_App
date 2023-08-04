import axios from "axios"
import { SIGNUP_FAILURE, SIGNUP_REQUEST, SIGNUP_SUCCESS } from "./actiontype"

export const postuser=(data)=>async(dispatch)=>{
    dispatch(postdata_request())
   
        return axios.post(``).then((res)=>{
            const data= res.data
            dispatch(postdata_success(data))
        }).catch((err)=>{
            dispatch(postdata_failure())
            console.log(err)
        })
        

}
const postdata_request=()=>{
return {type:SIGNUP_REQUEST}
}
const postdata_success=(payload)=>{
return {type:SIGNUP_SUCCESS,payload}
}
const postdata_failure=()=>{
return {type:SIGNUP_FAILURE}
}