CREATE SCHEMA sistema;


CREATE TABLE sistema.usuario (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(90),
	senha VARCHAR(20)
)

CREATE TABLE sistema.medicamento (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(50),
	bula text,
	lote VARCHAR(6),
	validade date,
	laboratorio VARCHAR(40)
)

CREATE TABLE sistema.farmacia (
	id SERIAL PRIMARY KEY,
	nome VARCHAR(30),
	logradouro VARCHAR(50),
	f_id INTEGER,
	FOREIGN KEY (f_id) REFERENCES sistema.usuario(id)
)

CREATE TABLE sistema.estoque (
	f_id INTEGER,
	m_id INTEGER,
	quantidade INTEGER,
	FOREIGN KEY (f_id) REFERENCES sistema.farmacia(id),
	FOREIGN KEY (m_id) REFERENCES sistema.medicamento(id)
)

ALTER TABLE sistema.estoque
ADD CONSTRAINT unq_estoque UNIQUE (f_id, m_id);

