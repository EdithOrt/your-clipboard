"use client";

import { ClipboardDataProvider } from "@/contexts/clipboardData";
import { ReactNode } from "react";

export function Providers({ children }: { children: ReactNode }) {
  return <ClipboardDataProvider>{children}</ClipboardDataProvider>;
}
