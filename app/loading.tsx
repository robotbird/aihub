export default function Loading() {
  return (
    <main className="min-h-screen bg-[#e8e6e1] flex items-center justify-center">
      <div className="text-center">
        <div className="inline-block animate-spin rounded-full h-12 w-12 border-4 border-[#d97642] border-t-transparent"></div>
        <p className="mt-4 text-gray-600 text-sm">Loading...</p>
      </div>
    </main>
  );
}

