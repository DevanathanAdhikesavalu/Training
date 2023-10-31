use TestDB;

CREATE TABLE usersdetails (
  id [int] NOT NULL,
  firstname NVARCHAR(255) UNIQUE NOT NULL,
  lastname NVARCHAR(255) NOT NULL
);

select * From usersdetails;