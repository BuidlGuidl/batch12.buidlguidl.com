"use client";

import * as React from "react";
import { useEffect } from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export const ThemeProvider = ({ children, ...props }: ThemeProviderProps) => {
  useEffect(() => {
    if (typeof window !== "undefined") {
      const observer = new MutationObserver(mutations => {
        mutations.forEach(mutation => {
          if (mutation.attributeName === "class") {
            const isDark = document.documentElement.classList.contains("dark");
            const iconLink = document.querySelector('link[rel="icon"]');
            if (iconLink) {
              iconLink.setAttribute("href", isDark ? "/logo-white.png" : "/logo.svg");
            }
          }
        });
      });

      observer.observe(document.documentElement, {
        attributes: true,
        attributeFilter: ["class"],
      });

      return () => observer.disconnect();
    }
  }, []);

  return <NextThemesProvider {...props}>{children}</NextThemesProvider>;
};
