-- RedefineTables
PRAGMA foreign_keys=OFF;
CREATE TABLE "new_Avaliacao" (
    "avaliador" TEXT NOT NULL,
    "nomeGrupo" TEXT NOT NULL,
    "nota" INTEGER NOT NULL,

    PRIMARY KEY ("avaliador", "nomeGrupo"),
    CONSTRAINT "Avaliacao_nomeGrupo_fkey" FOREIGN KEY ("nomeGrupo") REFERENCES "Grupo" ("nome") ON DELETE CASCADE ON UPDATE CASCADE
);
INSERT INTO "new_Avaliacao" ("avaliador", "nomeGrupo", "nota") SELECT "avaliador", "nomeGrupo", "nota" FROM "Avaliacao";
DROP TABLE "Avaliacao";
ALTER TABLE "new_Avaliacao" RENAME TO "Avaliacao";
PRAGMA foreign_key_check;
PRAGMA foreign_keys=ON;
