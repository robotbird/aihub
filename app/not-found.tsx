import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="min-h-screen bg-[#e8e6e1] flex items-center justify-center px-4">
      <div className="text-center">
        <h1 className="text-6xl md:text-8xl font-bold text-[#d97642] mb-4">404</h1>
        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 mb-4">
          Page Not Found
        </h2>
        <p className="text-gray-600 mb-8 text-sm md:text-base">
          The page you're looking for doesn't exist or has been moved.
        </p>
        <Link href="/">
          <Button className="bg-[#d97642] hover:bg-[#c26635] text-white">
            <Home className="w-4 h-4 mr-2" />
            Back to Home
          </Button>
        </Link>
      </div>
    </main>
  );
}

