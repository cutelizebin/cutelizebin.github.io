# OSDI'20 Harvest VM

#### Titles
OSDI'20 Providing SLOs for Resource-Harvesting VMs in Cloud Platforms


#### Take-away

云厂商一般会将闲置的资源打包作为次级产品销售出去，比如Spot VM。
这篇微软的工作就分析了Azure平台上的这类产品。并且根据分析结果提出了新的同类产品，Harvest VM。
这个新产品宣称的亮点是：

- 更加flexible
    - 什么是flexible
- 更加efficient
    - 如何衡量efficient


#### Background

1. 为什么会有Unallocated Resource？
   1. 用户的workload可能会scale，需要预留资源处理
   2. 可能会遇到hardware failure，也需要预留资源处理
2. 现有的Spot VM有什么缺点？
   1. 无法完全消耗预留资源，还是有一部分资源无法出售
   2. 频繁的创建与销毁浪费资源
3. 为什么要有SLO？
   1. 给用户提供一个明确的预期
   2. 分层定价
4. 如何定义SLO？
   1. survive rate
   2. 所以建立了一个ML Model来预测survive rate，效果在2-6%之间
5. Harvest VM跟Cluster Scheduling的关系？
   1. Harvest VM可以用于快速伸缩容的Application，比如serverless场景