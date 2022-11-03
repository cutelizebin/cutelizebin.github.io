
# KVM Forum 2022 中的IOMMU相关项目


## 1. Hypervisor Live Update 中 IOMMU 状态的保存

Live Update 和 Live Migration一直是云场景下关键的功能需求。
设备虚拟化技术也在逐渐从virtio类似的半虚拟化技术向设备直通技术转变。
但在当前，设备直通就无法完成Live Update和Migration的功能。
其关键点在如何保存设备和IOMMU相关的状态。

[详细内容](./2022-kvm-forum/iommu-preserving.md)

## 2. Linux New API: IOMMU FD

以往控制iommu的API是VFIO，包括container，group，device这些概念。
现在逐渐在转向一个新的API，iommufd.
但为什么要有一个新的接口，主要解决了什么问题。

> /dev/iommu provides an unified interface for managing I/O page tables for 
devices assigned to userspace. Device passthrough frameworks (VFIO, vDPA, 
etc.) are expected to use this interface instead of creating their own logic to 
isolate untrusted device DMAs initiated by userspace. 

[原文链接](https://kvmforum2022.sched.com/event/15jKZ/iommufd-integration-in-qemu-yi-liu-intel-eric-auger-red-hat)
