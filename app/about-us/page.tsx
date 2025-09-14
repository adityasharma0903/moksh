import React from "react";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { Team } from "@/components/team";

export default function AboutUs() {
  return (
    <main className="bg-black text-white min-h-screen">
      <SiteNav />
      <section className="max-w-6xl mx-auto px-4 py-8">
        <Team />
      </section>
      <SiteFooter />
    </main>
  );
}