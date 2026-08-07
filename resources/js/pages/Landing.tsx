import { Head } from "@inertiajs/react";

import Navbar from "@/components/Navbar";
import Hero from "@/components/Hero";

import About from "@/components/About";

import SignatureCakes from "@/components/SignatureCakes";

import Footer from "@/components/Footer";

export default function Landing() {
    return (
        <>
            <Head title="Velvet Crumbs" />

            <div className="min-h-screen bg-[#FCFAF7]">

                <Navbar />

                <Hero />

                <About />

                <SignatureCakes />

                <Footer />

            </div>
        </>

        
    );
}