-- 收入倒序，性别正序
SELECT *,
case ismale
when 1 then '男'
else '女'
end sex 
FROM employee
ORDER BY sex asc, salary desc;