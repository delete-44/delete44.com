import React from "react";
import IconLayout from "@layouts/icon_layout";

// Renders an SVG icon with a text label & a link to the resource.
export default function Bluesky(props) {
  return (
    <IconLayout link={process.env.blueskyLink} title="Bluesky">
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        fill="#0085FF"
        className="bi bi-cloud-fill w-100-ns w-75"
        viewBox="0 0 16 16"
        aria-hidden="true"
        aria-labelledby={"bluesky_title"}
        role="img"
      >
        <title id={"bluesky_title"}>Bluesky Logo</title>
        <path
          d="M4.406 3.342A5.53 5.53 0 0 1 8 2c2.69 0 4.923 2 5.166 4.579C14.758 6.804 16 8.137 16 9.773 16 11.569 14.502 13 12.687 13H3.781C1.708 13 0 11.366 0 9.318c0-1.763 1.266-3.223 2.942-3.593.143-.863.698-1.723 1.464-2.383z"
          className="lighten--dark"
        />
      </svg>
    </IconLayout>
  );
}
