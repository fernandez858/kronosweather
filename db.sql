CREATE DATABASE IF NOT EXISTS kronostiempodb;

USE `kronostiempodb`;

CREATE TABLE IF NOT EXISTS usuarios (
usuario varchar(100) NOT NULL PRIMARY KEY,
hash varchar(255) NOT NULL,
salt varchar(255) NOT NULL
);