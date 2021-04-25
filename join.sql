-- 笛卡尔积
SELECT 
t1.`name` as 主场,
t2.`name` as 客场
FROM team as t1 , team as t2
WHERE t1.id != t2.id;

-- 左连接 left join （员工的所属部门）
SELECT e.id, e.`name` as 姓名, d.`name` as 部门
FROM employee as e left join department as d
on e.deptId = d.id;

-- 右连接 right join 
SELECT e.id, e.`name` as 姓名, d.`name` as 部门
FROM employee as e RIGHT JOIN department as d
on e.deptId = d.id;

-- 内连接
SELECT e.id, e.`name` as 姓名, d.`name` as 部门名称, c.`name` as 公司名称
FROM employee as e
INNER JOIN department as d on d.id = e.deptId
INNER JOIN company as c on c.id = d.companyId;


















