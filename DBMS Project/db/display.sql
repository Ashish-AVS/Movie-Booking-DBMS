CREATE TABLE `movie_booking`.`display` (
  `mid` INT NOT NULL,
  `sid` INT NOT NULL,
  `start_time` TIME NOT NULL,
  `date` DATE NOT NULL,
  PRIMARY KEY (`sid`, `mid`, `start_time`, `date`));

ALTER TABLE display
ADD FOREIGN KEY (mid) references movie(mid);

ALTER TABLE display
add foreign key (sid) references screen(sid);