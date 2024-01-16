function Login() {
  return (
    <main className="flex flex-col content-center">
      <div className="grid w-full justify-items-center">
        <h1 className="text-2xl font-bold tracking-wide">Tech Install Inc.</h1>
        <input
          type="text"
          placeholder="Username"
          className="input input-bordered my-4 w-full max-w-xs"
        />
        <input
          type="password"
          placeholder="Password"
          className="input input-bordered my-4 w-full max-w-xs"
        />
        <button className="btn btn-neutral my-4 w-full max-w-xs">Login</button>
      </div>
    </main>
  );
}

export default Login;
