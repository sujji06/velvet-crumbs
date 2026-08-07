export default function ContactForm() {
    return (
        <section className="bg-white py-24">

            <div className="mx-auto max-w-5xl rounded-3xl bg-[#FCF8F3] p-12 shadow-xl">

                <div className="mb-12 text-center">

                    <p className="uppercase tracking-[0.3em] text-[#A67C52]">
                        Get In Touch
                    </p>

                    <h2 className="mt-4 font-serif text-5xl text-[#3E2723]">
                        Send Us A Message
                    </h2>

                </div>

                <form className="space-y-8">

                    <div className="grid gap-6 md:grid-cols-2">

                        <input
                            type="text"
                            placeholder="Your Name"
                            className="rounded-xl border p-4 outline-none focus:border-[#A67C52]"
                        />

                        <input
                            type="email"
                            placeholder="Email Address"
                            className="rounded-xl border p-4 outline-none focus:border-[#A67C52]"
                        />

                    </div>

                    <input
                        type="text"
                        placeholder="Subject"
                        className="w-full rounded-xl border p-4 outline-none focus:border-[#A67C52]"
                    />

                    <textarea
                        rows={6}
                        placeholder="Write your message..."
                        className="w-full rounded-xl border p-4 outline-none focus:border-[#A67C52]"
                    ></textarea>

                    <button
                        className="rounded-full bg-[#A67C52] px-10 py-4 text-white transition hover:bg-[#8C6239]"
                    >
                        Send Message
                    </button>

                </form>

            </div>

        </section>
    );
}