# Demo Pokedex TDD and Clean Archi

## Main Purpose of this project
I made this project to test the straight and the flexibility of TDD with a Clean Architecture implementation.
I wanted here to make an app than can run either with inMemory data or with data comming form a rest API called PokeApi.
But i also want to be able to switch between front-end framework VueJs and ReactJs.
The same 'core Domain' is used for those 4 scenarios switch possibility due to the use of Clean Architecture principle.
I implemented the core Domain in a way to make it completely independent from the data source and from the render framework.

## Project setup
```
npm install
```

### Source Data : InMemory / VueJs 
```
npm run serve:vue:inmemory
```

### Source Data : REST API / VueJs 
```
npm run serve:vue:dev:rest
```

### Source Data : InMemory / React 
```
npm run serve:react:inmemory
```

### Source Data : REST API / React 
```
npm run serve:react:dev:rest
```

### Run your unit tests
```
npm run test:unit
```

### Lints and fixes files
```
npm run lint
```

