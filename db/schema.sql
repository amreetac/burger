### Schema

CREATE DATABASE burgers_db;
USE burgers_db;

CREATE TABLE burgers
(
	id int NOT NULL AUTO_INCREMENT,
	burger_name varchar(255) NOT NULL,
	devoured BOOLEAN DEFAULT 0,
    `date` TIMESTAMP DEFAULT current_timestamp,
	PRIMARY KEY (id)
);

DROP TABLES burgers;