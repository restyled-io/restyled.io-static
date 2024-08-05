---
title: astyle
---

> **Version**: v3.1-2

This [Restyler][source] operates on **C**, **C++**, **C#**, **Java*** and **Objective-C**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-astyle:v3.1-2
  command: ["astyle"]
  arguments: []
  include: ["**/*.c", "**/*.cc", "**/*.cpp", "**/*.cxx", "**/*.c++", "**/*.C", "**/*.cs", "**/*.h", "**/*.hh", "**/*.hpp", "**/*.hxx", "**/*.h++", "**/*.H", "**/*.m", "**/*.mm"]
  interpreters: []
```

## Examples

**Before**

```c
int Foo(bool isBar)
    {
    if (isBar) {
        bar();
        return 1; }
    else
        return 0;
}

```

**After**

```c
int Foo(bool isBar)
{
    if (isBar) {
        bar();
        return 1;
    }
    else
        return 0;
}

```

**Before**

```c
/* FEOF example */
#include <stdio.h>
int main()
{
   FILE * pFile;
   char buffer [100];
   pFile = fopen ("myfile.txt" , "r");
   if (pFile == NULL) perror ("Error opening file");
   else {
     while ( ! feof (pFile) ) {
       if ( fgets (buffer , 100 , pFile) == NULL ) break;
       fputs (buffer , stdout);
     }
     fclose (pFile);
   }
   return 0;
}

```

**After**

```c
/* FEOF example */
#include <stdio.h>
int main()
{
    FILE * pFile;
    char buffer [100];
    pFile = fopen ("myfile.txt", "r");
    if (pFile == NULL) perror ("Error opening file");
    else {
        while ( ! feof (pFile) ) {
            if ( fgets (buffer, 100, pFile) == NULL ) break;
            fputs (buffer, stdout);
        }
        fclose (pFile);
    }
    return 0;
}

```


## Documentation

- http://astyle.sourceforge.net/astyle.html

[source]: https://github.com/restyled-io/restylers/blob/main/astyle/info.yaml
