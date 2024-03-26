# SQL - More queries
This project was done as part of the requirements for the **Software Engineering** program at **ALX Africa**. It aims to teach us about MySQL user and how to manage privileges for a user on a database or table.

## Learnings
* Creating new MySQL user
* Managing privileges for a user
* Using `PRIMARY KEY` & `FOREIGN KEY`	
* Using constraints (`NOT NULL` & `UNIQUE`)
* Retrieving data from multiple tables
* SQL `UNION`, `UNION` & Subqueries 

## Technologies
* All databases are executed with `MySQL 8.0` version `8.0.25`
* All files are interpreted/compiled on Ubuntu 20.04 LTS

## Files

All the following files are scripts of MySQL:

| Filename | Description |
| -------- | ----------- |
| `0-privileges.sql` | Lists all privileges of the MySQL users `user_0d_1` and `user_0d_2` on your server (in `localhost`) |
| `1-create_user.sql` | Creates the MySQL server user `user_0d_1` |
| `2-create_read_user.sql` | Creates the database `hbtn_0d_2` and the user `user_0d_2` |
| `3-force_name.sql` | Creates the table `force_name` on your MySQL server |
| `4-never_empty.sql` | Creates the database `hbtn_0d_2` and the user `user_0d_2` |
| `5-unique_id.sql` | Creates the database `hbtn_0d_usa` and the table states (in the database `hbtn_0d_usa`) on your MySQL server |
| `6-states.sql` | Creates the database `hbtn_0d_2` and the user `user_0d_2` |
| `7-cities.sql` | Creates the database `hbtn_0d_usa` and the table cities (in the database `hbtn_0d_usa`) on your MySQL server |
| `8-cities_of_california_subquery.sql` | Lists all the cities of California that can be found in the database `hbtn_0d_us` |
| `9-cities_by_state_join.sql` | Lists all cities contained in the database `hbtn_0d_usa` |
| `10-genre_id_by_show.sql` | Import the database dump from `hbtn_0d_tvshows` to your MySQL server |
| `11-genre_id_all_shows.sql` | Import the database dump of `hbtn_0d_tvshow`s to your MySQL server same as `10-genre_id_by_show.sql` |
| `12-no_genre.sql` | Import the database dump from `hbtn_0d_tvshows` to your MySQL server same as `11-genre_id_all_shows.sql` |
| `13-count_shows_by_genre.sql` | Import the database dump from `hbtn_0d_tvshows` to your MySQL server same as `12-no_genre.sql` |
| `14-my_genres.sql` | Import the database dump from `hbtn_0d_tvshows` to your MySQL server same as `13-count_shows_by_genre.sql` |
| `15-comedy_only.sql` | Import the database dump from `hbtn_0d_tvshows` to your MySQL server same as `14-my_genres.sql` |
| `16-shows_by_genre.sql` | Import the database dump from `hbtn_0d_tvshows` to your MySQL server same as `15-comedy_only.sql` |
