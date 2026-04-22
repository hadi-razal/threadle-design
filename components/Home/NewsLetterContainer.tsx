"use client"

import React, { useState } from 'react'
import toast from 'react-hot-toast'

const NewsLetterContainer = () => {

    const [phone, setPhone] = useState<string>("")

    const handleSubmit = () => {
        if (!phone) return;
        try {
            setPhone("")
            toast.success("Successfully subscribed to Newsletter!")
        } catch (error) {
            console.log(error)
        }
    }

    return (
        <section className='w-full py-20 px-4 md:px-10 bg-white'>
            <div className='max-w-6xl mx-auto'>
                <div className='relative bg-td-secondary overflow-hidden flex md:flex-row flex-col items-center justify-between gap-10 rounded-[2.5rem] w-full px-8 py-16 md:px-16 md:py-20 shadow-2xl shadow-td-secondary/30'>
                    
                    {/* Decorative Background Elements */}
                    <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-white/5 rounded-full blur-[80px] pointer-events-none -translate-y-1/2 translate-x-1/3"></div>
                    <div className="absolute bottom-0 left-0 w-[300px] h-[300px] bg-td-primary/20 rounded-full blur-[60px] pointer-events-none translate-y-1/2 -translate-x-1/2"></div>
                    
                    <div className='md:w-1/2 flex flex-col items-start justify-center w-full z-10'>
                        <span className="text-td-primary font-medium tracking-[0.2em] uppercase text-xs mb-3 text-white/70">Join The Club</span>
                        <h2 className='font-black text-white md:text-[45px] text-[32px] leading-tight tracking-tighter'>
                            Stay up to date about our latest offers.
                        </h2>
                        <p className="text-white/80 mt-4 font-light text-[15px] max-w-md">
                            Subscribe to receive updates, access to exclusive deals, and more directly to your phone.
                        </p>
                    </div>
                    
                    <div className='flex flex-col items-start gap-4 md:w-[40%] w-full z-10'>
                        <div className="relative w-full flex flex-col sm:flex-row items-center gap-3">
                            <input 
                                type="text"
                                value={phone}
                                maxLength={10}
                                onChange={(e) => setPhone(e.target.value)}
                                className='bg-white/10 border border-white/20 text-white placeholder-white/50 backdrop-blur-md rounded-full px-6 py-4 w-full focus:outline-none focus:ring-2 focus:ring-white/50 transition-all font-medium tracking-wide'
                                placeholder='Enter your phone number' 
                            />
                            <button 
                                onClick={handleSubmit} 
                                className='bg-white text-td-secondary hover:bg-td-primary hover:text-white px-8 py-4 rounded-full w-full sm:w-auto font-bold whitespace-nowrap transition-colors duration-300 shadow-md'
                            >
                                Subscribe
                            </button>
                        </div>
                        <p className="text-white/50 text-xs px-2">By subscribing, you agree to our Terms & Conditions.</p>
                    </div>
                </div>
            </div>
        </section>
    )
}

export default NewsLetterContainer