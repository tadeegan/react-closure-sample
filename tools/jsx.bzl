def jsx(name):
    jsxfile = name + "x"
    native.genrule(
        name = name,
        srcs = [
            jsxfile,
        ],
        cmd = "babel $(location " + jsxfile + ") --presets /usr/local/lib/node_modules/babel-preset-react --source-maps inline >  $@",
        outs = [
            name,
        ]
    )