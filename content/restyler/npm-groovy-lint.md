---
title: npm-groovy-lint
---

> **Version**: v14.6.0

This [Restyler][source] operates on **Groovy**, and will run automatically

## Configuration

```yaml
  image: restyled/restyler-npm-groovy-lint:v14.6.0
  command: ["npm-groovy-lint", "--fix"]
  arguments: []
  include: ["**/*.groovy"]
  interpreters: []
```

## Examples

**Before**

```groovy
def variable = 1;

pipeline {
    agent any
    options{ timestamps() }
    stages{ stage('') {
            steps {
                sh """
                """
            }
        }

        stage('Deploy')
        {
            steps {
                ansiColor('xterm') {
                    sh """
                    """
                }
            } } } }

```

**After**

```groovy
def variable = 1

pipeline {
    agent any
    options { timestamps() }
    stages { stage('') {
            steps {
                sh '''
                '''
            }
    }

        stage('Deploy')
        {
            steps {
                ansiColor('xterm') {
                    sh '''
                    '''
                }
            } } } }

```


## Documentation

- https://github.com/nvuillam/npm-groovy-lint#readme

[source]: https://github.com/restyled-io/restylers/blob/main/npm-groovy-lint/info.yaml
