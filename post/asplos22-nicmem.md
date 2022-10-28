# ASPLOS'22 The Benefits of General on-nic Mem

## [回到首页](/)

## 背景和问题

高速设备层出不穷，最主要的就是高速网卡和高速存储。其中高速网卡的场景下，CPU、DRAM Bandwidth、PCI Bandwidth都是阻碍充分发挥网卡性能的因素。本文主要解决的问题，也就是如何降低这些因素对高速网卡的影响。

## 原有的解决方案

主要分为2种：
1. Offload，将整个网络栈都放在了NIC端来执行，好处是省CPU，坏处是处理逻辑固定在网卡上了，灵活性不够。
2. Host Optimization，优化Host端的Memcpy等操作。

## Key Observation

1. 很多Web App都是Data Mover，也就是都在做Data的转发，而不是处理。所以他们的Header可能会处理改变，但是Payload一般是不变的。
2. 大部分NIC上都有Memory，称为NICMEM，比如CX6网卡上有4MiB。
3. 大部分NICMEM，都没有完全被利用。

## Key Insight

利用网卡上自带的NICMEM，来存储应用数据，节省CPU端资源，比如Memory带宽、PCI带宽等

将packet分为header和payload
- header， 存在host mem
- payload，存在nic mem


## 最终效果


| Benchmark | latency | bandwidth |
|:---|:---|:---|
| NFV | 23% | 19% |
| Memcached | 43% | 80% |


| head1        | head two          | three |
|:-------------|:------------------|:------|
| ok           | good swedish fish | nice  |
| out of stock | good and plenty   | nice  |
| ok           | good `oreos`      | hmm   |
| ok           | good `zoute` drop | yumm  |



## 实现细节：如何使用NIC上的Mem
- https://stackoverflow.com/questions/72605366/how-can-i-use-the-memory-inside-nics

具体来说，就是IBVerbs提供的一系列接口（[API Doc](https://docs.nvidia.com/networking/display/OFEDv502180/Programming#Programming-DeviceMemoryProgramming)），能够使用网卡上的memory。

![API List](../img/nicmem-driver-api.png)