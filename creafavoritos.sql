CREATE TABLE `kronostiempodb`.`favoritos` (
  `idfavoritos` INT NOT NULL AUTO_INCREMENT,
  `usuario` VARCHAR(100) NULL,
  `lat` VARCHAR(45) NULL,
  `lon` VARCHAR(45) NULL,
  PRIMARY KEY (`idfavoritos`));