"use client"

import React, { useRef } from 'react'

import CustomerReviewCard from './CustomerReviewCard'

import { GoChevronRight, GoChevronLeft } from "react-icons/go";
import { review } from '@/data/reviewData';


const OurHappyCustomers = () => {

    const scrollContainerRef = useRef<HTMLDivElement>(null);

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
        <section className='w-full py-20 px-4 md:px-10 bg-slate-50 border-t border-slate-100'>
            <div className='max-w-7xl mx-auto flex flex-col items-center justify-center gap-10 w-full'>
                <div className='flex flex-col md:flex-row items-center md:items-end justify-between w-full px-2'>
                    <div className="flex flex-col items-center md:items-start gap-3">
                        <span className="text-td-primary font-semibold tracking-[0.2em] uppercase text-xs">Testimonials</span>
                        <h2 className='text-center md:text-left font-black tracking-tighter text-td-secondary md:text-[40px] text-[32px]'>
                            Our Happy Customers
                        </h2>
                        <div className="w-16 h-1 bg-td-primary rounded-full mt-2 hidden md:block"></div>
                    </div>
                    
                    <div className='hidden md:flex items-center justify-center gap-4'>
                        <div 
                            onClick={handleScrollLeft} 
                            className='flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-td-secondary shadow-sm rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-td-primary'
                        >
                            <GoChevronLeft size={24} />
                        </div>
                        <div 
                            onClick={handleScrollRight} 
                            className='flex items-center justify-center w-12 h-12 bg-white border border-slate-200 text-td-secondary shadow-sm rounded-full cursor-pointer transition-all duration-300 hover:scale-105 hover:shadow-md hover:border-td-primary'
                        >
                            <GoChevronRight size={24} />
                        </div>
                    </div>
                </div>

                <div className='relative w-full overflow-hidden'>
                    <div ref={scrollContainerRef} className='w-full flex justify-start items-center gap-6 px-4 md:px-2 pb-6 min-h-[250px] overflow-x-scroll hideScrollBar snap-x snap-mandatory scroll-smooth'>
                        {review.map((item: any, i: number) => (
                            <div key={i} className="snap-center">
                                <CustomerReviewCard item={item} />
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    )
}

export default OurHappyCustomers