# Angular 5 Dynamic Remote Module Loading (with AOT support)

This proof of concept is split into two components, a server that builds and serves an Angular module w/ component and an Angular-CLI generated client/frontend that dynamically loads the remote module over HTTP using SystemJS. Use cases include widget dashboards that can load third-party widgets/components remotely on load or via a URL versioning system for example. This work was inspired by Maxim Koretskyi's [talk](https://www.youtube.com/watch?v=pERhnBBae2k) that uses webpack and my good colleagues [work here](https://github.com/paucls/angular-pluggable-architecture).

## Install

```
cd server && yarn
cd client && yarn
```

## Run

```
cd server && yarn build && yarn start &
cd client && yarn build && yarn start &
```

## TODO

* Refactor client code a bit into providers and modules
* Try more complex modules/component arrangments 
