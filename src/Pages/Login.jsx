import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";
import { NavLink } from "react-router-dom";

const LoginWrapper = styled.div`
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

const Login = () => {
  const [formData, setFormData] = useState({ email: "", password: "" });
  const [error, setError] = useState();
  const navigate = useNavigate();

  const handleChanges = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const login = () => {
    axios
      .post("http://75.119.136.194/api/authentication/login", formData)
      .then((response) => {
        if (response.data?.token) {
          localStorage.setItem("token", response.data.token);
          navigate("/dashboard");
          window.dispatchEvent(new Event("storage"));
        } else {
          setError("Invalid credentials");
          setTimeout(() => setError(), 4000);
        }
      })
      .catch(() => setError("An error occurred"));
  };

  return (
    <LoginWrapper>
      <Container>
        <FormContainer container>
          <Grid item xs={12}>
            <form>
              <TextField
                type="email"
                name="email"
                placeholder="Email"
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="password"
                name="password"
                placeholder="Password"
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <Button
                type="button"
                onClick={login}
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Login
              </Button>
            </form>
            {error && (
              <p style={{ color: "red", textAlign: "center", marginTop: "10px" }}>
                {error}
              </p>
            )}
            <NavLink
              to="/register"
              style={{
                textDecoration: "none",
                width: "100%",
                display: "block",
                marginTop: "20px",
              }}
            >
              <Button type="button" variant="outlined" fullWidth>
                Register
              </Button>
            </NavLink>
          </Grid>
        </FormContainer>
      </Container>
    </LoginWrapper>
  );
};

export default Login;
