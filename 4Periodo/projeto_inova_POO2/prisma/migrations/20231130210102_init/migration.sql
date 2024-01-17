-- CreateTable
CREATE TABLE "Estande" (
    "numero" TEXT NOT NULL PRIMARY KEY
);

-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Grupo" (
    "nome" TEXT NOT NULL PRIMARY KEY,
    "liderMatricula" TEXT NOT NULL DEFAULT '',
    "estandeNumero" TEXT NOT NULL DEFAULT '',
    CONSTRAINT "Grupo_liderMatricula_fkey" FOREIGN KEY ("liderMatricula") REFERENCES "Aluno" ("matricula") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Grupo_liderMatricula_fkey" FOREIGN KEY ("liderMatricula") REFERENCES "Aluno" ("matricula") ON DELETE CASCADE ON UPDATE CASCADE,
    CONSTRAINT "Grupo_estandeNumero_fkey" FOREIGN KEY ("estandeNumero") REFERENCES "Estande" ("numero") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Grupo" ("liderMatricula", "nome") SELECT "liderMatricula", "nome" FROM "Grupo";
DROP TABLE "Grupo";
ALTER TABLE "new_Grupo" RENAME TO "Grupo";
CREATE UNIQUE INDEX "Grupo_liderMatricula_key" ON "Grupo"("liderMatricula");
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
