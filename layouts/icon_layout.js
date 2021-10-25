import React from "react";

// Wrapper for rendering icons; accepts a "horizontal" boolean
// prop that dictates where link text is positioned
export default function IconLayout(props) {
  return (
    <a
      href={props.link}
      className={`${
        props.horizontal ? "flex pb1" : "flex-column"
      } inline-flex items-center mh0-ns mh2`}
    >
      {props.children}

      <small className={`${props.horizontal ? "ml2" : "tc"} pv0 mv0`}>
        {props.title}
      </small>
    </a>
  );
}
