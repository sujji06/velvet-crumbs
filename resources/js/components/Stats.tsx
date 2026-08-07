const stats = [
    {
        number: "10K+",
        title: "Happy Customers",
    },
    {
        number: "500+",
        title: "Custom Cakes",
    },
    {
        number: "8+",
        title: "Years Experience",
    },
    {
        number: "100%",
        title: "Fresh Ingredients",
    },
];

export default function Stats() {
    return (
        <section className="bg-[#3E2723] py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Heading */}
                <div className="mb-16 text-center">

                    <p className="mb-3 uppercase tracking-[0.35em] text-[#D9B382]">
                        Why Customers Love Us
                    </p>

                    <h2 className="font-serif text-5xl text-white">
                        Every Number Tells
                        <br />
                        A Sweet Story
                    </h2>

                </div>

                {/* Stats Grid */}
                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-4">

                    {stats.map((item, index) => (

                        <div
                            key={index}
                            className="rounded-3xl border border-[#5D4037] bg-[#4E342E] p-10 text-center transition duration-500 hover:-translate-y-2 hover:bg-[#5D4037]"
                        >

                            <h3 className="mb-4 font-serif text-6xl text-[#D9B382]">
                                {item.number}
                            </h3>

                            <p className="text-lg text-gray-200">
                                {item.title}
                            </p>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}