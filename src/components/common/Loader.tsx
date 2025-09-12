// components/common/Loader.tsx
"use client";

import React, { useEffect, useState } from "react";
import {  LoaderFour } from "@/components/ui/loader"; // jitne bhi loaders chahiye import karo



export function LoaderFourDemo() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 1500);
    return () => clearTimeout(timer);
  }, []);

  if (!loading) return null;

  return (
    <div className="fixed inset-0 z-[2000] flex items-center justify-center bg-black/90">
      <LoaderFour text="Loading..." />
    </div>
  );
}
