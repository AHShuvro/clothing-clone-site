import { useEffect, useState } from "react";
import { RiDeleteBin6Line } from "react-icons/ri";

const ShoppingCart1 = () => {
    const [cart, setCart] = useState([]);
    const [noFound, setNoFound] = useState("");

    useEffect(() => {
        const cartItems = JSON.parse(localStorage.getItem('cart'));
        if (cartItems) {
            setCart(cartItems);
        } else {
            setNoFound('No Products in the Cart');
        }
    }, []);

    const allCartItems = (items) => {
        const total = items.reduce((acc, item) => {
            if (acc[item.id]) {
                acc[item.id].quantity += 1;
            } else {
                acc[item.id] = { ...item, quantity: 1 };
            }
            return acc;
        }, {});
        return Object.values(total);
    }

    const totalCart = allCartItems(cart);

    const handleRemoveFromCart = (item) => {
        let cartItems = JSON.parse(localStorage.getItem('cart')) || [];
        const index = cartItems.findIndex(cartItem => cartItem.id === item.id);
        if (index !== -1) {
            cartItems.splice(index, 1);
            localStorage.setItem('cart', JSON.stringify(cartItems));
            setCart(cartItems);
        }
    }

    const calculateTotalPrice = (items) => {
        return items.reduce((acc, item) => acc + (item.price * item.quantity), 0);
    }

    const totalPrice = calculateTotalPrice(totalCart);

    return (
        <div className="sticky h-[80vh] overflow-y-auto">
            <div className="p-4">
                <p className="text-lg text-[#333333] font-bold">Shopping Cart:</p>
                {
                    totalCart.length === 0 ? (
                        <div className="flex items-center justify-center py-10">
                            <p className="text-lg text-[#777777]">{noFound}</p>
                        </div>
                    ) : (
                        totalCart.map((item, idx) => (
                            <div key={idx}>
                                <div className="flex space-x-4 py-4">
                                    <img className="w-1/3" src={item.image1} alt="" />
                                    <div>
                                        <p>{item.title}</p>
                                        <p>color</p>
                                        <p>{item.quantity} x {item.price} = {item.quantity * item.price}</p>
                                    </div>
                                    <RiDeleteBin6Line
                                        className="text-end cursor-pointer"
                                        onClick={() => handleRemoveFromCart(item)}
                                    />
                                </div>
                                {
                                    totalCart.length > 1 && idx < totalCart.length - 1 ? <hr className="my-4" /> : null
                                }
                            </div>
                        ))
                    )
                }
                {totalCart.length > 0 && (
                    <p className="text-right text-lg font-bold mt-4">Total: ${totalPrice.toFixed(2)}</p>
                )}
            </div>
        </div>
    );
};

export default ShoppingCart1;
