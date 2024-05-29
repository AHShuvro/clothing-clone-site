import { useEffect, useState } from 'react';
import { RiDeleteBin6Line } from "react-icons/ri";
import { CiHeart } from "react-icons/ci";
import { Link } from 'react-router-dom';
import Swal from 'sweetalert2';



const Wishlist = () => {


    const [wishlist, setWishlist] = useState([]);
    const [nofound, setNoFound] = useState("");


    useEffect(() => {
        const wishlistItem = JSON.parse(localStorage.getItem('wishlist'));

        if (wishlistItem) {
            setWishlist(wishlistItem);
        }
        else {
            setNoFound('No data Found!')
        }

    }, [])

    const handleRemoveToWishlist = (item) => {
        let wishlist = JSON.parse(localStorage.getItem('wishlist')) || [];
        wishlist = wishlist.filter(wishlistItem => wishlistItem.title !== item.title);
        localStorage.setItem('wishlist', JSON.stringify(wishlist));
        setWishlist(wishlist);
    }

    const handleAddToCart = (item) => {
        const cart = JSON.parse(localStorage.getItem('cart')) || [];

        cart.push(item);
        localStorage.setItem('cart', JSON.stringify(cart));
        Swal.fire({
            position: "top-end",
            icon: "success",
            title: "Item added to cart!",
            showConfirmButton: false,
            timer: 800
        });
    }


    return (
        <div className='container mx-auto px-2 sm:px-0 xl:px-44 mb-8 sm:mb-12 md:mb-24 mt-8 sm:mt-12 md:mt-24 flex flex-col items-center'>
            {
                wishlist.length === 0 ?
                    <div className='flex flex-col items-center'>
                        <CiHeart className='text-9xl text-[#777777] opacity-30' />
                        <h3 className='text-4xl text-[#333333] font-bold mb-4 text-center'>Wishlist</h3>
                        <p className='text-lg text-[#777777]'>No products were added to the wishlist</p>
                        <Link className='border-2 hover:border-[#333333] duration-500 px-4 py-1 mt-2' to={'/'}><p className='text-[#333333] font-bold'>Continue Shoping</p></Link>
                    </div>
                    :
                    <div>
                        <h3 className='text-4xl text-[#333333] font-bold mb-10 text-center'>Wishlist</h3>
                        <div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6'>
                            {
                                wishlist.map((item, idx) => (
                                    <div key={idx} className='overflow-hidden group relative'>
                                        <div className='w-full sm:max-w-[22.5rem] relative'>
                                            <img className='group-hover:opacity-0 transition-opacity duration-600' src='/image/24.webp' alt={item.title} />
                                            <img className='absolute top-0 left-0 opacity-0 group-hover:opacity-100 transition-opacity duration-600' src='/image/23.webp' alt={item.title} />
                                            <p className='text-xs text-white bg-red-600 font-bold p-1 absolute top-2 left-2'>SALE {item.sale}</p>
                                            <RiDeleteBin6Line onClick={() => handleRemoveToWishlist(item)} className='absolute top-2 right-3 text-2xl text-[#777777] cursor-pointer' />
                                        </div>
                                        <div className='flex flex-col mt-4'>
                                            <div>
                                                <p className='text-xs text-[#777777] font-normal'>{item.brand}</p>
                                                <p className='text-base text-[#333333] font-medium'>{item.title}</p>
                                            </div>
                                            <div className='flex items-center gap-6 mt-4'>
                                                <div>
                                                    <p className='text-lg font-bold text-red-600 '>${item.price.toFixed(2)}</p>
                                                </div>
                                            </div>
                                        </div>
                                        <button onClick={(e) => { e.stopPropagation(); e.preventDefault(); handleAddToCart(item); }} className="bg-teal-600 mt-2 px-4 py-1 text-white w-full font-medium">ADD TO CART</button>
                                    </div>
                                ))
                            }
                        </div>
                    </div>
            }
        </div>
    );
};

export default Wishlist;