import Aluno from "./models/Aluno";
import Grupo from "./models/Grupo";
import Professor from "./models/Professor";

const otavio = new Professor("123456", "Otávio", "otaviolube@gmail.com");
const joao = new Aluno("202201524", "João", "joao@ejuvv.com");
const vitor = new Aluno("123", "Vitor", "vitor@gmail.com");
const bruno = new Aluno("456", "Bruno", "bruno@gmail.com");
const membros = [vitor, bruno];
const vitalus = new Grupo("vitalus", joao, membros, new Date(10, 3, 2023), 42);

/*
Insere avaliações na tabela avaliação
usando a função implementada na interface Avaliador
*/
otavio.avaliarGrupo(vitalus, 10);