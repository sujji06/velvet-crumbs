export default function AboutHero() {
    return (
        <section
            className="relative flex h-[70vh] items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1578985545062-69928b1d9587?auto=format&fit=crop&w=1800&q=80')",
            }}
        >
            {/* Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>

            {/* Content */}
            <div className="relative z-10 mx-auto max-w-4xl px-6 text-center text-white">

                <p className="mb-5 uppercase tracking-[0.4em] text-[#F4D7A1]">
                    Our Story
                </p>

                <h1 className="mb-6 font-serif text-5xl leading-tight md:text-7xl">
                    Every Cake
                    <br />
                    Begins With
                    <span className="text-[#F4D7A1]"> Love</span>
                </h1>

                <p className="mx-auto max-w-3xl text-lg leading-8 text-gray-200">
                    At Velvet Crumbs, every handcrafted cake is created with
                    passion, premium ingredients, and timeless artistry. We
                    believe every celebration deserves something unforgettable.
                </p>

            </div>
        </section>
    );
}