"use client"

import { Category } from '@/types'
import axios from 'axios'
import { useRouter } from 'next/navigation'
import React, { useEffect, useState } from 'react'

const BrowseDressByCategory = () => {

    const [categories, setCategories] = useState<Category[] | []>()

    const router = useRouter()

    const fetchCategory = async () => {
        try {
            const response = await axios.get('/api/category')
            setCategories(response.data.tdCategory)
        } catch (error) {
            console.log(error)
        }
    }

    useEffect(() => {
        fetchCategory()
    }, [])

    return (
        <section className='w-full py-20 px-5 lg:px-10 bg-white'>
            <div className='max-w-6xl mx-auto flex flex-col items-center justify-center gap-10'>
                <div className="flex flex-col items-center gap-3">
                    <span className="text-td-primary font-semibold tracking-[0.2em] uppercase text-xs">Categories</span>
                    <h2 className='text-center font-black tracking-tighter text-td-secondary md:text-[40px] text-[32px]'>
                        Browse By Category
                    </h2>
                    <div className="w-16 h-1 bg-td-primary rounded-full mt-2"></div>
                </div>

                <div className='flex flex-wrap items-center justify-center w-full gap-4 font-medium text-sm lg:px-20'>
                    {categories?.slice(0, 6).map((category: Category, i) => (
                        <div 
                            key={i} 
                            onClick={() => router.push(`/category/${category._id}`)} 
                            className='bg-slate-50 border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 hover:border-td-primary/30 transition-all duration-300 ease-in-out px-8 py-4 rounded-full flex items-center justify-center cursor-pointer group'
                        >
                            <h3 className='text-[16px] font-semibold text-slate-700 group-hover:text-td-secondary tracking-wide text-center'>{category.categoryName}</h3>
                        </div>
                    ))}
                </div>

                <div className='mt-6 flex items-center justify-center'>
                    <button 
                        onClick={() => router.push('category')}
                        className='group flex items-center gap-2 text-td-secondary font-semibold hover:text-td-primary transition-colors duration-300'
                    >
                        <span>View All Categories</span>
                        <svg className="w-5 h-5 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div >
        </section >
    )
}

export default BrowseDressByCategory