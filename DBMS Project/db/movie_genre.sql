CREATE TABLE `Movie_booking`.`movie_genre` (
  `mid` INT NOT NULL,
  `genre` VARCHAR(45) NOT NULL,
  PRIMARY KEY (`mid`, `genre`),
  UNIQUE INDEX `mid_UNIQUE` (`mid` ASC) VISIBLE,
  UNIQUE INDEX `genre_UNIQUE` (`genre` ASC) VISIBLE);
