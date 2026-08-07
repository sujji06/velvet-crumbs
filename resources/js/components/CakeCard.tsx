interface CakeCardProps {
    image: string;
    name: string;
    description: string;
    price: string;
}

export default function CakeCard({
    image,
    name,
    description,
    price,
}: CakeCardProps) {
    return (
        <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">

            <div className="overflow-hidden">
                <img
                    src={image}
                    alt={name}
                    className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                />
            </div>

            <div className="p-6">

                <h3 className="mb-2 text-2xl font-serif text-[#3E2723]">
                    {name}
                </h3>

                <p className="mb-5 text-[#6D4C41] leading-7">
                    {description}
                </p>

                <div className="flex items-center justify-between">

                    <span className="text-xl font-semibold text-[#A67C52]">
                        {price}
                    </span>

                    <button
                        className="rounded-full bg-[#3E2723] px-5 py-2 text-sm text-white transition hover:bg-[#A67C52]"
                    >
                        Order Now
                    </button>

                </div>

            </div>

        </div>
    );
}