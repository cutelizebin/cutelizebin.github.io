---
title: ASPLOS'22 Memory Harvesting VMs in Cloud Platforms
description: 关于虚拟机内存回收的论文笔记
---

# ASPLOS'22 Memory Harvesting VMs

## 背景和要解决的问题

云环境下，每个物理机上一般都会预留一部分资源，保证用户的workload能scale。但是这部分预留资源在大部分时间内都是闲置的。本文核心想解决的问题就是，如何利用这些闲置资源（CPU、memory等）。比如像次级债券一样，打包成新产品卖出去。

## Key Insight

核心的insight是之前的工作都关注在了CPU的部分，也就是Core Harvesting。而这篇工作关注了Memory的部分。其中有个数据有意思的是50%的server开销都集中在了Memory的部分。

## Challenges

1. VM Creation Time, 闲置资源重新利用的话，就会有latency的问题，导致正常VM启动变慢
2. NUMA Spanning， 闲置memory重新利用的话，可能散布在各个NUMA Node导致云性能下降。
3. Large Page Fragmentation, 回收过程可能导致大页被打散成小页。