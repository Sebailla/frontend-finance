import localFont from "next/font/local";

export const sfProDisplay = localFont({
    src: [
        {
            path: "./SFProDisplay/SF-Pro-Display-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./SFProDisplay/SF-Pro-Display-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./SFProDisplay/SF-Pro-Display-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./SFProDisplay/SF-Pro-Display-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sf-pro-display",
    display: "swap",
});

export const sfProText = localFont({
    src: [
        {
            path: "./SFProText/SF-Pro-Text-Regular.otf",
            weight: "400",
            style: "normal",
        },
        {
            path: "./SFProText/SF-Pro-Text-Medium.otf",
            weight: "500",
            style: "normal",
        },
        {
            path: "./SFProText/SF-Pro-Text-Semibold.otf",
            weight: "600",
            style: "normal",
        },
        {
            path: "./SFProText/SF-Pro-Text-Bold.otf",
            weight: "700",
            style: "normal",
        },
    ],
    variable: "--font-sf-pro-text",
    display: "swap",
});