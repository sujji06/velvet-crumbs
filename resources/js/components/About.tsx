import Button from "./ui/button";

export default function About() {
    return (
        <section className="bg-[#FCFAF7] py-24">
            <div className="mx-auto max-w-7xl px-6 lg:px-10">
                <div className="grid items-center gap-16 lg:grid-cols-2">

                    {/* Left Image */}
                    <div className="overflow-hidden rounded-3xl shadow-xl">
                        <img
                            src="/about-cake.jpg"
                            alt="Luxury Cake"
                            className="h-[550px] w-full object-cover transition duration-500 hover:scale-105"
                        />
                    </div>

                    {/* Right Content */}
                    <div>

                        <p className="mb-3 uppercase tracking-[0.3em] text-[#A67C52]">
                            About Velvet Crumbs
                        </p>

                        <h2 className="mb-6 font-serif text-5xl leading-tight text-[#2B2B2B]">
                            Every Cake
                            <br />
                            Tells a Beautiful Story
                        </h2>

                        <p className="mb-6 text-lg leading-8 text-[#666]">
                            At Velvet Crumbs, we believe every celebration
                            deserves a masterpiece. From intimate birthdays to
                            luxurious weddings, our handcrafted cakes are baked
                            using premium ingredients and timeless recipes.
                        </p>

                        <p className="mb-10 text-lg leading-8 text-[#666]">
                            Every detail is carefully designed—from delicate
                            frosting to elegant decorations—creating desserts
                            that taste unforgettable and look breathtaking.
                        </p>

                        <Button>
                            Discover Our Story
                        </Button>

                    </div>

                </div>
            </div>
        </section>
    );
}