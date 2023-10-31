use Northwind;
SELECT EmployeeID, FirstName,LastName,HireDate, City FROM Employees;

SELECT EmployeeID, FirstName,LastName,HireDate, City FROM Employees WHERE City='London';

SELECT EmployeeID, FirstName,LastName,HireDate, City FROM Employees WHERE City<>'London';

SELECT EmployeeID, FirstName,LastName,HireDate, City FROM Employees WHERE HireDate>='1-july-1993';

SELECT CategoryName, Description FROM Categories;

SELECT ContactName ,CompanyName,ContactTitle,Phone From Customers;

SELECT EmployeeID,Title,FirstName,LastName,Region FROM Employees;

SELECT RegionID,RegionDescription FROM Region;

SELECT CompanyName, Fax,Phone,HomePage FROM Suppliers;

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE HireDate BETWEEN '1-june-1992'AND '15-december-1993';

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE (HireDate>='1-june-1992')AND(HireDate <='15-december-1993');

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE HireDate NOT BETWEEN '1-june-1992'AND '15-december-1993';

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE City ='LONDON' OR City='SEATTLE';

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE City IN('Seattle','Tacoma','Redmond');

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE City NOT IN('Seattle','Tacoma','Redmond');

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE (FirstName NOT LIKE 'M%') AND (FirstName NOT LIKE 'A%');

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE FirstName  LIKE '[a-m]%';

SELECT EmployeeID,FirstName,LAstName,HireDate,City FROM Employees WHERE FirstName  LIKE '[^a-m]%';

SELECT EmployeeID, FirstName,LastName,HireDate, City FROM Employees ORDER BY City;

SELECT EmployeeID, FirstName,LastName,HireDate,Country, City FROM Employees ORDER BY Country,City DESC;

SELECT EmployeeID, FirstName,LastName,HireDate,Country, City FROM Employees ORDER BY Country DESC,City DESC;

SELECT EmployeeID, FirstName,LastName,HireDate,Country, City FROM Employees ORDER BY Country ASC ,City DESC;

SELECT EmployeeID, FirstName,LastName,HireDate,Country, City FROM Employees ORDER BY 1,3;

SELECT EmployeeID, FirstName,LastName,HireDate,Country, City FROM Employees ORDER BY Title,LastName;

/*List CategoryName and Description from the Categories table sorted by CategoryName;*/

SELECT CategoryName, Description FROM Categories ORDER BY CategoryName;

/*Display ContactName,CompanyName,ContactTitle,and Phone from the Customers table sorted by Phone;*/

SELECT ContactName, CompanyName,ContactTitle,Phone FROM Customers ORDER BY Phone;

/*Create a query showing employeed first and last names and hire dates sorted from newest to oldest employee*/

SELECT FirstName, LastName ,HireDate FROM Employees HireDate ORDER BY HireDate DESC ;

/*Create a query showing orders sorted by Freight from most expensive to cheapest. Show OrderID,OrderDate,ShippedDate,CustomerID and Freight.*/

SELECT OrderID,OrderDate,ShippedDate,CustomerID,Freight FROM Orders ORDER BY Freight DESC;

/* Select CompanyName, fax, Phone, Homepage and Country from the suppliers table sorted by Country in desencing order and then by CompanyName in ascending order*/

SELECT CompanyName, fax, Phone, Homepage, Country FROM Suppliers ORDER BY Country DESC , CompanyName;

/*Create a list of employees showing title,firstname, and lastname sort by title in ascending order and then by lastname in descending order.*/

SELECT title,firstname,lastname FROM Employees ORDER BY Title ASC ,LastName DESC;

SELECT FirstName,LastName,Region FROM Employees WHERE Region IS NULL;

SELECT FirstName,LastName,Region FROM Employees WHERE Region IS NOT NULL;

/*Create a query showing all the company names and contact name of Customers in Buenos Aires*/

SELECT CompanyName, ContactName,City FROM Customers WHERE City ='Buenos Aries';

/*Create a query showing the product name ,unit price and quantity per unit of all products that are out of stock*/

SELECT ProductName,UnitPrice,QuantityPerUnit FROM Products WHERE UnitsINStock=0;

/*create a query showing the order date , shipped date, customer id,and frieght of all orders placed on may 19,1997*/

SELECT orderDate , shippedDate, customerId, freight FROM Orders WHERE OrderDate='19-may-1997';

/*create a query showing the firstname,lastname,and country of all employees not in the united states*/

SELECT FirstName,LastName,Country FROM Employees  WHERE Country NOT IN ('USA')


SELECT FirstName+''+LastName FROM Employees;

SELECT [ORDERID],[Freight],[Freight]*0.1 TAX FROM [ORDERs] WHERE Freight >= 500;

select orderid,freight,freight*1.1 as freighttotal from Orders
where freight >=500;


SELECT COUNT(*) AS NumEmployees FROM Employees; 

SELECT SUM(Quantity) AS TotalUnits FROM [Order Details] WHERE ProductID=3;

SELECT AVG(UnitPrice) AS AveragePrice FROM Products;

SELECT City,COUNT(EMPLOYEEID) AS NumEmployees FROM Employees GROUP BY City;

SELECT City, COUNT(EmployeeID) AS NumberEmployees FROM Employees GROUP BY City HAVING Count (EmployeeID)>1;

SELECT DISTINCT City FROM Employees ORDER BY City;

SELECT COUNT(DISTINCT City) AS NumCities FROM Employees;

SELECT ProductID, SUM(Quantity) AS TotalUnits FROM [Order Details] GROUP BY ProductID HAVING SUM(Quantity)<200;

SELECT ProductID, AVG(UnitPrice) AS AveragePrice FROM Products GROUP BY ProductID  HAVING AVG(UnitPrice)>70 ORDER BY AveragePrice;

SELECT CustomerID, COUNT(OrderID) AS NumOrders FROM Orders GROUP BY CustomerID HAVING COUNT(OrderID)>15 ORDER BY NumOrders DESC;

SELECT productId,UnitPrice FROM Products WHERE UnitPrice>70 ORDER BY UnitPrice;

SELECT Freight ,ROUND(Freight,-1) AS ApproxFreight FROM Orders;

SELECT UnitPrice,CAST(UnitPrice AS CHAR(10)) FROM Products;

SELECT UnitPrice,'$'+CAST(UnitPrice AS CHAR(10)) FROM Products;

SELECT UPPER(FirstName),UPPER(LastName) FROM Employees;

SELECT SUBSTRING(Address,1,10) FROM Customers;

SELECT LastName,BirthDate,HireDate,DATEDIFF(year,BirthDate,HireDate)AS HireAge FROM Employees ORDER BY HireAge;

SELECT FirstName,LastName,DATENAME(month,BirthDate) AS BirthMonth,DATEPART(month,BirthDate) FROM Employees ORDER BY DATEPART(month,BirthDate);

SELECT CompanyName FROM Customers WHERE CustomerID IN (SELECT CustomerID FROM Orders WHERE OrderDate BETWEEN '1-jan-1997' AND '31-Dec-1997');

SELECT * FROM Suppliers WHERE CompanyName = 'Grandma Kelly''s Homestead';

/*1.Create a querythat shows all products by name that are in the Seafood category.*/
SELECT ProductName FROM Products WHERE CategoryId =(SELECT CategoryID FROM Categories WHERE CategoryName = 'Seafood');


/*2.Create a query that shows all companies by names that sell product in categoryID 8.*/

SELECT CompanyName FROM Suppliers WHERE SupplierID IN (SELECT SupplierID FROM Products WHERE CategoryId=8);

/*3.Create a query that shows all companies by name that sell productys in the seafood category.*/
SELECT CompanyName FROM Suppliers WHERE SupplierID IN (SELECT SupplierID FROM Products WHERE CategoryId=(SELECT CategoryID FROM Categories WHERE CategoryName='Seafood'));


SELECT Employees.EmployeeID,Employees.FirstName,Employees.LastName,Orders.OrderID,Orders.OrderDate FROM Employees 
JOIN Orders ON (Employees.EmployeeID = Orders.EmployeeID) ORDER BY Orders.OrderDate;

SELECT e.EmployeeID,e.FirstName,e.LastName,o.OrderID,o.OrderDate FROM Employees e Join Orders o ON (e.EmployeeID = o.EmployeeID)
Order By o.OrderDate;

SELECT o.OrderID,c.CompanyName,e.EmployeeID,e.FirstName,e.LastName FROM Orders o 
	Join Employees e ON (e.EmployeeID = o.EmployeeID) 
	join Customers c ON (c.CustomerID = o.CustomerID)
	WHERE o.ShippedDate > o.RequiredDate AND o.OrderDate > '1-jan-1998' ORDER BY c.CompanyName;

/*Create a report that shows the number of employees and customers from each city that has employees in it*/

SELECT COUNT(DISTINCT e.EmployeeID) AS numEmployees,
	COUNT(DISTINCT c.CustomerID) AS numCompanies,
	e.city,c.city
FROM Employees e Inner JOIN Customers c ON
	(e.City = c.City)
GROUP BY e.City,c.City
ORDER BY numEmployees DESC;

/* Create a report that shows the number of employees and customers from each city that has employees in it */
SELECT DISTINCT Region FROM Employees

SELECT COUNT(DISTINCT e.EmployeeID) AS numEmployees,
	   COUNT(Distinct c.CustomerID) AS numCompanies,
	   e.Region,c.Region
FROM Employees e LEFT JOIN Customers c ON
	   (e.Region=c.Region)
GROUP BY e.Region,c.Region
ORDER BY numEmployees DESC;

--Create a report that shows the number of employees and customers from each city that has customers in it */

SELECT COUNT(DISTINCT e.EmployeeID) AS numEmployees,
	   COUNT(DISTINCT c.CustomerID) AS numCompanies,
	   e.City,c.City
FROM Employees e RIGHT JOIN Customers c ON 
	  (e.City=c.City)
Group By e.City,c.City
ORDER BY numEmployees DESC

--OUTER JOIN 

SELECT COUNT(DISTINCT e.EmployeeID) AS numEmployees,
	   COUNT(DISTINCT c.CustomerID) AS numCompanies,
	   e.City,c.City
FROM Employees e FULL JOIN Customers c ON 
	  (e.City=c.City)
Group By e.City,c.City
ORDER BY numEmployees DESC

--UNIONS

SELECT CompanyName,Phone FROM Shippers 
     UNION
SELECT CompanyName,Phone FROM Customers 
     UNION
SELECT CompanyName,Phone FROM Suppliers 
     UNION
SELECT LastName,HomePhone FROM Employees
   ORDER BY CompanyName;

SELECT e.FirstName,e.LastNAme,o.OrderID FROM Employees e JOIN Orders o ON (e.EmployeeID = o.EmployeeID)
WHERE o.ShippedDate > o.RequiredDate ORDER BY o.OrderID; 

/*---ques2
--create a report that shows the total quantity of products (from the [order detils] table) ordered. 
--only show records for products for which the quantity oredered is fewer than 200.
--the report should return should return the follwing 5 rows.*/

SELECT p.ProductName , SUM(od.Quantity) AS Totalunits 
FROM [Order Details] od  JOIN Products p  ON (p.ProductID = od.ProductID)
Group BY p.ProductName 
Having SUM(od.Quantity)<200;

----ques3
--- create a report that shows of orders by customer since december 31,1996.
--the report should only return rows for which the numorders is greater than 15.
---the report should return the following 5 rows.

SELECT DISTINCT c.CompanyName , COUNT( DISTINCT o.OrderID) AS NumOrders FROM Customers c JOIN ORDERS o ON (c.CustomerID = o.CustomerID)
WHERE o.OrderDate>'31-DEC-1996' GROUP BY c.CompanyName HAVING COUNT(o.OrderID)>15 ORDER BY NumOrders DESC;

/* CREATE a report that shows the Company name,order id,and total price of all products of that has 
sold more than $10,000 worth.(there is no need for GROUP BY)*/

SELECT Distinct c.CompanyName,  o.OrderID , od.UnitPrice*od.Quantity*(1-od.Discount) AS TotalPrice 
FROM [Order Details] od 
JOIN Orders o ON (o.OrderID=od.OrderID)
JOIN Customers c ON (c.CustomerID = o.CustomerID)
WHERE od.UnitPrice*od.Quantity*(1-od.Discount)>10000
ORDER BY TotalPrice DESC

/*Create a report showing the Contact name and Phone numbers for all employees , customers, and suppliers */

SELECT ContactName ,Phone FROM Customers 
     UNION
SELECT FirstName ,HomePhone FROM Employees 
     UNION
SELECT ContactName ,Phone FROM Suppliers
     Order by ContactName ;


USE NorthWind
GO
BEGIN TRANSACTION
UPDATE dbo.Categories
SET CategoryName = 'FirstFood'
WHERE CategoryName = 'seafood';

--ROLLBACK TRANSACTION 
commit TRANSACTION 

SELECT * FROM dbo.Categories

BEGIN TRANSACTION 
UPDATE dbo.Categories
SET CategoryName ='SeaFood'
WHERE CategoryName = 'Fishfood';

ROLLBACK TRANSACTION 

Select * from dbo.Categories

SELECT EmployeeID,FirstName,Title, ReportsTo From Employees;

SELECT e1.EmployeeID,e1.FirstName,e2.FirstNAme as ReportingPerson,e1.Title 
FROM Employees e1 inner join Employees e2 on e1.ReportsTo=e2.EmployeeID;


--Select * from Orders where freight in(select freight from orders orderby freight desc);

SELECT * FROM Orders WHERE FREIGHT IN (SELECT TOP 3 FREIGHT FROM Orders ORDER BY FREIGHT DESC);

--exersice 
 
/*

SELECT * FROM EMP 
		  WHERE SAL = (SELECT MAX(sal) from emp WHERE sal <
		  (SELECT MAX(sal) from emp WHERE sal <
		  (SELECT MAX(sal) from emp)));

 ---sub query with derived table 

SELECT * FROM emp WHERE sal = 
		  (SELECT MIN(sal) FROM                                 ---subquery
		  (SELECT TOP 3 sal FROM emp ORDER BY sal DESC) a);     ---derived table
*/

SELECT OrderID , Freight from ORDERS ORDER BY Freight DESC

SELECT MIN(Freight) as ThirdMin FROM (SELECT top 3 Freight from orders ORDER BY Freight DESC) as A;

use Northwind
SELECT Customers.CompanyName,orders.EmployeeID FROM Customers Right join Orders on Customers.CustomerID=Orders.CustomerID;
