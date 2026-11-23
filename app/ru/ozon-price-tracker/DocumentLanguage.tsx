"use client";

import { useEffect } from "react";

export function DocumentLanguage() {
  useEffect(() => {
    document.documentElement.lang = "ru";
    return () => { document.documentElement.lang = "en"; };
  }, []);

  return null;
}
