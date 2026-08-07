import { Head } from "@inertiajs/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import OurStory from "@/components/OurStory";
import Timeline from "@/components/Timeline";
import ChefSection from "@/components/ChefSection";
import Stats from "@/components/Stats";
import AboutHero from "@/components/AboutHero";


export default function About() {
    return (
        <>
            <Head title="About | Velvet Crumbs" />

            <div className="min-h-screen bg-[#FCF8F3]">

                <Navbar />

                <AboutHero />

                <OurStory />

                <Timeline />

                <ChefSection />

                <Stats />

                <Footer />

            </div>
        </>
    );
}