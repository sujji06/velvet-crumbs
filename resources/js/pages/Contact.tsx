import { Head } from "@inertiajs/react";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

import ContactHero from "@/components/ContactHero";
import ContactInfo from "@/components/ContactInfo";
import ContactForm from "@/components/ContactForm";

export default function Contact() {
    return (
        <>
            <Head title="Contact | Velvet Crumbs" />

            <Navbar />

            <ContactHero />

            <ContactInfo />

            <ContactForm />

            <Footer />
        </>
    );
}