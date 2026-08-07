const features = [
    "Premium Ingredients",
    "Handcrafted Every Morning",
    "Custom Celebration Cakes",
    "Made with Love & Passion",
];

export default function OurStory() {
    return (
        <section className="bg-[#FCF8F3] py-24">

            <div className="mx-auto grid max-w-7xl items-center gap-20 px-6 lg:grid-cols-2 lg:px-10">

                {/* Left Image */}

                <div className="overflow-hidden rounded-3xl shadow-2xl">

                    <img
                        src="/bakery.png"
                        alt="Bakery"
                        className="h-[650px] w-full object-cover transition duration-700 hover:scale-105"
                    />

                </div>

                {/* Right Content */}

                <div>

                    <p className="mb-4 uppercase tracking-[0.35em] text-[#A67C52]">
                        About Velvet Crumbs
                    </p>

                    <h2 className="mb-8 font-serif text-5xl leading-tight text-[#3E2723]">
                        Baking Happiness,
                        <br />
                        One Slice at a Time
                    </h2>

                    <p className="mb-6 text-lg leading-8 text-gray-600">
                        Velvet Crumbs began with a simple dream—to transform
                        every celebration into a memorable experience through
                        handcrafted cakes. From birthdays and weddings to life's
                        sweetest milestones, each cake is thoughtfully designed
                        with elegance and love.
                    </p>

                    <p className="mb-10 text-lg leading-8 text-gray-600">
                        Every recipe combines premium ingredients, timeless
                        techniques, and artistic craftsmanship to create desserts
                        that are as beautiful as they are delicious.
                    </p>

                    {/* Features */}

                    <div className="grid gap-5 sm:grid-cols-2">

                        {features.map((feature) => (

                            <div
                                key={feature}
                                className="flex items-center gap-4 rounded-xl bg-white p-5 shadow-md"
                            >

                                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#D9B382] text-lg font-bold text-white">
                                    ✓
                                </div>

                                <span className="text-lg text-[#3E2723]">
                                    {feature}
                                </span>

                            </div>

                        ))}

                    </div>

                </div>

            </div>

        </section>
    );
}