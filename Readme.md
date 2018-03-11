# Modern React + Closure + Bazel workflow

Build the bundle with:
```bash
bazel build //app:bundle
```

Currently runs at 881b after es6 transpilation and minification. Can you make a smaller equivalent example? [Babel makes 2.1kb](https://babeljs.io/repl/#?babili=true&browsers=&build=&builtIns=false&code_lz=FAYwNghgzlAECCAHRsCmAPALqgdgEzgCVUIRMA6AYQHsBbRanXTWAb2Fk9hEakwCcArmWr8AFIn7VEUADTdG2LAEo2HLhqiDEqcZOlyFOJZmUBudRs6YAFgEso5PhGywAvGqteFg47oBcsAAMspbe1tQA5pFgqHiBAGYQYFCoYRoAvhbhqZgAkn78AG7JYmKqbgB8nuFctg5OqJgAypguqGXO2BXV7LXe_E2C_DhsPL7Y_IFdqOTjhbAA1LAAjFnp3hnmG5wZ8itBh9uZwGGYUTGore3lNV71jrnX2J1t3e69O1aDmMOjrOdorF4rAAIQzciAy54dbhLbZLgZU4aAD0ACo0bAAALUIq6fh2PCoWBolFhQb4XS3PoDIYjWAAHjwdiKlS-nCZLMq-kQgQB9kcPMcNlQYDA1AyDJRzNZ7MZMsqMz5Dycb1m80mkulXLlDIARoJMOdRoxKGA7CAANZufkNKGxZ6zPV2fBiB7KDKVW2PNWQi7A2AAflgACJGCHYIEwwkEiGtQajYw2eEpQqEbtgEjQLwWKLULRmO5YHhqCBBAXjORIk0AKKxCuYABCAE88ngxAByCDIAC0tGoEw72x4OD4sG7KA8DKQKBFYuobhDc_F1FXIcqUpnlQsdgSsDEeYbsAAZMfx8hVDTYMRSJgACIAeQAsuQKUTxBP5IfmNskUA&debug=false&forceAllTransforms=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=true&lineWrap=true&presets=es2015%2Creact%2Cstage-2%2Cbabili&prettier=true&targets=&version=6.26.0&envVersion=).

Features:
- Full type checking
- Minification of member variables and methods of the App class.
- Source maps out of the box

### TODO:
- Can we further minify the React.xxx apis? aka replace `React.createElement()` with `var a = React.createElement; a();`
- Bug in closure that can't compose source maps with jsx properly
