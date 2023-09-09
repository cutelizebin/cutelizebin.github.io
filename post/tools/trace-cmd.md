# trace-cmd 101


## when can we use `trace-cmd`
When we want to know what is happening exactly in kernel function, we can use `trace-cmd` to trace specific event or function.
It can help us to have a better understanding of kernel execution details.

## install
```bash
sudo apt install trace-cmd
```

## learn by examples

### Use Case 1: Trace the function you like
```bash
# show trace-able functions
trace-cmd list -f 

# start tracing on the chosen function, (function_graph tracer can show the function calling stack)
trace-cmd record -l ext4_* -p function_graph

# show the trace result
trace-cmd report
```