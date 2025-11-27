"use client";

import { useEffect } from "react";

export default function ChildComponent() {
  useEffect(() => {
    console.log("Child Component with useEffect");
  }, []);
  return <div>Child Component with useEffect</div>;
}
