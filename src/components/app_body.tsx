"use client";
import { TextGenerateEffect } from "./ui/text-generate-effect";
const words = `Welcome to the future. Experience the best of our services where we can help you where you want to travel to 
`;

export function TextGenerateEffectDemo() {
  return (
  <TextGenerateEffect words={words} />
  )
}