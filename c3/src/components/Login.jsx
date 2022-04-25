// import { useContext, useState } from "react";
// import { AuthContext } from "../contexts/AuthContext";
//import { useContext } from "react";
export const Login = () => {
    //  use reqres to log user in.
  //const {handleToken}=useContext(AuthContext);

//   const[form,setForm]=useState({
//       username:"",
//       password:""
//   });

//   const handlechange=(e) =>{
//       const { username,value}=e.target;
//       setForm ({...form,[username]:value})
//   }

//   const handlesubmit= async(e)=> {
//       e.preventDefault();

//       let logindata=form;
//       let login_data = JSON.stringify(logindata);
//       let res=await fetch("https://reqres.in/api/login",
//       {
//           method:"POST",
//           body:login_data,
//           headers:
//           {"Content-type":"application/json"}
//       }
//       )
//   }


    return (
      <form className="loginform">
        <input
          name="username"
          type="text"
          placeholder="Enter username"
          className="login_username"
        />
        <input
          name="password"
          type="text"
          placeholder="Enter password"
          className="login_password"
        />
        <input type="submit" value="SIGN IN" className="login_submit" />
      </form>
    );
  };