资源定义，分类

1,忽略时序 有时候，为了满足不是很重要M1的优先级，牺牲资源利用率，会使稀缺资源被分配，，，M1不需要太多资源，大部分机器空闲，M2被稀缺资源阻塞，M2需要很多资源，若M2早被分配，则不会空闲大部分资源
2，不忽略时序，是否需要为特别重要的预先空闲机器

*消息队列？
*资源抽象

任务的分配逻辑中的检查逻辑不集中在一起。而是分散在server的available-task-pc-match和client的assign函数里

重要数据硬盘化（文件or数据库）

配置数据每次启动时生成一次

程序衔接与状态修改
json data 前的data=2，server就不能if data = "2"
jenkins timestamp追踪subtask