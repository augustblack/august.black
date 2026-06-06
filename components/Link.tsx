import { Component, JSX, Show } from "solid-js";

export type LinkProps = {
  href: string
  external?: true
  class?: string
  //typeof(Class)
  children: JSX.Element
}

export const LinkPlain: Component<LinkProps> = (props) => (
  <Show when={props.external} fallback={<a class={props.class} href={props.href}>{props.children}</a>}>
    <a target="_blank" class={props.class} href={props.href} rel="noreferrer">{props.children}</a>
  </Show>
)

export const Link: Component<LinkProps> = (props) => (
  <LinkPlain
    external={props.external}
    class={'bg-accent text-accent-content pl-1 pr-1  rounded ' + props.class}
    href={props.href}
  >
    {props.children}
  </LinkPlain>
)
