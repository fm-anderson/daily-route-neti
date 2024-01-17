import { useState } from "react";
import { signin } from "../firebase/authentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (event) => {
    setEmail(event.target.value);
  };

  const handlePasswordChange = (event) => {
    setPassword(event.target.value);
  };

  const handleLogin = async () => {
    try {
      await signin(email, password);
    } catch (error) {
      console.error("Login error: ", error);
    }
  };

  return (
    <main className="flex flex-col content-center">
      <div className="grid w-full justify-items-center">
        <h1 className="text-2xl font-bold tracking-wide">Tech Install Inc.</h1>
        <input
          type="text"
          placeholder="Email"
          className="input input-bordered my-4 w-full max-w-xs"
          value={email}
          onChange={handleEmailChange}
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered my-4 w-full max-w-xs"
          value={password}
          onChange={handlePasswordChange}
        />
        <button
          className="btn btn-neutral my-4 w-full max-w-xs"
          onClick={handleLogin}
        >
          Login
        </button>
      </div>
    </main>
  );
}

export default Login;
