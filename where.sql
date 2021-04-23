-- 筛选出性别为男的数据
SELECT * FROM employee
where ismale = 1;

-- 公司id为1和2的部门
SELECT * FROM department
where companyId in (1, 2);

-- 没有地址的员工
SELECT * FROM employee
WHERE location is null;

-- 有地址的员工
SELECT * FROM employee
WHERE location is not null;

-- salary 大于10k
SELECT * FROM employee
WHERE salary > 10000;

-- salary 在10000到12000之间
SELECT * FROM employee
WHERE salary BETWEEN 10000 and 12000


-- 模糊查询-查询名字中包含云字的人名
SELECT * FROM employee
WHERE `name` LIKE '%云%';

-- 姓名只有两位并且姓张
SELECT * FROM employee
WHERE `name` LIKE '张_';

-- 姓张的
SELECT * FROM employee
WHERE `name` LIKE '张%';

-- 姓张，性别为男，并且收入超过10000
SELECT * FROM employee
WHERE `name` LIKE '张%' and ismale = 1 and salary > 10000;

-- 姓张的必须是女的并且收入小于1000 或者年龄小于96年
select * FROM employee
where `name` LIKE '张%' and (ismale = 0 and salary < 1000 or birthday >= '1996-1-1'); 











