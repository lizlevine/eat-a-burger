-- Drops the moviePlannerDB if it already exists --
DROP DATABASE IF EXISTS burgers_db;

-- Create the database moviePlannerDB and specified it for use.
CREATE DATABASE burgers_db;

USE burgers_db;

-- Create the table movies.
CREATE TABLE burgers (
  id int NOT NULL AUTO_INCREMENT,
  burger_name varchar(80) NOT NULL,
  devoured boolean default False,
  PRIMARY KEY (id)
);