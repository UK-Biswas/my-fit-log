"use client";

import Link from "next/link";

export default function NotFound() {
    return (
        <main className="flex min-h-screen items-center justify-center bg-[#0d0f13] px-4 text-white">
            <div className="text-center">

                <p className="text-7xl font-bold text-[#baff00]">
                    404
                </p>

                <h1 className="mt-4 text-2xl font-bold">
                    Page Not Found
                </h1>

                <p className="mt-2 text-sm text-gray-500">
                    The page or exercise you are looking for does not exist.
                </p>

                <Link
                    href="/"
                    className="mt-6 inline-flex rounded-full bg-[#baff00] px-5 py-2.5 text-sm font-semibold text-black transition hover:bg-[#caff33]"
                >
                    Go Home
                </Link>

            </div>
        </main>
    );
}