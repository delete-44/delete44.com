import React from "react";
import IconLayout from "@layouts/icon_layout";

// Renders an SVG icon with a text label & a link to the resource.
export default function WriteAs(props) {
  return (
    <IconLayout link={process.env.writeAsLink} title="Write.as">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        height="64"
        width="64"
        viewBox="0 0 87.000001 86.999986"
        aria-hidden="true"
        aria-labelledby={"writeas_title"}
        role="img"
        className="w-100-ns w-75"
      >
        <title id={"writeas_title"}>Write.as Logo</title>
        <g transform="matrix(1.25 0 0 -1.25 -576.83 190.04)">
          <g transform="translate(501.2 129.78)">
            <path
              d="m0 0 5.805-20.007c0.285-1.016 0.586-2.114 0.902-3.293 0.32-1.18 0.609-2.266 0.871-3.258h0.066c0.145 0.992 0.387 2.058 0.727 3.207 0.344 1.144 0.656 2.187 0.941 3.133l2.797 9.172c0.211 0.66 0.399 1.257 0.567 1.789 0.164 0.531 0.336 1.019 0.511 1.468 0.18 0.446 0.348 0.871 0.516 1.274 0.164 0.402 0.352 0.801 0.567 1.203v0.07l-4.18-0.281v5.523h13.773v-4.64c-0.969 0-1.816-0.317-2.547-0.953-0.734-0.637-1.363-1.395-1.894-2.266-0.535-0.875-0.969-1.75-1.313-2.621-0.343-0.875-0.597-1.547-0.761-2.02l-8.25-23.972h-7.684l-4.992 15.472c-0.141 0.379-0.32 0.918-0.531 1.614-0.211 0.695-0.43 1.453-0.657 2.265-0.222 0.817-0.461 1.661-0.707 2.532-0.246 0.875-0.476 1.699-0.691 2.48h-0.07c-0.141-1.016-0.372-2.156-0.692-3.418-0.316-1.262-0.648-2.496-0.992-3.699-0.34-1.203-0.66-2.289-0.953-3.258-0.297-0.969-0.516-1.652-0.656-2.055l-4-11.933h-7.188l-8.781 25.14c-0.332 0.922-0.59 1.664-0.781 2.231-0.188 0.566-0.348 1.059-0.477 1.473-0.133 0.41-0.23 0.781-0.301 1.113-0.07 0.332-0.156 0.707-0.25 1.133l-2.832-0.141v5.523h17.387v-4.64c-1.016-0.07-1.73-0.375-2.145-0.918-0.414-0.543-0.617-1.242-0.617-2.09-0.023-0.402 0.004-0.828 0.086-1.273 0.086-0.45 0.196-0.911 0.34-1.383l2.441-8.852c0.286-1.062 0.559-2.179 0.832-3.347 0.27-1.168 0.489-2.356 0.657-3.559h0.07c0.117 0.52 0.234 1.051 0.356 1.594 0.117 0.543 0.246 1.129 0.386 1.754 0.145 0.625 0.309 1.312 0.496 2.054 0.192 0.742 0.414 1.563 0.676 2.457l5.309 18.203h7.863z"
              fill="#262424"
              className="lighten--dark"
            />
          </g>
          <g transform="translate(531.01 99.167)">
            <path
              d="m0 0c0-3.285-2.664-5.949-5.949-5.949s-5.945 2.664-5.945 5.949 2.66 5.949 5.945 5.949 5.949-2.664 5.949-5.949"
              fill="#5bc4ee"
            />
          </g>
        </g>
      </svg>
    </IconLayout>
  );
}
