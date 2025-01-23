"use client"

import React, { useEffect, useState } from "react"
import { AppRouterCacheProvider } from "@mui/material-nextjs/v13-appRouter"
import { ThemeProvider, createTheme, CssBaseline } from "@mui/material"
import "./globals.css"
import SearchAppBar from "@/components/SearchAppBar";

export default function RootLayout({ children }: { children: React.ReactNode }) {
    const [mode, setMode] = useState<"light" | "dark">("light")

    useEffect(() => {
        const mediaQuery = window.matchMedia("(prefers-color-scheme: dark)")
        setMode(mediaQuery.matches ? "dark" : "light")

        const handler = () => setMode(mediaQuery.matches ? "dark" : "light")
        mediaQuery.addEventListener("change", handler)
        return () => mediaQuery.removeEventListener("change", handler)
    }, [])

    const theme = React.useMemo(
        () =>
            createTheme({
                palette: {
                    mode,
                    ...(mode === "light"
                        ? {
                            primary: {
                                main: "#1976d2",
                            },
                            background: {
                                default: "#f5f5f5",
                                paper: "#ffffff",
                            },
                            text: {
                                primary: "#333333",
                                secondary: "#666666",
                            },
                        }
                        : {
                            primary: {
                                main: "#90caf9",
                            },
                            background: {
                                default: "#303030",
                                paper: "#424242",
                            },
                            text: {
                                primary: "#ffffff",
                                secondary: "#b0b0b0",
                            },
                        }),
                },
            }),
        [mode],
    )

    return (
        <html lang="en">
        <body>
        <AppRouterCacheProvider>
            <ThemeProvider theme={theme}>
                <SearchAppBar/>
                <CssBaseline />
                {children}
            </ThemeProvider>
        </AppRouterCacheProvider>
        </body>
        </html>
    )
}

