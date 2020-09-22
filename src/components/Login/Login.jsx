import React from "react";
import { useForm } from "react-hook-form";
import { useDispatch, useSelector } from "react-redux";
import { Redirect } from "react-router-dom";

import { login } from "../../redux/auth-reducer";

const LoginForm = (props) => {
  const { register, handleSubmit } = useForm();

  const dispatch = useDispatch();

  const onSubmit = (data) => {
    console.log(data);
    dispatch(login(data));
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)}>
      <div>
        <input
          name="email"
          placeholder="Login"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <input
          name="password"
          placeholder="Password"
          ref={register({ required: true })}
        />
      </div>
      <div>
        <label htmlFor="remember">Remember me</label>
        <input
          name="rememberMe"
          id="remember"
          type="checkbox"
          placeholder="Login"
          ref={register}
        />
      </div>
      <div>
        <button type="submit">Login</button>
      </div>
    </form>
  );
};

const Login = (props) => {
  const isAuth = useSelector((state) => state.auth.isAuth);

  if (isAuth) {
    return <Redirect to={"/profile"}></Redirect>;
  }

  return (
    <div>
      <h1>LOGIN</h1>
      <LoginForm />
    </div>
  );
};

export default Login;
