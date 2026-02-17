"use client";

import { Link } from "@/i18n/routing";

interface ErrorPageProps {
  error: Error & { digest?: string };
  reset: () => void;
}

export default function Error({ reset }: ErrorPageProps) {
  return (
    <div className="min-h-screen bg-background flex items-center justify-center px-4">
      <div className="text-center max-w-md">
        <div className="w-16 h-16 mx-auto mb-6 rounded-full bg-red-500/10 flex items-center justify-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-8 h-8 text-red-400"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M12 9v3.75m9-.75a9 9 0 1 1-18 0 9 9 0 0 1 18 0Zm-9 3.75h.008v.008H12v-.008Z"
            />
          </svg>
        </div>
        <h2 className="text-2xl font-bold text-white mb-3">Something went wrong</h2>
        <p className="text-text-secondary mb-8">
          An unexpected error occurred. Please try again or return to the home page.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-3">
          <button
            onClick={reset}
            className="px-6 py-3 bg-accent-blue text-white font-medium rounded-lg hover:bg-accent-blue/90 transition-colors"
          >
            Try again
          </button>
          <Link
            href="/"
            className="px-6 py-3 border border-border text-text-secondary font-medium rounded-lg hover:bg-surface transition-colors"
          >
            Go home
          </Link>
        </div>
      </div>
    </div>
  );
}
