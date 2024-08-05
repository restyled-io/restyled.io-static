---
title: gofmt
---

> **Version**: go1.22.5

This [Restyler][source] operates on **Go**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-gofmt:go1.22.5
  command: ["gofmt", "-w"]
  arguments: []
  include: ["**/*.go"]
  interpreters: []
```

## Examples

**Before**

```go
package main
          import "fmt"
// this is demo to format code
            // with gofmt command
 var a int=2;
              var b int=5;
                                  var c string= `hello world`;
       func print(){
                  fmt.Println("Value for a,b and c is : ");
                          fmt.Println(a);
                              fmt.Println((b));
                                 fmt.Println(c);
                        }

```

**After**

```go
package main

import "fmt"

// this is demo to format code
// with gofmt command
var a int = 2
var b int = 5
var c string = `hello world`

func print() {
	fmt.Println("Value for a,b and c is : ")
	fmt.Println(a)
	fmt.Println((b))
	fmt.Println(c)
}

```


## Documentation

- https://golang.org/cmd/gofmt/

[source]: https://github.com/restyled-io/restylers/blob/main/gofmt/info.yaml
