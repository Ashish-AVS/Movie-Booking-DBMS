
  CREATE TABLE `movie_booking`.`seat` (
  `seat_id` INT NOT NULL,
  `sid` INT NOT NULL,
  PRIMARY KEY (`seat_id`, `sid`));

  ALTER TABLE seat 
  ADD FOREIGN KEY (sid) REFERENCES screen(sid);

INSERT INTO `movie_booking`.`seat` (`seat_id`, `sid`) VALUES ('1', '1');
INSERT INTO `movie_booking`.`seat` (`seat_id`, `sid`) VALUES ('2', '1');
INSERT INTO `movie_booking`.`seat` (`seat_id`, `sid`) VALUES ('1', '2');
INSERT INTO `movie_booking`.`seat` (`seat_id`, `sid`) VALUES ('2', '2');
