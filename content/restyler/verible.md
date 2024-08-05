---
title: verible
---

> **Version**: v0.0-1318-gf6b4485

This [Restyler][source] operates on **System Verilog**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-verible:v0.0-1318-gf6b4485
  command: ["verible-verilog-format", "--inplace"]
  arguments: []
  include: ["**/*.sv"]
  interpreters: []
```

## Examples

**Before**

```verilog
module debounce(
  input wire logic clk, output logic debounced
   );
stateType ns;

  always_comb
            begin
             ns = ERR;
       end

  logic timerDone;
     logic clrTimer;
   endmodule

```

**After**

```verilog
module debounce (
    input wire logic clk,
    output logic debounced
);
  stateType ns;

  always_comb begin
    ns = ERR;
  end

  logic timerDone;
  logic clrTimer;
endmodule

```


## Documentation

- https://google.github.io/verible/verilog_format.html

[source]: https://github.com/restyled-io/restylers/blob/main/verible/info.yaml
