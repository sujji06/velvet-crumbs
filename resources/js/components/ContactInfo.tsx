import { MapPin, Phone, Mail, Clock } from "lucide-react";

export default function ContactInfo() {
    return (
        <section className="bg-[#FCF8F3] py-24">

            <div className="mx-auto grid max-w-7xl gap-8 px-6 md:grid-cols-2 lg:grid-cols-4">

                <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

                    <MapPin className="mx-auto mb-5 text-[#A67C52]" size={40} />

                    <h3 className="mb-3 text-xl font-semibold text-[#3E2723]">
                        Visit Us
                    </h3>

                    <p className="text-gray-600">
                        24 Bakery Street
                        <br />
                        Chennai, Tamil Nadu
                    </p>

                </div>

                <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

                    <Phone className="mx-auto mb-5 text-[#A67C52]" size={40} />

                    <h3 className="mb-3 text-xl font-semibold text-[#3E2723]">
                        Call
                    </h3>

                    <p className="text-gray-600">
                        +91 98765 43210
                    </p>

                </div>

                <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

                    <Mail className="mx-auto mb-5 text-[#A67C52]" size={40} />

                    <h3 className="mb-3 text-xl font-semibold text-[#3E2723]">
                        Email
                    </h3>

                    <p className="text-gray-600">
                        hello@velvetcrumbs.com
                    </p>

                </div>

                <div className="rounded-3xl bg-white p-8 text-center shadow-lg">

                    <Clock className="mx-auto mb-5 text-[#A67C52]" size={40} />

                    <h3 className="mb-3 text-xl font-semibold text-[#3E2723]">
                        Opening Hours
                    </h3>

                    <p className="text-gray-600">
                        Mon - Sun
                        <br />
                        9 AM - 9 PM
                    </p>

                </div>

            </div>

        </section>
    );
}