-- 练习

-- 查询user表，得到账号为admin，密码为123456的用户==登录
SELECT * FROM `user`
WHERE `loginId` = 'admin' and `loginPwd` = '123123';

-- 查询工资最高的女员工
SELECT * FROM `employee`
WHERE ismale = 0
ORDER BY salary desc
limit 0, 1;

-- 查询员工表，按照员工的入职时间降序排序，并且使用分页查询
-- 查询第3页，每页5条数据
-- limit (page-1)*pagesize, pagesize
SELECT * FROM employee
ORDER BY joinDate desc
limit 10, 5;








