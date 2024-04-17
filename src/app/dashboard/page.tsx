import React from "react";
import Link from "next/link";

export default function Dashboard() {
    return(
        <main className="p-5">
            <p className="font-bold">This is Dashboard Page</p>
            <div className="flex gap-5 flex-col mt-5">
                <Link href={"/dashboard/analytics"}>analytics</Link>
                <Link href={"/dashboard/settings"}>settings</Link>
            </div>
        </main>
    )
}