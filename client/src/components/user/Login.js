// COMPLETE, 1-9-20
import React, { useState } from "react";

// MAY NEED TO DELETE LINK because the "sign in" is a function
// import { Link, useHistory } from "react-router-dom";
// import axios from "axios";

// export default function Login(props) {  
//   const [username, setUsername] = useState("");
//   const [password, setPassword] = useState("");

//   let history = useHistory();

//   async function onSubmit(e) {
//     e.preventDefault();
//     const formData = { username: username, password: password };
//     const res = await axios.post("/api/user/login", formData);
//     if (res.data) {
//       localStorage.setItem("token", res.data.token);
//       const user = res.data.user;    
//       history.push(`/user/${user._id}`);
//     } else {
//       alert("Invalid Credential");
//     }
//   }

  return (
    <div className="container">
      <h2>Artist Sign in to NativeTrue</h2>
      <form>
        <div className="form-group">
          <input
            type="text"
            className="form-control"
            placeholder="Username or email address"
          />
        </div>

        <div className="form-group">
          <input
            type="password"
            className="form-control"
            placeholder="Password"
          />
        </div>
        <button className="btn btn-success btn-block">Sign in</button>
      </form>
    </div>
    )


// return (
//   <div className="container">
//     <h2>Artist Sign in to NativeTrue</h2>
//     <form onSubmit={onSubmit}>
//       <div className="form-group">
//         <input
//           type="text"
//           className="form-control"
//           placeholder="Username or email address"
//           value={username}
//           onChange={e=> {      
//             setUsername(e.target.value);
//           }}
//         />
//       </div>

//       <div className="form-group">
//         <input
//           type="password"
//           className="form-control"
//           placeholder="Password"
//           value={password}
//           onChange={e=> {
//             setPassword(e.target.value);
//           }}
//         />
//       </div>
//       <button className="btn btn-success btn-block">Sign in</button>
//     </form>
//   </div>
//   )
// }