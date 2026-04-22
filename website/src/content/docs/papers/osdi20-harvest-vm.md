---
title: OSDI'20 Harvest VM - Providing SLOs for Resource-Harvesting VMs
description: 关于 Azure 资源回收虚拟机的论文笔记
---

# OSDI'20 Harvest VM

## Titles

OSDI'20 Providing SLOs for Resource-Harvesting VMs in Cloud Platforms

## Take-away

云厂商一般会将闲置的资源打包作为次级产品销售出去，比如Spot VM。
这篇微软的工作就分析了Azure平台上的这类产品。并且根据分析结果提出了新的同类产品，Harvest VM。
这个新产品宣称的亮点是：

- 更加flexible
- 更加efficient