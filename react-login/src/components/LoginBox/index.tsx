import { Box, Container, Typography } from "@mui/material";

import LogoImage from '../../../assets/images/logo.png';
import LoginForm from "../LoginForm";

const LoginBox = () => {
  return (
    <Container maxWidth="xs">
      <Box
        sx={{
          bgcolor: "#F5F5F5",
          mt: "10vh",
          borderRadius: "24px",
          padding: "48px 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <img src={ LogoImage } alt="HomeHub" style={{ marginBottom: "48px" }} />
        <Typography>Log In</Typography>
        <Typography>Insira seus dados para acessar o hub</Typography>
        <LoginForm />
      </Box>
    </Container>
  );
};

export default LoginBox;
