
  CREATE TABLE `movie_booking`.`seat` (
  `seat_id` INT NOT NULL,
  `sid` INT NOT NULL,
  PRIMARY KEY (`seat_id`, `sid`));

  ALTER TABLE seat 
  ADD FOREIGN KEY (sid) REFERENCES screen(sid);