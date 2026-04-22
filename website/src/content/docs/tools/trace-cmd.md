---
title: trace-cmd - Linux 内核追踪工具
description: 使用 trace-cmd 追踪内核函数执行
---

# trace-cmd 101

## When can we use `trace-cmd`

When we want to know what is happening exactly in kernel function, we can use `trace-cmd` to trace specific event or function.
It can help us to have a better understanding of kernel execution details.

## Install

```bash
sudo apt install trace-cmd
```

## Learn by examples

### Use Case 1: Trace the function you like

```bash
# show trace-able functions
trace-cmd list -f

# start tracing on the chosen function, (function_graph tracer can show the function calling stack)
```