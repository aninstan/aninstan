"use client";
import React from 'react';



export default function Sidebar({ showElement1, showElement2, visibleElement }) {
    
    return (
        <div className="h-[35px] w-[100%] bg-bg_light flex flex-row border-b-[1px] border-border">
            <div 
            className={`flex flex-row self-middle text-[0.8rem] h-[100%] cursor-pointer pt-2 pl-4 pr-10 border-r-[1px] border-bg ${visibleElement === 1 ? 'bg-bg_dark' : 'bg-bg_light'}`} 
            onClick={showElement1}
            >
                <i className="devicon-markdown-original pr-2 pt-[1px] text-cyan-600 text-[1rem]"></i>
                README.md
            </div>

            <div 
            className={`flex flex-row text-[0.8rem] h-[100%] cursor-pointer self-center pt-2 pl-4 pr-10 border-r-[1px] border-bg ${visibleElement === 2 ? 'bg-bg_dark' : 'bg-bg_light'}`} 
            onClick={showElement2}
            >
                <i className="devicon-markdown-original pr-2 pt-[1px] text-cyan-600 text-[1rem]"></i>
                contact.md
            </div>
        </div>
    )};