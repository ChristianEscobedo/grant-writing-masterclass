"use client";

import * as React from "react";
import { ThemeProvider as NextThemesProvider } from "next-themes";
import { type ThemeProviderProps } from "next-themes/dist/types";

export function ThemeProvider({ children, ...props }: ThemeProviderProps) {
  const [mounted, setMounted] = React.useState(false);

  // Ensure hydration completes before rendering to avoid mismatch
  React.useEffect(() => {
    setMounted(true);
  }, []);

  // Only render children once mounted on client to avoid hydration mismatch
  return (
    <NextThemesProvider {...props}>
      {mounted ? children : <div style={{ visibility: "hidden" }}>{children}</div>}
    </NextThemesProvider>
  );
}
