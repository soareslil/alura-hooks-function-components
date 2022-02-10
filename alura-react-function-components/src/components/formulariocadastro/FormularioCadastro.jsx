import React from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material/";

function FormularioCadastro() {
  return (
    <>
      <h2>ola mundo</h2>

      <form>
        <TextField
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          id="cpf "
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          label="Promoções"
          control={<Switch name="promocoes" defaultChecked label="Promoções" />}
        />

        <FormControlLabel
          label="Novidades"
          control={<Switch name="novidades" defaultChecked label="Novidades" />}
        />

        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </>
  );
}

export default FormularioCadastro;
