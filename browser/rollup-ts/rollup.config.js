import typescript from "@rollup/plugin-typescript";
import resolve from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import serve from "./node_modules/rollup-plugin-serve";
import livereload from "rollup-plugin-livereload";
import { copyFileSync } from "fs";

// Copy HTML file to dist
copyFileSync("src/index.html", "dist/index.html");

export default {
  input: "src/index.ts",
  output: {
    file: "dist/bundle.js",
    format: "iife",
    sourcemap: true,
  },
  plugins: [
    typescript(),
    resolve({
      browser: true,
    }),
    commonjs(),
    serve({
      open: true,
      contentBase: "dist",
      port: 8080,
    }),
    livereload("dist"),
  ],
};
