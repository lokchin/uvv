## JSON para inserir na tabela Aluno

```json
{
  "matricula": "123",
  "nome": "joao",
  "email": "joao@uvv"
}
```

## JSON para inserir na tabela Professor

```json
{
  "matricula": "789",
  "nome": "otavio",
  "email": "otavio@uvv"
}
```

## JSON para inserir na tabela Grupo

> obs: O líder e os membros já devem estar inseridos no banco de dados

```json
{
  "nome": "vitalus",
  "membros": {
    "connect": {
      "matricula": "456"
    }
  },
  "lider": {
    "connect": {
      "matricula": "123"
    }
  },
  "avaliacoes": {
   "create": []
  }
}
```

```json
{
  "nome": "vitalus",
  "lider": {
    "connect": {
      "matricula": "123"
    }
  },
  "avaliacoes": {
   "create": []
  }
}
```