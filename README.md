# cmath.gs

> complex numbers in goboscript

This is a complex math library which is built for [goboscript](https://github.com/aspizu/goboscript).
It is designed to be used with [inflator](https://github.com/faretek1/inflator).

> [!INFO]
> This uses the `c_` prefix

## Credits

various things that i looked at 2+ years ago

## Installation

Make sure you have inflator installed

`inflate install https://github.com/FAReTek1/cmath`

add cmath to your `inflator.toml` config:
```toml
[dependencies]
# ...
cmath = "https://github.com/FAReTek1/cmath"
```

## Development

use `inflate install -e .`:

1. clone the respository: `git clone https://github.com/FAReTek1/cmath`
2. `cd cmath`
3. `inflate install -e .`
4. `cd test`
5. `inflate`
6. `goboscript build`
7. open `test.sb3`
