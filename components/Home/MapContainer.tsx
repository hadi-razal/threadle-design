"use client"

import React from 'react';
import { GoogleMap, useLoadScript, Marker } from '@react-google-maps/api';

const center = {
    lat: 11.0433600,
    lng: 76.071780,
};

const MapContainer = () => {
    const { isLoaded, loadError } = useLoadScript({
        googleMapsApiKey: 'AIzaSyBU1onFYu4AsvQHRO5Ugacrjo0ObuF7kVo',
    });

    if (loadError) {
        return (
            <section className='w-full py-20 px-4 md:px-10 bg-white'>
                <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center w-full'>
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-td-primary font-semibold tracking-[0.2em] uppercase text-xs">Reach Us</span>
                        <h2 className='text-center font-black tracking-tighter text-td-secondary md:text-[40px] text-[32px]'>
                            Locate Our Store
                        </h2>
                        <div className="w-16 h-1 bg-td-primary rounded-full mt-2"></div>
                    </div>
                    <div className='text-red-500 font-medium bg-red-50 px-6 py-4 rounded-xl border border-red-100'>
                        Error loading maps. Please try again later.
                    </div>
                </div>
            </section>
        )
    }

    if (!isLoaded) {
        return (
            <section className='w-full py-20 px-4 md:px-10 bg-white'>
                <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center w-full'>
                    <div className="flex flex-col items-center gap-3">
                        <span className="text-td-primary font-semibold tracking-[0.2em] uppercase text-xs">Reach Us</span>
                        <h2 className='text-center font-black tracking-tighter text-td-secondary md:text-[40px] text-[32px]'>
                            Locate Our Store
                        </h2>
                        <div className="w-16 h-1 bg-td-primary rounded-full mt-2"></div>
                    </div>
                    <div className='flex items-center justify-center h-[50vh] w-full bg-slate-50 rounded-2xl animate-pulse'>
                        <span className="text-slate-400 font-medium">Loading Map...</span>
                    </div>
                </div>
            </section>
        )
    }

    return (
        <section className='w-full py-20 px-4 md:px-10 bg-white'>
            <div className='max-w-7xl mx-auto flex flex-col gap-10 items-center justify-center w-full'>
                <div className="flex flex-col items-center gap-3">
                    <span className="text-td-primary font-semibold tracking-[0.2em] uppercase text-xs">Reach Us</span>
                    <h2 className='text-center font-black tracking-tighter text-td-secondary md:text-[40px] text-[32px]'>
                        Locate Our Store
                    </h2>
                    <div className="w-16 h-1 bg-td-primary rounded-full mt-2"></div>
                </div>
                
                <div className='w-full h-full p-2 border border-slate-100 bg-white shadow-sm hover:shadow-md transition-shadow rounded-[2rem]'>
                    <GoogleMap
                        mapContainerStyle={{ height: '50vh', width: '100%', borderRadius: "1.7rem" }}
                        zoom={20}
                        center={center}
                    >
                        <Marker position={center} />
                    </GoogleMap>
                </div>
            </div>
        </section>
    );
};

export default MapContainer;