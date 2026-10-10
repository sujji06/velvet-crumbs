import { useState } from "react";

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
    const [isOrderOpen, setIsOrderOpen] = useState(false);
    const [isSuccessOpen, setIsSuccessOpen] = useState(false);
    const [quantity, setQuantity] = useState(1);

    const [formData, setFormData] = useState({
        customerName: "",
        phone: "",
        deliveryDate: "",
        address: "",
    });

    const handleChange = (
        e: React.ChangeEvent<
            HTMLInputElement | HTMLTextAreaElement
        >
    ) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };

    const handleOrder = (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault();

        // Show order success popup
        setIsOrderOpen(false);
        setIsSuccessOpen(true);
    };

    const closeOrder = () => {
        setIsOrderOpen(false);
    };

    return (
        <>
            {/* Cake Card */}
            <div className="group overflow-hidden rounded-3xl bg-white shadow-md transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl">
                <div className="overflow-hidden">
                    <img
                        src={image}
                        alt={name}
                        className="h-72 w-full object-cover transition duration-700 group-hover:scale-110"
                    />
                </div>

                <div className="p-6">
                    <h3 className="mb-2 font-serif text-2xl text-[#3E2723]">
                        {name}
                    </h3>

                    <p className="mb-5 leading-7 text-[#6D4C41]">
                        {description}
                    </p>

                    <div className="flex items-center justify-between">
                        <span className="text-xl font-semibold text-[#A67C52]">
                            {price}
                        </span>

                        <button
                            type="button"
                            onClick={() => setIsOrderOpen(true)}
                            className="rounded-full bg-[#3E2723] px-5 py-2 text-sm text-white transition hover:bg-[#A67C52]"
                        >
                            Order Now
                        </button>
                    </div>
                </div>
            </div>

            {/* Order Details Modal */}
            {isOrderOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={closeOrder}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="order-title"
                        className="relative max-h-[90vh] w-full max-w-lg overflow-y-auto rounded-3xl bg-[#FFFDF9] p-6 shadow-2xl sm:p-8"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <button
                            type="button"
                            onClick={closeOrder}
                            aria-label="Close order form"
                            className="absolute right-5 top-4 text-2xl text-[#6D4C41] transition hover:text-red-600"
                        >
                            &times;
                        </button>

                        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#A67C52]">
                            Velvet Crumbs
                        </p>

                        <h2
                            id="order-title"
                            className="mb-6 font-serif text-3xl text-[#3E2723]"
                        >
                            Your Sweet Order
                        </h2>

                        {/* Selected Cake */}
                        <div className="mb-6 flex items-center gap-4 rounded-2xl bg-[#F5EDE3] p-3">
                            <img
                                src={image}
                                alt={name}
                                className="h-20 w-20 rounded-xl object-cover"
                            />

                            <div>
                                <h3 className="font-serif text-lg text-[#3E2723]">
                                    {name}
                                </h3>
                                <p className="mt-1 font-semibold text-[#A67C52]">
                                    {price}
                                </p>
                            </div>
                        </div>

                        <form onSubmit={handleOrder} className="space-y-4">
                            <div>
                                <label
                                    htmlFor="customerName"
                                    className="mb-1 block text-sm font-medium text-[#3E2723]"
                                >
                                    Full Name
                                </label>
                                <input
                                    id="customerName"
                                    name="customerName"
                                    type="text"
                                    value={formData.customerName}
                                    onChange={handleChange}
                                    placeholder="Enter your full name"
                                    required
                                    className="w-full rounded-xl border border-[#E2D4C5] bg-white px-4 py-3 outline-none transition focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="phone"
                                    className="mb-1 block text-sm font-medium text-[#3E2723]"
                                >
                                    Phone Number
                                </label>
                                <input
                                    id="phone"
                                    name="phone"
                                    type="tel"
                                    value={formData.phone}
                                    onChange={handleChange}
                                    placeholder="Enter your phone number"
                                    pattern="[0-9]{10}"
                                    maxLength={10}
                                    minLength={10}
                                    title="Enter a 10-digit phone number"
                                    required
                                    className="w-full rounded-xl border border-[#E2D4C5] bg-white px-4 py-3 outline-none transition focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="quantity"
                                    className="mb-1 block text-sm font-medium text-[#3E2723]"
                                >
                                    Quantity
                                </label>
                                <div className="flex items-center gap-4">
                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((q) => Math.max(1, q - 1))
                                        }
                                        aria-label="Decrease quantity"
                                        className="h-10 w-10 rounded-full bg-[#F5EDE3] text-xl text-[#3E2723] hover:bg-[#E8D7C4]"
                                    >
                                        −
                                    </button>

                                    <span
                                        id="quantity"
                                        className="min-w-6 text-center font-semibold text-[#3E2723]"
                                    >
                                        {quantity}
                                    </span>

                                    <button
                                        type="button"
                                        onClick={() =>
                                            setQuantity((q) => Math.min(20, q + 1))
                                        }
                                        aria-label="Increase quantity"
                                        className="h-10 w-10 rounded-full bg-[#F5EDE3] text-xl text-[#3E2723] hover:bg-[#E8D7C4]"
                                    >
                                        +
                                    </button>
                                </div>
                            </div>

                            <div>
                                <label
                                    htmlFor="deliveryDate"
                                    className="mb-1 block text-sm font-medium text-[#3E2723]"
                                >
                                    Preferred Delivery Date
                                </label>
                                <input
                                    id="deliveryDate"
                                    name="deliveryDate"
                                    type="date"
                                    value={formData.deliveryDate}
                                    onChange={handleChange}
                                    min={new Date().toLocaleDateString("en-CA")}
                                    required
                                    className="w-full rounded-xl border border-[#E2D4C5] bg-white px-4 py-3 outline-none transition focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/20"
                                />
                            </div>

                            <div>
                                <label
                                    htmlFor="address"
                                    className="mb-1 block text-sm font-medium text-[#3E2723]"
                                >
                                    Delivery Address
                                </label>
                                <textarea
                                    id="address"
                                    name="address"
                                    value={formData.address}
                                    onChange={handleChange}
                                    placeholder="Enter your complete delivery address"
                                    rows={3}
                                    required
                                    className="w-full resize-none rounded-xl border border-[#E2D4C5] bg-white px-4 py-3 outline-none transition focus:border-[#A67C52] focus:ring-2 focus:ring-[#A67C52]/20"
                                />
                            </div>

                            <button
                                type="submit"
                                className="w-full rounded-full bg-[#3E2723] py-3.5 font-medium text-white shadow-md transition hover:bg-[#A67C52]"
                            >
                                Place Order
                            </button>

                            <p className="text-center text-xs text-[#8D6E63]">
                                Thank you for choosing Velvet Crumbs ♡
                            </p>
                        </form>
                    </div>
                </div>
            )}

            {/* Order Success Popup */}
            {isSuccessOpen && (
                <div
                    className="fixed inset-0 z-[60] flex items-center justify-center bg-black/60 p-4 backdrop-blur-sm"
                    onClick={() => setIsSuccessOpen(false)}
                >
                    <div
                        role="dialog"
                        aria-modal="true"
                        aria-labelledby="success-title"
                        className="w-full max-w-md rounded-3xl bg-[#FFFDF9] p-8 text-center shadow-2xl sm:p-10"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="mx-auto mb-5 flex h-20 w-20 items-center justify-center rounded-full bg-green-100">
                            <svg
                                xmlns="http://www.w3.org/2000/svg"
                                viewBox="0 0 24 24"
                                fill="none"
                                stroke="currentColor"
                                strokeWidth="2.5"
                                className="h-10 w-10 text-green-600"
                                aria-hidden="true"
                            >
                                <path
                                    d="m5 12 4 4L19 6"
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                />
                            </svg>
                        </div>

                        <p className="mb-2 text-sm uppercase tracking-[0.2em] text-[#A67C52]">
                            Velvet Crumbs
                        </p>

                        <h2
                            id="success-title"
                            className="mb-3 font-serif text-3xl text-[#3E2723]"
                        >
                            Order Placed!
                        </h2>

                        <p className="mb-2 leading-7 text-[#6D4C41]">
                            Thank you, {formData.customerName}!
                        </p>

                        <p className="mb-7 leading-7 text-[#6D4C41]">
                            Your order for {quantity} × {name} has been
                            received. We look forward to making your
                            celebration sweeter!
                        </p>

                        <button
                            type="button"
                            onClick={() => {
                                setIsSuccessOpen(false);
                                setQuantity(1);
                                setFormData({
                                    customerName: "",
                                    phone: "",
                                    deliveryDate: "",
                                    address: "",
                                });
                            }}
                            className="w-full rounded-full bg-[#3E2723] py-3.5 font-medium text-white transition hover:bg-[#A67C52]"
                        >
                            Continue Exploring
                        </button>
                    </div>
                </div>
            )}
        </>
    );
}
