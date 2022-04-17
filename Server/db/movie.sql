CREATE TABLE `Movie_booking`.`movie` (
  `mid` INT NOT NULL AUTO_INCREMENT,
  `cost` VARCHAR(45) NULL,
  `name` VARCHAR(45) NOT NULL,
  `desc` VARCHAR(45) NULL,
  `duration` VARCHAR(45) NULL,
  PRIMARY KEY (`mid`),
  UNIQUE INDEX `mid_UNIQUE` (`mid` ASC) VISIBLE);
