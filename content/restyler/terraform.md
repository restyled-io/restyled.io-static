---
title: terraform
---

> **Version**: v0.12.24-2

This [Restyler][source] operates on **Terraform**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-terraform:v0.12.24-2
  command: ["terraform", "fmt"]
  arguments: []
  include: ["**/*.tf"]
  interpreters: []
```

## Examples

**Before**

```console
locals = {
  short = 1
  this_is_longer = true
  this_is_really_longer_than_it_needs_to_be = "bazzle"
}

```

**After**

```console
locals = {
  short                                     = 1
  this_is_longer                            = true
  this_is_really_longer_than_it_needs_to_be = "bazzle"
}

```

**Before**

```console
variable "policy_definition_name" {
    description  = "Policy definition name must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and is limited between 2 and 60 characters in length."
    default    = "demoPolicy"
}

```

**After**

```console
variable "policy_definition_name" {
  description = "Policy definition name must only contain lowercase letters, digits or dashes, cannot use dash as the first two or last one characters, cannot contain consecutive dashes, and is limited between 2 and 60 characters in length."
  default     = "demoPolicy"
}

```


## Documentation

- https://www.terraform.io/docs/commands/fmt.html

[source]: https://github.com/restyled-io/restylers/blob/main/terraform/info.yaml
