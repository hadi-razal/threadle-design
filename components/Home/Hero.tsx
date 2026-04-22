"use client"

import Image from 'next/image'
import Link from 'next/link'
import React from 'react'

const Hero = () => {

    return (
        <div className="relative w-full flex flex-col md:flex-row items-center justify-center bg-gradient-to-br from-slate-50 to-white min-h-[90vh] md:pb-10 overflow-hidden">
            {/* Subtle background glow effect */}
            <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-td-primary/10 rounded-full blur-[100px] pointer-events-none" />
            <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-td-secondary/5 rounded-full blur-[100px] pointer-events-none" />

            <div className='md:w-1/2 w-full flex flex-col items-center md:items-start justify-center md:py-10 pt-16 lg:pl-20 px-6 gap-8 z-10'>
                <div className="flex flex-col items-center md:items-start max-w-xl">
                    <span className="text-td-primary font-medium tracking-widest uppercase text-sm mb-4">New Collection</span>
                    <h1 className='text-center md:text-left font-black tracking-tighter text-td-secondary lg:text-[85px] md:text-[60px] text-[50px] leading-[1.1] pb-6'>
                        Threadle Design
                    </h1>
                    <p className='text-slate-600 font-normal md:text-lg text-base text-center md:text-left md:pr-10 leading-relaxed'>
                        Browse through our diverse range of meticulously crafted garments, designed to bring out your individuality and cater to your sense of style.
                    </p>
                </div>
                
                <div className="flex gap-4">
                    <Link href={'/shop'} className='py-4 px-8 rounded-full shadow-lg shadow-td-secondary/20 hover:shadow-xl hover:shadow-td-secondary/30 bg-td-secondary text-[16px] tracking-wide text-white font-semibold transition-all duration-300 hover:-translate-y-1' >
                        Shop Collection
                    </Link>
                </div>

                <div className='hidden lg:flex items-center justify-start gap-8 mt-4 bg-white/60 backdrop-blur-xl border border-white/40 shadow-sm py-4 px-8 rounded-2xl'>
                    <div className='flex flex-col items-start'>
                        <span className='font-black text-3xl text-td-secondary'>2k+</span>
                        <span className='font-medium text-slate-500 text-sm tracking-wide'>Products</span>
                    </div>
                    <div className='w-px h-10 bg-slate-300 rounded-full'></div>
                    <div className='flex flex-col items-start'>
                        <span className='font-black text-3xl text-td-secondary'>10k+</span>
                        <span className='font-medium text-slate-500 text-sm tracking-wide'>Happy Customers</span>
                    </div>
                </div>
            </div>

            <div className='relative md:w-1/2 w-full flex flex-col gap-8 pb-10 items-center justify-center z-10 mt-10 md:mt-0'>
                <div className='relative flex items-center justify-center group'>
                    {/* Decorative Stars */}
                    <div className="absolute -top-10 -left-10 md:top-12 md:left-10 animate-[spin_10s_linear_infinite]">
                        <Image priority={true} src={'/stars.svg'} height={50} width={50} alt='Star Decoration' className="opacity-70" />
                    </div>
                    <div className="absolute bottom-4 right-0 md:bottom-12 md:-right-4 animate-[spin_15s_linear_infinite_reverse]">
                        <Image priority={true} src={'/stars.svg'} height={40} width={40} alt='Star Decoration' className="opacity-50" />
                    </div>
                    
                    {/* Main Image */}
                    <div className='relative w-[320px] md:min-h-[600px] md:w-[450px] min-h-[450px] transition-transform duration-700 ease-out group-hover:scale-[1.02]'>
                        <div className="absolute inset-x-0 bottom-0 h-1/3 bg-gradient-to-t from-slate-100 to-transparent z-10 scale-110 pointer-events-none" />
                        <Image priority={true} src={"/greendress.png"} fill={true} style={{ objectFit: 'contain' }} alt='Green Dress Fashion' className="relative z-0" />
                    </div>
                </div>
                
                {/* Mobile Stats */}
                <div className='lg:hidden flex items-center justify-center gap-6 mt-4 bg-white/80 backdrop-blur-lg border border-white/40 shadow-sm py-4 px-8 rounded-2xl w-11/12 max-w-sm'>
                    <div className='flex flex-col items-center w-1/2'>
                        <span className='font-black text-2xl text-td-secondary'>2k+</span>
                        <span className='font-medium text-slate-500 text-xs tracking-wide uppercase mt-1'>Products</span>
                    </div>
                    <div className='w-px h-10 bg-slate-300'></div>
                    <div className='flex flex-col items-center w-1/2'>
                        <span className='font-black text-2xl text-td-secondary'>10k+</span>
                        <span className='font-medium text-slate-500 text-xs tracking-wide uppercase mt-1'>Customers</span>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default Hero