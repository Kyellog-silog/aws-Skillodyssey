DB_Hostname: 'localhost'
DB_Port: '3306'
DB_Username: 'root'
DB_Password: '052103'
DB_Database: 'SkillOdyssey'

mysql -h DB_Hostname -P DB_Port -u DB_Username -pDB_Password

CREATE DATABASE IF NOT EXISTS SkillOdyssey;

USE SkillOdyssey;

Create the userdetails table
CREATE TABLE userdetails (
    user_ID  SERIAL PRIMARY KEY NOT NULL, AUTO_INCREMENT, 
    username VARCHAR(255) NOT NULL,
    Email VARCHAR(255) NOT NULL,
    Password VARCHAR(255) NOT NULL
);


exit;