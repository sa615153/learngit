查看引擎
SHOW TABLE STATUS from ideas_testing_automation where Name='Tasks'

查看版本
select version()

alter table prototype1.machine  add label varchar(50) NOT NULL DEFAULT '0';

ALTER TABLE prototype1.major_task  CHANGE task_name task_name varchar(100);

alter table machine rename machines;