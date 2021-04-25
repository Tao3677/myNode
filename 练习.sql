-- 显示出所有员工的姓名、性别（使用男或女显示）、入职时间、薪水、所属部门（显示部门名称）、所属公司（显示公司名称）

SELECT e.`name` as 姓名,
case e.ismale
when 1 then '男'
else '女'
end 性别,
e.joinDate as 入职时间,
e.salary as 薪水,
d.`name` as 部门名称,
c.`name` as 公司名称
FROM employee as e
INNER JOIN department as d on e.deptId = d.id
INNER JOIN company as c on d.companyId = c.id;


-- 查询腾讯和蚂蚁金服的所有员工姓名、性别、入职时间、部门名、公司名

SELECT e.`name` as 员工姓名, 
case e.ismale 
when 1 then '男'
else '女'
end 性别,
e.joinDate as 入职时间,
d.`name` as 部门名,
c.`name` as 公司名 
FROM employee as e
INNER JOIN department as d on e.deptId = d.id
INNER JOIN company as c on c.id = d.companyId
where c.`name` in ('腾讯科技', '蚂蚁金服');

-- 查询渡一教学部的所有员工姓名、性别、入职时间、部门名、公司名

select e.`name` as 员工姓名,
case e.ismale
when 1 then '男'
else '女'
end 性别,
e.joinDate as 入职时间,
d.`name` as 部门名,
c.`name` as 公司名
FROM employee as e
INNER JOIN department as d on d.id = e.deptId
INNER JOIN company as c on c.id = d.companyId
WHERE c.`name` like '%渡一%' and d.`name` = '教学部';




