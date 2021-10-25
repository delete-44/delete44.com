import React from "react";

// Wrapper for rendering icons; accepts a "vertical" prop that
// dictates where link text is positioned
export default function IconLayout(props) {
  return (
    <a
      href={props.link}
      className={`${
        props.vertical ? "flex-column" : "flex pb1"
      } inline-flex items-center mh0-ns mh2`}
    >
      {props.children}

      <small className={`${props.vertical ? "tc" : "ml2"} pv0 mv0`}>
        {props.title}
      </small>
    </a>
  );
}
