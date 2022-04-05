CREATE TABLE `Movie_booking`.`users` (
  `uid` INT NOT NULL AUTO_INCREMENT,
  `first_name` VARCHAR(45) NOT NULL,
  `last_name` VARCHAR(45) NULL,
  `email` VARCHAR(45) NOT NULL,
  `credits` INT NULL,
  PRIMARY KEY (`uid`),
  UNIQUE INDEX `uid_UNIQUE` (`uid` ASC) VISIBLE,
  UNIQUE INDEX `email_UNIQUE` (`email` ASC) VISIBLE);

  --prelim data
INSERT INTO `movie_booking`.`users` (`uid`, `first_name`, `last_name`, `email`, `credits`) VALUES ('2', 'Akshat', 'Oke', 'oke@oke.com', '70');
INSERT INTO `movie_booking`.`users` (`uid`, `first_name`, `last_name`, `email`, `credits`) VALUES ('3', 'Vk', 'Vk', 'vk@vk.com', '71');

