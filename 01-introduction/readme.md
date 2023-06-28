# Introduction

The command to initialize the config file for typescript is:

```c
tsc --init
```

we can alterate the "outDir": "./build/js" and "rootDir": "./src"
it will actually depend on the project's configuration.

also in the end of the tsconfig.json file we need to set, "include": ["src"], so it will ignore any file.ts that is outside of my src directory.
