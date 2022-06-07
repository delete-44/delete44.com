import React from "react";

// Wrapper for rendering icons
export default function IconLayout(props) {
  return (
    <a
      href={props.link}
      className={"flex-column inline-flex items-center mh0-ns mh2"}
    >
      {props.children}
      <small className={"tc pv0 mv0"}>{props.title}</small>
    </a>
  );
}
