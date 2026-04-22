import React from 'react'
import { FaStar } from 'react-icons/fa6'
import { TiTick } from 'react-icons/ti'

const CustomerReviewCard = ({ item }: any) => {
    return (
        <div className='bg-white border border-slate-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300 flex flex-col items-start justify-between gap-4 py-8 px-8 rounded-2xl min-w-[280px] md:min-w-[340px] lg:min-w-[380px] h-full group'>
            <div className="flex flex-col gap-4">
                <span className='flex items-center justify-start gap-1 text-yellow-400'>
                    <FaStar size={18} />
                    <FaStar size={18} />
                    <FaStar size={18} />
                    <FaStar size={18} />
                    <FaStar size={18} />
                </span>
                <p className='font-normal text-slate-600 leading-relaxed text-[15px]'>"{item?.review}"</p>
            </div>
            <div className="flex items-center gap-3 mt-4 pt-4 border-t border-slate-50 w-full">
                <div className="w-10 h-10 bg-td-primary/10 rounded-full flex items-center justify-center text-td-secondary font-bold text-lg">
                    {item?.reviewer?.charAt(0)}
                </div>
                <div className="flex flex-col">
                    <span className='flex items-center gap-1 font-bold text-td-secondary text-[15px]'>
                        {item?.reviewer} 
                        <TiTick size={18} className='text-white bg-green-500 rounded-full p-[2px]' />
                    </span>
                    <span className="text-xs text-slate-400">Verified Buyer</span>
                </div>
            </div>
        </div>
    )
}

export default CustomerReviewCard