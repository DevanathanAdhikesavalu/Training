use testdb
create table school(
Schoolid int identity(1,1) primary key,
schoolname varchar(50),
[description] varchar(50),
[address] varchar(50),
[phone] varchar(50),
[pincode] varchar(50),
);

 

select * from school;

 

 

alter table school
alter COLUMN schoolname nvarchar(50)  ;
insert into school(schoolname,description,address,phone,pincode)
values('Deva','higher','Tambaram',3456789,23456789);

 

 

UPDATE school
SET schoolname='Sujina'
where schoolid=2;

 

 

delete from school;

 

select schoolname,phone,pincode from school
order by schoolname;

 

 

select schoolname as link from school;

 

 

create table class 
(
classid int primary key ,
schoolid int ,
classname varchar(50)
);

 

insert into class(classid,schoolid,classname)
values(2,5,'third standard');

 

select * from class;

 

select school.schoolname,
class.classname
from school
inner  join class on school.schoolid=class.schoolid;

 

update class
set schoolid=5;

 

--do like single line comment

 

/*
double line comments

 

*/
declare @mylame varchar(50)
select @mylame=schoolname from school
print @mylame;

 

declare @schoollink int
select @schoollink=@@IDENTITY

declare @customerNumber int
select @customerNumber=CustomerNumber from CUSTOMER 
where CustomerId=2.
if @customerNumber > 1000
print 'The Customer Number is larger than 1000'
else
print 'The Customer Number is not larger than 1000'select @customerNumber=CustomerNumber from CUSTOMER where CustomerId=2
if @customerNumber > 1000
begin
print 'The Customer Number is larger than 1000'
update CUSTOMER set AreaCode=46 where CustomerId=2
end
else
print 'The Customer Number is not larger than 1000'

while (select AreaCode from CUSTOMER where CustomerId=1) < 20
begin
 update CUSTOMER set AreaCode = AreaCode + 1
end
select * from CUSTOMER

Create Table Grade 
(
GradeId int identity(1,1) primary key,
studentId int,
CourseId int ,
grade varchar(20)
);

select 
GradeId, 
StudentId, 
CourseId,
case Grade 
when 5 then 'A'
when 4 then 'B'
when 3 then 'C'
when 2 then 'D'
when 1 then 'E'
when 0 then 'F'
else '-'
end as Grade
from
GRADE;


DECLARE
@CustomerId int, 
@phone varchar(50) 
DECLARE db_cursor CURSOR 
FOR SELECT CustomerId from CUSTOMER 
OPEN db_cursor 
FETCH NEXT FROM db_cursor INTO @CustomerId 
WHILE @@FETCH_STATUS = 0 
BEGIN 
 
 select @phone=Phone from CUSTOMER where CustomerId=@CustomerId
 
 if LEN(@phone) < 8
 update CUSTOMER set Phone='Phone number is not valid' where 
CustomerId=@CustomerId
54 SQL	Scripts
Tutorial:	Structured	Query	Language	(SQL)
 
 FETCH NEXT FROM db_cursor INTO @CustomerId 
END 
CLOSE db_cursor 
DEALLOCATE db_cursor