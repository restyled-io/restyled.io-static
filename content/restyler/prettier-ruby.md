---
title: prettier-ruby
---

> **Version**: v3.2.2-1

This [Restyler][source] operates on **Ruby**, but it must be explicitly enabled 

## Configuration

```yaml
  image: restyled/restyler-prettier-ruby:v3.2.2-1
  command: ["rbprettier", "--write"]
  arguments: []
  include: ["**/*.rb"]
  interpreters: ["ruby"]
```

## Examples

**Before**

```ruby
       d=[30644250780,9003106878,
   30636278846,66641217692,4501790980,
671_24_603036,131_61973916,66_606629_920,
  30642677916,30643069058];a,s=[],$*[0]
     s.each_byte{|b|a<<("%036b"%d[b.
        chr.to_i]).scan(/\d{6}/)}
         a.transpose.each{ |a|
           a.join.each_byte{\
            |i|print i==49?\
              ($*[1]||"#")\
                :32.chr}
                  puts
                   }

```

**After**

```ruby
d = [
  30_644_250_780,
  9_003_106_878,
  30_636_278_846,
  66_641_217_692,
  4_501_790_980,
  671_24_603036,
  131_61973916,
  66_606629_920,
  30_642_677_916,
  30_643_069_058
]
a, s = [], $*[0]
s.each_byte { |b| a << ("%036b" % d[b.chr.to_i]).scan(/\d{6}/) }
a.transpose.each do |a|
  a.join.each_byte { |i| print i == 49 ? ($*[1] || "#") : 32.chr }
  puts
end

```


## Documentation

- https://prettier.io/docs/en/
- https://github.com/prettier/plugin-ruby

[source]: https://github.com/restyled-io/restylers/blob/main/prettier-ruby/info.yaml