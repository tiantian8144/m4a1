# 创建用户
CREATE USER 'share_image'@'%' IDENTIFIED BY 'share_image';

# 删除匿名用户
DELETE FROM mysql.user WHERE user='';

# 创建数据库
CREATE DATABASE share_image DEFAULT CHARACTER SET utf8 COLLATE utf8_general_ci;

# 为用户赋予操作数据库的权限
GRANT ALL ON share_image.* TO 'share_image'@'%';