import React from "react";
import Link from "next/link";

export default function Home() {
  return(
    <main className="p-5">
      <p className="front-bold">This is Home Page. I am a web developer if you see my all detail click on information</p>
      <div className="flex gap-5 flex-col mt-5">
        <Link href={"/dashboard/settings/Info"}>Info-Page</Link>
        <Link href={"/dashboard"}>Dashboard-Page</Link>
      </div>
    </main>
  )
}
