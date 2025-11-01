"use client";

import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { AlertCircle } from "lucide-react";

export default function Error({
  error,
  reset,
}: {
  error: Error & { digest?: string };
  reset: () => void;
}) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <main className="min-h-screen bg-[#e8e6e1] flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <AlertCircle className="w-16 h-16 text-[#d97642] mx-auto mb-4" />
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Something went wrong!
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          An error occurred while loading this page. Please try again.
        </p>
        <Button
          onClick={reset}
          className="bg-[#d97642] hover:bg-[#c26635] text-white"
        >
          Try again
        </Button>
      </div>
    </main>
  );
}

