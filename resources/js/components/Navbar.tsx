import Container from "./ui/Container";
import { Link } from "@inertiajs/react";
import { useTranslation } from "react-i18next";

function LanguageSwitcher() {
    const { i18n } = useTranslation();

    const changeLanguage = (language: string) => {
        i18n.changeLanguage(language);
    };

    return (
        <div className="flex items-center gap-2">
            <button
                onClick={() => changeLanguage("en")}
                className={`rounded-full px-3 py-1 text-sm transition ${
                    i18n.language === "en"
                        ? "bg-[#2B2B2B] text-white"
                        : "text-[#2B2B2B] hover:bg-[#EFE8DF]"
                }`}
            >
                EN
            </button>

            <button
                onClick={() => changeLanguage("ta")}
                className={`rounded-full px-3 py-1 text-sm transition ${
                    i18n.language === "ta"
                        ? "bg-[#2B2B2B] text-white"
                        : "text-[#2B2B2B] hover:bg-[#EFE8DF]"
                }`}
            >
                தமிழ்
            </button>
        </div>
    );
}

export default function Navbar() {
    const { t } = useTranslation();

    return (
        <header className="fixed top-0 z-50 w-full border-b border-[#EFE8DF] bg-[#FCFAF7]/90 backdrop-blur">
            <Container>
                <div className="flex h-20 items-center justify-between">

                    {/* Logo */}
                    <h1 className="text-3xl font-serif font-bold tracking-wide text-[#2B2B2B]">
                        Velvet Crumbs
                    </h1>

                    {/* Navigation */}
                    <nav className="hidden items-center gap-10 md:flex">

                        <Link href="/">
                            {t("navbar.home")}
                        </Link>

                        <Link href="/about">
                            {t("navbar.about")}
                        </Link>

                        <Link href="/contact">
                            {t("navbar.contact")}
                        </Link>

                    </nav>

                    {/* Right Side */}
                    <div className="flex items-center gap-4">

                        <LanguageSwitcher />

                        <button className="rounded-full border border-[#2B2B2B] px-6 py-3 text-sm transition hover:bg-[#2B2B2B] hover:text-white">
                            {t("navbar.reserve")}
                        </button>

                    </div>

                </div>
            </Container>
        </header>
    );
}