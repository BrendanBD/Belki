import React, { useState } from "react";
import "./Form.css"; //styles for form
import { isFormValid } from "./Validate"; // function to check if fields are filled

export default function Multiple() {
  const initialFormData = {
    username: "",
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialFormData);

  const handleChange = (event) => {
    const { name, value } = event.target;
    setFormData((prevFormData) => ({ ...prevFormData, [name]: value }));
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    
    if (isFormValid(formData)) {
      alert(
        `Username: ${formData.username}, 
         Email: ${formData.email},
         Password: ${formData.password}`
      );
    } else {
      alert("Please fill in all the fields before submitting.");
    }
  };

  const handleCancel = () => {
    setFormData(initialFormData);
  };

  return (
    <form onSubmit={handleSubmit} className="multiple">
      <div className="form-group">
        <label className="multiple__text" htmlFor="username">
          Username:
        </label>
        <input
          type="text"
          id="username"
          className="multiple__input"
          name="username"
          placeholder="Username"
          value={formData.username}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="multiple__text" htmlFor="email">
          Email:
        </label>
        <input
          type="email"
          id="email"
          className="multiple__input"
          name="email"
          placeholder="Email"
          value={formData.email}
          onChange={handleChange}
        />
      </div>

      <div className="form-group">
        <label className="multiple__text" htmlFor="password">
          Password:
        </label>
        <input
          type="password"
          id="password"
          className="multiple__input"
          name="password"
          placeholder="Password"
          value={formData.password}
          onChange={handleChange}
        />
      </div>

      <div className="button-group">
        <button className="multiple__button" type="submit">
          Submit
        </button>
        <button className="multiple__button" type="button" onClick={handleCancel}>
          Cancel
        </button>
      </div>
    </form>
  );
}
