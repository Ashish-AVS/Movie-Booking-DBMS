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

--prelim data
INSERT INTO `movie_booking`.`display` (`mid`, `sid`, `start_time`, `date`) VALUES ('1', '1', '05:00:00', '20220411');
INSERT INTO `movie_booking`.`display` (`mid`, `sid`, `start_time`, `date`) VALUES ('1', '1', '07:00:00', '20220411');
INSERT INTO `movie_booking`.`display` (`mid`, `sid`, `start_time`, `date`) VALUES ('2', '2', '05:00:00', '20220411');
INSERT INTO `movie_booking`.`display` (`mid`, `sid`, `start_time`, `date`) VALUES ('2', '2', '05:00:00', '20220412');
