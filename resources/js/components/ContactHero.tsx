export default function ContactHero() {
    return (
        <section
            className="relative flex h-[60vh] items-center justify-center bg-cover bg-center"
            style={{
                backgroundImage:
                    "url('https://images.unsplash.com/photo-1517433670267-08bbd4be890f?auto=format&fit=crop&w=1800&q=80')",
            }}
        >
            <div className="absolute inset-0 bg-black/60"></div>

            <div className="relative z-10 px-6 text-center text-white">

                <p className="mb-4 uppercase tracking-[0.35em] text-[#F4D7A1]">
                    Contact Us
                </p>

                <h1 className="mb-6 font-serif text-5xl md:text-7xl">
                    We'd Love
                    <br />
                    To Hear From You
                </h1>

                <p className="mx-auto max-w-2xl text-lg text-gray-200">
                    Whether it's a custom cake, a wedding enquiry or simply a
                    sweet hello, we're always here to help.
                </p>

            </div>
        </section>
    );
}