import * as React from "react";
import { SVGProps } from "react";
const CrossIcon = (props: SVGProps<SVGSVGElement>) => (
    <svg
        width={20}
        height={20}
        focusable="false"
        xmlns="http://www.w3.org/2000/svg"
        viewBox="0 0 24 24"
        {...props}
    >
        <path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.58 12 5 17.58 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" />
    </svg>
);
export default CrossIcon;
