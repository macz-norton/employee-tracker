DROP DATABASE IF EXISTS employeeDB;

CREATE DATABASE employeeDB;

USE employeeDB;

CREATE TABLE departments (
    department_id INT AUTO_INCREMENT,
    name VARCHAR(30),
    PRIMARY KEY (department_id)
 );

CREATE TABLE roles (
    role_id INT AUTO_INCREMENT,
    title VARCHAR(30) UNIQUE,
    salary DECIMAL(8,2),
    department_id INT,
    PRIMARY KEY (role_id),
    FOREIGN KEY (department_id) REFERENCES departments(department_id)
);

CREATE TABLE employees (
    id INT AUTO_INCREMENT,
    first_name VARCHAR(30),
    last_name VARCHAR(30),
    role_id INT,
    manager_id INT,
    PRIMARY KEY (id),
    FOREIGN KEY (role_id) REFERENCES roles(role_id)
);