const timeline = [
    {
        year: "2018",
        title: "The Beginning",
        description:
            "Velvet Crumbs started as a small home bakery with a passion for handcrafted cakes.",
    },
    {
        year: "2020",
        title: "5000+ Cakes Delivered",
        description:
            "Our cakes became a part of thousands of birthdays, anniversaries, and celebrations.",
    },
    {
        year: "2023",
        title: "Luxury Boutique Bakery",
        description:
            "Expanded into a premium cake studio offering elegant custom cake designs.",
    },
    {
        year: "2026",
        title: "A Trusted Brand",
        description:
            "Continuing to create unforgettable moments with beautiful handcrafted cakes.",
    },
];

export default function Timeline() {
    return (
        <section className="bg-white py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                <div className="mb-20 text-center">

                    <p className="mb-3 uppercase tracking-[0.35em] text-[#C08B5C]">
                        Our Journey
                    </p>

                    <h2 className="font-serif text-5xl text-[#3E2723]">
                        Milestones That Define Us
                    </h2>

                </div>

                <div className="relative">

                    {/* Vertical Line */}
                    <div className="absolute left-5 top-0 h-full w-1 bg-[#E7D8C9] lg:left-1/2 lg:-translate-x-1/2"></div>

                    <div className="space-y-16">

                        {timeline.map((item, index) => (

                            <div
                                key={index}
                                className={`relative flex flex-col lg:flex-row ${
                                    index % 2 === 0
                                        ? "lg:flex-row"
                                        : "lg:flex-row-reverse"
                                } items-center gap-10`}
                            >

                                {/* Content */}
                                <div className="w-full lg:w-1/2">
                                    <div className="rounded-3xl bg-[#FCF8F3] p-8 shadow-lg transition duration-500 hover:-translate-y-2 hover:shadow-xl">

                                        <span className="text-4xl font-bold text-[#C08B5C]">
                                            {item.year}
                                        </span>

                                        <h3 className="mt-4 mb-3 font-serif text-3xl text-[#3E2723]">
                                            {item.title}
                                        </h3>

                                        <p className="leading-8 text-[#6D4C41]">
                                            {item.description}
                                        </p>

                                    </div>
                                </div>

                                {/* Circle */}
                                <div className="absolute left-5 flex h-6 w-6 items-center justify-center rounded-full border-4 border-white bg-[#C08B5C] lg:left-1/2 lg:-translate-x-1/2">
                                </div>

                                {/* Empty Space */}
                                <div className="hidden lg:block lg:w-1/2"></div>

                            </div>

                        ))}

                    </div>

                </div>

            </div>
        </section>
    );
}