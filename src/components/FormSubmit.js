import React from "react";
import { useNavigate } from "react-router";
import Infor from "./Infor";
function FormSubmit({ handleLogin }) {
  let lst = ["email", "password", "username"];
  const navigate = useNavigate();
  return (
    <form
      className="login-form"
      onSubmit={(event) => {
        event.preventDefault();
        navigate("/");
        handleLogin();
      }}
    >
      <h1>Login</h1>
      {lst.map((type, index) => {
        return <Infor type={type} key={index} />;
      })}
      <button type="submit" className="btn">Sign in</button>
    </form>
  );
}

export default FormSubmit;
