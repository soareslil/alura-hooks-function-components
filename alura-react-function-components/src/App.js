import React from "react";
import "./App.css";
import FormularioCadastro from "./components/formulariocadastro/FormularioCadastro";
import { Container, Typography } from "@mui/material/";
import "@fontsource/roboto/300.css";

function App() {
  return (
    <Container component="article" maxWidth="sm">
      <Typography variant="h3" component="h1" align="center">
        Formulário de Cadastro
      </Typography>
      <FormularioCadastro aoEnviar={aoEnviarForm} />
    </Container>
  );

  function aoEnviarForm(dados) {
    console.log(dados);
  }
}

export default App;
