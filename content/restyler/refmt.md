---
title: refmt
---

> **Version**: v3.3.3

This [Restyler][source] operates on **Reason**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-refmt:v3.3.3
  command: ["refmt", "--in-place"]
  arguments: []
  include: ["**/*.re"]
  interpreters: []
```

## Examples

**Before**

```reason
type schoolPerson = Teacher
        | Director | Student(string);

let greeting = person =>
  switch (person){
      | Teacher => "Hey Professor!"
      | Director => "Hello Director."
      | Student("Richard") => "Still here Ricky?"
      | Student(anyOtherName) => "Hey, " ++ anyOtherName
          ++ "."
  };

```

**After**

```reason
type schoolPerson =
  | Teacher
  | Director
  | Student(string);

let greeting = person =>
  switch (person) {
  | Teacher => "Hey Professor!"
  | Director => "Hello Director."
  | Student("Richard") => "Still here Ricky?"
  | Student(anyOtherName) => "Hey, " ++ anyOtherName ++ "."
  };

```


## Documentation

- https://github.com/reasonml/reason-cli#reason-cli

[source]: https://github.com/restyled-io/restylers/blob/main/refmt/info.yaml
