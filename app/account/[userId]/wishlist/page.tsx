"use client"

import ProductCard from '@/components/ProductCard';
import { useUser } from '@/context/useUser';
import { Product } from '@/types';
import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { PulseLoader } from 'react-spinners';

const WishList = () => {

    const { currentUser } = useUser()


    const [products, setProducts] = useState<Product[]>([]);


    const fetchWishlistedProducts = async () => {
        const userId = currentUser?.userId
        try {
            const res = await axios.get(`/api/wishlistFetch/${userId}`)
            setProducts(res?.data?.wishListItems);
            console.log(res);
        } catch (error) {
            console.log(error);
        }
    };


    useEffect(() => {
        fetchWishlistedProducts();
    }, []);



    if (!products) {
        return (
            <div className='flex flex-col items-center py-5 px-3 gap-3 min-h-[85vh]'>
                <h1 className='text-td-secondary text-center text-[25px] md:text-[35px] font-bold text-3xl'>Wishlist</h1>
                <div className=" absolute flex items-center justify-center flex-grow h-[65vh]">
                    <PulseLoader />
                </div>
            </div>
        );
    }

    return (
        <div className="px-3 lg:px-10 flex flex-col gap-3 min-h-[85vh] py-5">
            <div className="flex items-center justify-center">
                <h1 className='text-td-secondary text-center text-[25px] md:text-[35px] font-bold text-3xl'>Wishlist</h1>
            </div>
            <div className="flex items-center h-full justify-center  gap-[4px] flex-wrap md:gap-5">
                {products?.map((product) => (
                    <ProductCard getProducts={fetchWishlistedProducts} key={product._id} product={product} />
                ))}
                {/* {products?.length === 0 && <span>No products in Wishlist</span>} */}
            </div>
        </div>
    );
};

export default WishList;
