import React from "react";
import "./App.css";
import FormularioCadastro from "./components/formulariocadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material/";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3">Formulário de Cadastro</Typography>
      <FormularioCadastro />
    </Container>
  );
}

export default App;
