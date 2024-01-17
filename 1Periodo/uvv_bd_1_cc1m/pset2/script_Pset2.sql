-- Script dos relatórios SQL para o PSet2 no SGBD PostgreSQL
-- Todos os direitos reservados - Bruno Lokchin (CC1M)

psql uvv -U postgres -W
/* Senha: computacao@raiz*/

USE uvv;
ALTER USER bruno;

SET SEARCH_PATH TO elmasri, bruno, public;

-- Questão 1:

SELECT f.numero_departamento, 
AVG(salario)::INT AS "Media Salario"
FROM elmasri.funcionario AS f
GROUP BY f.numero_departamento;

-- Questão 2:

SELECT elmasri.funcionario.sexo, 
AVG(salario)::INT FROM elmasri.funcionario 
GROUP BY funcionario.sexo;

-- Questão 3:

SELECT DISTINCT d.nome_departamento, concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome) AS nome, 
date_part('year', AGE(f.data_nascimento))::INT AS idade, 
f.salario
FROM elmasri.funcionario AS f
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
INNER JOIN elmasri.departamento AS d ON d.numero_departamento=f.numero_departamento;

-- Questão 4:

SELECT concat(f.primeiro_nome,'  ',nome_meio,'  ', ultimo_nome) AS nome,
date_part('year', AGE(data_nascimento))::INT AS idade,
f.salario::INT AS "salario inicial",
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
CASE WHEN f.salario < 35000 
THEN f.salario::INT * 1.2 
ELSE f.salario::INT * 1.15 
END AS "salario ajustado"
FROM elmasri.funcionario AS f;

-- Questão 5:

SELECT
nome_departamento,
salario,
CASE WHEN d.CPF_gerente=f.CPF
THEN concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome)
END AS nome_gerente,
CASE WHEN d.CPF_gerente!=f.CPF
THEN concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome)
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
END AS nome_funcionario
FROM elmasri.departamento AS d
INNER JOIN elmasri.funcionario AS f ON (f.numero_departamento=d.numero_departamento)
ORDER BY nome_departamento ASC,
salario DESC;

-- Questão 6

SELECT
CASE WHEN dp.CPF_funcionario=fu.CPF
THEN concat(fu.primeiro_nome,'  ',fu.nome_meio,'  ', fu.ultimo_nome)
END AS "Funcionário com dependente",
numero_departamento,
concat(dp.nome_dependente,'  ',fu.nome_meio,'  ',fu.ultimo_nome) AS "Nome dependente",
date_part('year', AGE(dp.data_nascimento))::INT AS "Idade Dependente",
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
CASE dp.sexo
WHEN 'F' THEN 'Feminino'
WHEN 'M' THEN 'Masculino'
ELSE 'Unknown'
END AS "Gênero Dependente"
FROM elmasri.funcionario AS fu
INNER JOIN elmasri.dependente AS dp ON (fu.cpf=dp.cpf_funcionario);

-- Questão 7

SELECT DISTINCT
dt.nome_departamento AS "Nome Departamento",
concat(fu.primeiro_nome,'  ',fu.nome_meio,'  ', fu.ultimo_nome) AS "Nome Completo",
CASE WHEN dp.nome_dependente IS null
THEN fu.salario
END AS "Salário"
FROM elmasri.funcionario AS fu
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
INNER JOIN elmasri.departamento AS dt ON (fu.numero_departamento = dt.numero_departamento)
LEFT JOIN elmasri.dependente AS dp ON (fu.cpf = dp.cpf_funcionario)
WHERE dp.nome_dependente IS null;

-- Questão 8

SELECT DISTINCT
CASE WHEN trab.numero_projeto = proj.numero_projeto 
THEN dp.nome_departamento 
END AS "Nome Departamento",
CASE WHEN trab.numero_projeto = proj.numero_projeto  
THEN proj.nome_projeto
END AS "Nome Projeto",
CASE WHEN trab.numero_projeto = proj.numero_projeto
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
THEN concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome) 
END AS "Nome Funcionario",
CASE WHEN trab.numero_projeto = proj.numero_projeto 
THEN trab.horas 
END AS "Horas Trabalho"
FROM elmasri.departamento AS dp
INNER JOIN elmasri.projeto proj ON(dp.numero_departamento = proj.numero_departamento)
INNER JOIN elmasri.funcionario f ON(dp.numero_departamento = f.numero_departamento)
INNER JOIN elmasri.trabalha_em trab ON(trab.cpf_funcionario = f.cpf);

-- Questão 9

SELECT DISTINCT
dp.nome_departamento AS "Nome Departamento",
proj.nome_projeto AS "Nome Projeto",
sum(trab.horas) AS "Horas Somadas"
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
FROM elmasri.trabalha_em AS trab
INNER JOIN elmasri.projeto AS proj ON (trab.numero_projeto=proj.numero_projeto)
INNER JOIN elmasri.departamento AS dp ON (dp.numero_departamento=proj.numero_departamento)
GROUP BY dp.nome_departamento, proj.nome_projeto;

-- Questão 10

SELECT DISTINCT
AVG(f.salario)::INT AS "Media Salario",
dp.nome_departamento AS "Nome Departamento"
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
FROM elmasri.funcionario AS f
INNER JOIN elmasri.departamento AS dp ON (f.numero_departamento=dp.numero_departamento)
GROUP BY dp.nome_departamento; 

-- Questão 11

SELECT
concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome) AS "Nome Funcionario",
proj.nome_projeto AS "Nome projeto",
CASE WHEN trab.horas > 0
THEN trab.horas * 50
END AS "Ganho Total"
FROM elmasri.trabalha_em AS trab
INNER JOIN elmasri.projeto AS proj ON (trab.numero_projeto=proj.numero_projeto)
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
INNER JOIN elmasri.funcionario AS f ON (trab.cpf_funcionario=f.cpf)
GROUP BY concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome), trab.horas, proj.nome_projeto;

-- Questão 12

SELECT
dp.nome_departamento AS "Nome departamento",
proj.nome_projeto AS "Nome projeto",
concat(f.primeiro_nome,'  ',f.nome_meio,'  ', f.ultimo_nome) AS "Nome Funcionario",
trab.horas AS "Horas de trabalho"
FROM elmasri.departamento AS dp
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
INNER JOIN elmasri.projeto AS proj ON (dp.numero_departamento=proj.numero_departamento)
INNER JOIN elmasri.funcionario AS f ON (f.numero_departamento=dp.numero_departamento)
INNER JOIN elmasri.trabalha_em AS trab ON (trab.numero_projeto=proj.numero_projeto)
WHERE trab.horas=0;

-- Questão 13

SELECT
dp.nome_dependente AS presenteados,
dp.sexo AS "sexo",
date_part('year', AGE('2022-01-01', dp.data_nascimento)) AS idade
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
FROM elmasri.dependente AS dp
UNION
SELECT
concat(f.primeiro_nome,' ',f.nome_meio,' ',f.ultimo_nome) AS presenteados,
f.sexo AS "sexo",
date_part('year', AGE('2022-01-01', f.data_nascimento)) AS idade
FROM elmasri.funcionario AS f
ORDER BY idade DESC;

-- Questão 14

SELECT 
nome_departamento AS "Nome departamento",
CASE WHEN f.numero_departamento=dp.numero_departamento
THEN COUNT(f.cpf)
END AS "Total"
FROM elmasri.departamento AS dp
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
INNER JOIN elmasri.funcionario AS f ON (dp.numero_departamento=f.numero_departamento)
GROUP BY dp.nome_departamento, dp.numero_departamento, f.numero_departamento
ORDER BY "Total" DESC;

-- Questão 15

SELECT 
concat(f.primeiro_nome,' ', f.nome_meio,' ', f.ultimo_nome) AS "Nome Funcionario",
f.numero_departamento AS "Numero departamento",
proj.nome_projeto AS "Nome projeto"
FROM elmasri.funcionario AS f
-- Todos os direitos reservados - Bruno Lokchin (CC1M)
LEFT JOIN elmasri.trabalha_em AS trab ON (trab.cpf_funcionario=f.cpf)
LEFT JOIN elmasri.projeto AS proj ON (proj.numero_projeto=trab.numero_projeto);


