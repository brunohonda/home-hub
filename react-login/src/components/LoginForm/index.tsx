import { Box, Button, Checkbox, FormLabel, TextField } from "@mui/material";

const inputAppearance = "standard"

const LoginForm = () => {
  return(
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "8px",
        marginTop: "16px",
        width: "100%",
      }}
    >
      <TextField id="email" label="E-mail" variant={ inputAppearance } />
      <TextField id="password" label="Senha" variant={ inputAppearance } />
      <div style={{ marginLeft: -9 }}>
        <FormLabel>
          <Checkbox />
          Lembrar-me
        </FormLabel>
      </div>
      <Button variant="contained" sx={{ backgroundColor: "#9C27B0" }}>Login</Button>
    </Box>
  );
};

export default LoginForm;