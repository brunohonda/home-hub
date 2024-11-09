import { Box, Button, Checkbox, FormLabel, Link, TextField } from "@mui/material";

const inputAppearance = "standard";
const primaryColor =  "#9C27B0";

const LoginForm = () => {
  return(
    <Box
      sx={{
        display: "flex",
        flexDirection: "column",
        rowGap: "12px",
        marginTop: "16px",
        width: "100%",
      }}
    >
      <TextField id="email" label="E-mail" variant={ inputAppearance } />
      <TextField id="password" label="Senha" variant={ inputAppearance } type="password" />
      <div style={{ marginLeft: -9 }}>
        <FormLabel>
          <Checkbox />
          Lembrar-me
        </FormLabel>
      </div>
      <Button variant="contained" sx={{ backgroundColor: primaryColor }}>Login</Button>
      <div style={{
        display: "flex",
        columnGap: "8px",
        fontSize: "smaller",
      }}>
        <Link color={ primaryColor }>Criar conta</Link>
        <Link color={ primaryColor }>Esqueceu a senha?</Link>
      </div>
    </Box>
  );
};

export default LoginForm;