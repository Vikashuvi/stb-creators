"use client";

import useDocumentTitle from "@/hooks/useDocumentTitle";

export default function DocumentTitleChanger() {
  useDocumentTitle({
    defaultTitle: "STB Creators",
    onBlurTitle: "Hey!!!!",
  });

  // This component doesn't render anything
  return null;
}
