import Button from "./ui/button";

export default function Hero() {
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
                            Luxury Boutique Bakery
                        </p>

                        <h1 className="mb-6 font-serif text-6xl leading-tight lg:text-7xl">
                            Crafted
                            <br />
                            with Love,
                            <br />
                            Baked to
                            <span className="text-[#F4D7A1]"> Perfection</span>
                        </h1>

                        <p className="mb-10 text-lg leading-8 text-gray-200">
                            Velvet Crumbs creates handcrafted cakes designed for
                            unforgettable celebrations. Every creation combines
                            premium ingredients, timeless elegance, and artisan
                            craftsmanship.
                        </p>

                        <div className="flex gap-5">
                            <Button>Explore Collection</Button>
                            <Button variant="secondary">Our Story</Button>
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
}