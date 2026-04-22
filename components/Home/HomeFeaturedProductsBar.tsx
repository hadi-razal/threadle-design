"use client"

import React, { useState, useEffect, useRef } from "react";
import axios from "axios";
import { Product } from "@/types";
import ProductCard from '../ProductCard'; 
import { GoChevronLeft, GoChevronRight } from "react-icons/go";
import Link from "next/link";

const HomeFeaturedProductsBar = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);
    const [products, setProducts] = useState<Product[] | []>([]);

    const fetchFeatured = async () => {
        try {
            const res = await axios.get("/api/product/featured");
            setProducts(res.data.featuredProducts);
        } catch (error) {
            console.log(error);
        }
    };

    useEffect(() => {
        fetchFeatured();
    }, []);

    const handleScrollRight = () => {
        try {
            const scrollAmount = 400;
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: +scrollAmount,
                    behavior: 'smooth',
                });
            }
        } catch (error) {
            console.error('Error scrolling:', error);
        }
    };

    const handleScrollLeft = () => {
        try {
            const scrollAmount = 400;
            if (scrollContainerRef.current) {
                scrollContainerRef.current.scrollBy({
                    left: -scrollAmount,
                    behavior: 'smooth',
                });
            }
        } catch (error) {
            console.error('Error scrolling:', error);
        }
    };

    return (
        <section className="w-full py-20 px-4 md:px-10 bg-slate-50">
            <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center w-full'>
                
                <div className="flex flex-col items-center gap-3">
                    <span className="text-td-primary font-semibold tracking-[0.2em] uppercase text-xs">Curated</span>
                    <h2 className='text-center font-black tracking-tighter text-td-secondary md:text-[40px] text-[32px]'>
                        Featured Products
                    </h2>
                    <div className="w-16 h-1 bg-td-primary rounded-full mt-2"></div>
                </div>

                <div className='relative w-full group'>
                    {/* Stylish Glassmorphic Chevrons */}
                    <div 
                        onClick={handleScrollLeft} 
                        className='absolute -left-4 md:-left-6 top-[40%] z-20 flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md border border-slate-200 text-td-secondary shadow-lg rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-td-primary'
                    >
                        <GoChevronLeft size={24} />
                    </div>
                    
                    <div 
                        onClick={handleScrollRight} 
                        className='absolute -right-4 md:-right-6 top-[40%] z-20 flex items-center justify-center w-12 h-12 bg-white/80 backdrop-blur-md border border-slate-200 text-td-secondary shadow-lg rounded-full cursor-pointer opacity-0 group-hover:opacity-100 transition-all duration-300 hover:scale-110 hover:bg-white hover:text-td-primary'
                    >
                        <GoChevronRight size={24} />
                    </div>

                    <div ref={scrollContainerRef} className={`flex justify-start items-center gap-6 pb-6 min-h-[300px] overflow-x-scroll hideScrollBar px-4 md:px-0 scroll-smooth`}>
                        {products?.map((product) => (
                            <div key={product._id} className="min-w-[280px] snap-start">
                                {product.inStock && <ProductCard getProducts={fetchFeatured} key={product._id} product={product} />}
                            </div>
                        ))}
                    </div>
                </div>

                <div className='flex items-center justify-center mt-4'>
                    <Link 
                        href={`/featured-products`} 
                        className='group flex items-center gap-2 text-td-secondary font-semibold hover:text-td-primary transition-colors duration-300'
                    >
                        <span>View All Products</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </Link>
                </div>
            </div>
        </section>
    );
};

export default HomeFeaturedProductsBar;
