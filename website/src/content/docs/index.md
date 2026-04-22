---
title: Welcome
description: Welcome to my personal site
template: splash
hero:
  tagline: 技术笔记 / 论文阅读 / 工具记录
---

import { Card, CardGrid } from '@astrojs/starlight/components'

## 关于我

<CardGrid>
  <Card title="MiniMax" icon="rocket">
    KVCache
  </Card>
  <Card title="Bytedance" icon="rocket">
    DPU Virtualization
  </Card>
  <Card title="Huawei" icon="rocket">
    Micro-kernel mm @ HongMengOS
  </Card>
  <Card title="IPADS Lab" icon="rocket">
    TEE & Virtualization & IOMMU @ SJTU
  </Card>
</CardGrid>

## 精选笔记

<CardGrid>
  <Card title="ASPLOS'22 NICMEM" href="/notes/asplos22-nicmem/">
    The Benefits of General on-nic Memory
  </Card>
  <Card title="ASPLOS'22 Clio" href="/notes/asplos22-clio/">
    A Hardware-Software Co-Designed Disaggregated Memory System
  </Card>
  <Card title="Linux UIO" href="/notes/linux-uio/">
    Userspace I/O 设备驱动框架
  </Card>
  <Card title="KVM Forum 2022 IOMMU" href="/notes/kvm-forum-2022-iommu/">
    IOMMU 相关技术分享
  </Card>
</CardGrid>