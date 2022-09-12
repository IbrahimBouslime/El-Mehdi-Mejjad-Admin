import "./App.css";
import { useState } from "react";
import { CognitoUser, AuthenticationDetails } from "amazon-cognito-identity-js";
import UserPool from "./libs/UserPool";

function App() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const submitHandler = (e) => {
    e.preventDefault();
    // Get user
    const user = new CognitoUser({
      Username: email,
      Pool: UserPool,
    });

    // set Authentification details
    const authDetails = new AuthenticationDetails({
      Username: email,
      Password: password,
    });

    // retrieve data (idToken, refreshToken, ...)
    user.authenticateUser(authDetails, {
      onSuccess: (data) => {
        console.log("onSucces: ", data);
      },
      onFailure: (err) => {
        console.error("onFailure: ", err);
      },
    });
  };

  return (
    <div className="App">
      <form onSubmit={submitHandler}>
        <div>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </div>
        <button type="submit">Login</button>
      </form>
    </div>
  );
}

export default App;
