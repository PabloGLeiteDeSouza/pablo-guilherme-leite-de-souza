"use client"

import LoadScreen from "@/components/LoadScreen";
import Navbar from "@/components/Navbar";
import { ThemeProvider } from "@/swks-theme";
import { Suspense } from "react";

interface AppProps{
    children: React.ReactNode
}

const App: React.FC<AppProps> = ({children}) => {
    return (
        <>  
            <ThemeProvider config={{ DefaultTheme: "default", StorageKey: "theme", EventConfig: { setThemeConfig: { type: "name", value: "theme-dropdown" } } }} >
                <Navbar />
                {children}
            </ThemeProvider>
        </>
    )
}

export default App;