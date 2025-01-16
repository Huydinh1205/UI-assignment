import React from "react";
import FormSubmit from "../components/FormSubmit";

function LoginPage({ handleLogin }) {
  return( <div className="container">
  <FormSubmit handleLogin={handleLogin} />
  </div>)
}

export default LoginPage;
