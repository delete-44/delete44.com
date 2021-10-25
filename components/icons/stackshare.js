import React from "react";
import IconLayout from "@layouts/icon_layout";

// Renders an SVG icon with a text label & a link to the resource.
// Accepts "vertical" prop that dictates position of the text label,
// and a "footerLink" prop that changes the aria id when rendering in footer
export default function StackShare(props) {
  return (
    <IconLayout
      link={process.env.stackshareLink}
      title="StackShare"
      horizontal={props.horizontal}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="64"
        height="64"
        viewBox="0 0 256 228"
        preserveAspectRatio="xMidYMid"
        aria-hidden="true"
        aria-labelledby={`stackshare_${
          props.footerLink ? "footer_link" : "title"
        }`}
        role="img"
        className="w-100-ns w-75"
      >
        <title id={`stackshare_${props.footerLink ? "footer_link" : "title"}`}>
          StackShare Logo
        </title>
        <path
          d="M231.347 0C244.96 0 255.995 10.893 256 24.336c-.005 0-.005 178.422-.005 178.422 0 13.439-11.035 24.336-24.648 24.336H24.652C11.038 227.094 0 216.197 0 202.758V24.336C0 10.893 11.038 0 24.652 0h206.695z"
          fill="#0090F9"
          className="lighten--dark"
        />
        <path
          d="M195.959 136.499c-9.505 0-17.703 5.695-21.37 13.852h-29.767l-11.7-36.961 11.857-36.75h29.567c3.64 8.212 11.868 13.96 21.413 13.96 12.915 0 23.42-10.506 23.42-23.421s-10.505-23.42-23.42-23.42c-9.095 0-16.988 5.215-20.867 12.808h-37.314a10.04 10.04 0 0 0-9.512 6.824l-13.531 40.068h-33.16C77.993 95.104 69.693 89.24 60.041 89.24c-12.912 0-23.42 10.505-23.42 23.42 0 12.912 10.508 23.417 23.42 23.417 8.992 0 16.809-5.095 20.732-12.545h33.804l13.535 40.068a10.031 10.031 0 0 0 9.509 6.824h37.42c3.856 7.652 11.783 12.912 20.918 12.912 12.915 0 23.42-10.505 23.42-23.42 0-12.912-10.505-23.417-23.42-23.417zm0-80.195c5.996 0 10.875 4.879 10.875 10.875s-4.879 10.875-10.875 10.875-10.871-4.88-10.871-10.875c0-5.996 4.875-10.875 10.871-10.875zM60.041 123.532c-5.996 0-10.871-4.879-10.871-10.871 0-5.997 4.875-10.875 10.871-10.875s10.875 4.878 10.875 10.875c0 5.992-4.879 10.871-10.875 10.871zm135.918 47.258c-5.996 0-10.871-4.879-10.871-10.875s4.875-10.871 10.871-10.871 10.875 4.875 10.875 10.871-4.879 10.875-10.875 10.875z"
          fill="#FFF"
          className="darken--dark"
        />
      </svg>
    </IconLayout>
  );
}
