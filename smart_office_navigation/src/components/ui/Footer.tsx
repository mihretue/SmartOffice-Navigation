import { FaEnvelope, FaPhone, FaMapMarker } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="fixed bottom-0 left-0 right-0 h-auto bg-[#009688] text-center py-4">
            <div className="flex justify-around items-center">
                <div className="text-white">
                    <p>አይቲዲቢ - የቅጂ መብት © {new Date().getFullYear()} ሁሉም መብቶች የተጠበቁ ናቸው - በ አይቲዲቢ የበለጸገ</p>
                </div>
                <div className="text-white">

                    <p><FaEnvelope className="inline-block mr-2" /> tradebureau4541@gmail.com</p>
                    <p><FaPhone className="inline-block mr-2" /> 011 111 5581</p>
                    <p><FaMapMarker className="inline-block mr-2" /> Arada Subcity Woreda 1</p>
                    <p> Wastina Commercial Center, 13th and 14th Floor</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer; 