# Modern React + Closure + Bazel workflow

Build the bundle with:
```bash
bazel build //app:bundle
```

Currently runs at 881b after es6 transpilation and minification. Can you make a smaller equivalent example?

Features:
- Full type checking
- Minification of member variables and methods of the App class.
- Source maps out of the box

### TODO:
- Can we further minify the React.xxx apis? aka replace `React.createElement()` with `var a = React.createElement; a();`
- Bug in closure that can't compose source maps with jsx properly
