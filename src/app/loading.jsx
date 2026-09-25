export default function Loading() {
  return (
    <main className="flex min-h-screen items-center justify-center bg-[#0d0f13]">
      <div className="flex flex-col items-center gap-4">

        <div className="h-10 w-10 animate-spin rounded-full border-4 border-gray-700 border-t-[#baff00]" />

        <p className="text-sm text-gray-400">
          Loading exercises...
        </p>

      </div>
    </main>
  );
}