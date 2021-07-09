import { push } from "connected-react-router";
import React from "react";
import { useDispatch, useSelector } from "react-redux";

const Login = () => {
  const dispatch = useDispatch();
  const selector = useSelector((state) => state);

  console.log(selector.router, selector.users);

  return (
    <div>
      <h2>ログイン</h2>
      <button onClick={() => dispatch(push("/"))}>SignIn</button>
    </div>
  );
};

export default Login;
