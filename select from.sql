-- -- 将所有的列都查询出来
-- select * from `employee`;
-- select id, `name`, location, ismale, joinDate, salary, deptId, birthday from `employee`; 
-- select `name` as '姓名' from `employee`;
-- 
-- -- 多增加额外的一列
-- SELECT *, 'abc' as 'extra' from `employee`;

-- -- 当ismale列的值为1时显示男，为0时显示女
-- SELECT id, `name`,
-- case ismale 
-- when 1 then '男'
-- else '女'
-- end sex,
-- salary
-- FROM employee;

-- 对salary划分等级
SELECT id, `name`,
case 
WHEN ismale = 1 THEN '男'
else '女'
end sex,
case 
WHEN salary > 10000 THEN '高'
WHEN salary > 5000 THEN '中'
else '低'
end `level`,
salary
from employee;






















