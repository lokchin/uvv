-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "avaliador" TEXT NOT NULL DEFAULT '',
    "nomeGrupo" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,

    PRIMARY KEY ("avaliador", "nomeGrupo"),
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("avaliador", "nomeGrupo", "nota") SELECT "avaliador", "nomeGrupo", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
CREATE TABLE "new_Grupo" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "liderMatricula" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Grupo_liderMatricula_fkey" FOREIGN KEY ("liderMatricula") REFERENCES "Aluno" ("matricula") ON DELETE NO ACTION ON UPDATE CASCADE,
    CONSTRAINT "Grupo_liderMatricula_fkey" FOREIGN KEY ("liderMatricula") REFERENCES "Aluno" ("matricula") ON DELETE RESTRICT ON UPDATE CASCADE
);
INSERT INTO "new_Grupo" ("liderMatricula", "nome") SELECT "liderMatricula", "nome" FROM "Grupo";
DROP TABLE "Grupo";
ALTER TABLE "new_Grupo" RENAME TO "Grupo";
CREATE UNIQUE INDEX "Grupo_liderMatricula_key" ON "Grupo"("liderMatricula");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
