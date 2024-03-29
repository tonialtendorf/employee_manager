use employees_db;

INSERT INTO department (name)
VALUES ("Human Resources"),
       ("Finance"),
       ("Technology"),
       ("Marketing"),
       ("Merchandising");
       

INSERT INTO role (title, salary, department_id)
VALUES ("Engineer", 90000, 3),
       ("Lead Engineer", 130000, 5),
       ("HR Business Partner", 85000, 1),
       ("Financial Analyst", 85000, 2),
       ("Executive Team Lead", 80000, 4),
       ("Engineer Manager", 200000 , 3);
       

INSERT INTO employee (first_name, last_name, role_id, manager_id)
VALUES ("Toni", "Altendorf", 1, 1),
       ("Morgan", "Bailey", 2, 1),
       ("Grace", "Cross", 3, 2),
       ("Scott", "Vohnoutka", 4, 1),
       ("Kelly", "Lied", 5, 2),
       ("Molly", "Tupy", 6, 1),
       ("Sara", "Goulson", 7, 2);
