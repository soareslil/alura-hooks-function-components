import React, { useState } from "react";
import { TextField, Button, Switch, FormControlLabel } from "@mui/material/";

function FormularioCadastro({ aoEnviar }) {
  const [nome, setNome] = useState("");
  const [sobrenome, setSobrenome] = useState("");
  const [cpf, setCpf] = useState("");
  const [promocoes, setPromocoes] = useState(false);
  const [novidades, setNovidades] = useState(false);

  return (
    <>
      <h2>ola mundo</h2>

      <form
        onSubmit={(event) => {
          event.preventDefault();
          aoEnviar({ nome, sobrenome, cpf, novidades, promocoes });
        }}
      >
        <TextField
          value={nome}
          onChange={(event) => {
            setNome(event.target.value);
          }}
          id="nome"
          label="Nome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          value={sobrenome}
          onChange={(event) => {
            setSobrenome(event.target.value);
          }}
          id="sobrenome"
          label="Sobrenome"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <TextField
          value={cpf}
          onChange={(event) => {
            setCpf(event.target.value);
          }}
          id="cpf "
          label="CPF"
          variant="outlined"
          fullWidth
          margin="normal"
        />

        <FormControlLabel
          label="Promoções"
          control={
            <Switch
              checked={promocoes}
              onChange={(event) => {
                setPromocoes(event.target.checked);
              }}
              name="promocoes"
              label="Promoções"
            />
          }
        />

        <FormControlLabel
          label="Novidades"
          control={
            <Switch
              checked={novidades}
              onChange={(event) => {
                setNovidades(event.target.checked);
              }}
              name="novidades"
              label="Novidades"
            />
          }
        />

        <Button type="submit" variant="contained">
          Cadastrar
        </Button>
      </form>
    </>
  );
}

export default FormularioCadastro;
