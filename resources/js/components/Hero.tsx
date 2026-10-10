import Button from "./ui/button";
import { useTranslation } from "react-i18next";

export default function Hero() {
    const { t } = useTranslation();

    return (
        <section
            className="relative h-screen bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('/cake.jpg')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/50" />

            {/* Content */}
            <div className="relative flex h-full items-center">
                <div className="w-full px-8 lg:px-24">
                    <div className="max-w-2xl text-left text-white">

                        <p className="mb-4 uppercase tracking-[0.3em] text-[#F4D7A1]">
                            {t("hero.badge")}
                        </p>

                        <h1 className="mb-6 font-serif text-6xl leading-tight lg:text-7xl">
                            {t("hero.titleLine1")}
                            <br />
                            {t("hero.titleLine2")}
                            <br />
                            {t("hero.titleLine3")}
                            <span className="text-[#F4D7A1]">
                                {" "}{t("hero.titleHighlight")}
                            </span>
                        </h1>

                        <p className="mb-10 text-lg leading-8 text-gray-200">
                            {t("hero.description")}
                        </p>

                        <div className="flex gap-5">
                            <Button>
                                {t("hero.explore")}
                            </Button>

                            <Button variant="secondary">
                                {t("hero.story")}
                            </Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}