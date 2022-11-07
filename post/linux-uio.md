# Linux UIO 简介


UIO = userspace I/O

是什么： UIO是Linux系统下面一个设备驱动框架。

实现目的： 在用户态编写设备驱动，灵活可变。

核心机制：
1. 设备内存的访问
2. 设备中断的处理

架构图：
![架构图](img/linux-uio.png)


[参考链接](https://www.cnblogs.com/allcloud/p/7808776.html)