---
title: nixfmt
---

> **Version**: v0.6.0

This [Restyler][source] operates on **Nix**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-nixfmt:v0.6.0
  command: ["nixfmt"]
  arguments: []
  include: ["**/*.nix"]
  interpreters: []
```

## Examples

**Before**

```nix
let
/*
* What you're seeing here is our nix formatter. It's quite opinionated:
*/
  sample-01 = { lib }:
{
  list = [
    elem1
    elem2
    elem3
  ] ++ lib.optionals stdenv.isDarwin [
    elem4
    elem5
  ]; # and not quite finished
}; # it will preserve your newlines

  sample-02 = { stdenv, lib }:
{
  list =
    [
      elem1
      elem2
      elem3
    ]
    ++ lib.optionals stdenv.isDarwin [ elem4 elem5 ]
    ++ lib.optionals stdenv.isLinux [ elem6 ]
    ;
};
# but it can handle all nix syntax,
# and, in fact, all of nixpkgs in <20s.
# The javascript build is quite a bit slower.
sample-03 = { stdenv, system }:
assert system == "i686-linux";
stdenv.mkDerivation { };
# these samples are all from https://github.com/nix-community/nix-fmt/tree/master/samples
sample-simple = # Some basic formatting
{
  empty_list = [ ];
  inline_list = [ 1 2 3 ];
  multiline_list = [
    1
    2
    3
    4
  ];
  inline_attrset = { x = "y"; };
  multiline_attrset = {
    a = 3;
    b = 5;
  };
  # some comment over here
  fn = x: x + x;
  relpath = ./hello;
  abspath = /hello;
  # URLs get converted from strings
  url = "https://foobar.com";
  atoms = [ true false null ];
  # Combined
  listOfAttrs = [
    {
      attr1 = 3;
      attr2 = "fff";
    }
    {
      attr1 = 5;
      attr2 = "ggg";
    }
  ];

  # long expression
  attrs = {
    attr1 = short_expr;
    attr2 =
      if true then big_expr else big_expr;
  };
}
;
in
[ sample-01 sample-02 sample-03 ]

```

**After**

```nix
let
  # * What you're seeing here is our nix formatter. It's quite opinionated:
  sample-01 =
    { lib }:
    {
      list =
        [
          elem1
          elem2
          elem3
        ]
        ++ lib.optionals stdenv.isDarwin [
          elem4
          elem5
        ]; # and not quite finished
    }; # it will preserve your newlines

  sample-02 =
    { stdenv, lib }:
    {
      list =
        [
          elem1
          elem2
          elem3
        ]
        ++ lib.optionals stdenv.isDarwin [
          elem4
          elem5
        ]
        ++ lib.optionals stdenv.isLinux [ elem6 ];
    };
  # but it can handle all nix syntax,
  # and, in fact, all of nixpkgs in <20s.
  # The javascript build is quite a bit slower.
  sample-03 =
    { stdenv, system }:
    assert system == "i686-linux";
    stdenv.mkDerivation { };
  # these samples are all from https://github.com/nix-community/nix-fmt/tree/master/samples
  sample-simple = # Some basic formatting
    {
      empty_list = [ ];
      inline_list = [
        1
        2
        3
      ];
      multiline_list = [
        1
        2
        3
        4
      ];
      inline_attrset = {
        x = "y";
      };
      multiline_attrset = {
        a = 3;
        b = 5;
      };
      # some comment over here
      fn = x: x + x;
      relpath = ./hello;
      abspath = /hello;
      # URLs get converted from strings
      url = "https://foobar.com";
      atoms = [
        true
        false
        null
      ];
      # Combined
      listOfAttrs = [
        {
          attr1 = 3;
          attr2 = "fff";
        }
        {
          attr1 = 5;
          attr2 = "ggg";
        }
      ];

      # long expression
      attrs = {
        attr1 = short_expr;
        attr2 = if true then big_expr else big_expr;
      };
    };
in
[
  sample-01
  sample-02
  sample-03
]

```


## Documentation

- https://github.com/NixOS/nixfmt#readme

[source]: https://github.com/restyled-io/restylers/blob/main/nixfmt/info.yaml