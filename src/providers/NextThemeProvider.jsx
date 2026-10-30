"use client";

import { ThemeProvider } from "next-themes";

// Suppress the known React 19 warning in development
if (typeof window !== "undefined" && process.env.NODE_ENV === "development") {
    const originalError = console.error;

    console.error = (...args) => {
        if (
            typeof args[0] === "string" &&
            args[0].includes("Encountered a script tag")
        ) {
            return;
        }

        originalError(...args);
    };
}

const NextThemeProvider = ({ children }) => {
    return (
        <ThemeProvider
            attribute="class"
            defaultTheme="light"
            enableSystem
        >
            {children}
        </ThemeProvider>
    );
};

export default NextThemeProvider;