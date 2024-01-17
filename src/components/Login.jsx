import { useState } from "react";
import { signin } from "../firebase/authentication";

function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  const handlePasswordChange = (e) => {
    setPassword(e.target.value);
  };

  const handleLogin = async (e) => {
    e.preventDefault();

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
        <form onSubmit={handleLogin}>
          <input
            type="email"
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
            type="submit"
          >
            Login
          </button>
        </form>
      </div>
    </main>
  );
}

export default Login;
