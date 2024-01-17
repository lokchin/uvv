## Qual a função deste subdiretório?

Este subdiretório armazena o _modelo lógico do banco de dados Elmasri_ em um arquivo `.architect`, os scripts para a geração do banco de dados em [PostgreSQL](https://github.com/Lokchin/uvv_bd_1_cc1m/blob/main/pset1/Script%20-%20Postgress.sql) e [MariaDB](https://github.com/Lokchin/uvv_bd_1_cc1m/blob/main/pset1/Script%20-%20MariaDB.sql), e mostra passo a passo a criação do banco de dados nesses SGBD's.

#
#### PostgreSQL
1. ***O usuário*** <br>
É preciso a criação de um usuário com os privilégios específicos.


1. ***O banco de dados*** <br>
Se cria o banco de dados com o usuário criado anteriormente definido como dono. 


1. ***O esquema*** <br>
É preciso a criação de um esquema dentro do banco de dados para a criação das tabelas, é o diferencial do PostgreSQL. Como se houvessem bancos de dados dentro de um banco de dados.

1. ***As tabelas*** <br>
Nesse passo, se pode inserir o comando para a criação de tabelas `CREATE TABLE esquema.entidade (atributos, tipos, chaves...);`.

1. ***Restrições*** <br>
As restrições devem ser criadas após a criação da tabela, com o comando `ALTER TABLE esquema.entidade ADD CONSTRAINT *Nome da restrição* *O tipo da restrição*;`.

1. ***Os dados*** <br>
Utlizando o comando `INSERT INTO esquema.entidade (atributo1, atributo2...) VALUES ('tupla1', 'tupla2');` após a criação das tabelas, os dados devem ser inseridos.

#
#### MariaDB
1. ***O banco da dados*** <br>
Primeiro se cria um banco de dados

1. ***O usuário*** <br>
Em seguida, um usuário, e garanta à ele os privilégios sobre o banco de dados criado anteriormente.

1. ***As tabelas*** <br>
Insira o comando para a criação das tabelas `CREATE TABLE entidade (atributos, tipos, chaves...);`.

1. ***Restrições*** <br>
As restrições devem ser criadas após a criação da tabela, com o comando `ALTER TABLE entidade ADD CONSTRAINT *Nome da restrição* *O tipo da restrição*;`.

1. ***Os dados*** <br>
Utlizando o comando `INSERT INTO entidade (atributo1, atributo2...) VALUES ('tupla1', 'tupla2');` após a criação das tabelas, os dados devem ser inseridos.
