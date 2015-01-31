# fj-and

[![Build Status](https://travis-ci.org/fp-js/fj-and.svg)](https://travis-ci.org/fp-js/fj-and) [![npm version](https://badge.fury.io/js/fj-and.svg)](http://badge.fury.io/js/fj-and)
> x && y

## Installation

`npm install fj-and --save`

## Usage

```js
var and = require('fj-and');

let T = () => true;
let F = () => false;

and(T, T)()); // => true
and(T)(T)()); // => true
and(T, F)()); // => false
and(F, F)()); // => false
and(F, F)()); // => false
```


## API

### and

`and(p1, p2)`

***Parameters***

| Name          | Type        | Description                           |
| ------------- | ----------- | --------------------------            |
| p1            | function    | A function that returns true or false |
| p2            | function    | A function that returns true or false |

***Returns***

| Type        | Description                                                    |
| ----------- | --------------------------                                     |
| function    | Returns a function which returns true if p1 and p2 return true |
