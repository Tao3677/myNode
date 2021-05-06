-- 平均
-- SELECT AVG(salary) as 平均收入
-- FROM employee;

-- 查询员工数量
select COUNT(id) as id
from employee;

-- 收入最少
select min(salary) as 最少收入
from employee;

-- 收入最高
SELECT max(salary) as 最高收入
from employee;

-- 所有人总薪资
select sum(salary) as 总薪资
from employee;