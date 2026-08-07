import CakeCard from "./CakeCard";

const cakes = [
    {
        image: "/images/cakes/chocolate.jpg",
        name: "Chocolate Truffle",
        description: "Rich Belgian chocolate layered with silky ganache.",
        price: "₹1,499",
    },
    {
        image: "/images/cakes/red-velvet.jpg",
        name: "Red Velvet",
        description: "Classic red velvet finished with cream cheese frosting.",
        price: "₹1,899",
    },
    {
        image: "/images/cakes/wedding.png",
        name: "Wedding Cake",
        description: "Elegant handcrafted cakes for unforgettable weddings.",
        price: "₹3,999",
    },
    {
        image: "/images/cakes/strawberry.jpg",
        name: "Strawberry Bliss",
        description: "Fresh strawberries with soft vanilla sponge.",
        price: "₹1,699",
    },
    {
        image: "/images/cakes/black-forest.jpg",
        name: "Black Forest",
        description: "Chocolate sponge layered with cherries and cream.",
        price: "₹1,599",
    },
    {
        image: "/images/cakes/custom.jpg",
        name: "Custom Creation",
        description: "Designed exclusively for your special celebration.",
        price: "Starts at ₹2,499",
    },
];

export default function SignatureCakes() {
    return (
        <section className="bg-[#F8F3EC] py-24">

            <div className="mx-auto max-w-7xl px-6 lg:px-10">

                <div className="mb-16 text-center">

                    <p className="mb-3 uppercase tracking-[0.3em] text-[#A67C52]">
                        Signature Collection
                    </p>

                    <h2 className="mb-6 font-serif text-5xl text-[#3E2723]">
                        Crafted With Passion
                    </h2>

                    <p className="mx-auto max-w-2xl text-lg leading-8 text-[#6D4C41]">
                        Explore our most loved handcrafted cakes, created
                        with premium ingredients and designed to make every
                        celebration unforgettable.
                    </p>

                </div>

                <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">

                    {cakes.map((cake, index) => (
                        <CakeCard
                            key={index}
                            image={cake.image}
                            name={cake.name}
                            description={cake.description}
                            price={cake.price}
                        />
                    ))}

                </div>

            </div>

        </section>
    );
}