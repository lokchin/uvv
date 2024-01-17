-- CreateTable
CREATE TABLE "Professor" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Aluno" (
    "matricula" TEXT NOT NULL PRIMARY KEY,
    "email" TEXT NOT NULL,
    "nome" TEXT NOT NULL,
    "created_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP,
    "updated_at" DATETIME NOT NULL DEFAULT CURRENT_TIMESTAMP
);

-- CreateTable
CREATE TABLE "Grupo" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "liderMatricula" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Grupo_liderMatricula_fkey" FOREIGN KEY ("liderMatricula") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE,
    CONSTRAINT "Grupo_liderMatricula_fkey" FOREIGN KEY ("liderMatricula") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateTable
CREATE TABLE "Avaliacao" (
    "avaliador" TEXT NOT NULL DEFAULT '',
    "nomeGrupo" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,

    PRIMARY KEY ("avaliador", "nomeGrupo"),
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE RESTRICT ON UPDATE CASCADE
);

-- CreateIndex
CREATE UNIQUE INDEX "Professor_email_key" ON "Professor"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Aluno_email_key" ON "Aluno"("email");

-- CreateIndex
CREATE UNIQUE INDEX "Grupo_liderMatricula_key" ON "Grupo"("liderMatricula");
