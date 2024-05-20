import type {Config} from "tailwindcss";

const config: Config = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        extend: {
            backgroundImage: {
                "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
                "gradient-conic":
                    "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
            },
            colors: {
                brand: {
                    "black-russian": {
                        "400": "rgba(8,3,37,.4)",
                        "800": "rgba(8,3,37,.8)",
                    },
                    granite: "#808080",
                    cloud: "#C4C4C4",
                    "pumpkin-orange": "#ff7a21",
                }
            },
            boxShadow: {
                "header": "0 2px 5px 0 rgba(0,0,0,.16),0 2px 10px 0 rgba(0,0,0,.12)"
            },
            fontFamily: {
                "arial": ["Arial"],
                "rajdhani": ["Rajdhani"]
            }
        },
    },
    plugins: [],
};
export default config;
