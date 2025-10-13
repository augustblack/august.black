import { Component, JSX } from "solid-js";

export type LinkProps = {
  href: string
  external?: true
  class?: string
  //typeof(Class)
  children: JSX.Element
}

export const LinkPlain: Component<LinkProps> = (props) =>
  props.external ? (
    <a target="_blank" class={props.class} href={props.href} rel="noreferrer">{props.children}</a>
  ) : (
    <a href={props.href} class={props.class}>{props.children}</a>
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
