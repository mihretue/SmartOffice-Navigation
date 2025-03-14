import React from 'react';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 h-auto bg-[#009688] text-center py-4">
            <div className="flex justify-around items-center">
                <div className="text-white">
                    <p>አይቲዲቢ - የቅጂ መብት © {new Date().getFullYear()} 2024 ሁሉም መብቶች የተጠበቁ ናቸው - በ አይቲዲቢ የበለጸገ</p>
                </div>
                <div className="text-white">
                    <p>ስለኛ ማህደሮች</p>
                    <p><i className="fas fa-envelope"></i> tradebureau4541@gmail.com</p>
                    <p><i className="fas fa-phone"></i> 011 111 5581</p>
                    <p><i className="fas fa-phone"></i> Arada Subcity Woreda 1</p>
                    <p> Wastina Commercial Center, 13th and 14th Floor</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 