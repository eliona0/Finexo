import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";
import Token from "../PrivateRoute/Token";

const RegisterWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const FormContainer = styled(Grid)`
  width: 80%; 
  max-width: 400px; 
  margin: 0 auto;

  @media (max-width: 768px) {
    width: 90%; 
  }
`;

const Register = () => {
  const [formData, setFormData] = useState({
    name: "",
    last_name: "",
    email: "",
    password: "",
  });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const registerUser = (event) => {
    event.preventDefault();
    console.log(formData);

    axios
      .post(
        `http://75.119.136.194/api/users/${formData?.role}`,
        formData,
        {
          headers: {
            token: Token().activeToken,
          },
        }
      )
      .then((response) => {
        console.log(response);
      })
      .catch((err) => console.log(err));
  };

  return (
    <RegisterWrapper>
      <Container>
        <FormContainer container>
          <Grid item xs={12}>
            <h3>Register</h3>
            <form onSubmit={registerUser}>
              <TextField
                type="text"
                name="name"
                label="First Name"
                value={formData.name}
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="text"
                name="last_name"
                label="Last Name"
                value={formData.last_name}
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="email"
                name="email"
                label="Email"
                value={formData.email}
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="password"
                name="password"
                label="Password"
                value={formData.password}
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Register
              </Button>
            </form>
            {error && (
              <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
                {error}
              </p>
            )}
            <NavLink
              to="/login"
              style={{
                textDecoration: "none",
                width: "100%",
                display: "block",
                marginTop: "20px",
              }}
            >
              <Button variant="outlined" fullWidth>
                Already have an account? Login
              </Button>
            </NavLink>
          </Grid>
        </FormContainer>
      </Container>
    </RegisterWrapper>
  );
};

export default Register;
