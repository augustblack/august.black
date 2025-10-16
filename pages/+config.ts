import type { Config } from "vike/types";
import vikeSolid from "vike-solid/config";
import Layout from "../layouts/LayoutDefault.js";

export default {
  Layout,
  title: "august black",
  description: "the black august of time and space",
  extends: vikeSolid,
  prerender: true,
  bodyAttributes: { class: 'overscroll-none' }
} satisfies Config;
