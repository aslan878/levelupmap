import React from 'react';

const Logo = ({ className = "" }) => {
    return (
        <div className={`relative select-none w-24 h-16 ${className}`}>
            {/* Main Circle (LEVELUP) */}
            <div className="absolute top-0 left-0 z-20">
                <div className="w-14 h-14 rounded-full bg-indigo-900 border-[3px] border-white flex items-center justify-center shadow-[0_0_20px_rgba(79,70,229,0.5)] transition-all duration-300 group-hover:scale-105">
                    <span className="text-[11px] font-black text-white tracking-tighter leading-none uppercase">
                        LEVELUP
                    </span>
                </div>
            </div>

            {/* Small Circle (Map) */}
            <div className="absolute bottom-0 right-1 z-20">
                <div className="w-10 h-10 rounded-full bg-[#5c2a44] border-[3px] border-white flex items-center justify-center shadow-[0_0_15px_rgba(92,42,68,0.5)] transition-all duration-300 group-hover:scale-110">
                    <span className="text-[11px] font-bold text-white leading-none">
                        Map
                    </span>
                </div>
            </div>
        </div>
    );
};

export default Logo;
