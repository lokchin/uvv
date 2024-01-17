#### Iniciando o Node

```{Bash}
npm init -y
```

#### Inicializando e configurando o TypeScript

```{Bash}
npx tsc --init
```

#### Inicializando o Prisma

```{Bash}
npx prisma init --datasource-provider sqlite
```

#### Migrando os dados para o BD utilizando o Prisma Migrate

```{Bash}
npx prisma migrate dev --name init
```
