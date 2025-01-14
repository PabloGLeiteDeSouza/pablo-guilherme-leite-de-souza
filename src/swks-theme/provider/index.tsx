import React, { createContext, useCallback, useEffect, useState } from "react";
import { ThemeContextType, ThemeProviderProps } from "./types";

export const ThemeContext = createContext<ThemeContextType>({
    theme: "light",
    setTheme: () => {},
    toggleThemeDefault: () => {},
    toggleThemeDefaultDOM: () => {},
    toggleThemeCustom: () => {},
    toggleThemeCustomDOM: () => {},
    EventConfig: {
        setThemeConfig: { type: "attribute", value: "data-set-theme" },
        chooseThemeConfig: { type: "attribute", value: "data-choose-theme" },
        toggleThemeDefaultConfig: {
            type: "attribute",
            value: "data-toggle-default-theme",
        },
        toggleThemeCustomConfig: {
            type: "attribute",
            value: "data-toggle-custom-theme",
        },
    },
});

export function ThemeProvider({ children, config }: ThemeProviderProps) {
    const [theme, SetTheme] = useState("light");
    const [isload, setIsLoad] = useState(true);
    const DefaultTheme = config.DefaultTheme;
    const StorageKey = config.StorageKey ? config.StorageKey : "theme";
    const DocumentAttributeKey = config.DocumentAttributeKey
        ? config.DocumentAttributeKey
        : "data-theme";
    const EventConfig = config.EventConfig;

    const setTheme = useCallback(
        (theme: string) => {
            localStorage.setItem(StorageKey, theme);
            document.documentElement.setAttribute(DocumentAttributeKey, theme);
            SetTheme(theme);
        },
        [StorageKey, DocumentAttributeKey]
    );

    const toggleThemeDefault = useCallback(() => {
        return setTheme(theme === "light" ? "dark" : "light");
    }, [setTheme, theme]);

    const toggleThemeDefaultDOM = useCallback(
        () =>
            setTheme(
                localStorage.getItem(StorageKey) === "light" ? "dark" : "light"
            ),
        [StorageKey, setTheme]
    );

    const toggleThemeCustom = useCallback(
        (themes: string[]) => {
            const index = themes.findIndex((e) => {
                return e === theme;
            });

            if (index + 1 < themes.length) {
                setTheme(themes[index + 1]);
            } else {
                setTheme(themes[0]);
            }
        },
        [setTheme, theme]
    );

    const toggleThemeCustomDOM = useCallback(
        (themes: string[]) => {
            const index = themes.findIndex((e) => {
                return e === localStorage.getItem(StorageKey);
            });

            if (index + 1 < themes.length) {
                setTheme(themes[index + 1]);
            } else {
                setTheme(themes[0]);
            }
        },
        [StorageKey, setTheme]
    );

    const startCallback = useCallback(() => {
        const StoredTheme = localStorage.getItem(StorageKey);
        const DocumentTheme =
            document.documentElement.getAttribute(DocumentAttributeKey);
        if (StoredTheme) {
            setTheme(StoredTheme);
        } else if (DefaultTheme) {
            setTheme(DefaultTheme);
        } else if (DocumentTheme) {
            setTheme(DocumentTheme);
        } else {
            setTheme("light");
        }
    }, [DefaultTheme, setTheme, StorageKey, DocumentAttributeKey]);

    useEffect(() => {
      startCallback();
      setIsLoad(false);
      console.log("rederizou agora use");
    }, [startCallback]);

    if (isload) {
      return "carregando"
    }

    return (
        <ThemeContext.Provider
            value={{
                theme,
                setTheme,
                toggleThemeDefault,
                toggleThemeDefaultDOM,
                toggleThemeCustom,
                toggleThemeCustomDOM,
                EventConfig,
            }}
        >
            {children}
        </ThemeContext.Provider>
    );
}
