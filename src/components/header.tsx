import React from "react";
import Link from "next/link";

function Header() {
    return (
        <div className="flex bg-green-500 p-3 gap-5">
            <Link href="/">Home</Link>
            <Link href="/dashboard">Dashboard</Link>
            <Link href="/blog">Blog</Link>
            <Link href="/contact-us">Contact-us</Link>
            <Link href="/dashboard/Analytics">Analytics</Link>
            <Link href="/dashboard/settings">Settings</Link>
            <Link href="/dashboard/settings/Password">Password</Link>
            <Link href="/dashboard/settings/Info">info</Link>

        </div>
    )
}

export default Header;