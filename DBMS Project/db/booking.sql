CREATE TABLE `booking` (
  `bid` int NOT NULL AUTO_INCREMENT,
  `cost` int NOT NULL,
  `uid` int NOT NULL,
  `mid` int NOT NULL,
  `seat_id` int NOT NULL,
  `sid` int NOT NULL,
  `book_date` date DEFAULT NULL,
  PRIMARY KEY (`bid`)
) ENGINE=InnoDB DEFAULT CHARSET=utf8mb4 COLLATE=utf8mb4_0900_ai_ci;

ALTER TABLE booking
ADD FOREIGN KEY (uid) references users(uid);

ALTER TABLE booking
ADD FOREIGN KEY (mid) references movie(mid);

INSERT INTO `movie_booking`.`booking` (`bid`, `cost`, `uid`, `mid`, `seat_id`, `sid`, `book_date`) VALUES ('1', '100', '1', '1', '1', '1', '20220411');
INSERT INTO `movie_booking`.`booking` (`bid`, `cost`, `uid`, `mid`, `seat_id`, `sid`, `book_date`) VALUES ('2', '100', '2', '2', '1', '2', '20220411');


/*
T0-DO :  
ALTER TABLE booking
ADD foreign key (seat_id , sid) references seat(seat_id , sid);
Not working on workbecnch!
*/