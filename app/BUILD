load("@io_bazel_rules_closure//closure:defs.bzl", "closure_js_library", "closure_js_binary")
load("//tools:jsx.bzl", "jsx")

jsx("index.js")
closure_js_library(
    name = "index",
    srcs = [
        "index.js",
    ]
)

closure_js_binary(
    name = "bundle",
#    output_wrapper = "",
    deps = [
        ":index",
        "//externs"
    ],
    defs = [
        "--parse_inline_source_maps",
        "--apply_input_source_maps",
        "--output_wrapper={%output%}//# sourceMappingURL=bundle.js.map"
    ]
)