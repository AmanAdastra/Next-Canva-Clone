"use client"
import * as React from "react";

import {NextUIProvider} from "@nextui-org/react";

function AppThemeProvider({children}) {
  return (
    <NextUIProvider>
        {children}
    </NextUIProvider>
  );
}

export default AppThemeProvider