---
title: ASPLOS'22 Clio - A Hardware-Software Co-Designed Disaggregated Memory System
description: 关于解耦内存系统的论文笔记
---

# ASPLOS'22 Clio

## Take-away

总结是，一个利用HW/SW Co-design方式做的Disaggregated Memory System;

## 为什么要做 MemDisagg

1. 内存利用率
2. 管理方便
3. 可扩展

## 现有的 MemDisagg 系统

1. with cores: Memory Node 上是有 CPU 的
2. without cores: 不带 CPU 的 MN