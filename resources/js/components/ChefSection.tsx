const chefs = [
    {
        name: "Emma Williams",
        role: "Head Pastry Chef",
        image: "/chef1.png",
    },
    {
        name: "Sophia Carter",
        role: "Cake Designer",
        image: "/chef2.png",
    },
    {
        name: "Olivia Brown",
        role: "Dessert Specialist",
        image: "/chef3.png",
    },
];

export default function ChefSection() {
    return (
        <section className="bg-[#FCF8F3] py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                {/* Heading */}
                <div className="mb-16 text-center">

                    <p className="mb-3 uppercase tracking-[0.35em] text-[#C08B5C]">
                        Meet Our Team
                    </p>

                    <h2 className="font-serif text-5xl text-[#3E2723]">
                        Passion Behind Every Cake
                    </h2>

                    <p className="mx-auto mt-6 max-w-2xl leading-8 text-[#6D4C41]">
                        Our talented pastry chefs combine creativity,
                        craftsmanship, and premium ingredients to create cakes
                        that are as beautiful as they are delicious.
                    </p>

                </div>

                {/* Cards */}
                <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

                    {chefs.map((chef, index) => (

                        <div
                            key={index}
                            className="overflow-hidden rounded-3xl bg-white shadow-lg transition duration-500 hover:-translate-y-3 hover:shadow-2xl"
                        >

                            <div className="overflow-hidden">

                                <img
                                    src={chef.image}
                                    alt={chef.name}
                                    className="h-96 w-full object-cover transition duration-700 hover:scale-110"
                                />

                            </div>

                            <div className="p-8 text-center">

                                <h3 className="font-serif text-3xl text-[#3E2723]">
                                    {chef.name}
                                </h3>

                                <p className="mt-3 text-[#C08B5C]">
                                    {chef.role}
                                </p>

                            </div>

                        </div>

                    ))}

                </div>

            </div>
        </section>
    );
}