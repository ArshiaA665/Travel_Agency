"use client";

import AppHome from "./app_home";
import { TextGenerateEffectDemo } from "./app_body";
import { TracingBeam } from "@/constants/tracing-beam";

export function TracingBeamDemo() {
  return (
    <TracingBeam className="px-6">
      <div className="max-w-2xl mx-auto antialiased pt-4 relative">
        <AppHome/>
        <TextGenerateEffectDemo/>
       
      </div>
    </TracingBeam>
  );
}

