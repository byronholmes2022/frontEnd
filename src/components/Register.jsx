import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";

function Register() {
  const navigate = useNavigate();
  const [newUser, setNewUser] = useState({});
  const [token, setToken] = useState(null);
  const handleInputChange = (e) => {
    setNewUser({ ...newUser, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const data = await axios.post(
        `${import.meta.env.VITE_API_BASE_URL}/api/users/register`,
        newUser
      );
      console.log(data);
      if (data.data.token) {
        localStorage.setItem("token", data.data.token);
        setToken(data.data.token);
        navigate("/me");
      }
    } catch (err) {
      console.log(err);
    }
  };
  console.log(newUser);
  return (
    <div className="register-container">
      {token}
      <h2>Register Here</h2>
      <form
        className="register-form"
        onSubmit={handleSubmit}
      ></form>
    </div>
  );
}

export default Register;
