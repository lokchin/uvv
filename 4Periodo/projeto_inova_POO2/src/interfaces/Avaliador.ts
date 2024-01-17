import Grupo from "../models/Grupo";

export default interface Avaliador {

    avaliarGrupo(
        grupo: Grupo,
        nota: number,
    ): void;
}