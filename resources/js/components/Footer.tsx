import { Facebook, Instagram, Mail, MapPin, Phone } from "lucide-react";

export default function Footer() {
    return (
        <footer className="bg-[#3E2723] text-[#F8F3EC]">
            <div className="mx-auto max-w-7xl px-6 py-16 lg:px-10">

                <div className="grid gap-12 md:grid-cols-2 lg:grid-cols-4">

                    {/* Brand */}
                    <div>
                        <h2 className="mb-4 font-serif text-3xl text-[#C08B5C]">
                            Velvet Crumbs
                        </h2>

                        <p className="leading-7 text-gray-300">
                            Handcrafted cakes made with love, premium
                            ingredients, and timeless elegance for every
                            celebration.
                        </p>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Quick Links
                        </h3>

                        <ul className="space-y-3 text-gray-300">
                            <li>
                                <a href="#" className="transition hover:text-[#C08B5C]">
                                    Home
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#C08B5C]">
                                    About
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#C08B5C]">
                                    Cakes
                                </a>
                            </li>

                            <li>
                                <a href="#" className="transition hover:text-[#C08B5C]">
                                    Contact
                                </a>
                            </li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Contact
                        </h3>

                        <div className="space-y-4 text-gray-300">

                            <div className="flex items-center gap-3">
                                <Phone size={18} className="text-[#C08B5C]" />
                                <span>+91 98765 43210</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <Mail size={18} className="text-[#C08B5C]" />
                                <span>hello@velvetcrumbs.com</span>
                            </div>

                            <div className="flex items-center gap-3">
                                <MapPin size={18} className="text-[#C08B5C]" />
                                <span>Chennai, Tamil Nadu</span>
                            </div>

                        </div>
                    </div>

                    {/* Social */}
                    <div>
                        <h3 className="mb-5 text-xl font-semibold text-white">
                            Follow Us
                        </h3>

                        <div className="flex gap-4">

                            <a
                                href="#"
                                className="rounded-full bg-[#5D4037] p-3 transition hover:bg-[#C08B5C]"
                            >
                                <Instagram size={20} />
                            </a>

                            <a
                                href="#"
                                className="rounded-full bg-[#5D4037] p-3 transition hover:bg-[#C08B5C]"
                            >
                                <Facebook size={20} />
                            </a>

                        </div>
                    </div>

                </div>

                {/* Bottom */}
                <div className="mt-12 border-t border-[#5D4037] pt-6 text-center text-sm text-gray-400">
                    © {new Date().getFullYear()} Velvet Crumbs. All Rights Reserved.
                </div>

            </div>
        </footer>
    );
}