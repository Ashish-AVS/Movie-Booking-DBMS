CREATE TABLE `Movie_booking`.`screen` (
  `sid` INT NOT NULL,
  `capacity` INT NOT NULL,
  PRIMARY KEY (`sid`));

-- Inserting prelim data
INSERT INTO `movie_booking`.`screen` (`sid`, `capacity`) VALUES ('1', '100');
INSERT INTO `movie_booking`.`screen` (`sid`, `capacity`) VALUES ('2', '100');
INSERT INTO `movie_booking`.`screen` (`sid`, `capacity`) VALUES ('3', '100');
INSERT INTO `movie_booking`.`screen` (`sid`, `capacity`) VALUES ('4', '150');
INSERT INTO `movie_booking`.`screen` (`sid`, `capacity`) VALUES ('5', '200');
