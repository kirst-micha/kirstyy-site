"use client";

import { useEffect } from "react";

export default function MouseGlow() {
  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      document.body.style.setProperty("--mouse-x", e.clientX + "px");
      document.body.style.setProperty("--mouse-y", e.clientY + "px");
    };

    document.addEventListener("mousemove", handleMouseMove);
    return () => document.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return null;
}