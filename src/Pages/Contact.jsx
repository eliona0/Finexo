import React, { useState } from 'react';
import { Container, Button } from "@mui/material";
import Grid from "@mui/material/Grid";
import styled from "@emotion/styled";
import TextField from "@mui/material/TextField";

const ContactWrapper = styled.div`
  height: 100vh;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto;
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChanges = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log("User Input:");
    console.log(`Name: ${formData.name}`);
    console.log(`Email: ${formData.email}`);
    console.log(`Subject: ${formData.subject}`);
    console.log(`Message: ${formData.message}`);
  };

  return (
    <ContactWrapper>
      <Container>
        <Grid container spacing={2} justifyContent="center">
          <Grid item xs={12} md={8} lg={6}>
            <h3 style={{ textAlign: "center" }}>Contact Us</h3>
            <form onSubmit={handleSubmit}>
              <TextField
                type="text"
                name="name"
                label="Name"
                value={formData.name}
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
                type="text"
                name="subject"
                label="Subject"
                value={formData.subject}
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
              />
              <TextField
                type="text"
                name="message"
                label="Message"
                value={formData.message}
                onChange={handleChanges}
                required
                fullWidth
                margin="normal"
                multiline
                rows={4}
              />
              <Button
                type="submit"
                variant="contained"
                color="primary"
                fullWidth
                style={{ marginTop: "20px" }}
              >
                Submit
              </Button>
            </form>
          </Grid>
        </Grid>
      </Container>
    </ContactWrapper>
  );
};

export default Contact;
