# Notes
## Use yarn
Since pixelmagic / problemsource use a lot of singletons across packets (yes, on the TODO list to change to DI), it's important that only one version each of these libraries exists in node_modules, otherwise the SOME_CLASS.instance will have one instance per version.
For this reason, use yarn rather than npm (which does its housekeeping less well).  

## tsc target is 'esnext'
Several of the libraries are ES6. If target should be es5, a transpiler (babel) needs to be added.

## /assets not included
These are currently unlicenced, and are needed to run. 