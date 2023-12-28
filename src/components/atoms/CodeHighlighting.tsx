"use client";
import { useEffect } from "react";
import Prism from "prismjs";
import "@/../prism-themes/themes/prism-vsc-dark-plus.css";
require("prismjs/components/prism-jsx");
require("prismjs/components/prism-typescript");

export default function CodeHighlighting() {
  useEffect(() => {
    if (window) {
      Prism.highlightAll();
    }
  }, []);
  return null;
}
