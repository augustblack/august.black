import "./style.css";
import "./tailwind.css";
import type { JSX } from "solid-js";

export default function LayoutDefault(props: { children?: JSX.Element }) {
  return (
    <div class={"flex flex-col w-full p-4"}>
      {props.children}
    </div>
  )
}
