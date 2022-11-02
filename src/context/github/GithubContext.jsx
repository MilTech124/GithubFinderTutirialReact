import { createContext, useReducer } from "react"
import githubReducer from "./GithubReducer"

const GithubContext = createContext()



export const GithhubProvider = ({children}) =>{
 const initialState ={
    users:[],
    user:[],
    repos:[],
    loading:false
 }

 const [state,dispatch] = useReducer(githubReducer,initialState)




return <GithubContext.Provider
    value={{
        //CAN USE JUST '...state'
        users:state.users,
        user:state.user,
        loading:state.loading,
        repos:state.repos,
        //CAN USE JUST '...state' 

        dispatch,       
          
    }}>
    {children}
</GithubContext.Provider>
}

export default GithubContext