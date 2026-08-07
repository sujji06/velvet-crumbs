import Container from "./ui/Container";
import { Link } from "@inertiajs/react";

export default function Navbar() {
    return (
        <header className="fixed top-0 z-50 w-full border-b border-[#EFE8DF] bg-[#FCFAF7]/90 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    <h1 className="text-3xl font-serif font-bold tracking-wide text-[#2B2B2B]">
                        Velvet Crumbs
                    </h1>

                    <nav className="hidden items-center gap-10 md:flex">

                        <Link href="/" >
                            Home
                        </Link>

                        <Link href="/about">
    About
</Link>

                        <Link href="/contact">
    Contact
</Link>

                    </nav>

                    <button className="rounded-full border border-[#2B2B2B] px-6 py-3 text-sm hover:bg-[#2B2B2B] hover:text-white transition">
                        Reserve
                    </button>

                </div>
            </Container>
        </header>
    );
}