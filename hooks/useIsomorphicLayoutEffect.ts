import { useEffect, useLayoutEffect } from "react";

// Use layout effect only in the browser to avoid Next.js SSR warnings
export const useIsomorphicLayoutEffect =
  typeof window !== "undefined" ? useLayoutEffect : useEffect;
