import { Tent } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import tl1 from "../../../assets/images/Tent Liner/tl1.jpg";
import tl2 from "../../../assets/images/Tent Liner/tl2.jpg";
import tl3 from "../../../assets/images/Tent Liner/tl3.jpg";
import tl4 from "../../../assets/images/Tent Liner/tl4.jpg";
import tl5 from "../../../assets/images/Tent Liner/tl5.jpg";
import tl6 from "../../../assets/images/Tent Liner/tl6.jpg";
import tl7 from "../../../assets/images/Tent Liner/tl7.jpg";
import tl8 from "../../../assets/images/Tent Liner/tl8.jpg";
import tl9 from "../../../assets/images/Tent Liner/tl9.jpg";

const TentLiner = () => {
  const images = [
    tl1,tl2,tl3,tl4,tl5,tl6,tl7,tl8,tl9,
  ];
  return (
    <>
       <div className='HomeContainer bg-custom-gradient-2 w-screen min-h-screen overflow-x-hidden'>
      <div>
       <Navbar />
      </div>
      <div className="min-h-screen bg-custom-gradient-2 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <div className="flex items-center justify-center mb-4">
            <Tent className="h-12 w-12 text-blue-600" />
          </div>
          <h1 className="text-4xl font-bold text-white mb-6">Tent Liner</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          Our tent liner and pole covers will add a finishing touch of sophistication and elegance to any event. These décor elements are used as a stylish way to hide the tent’s framework and soften the atmosphere while providing a beautiful setting to impress your guests!
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {images.map((image, index) => (
            <div 
              key={index} 
              className="relative overflow-hidden rounded-lg shadow-lg hover:shadow-xl transition-shadow duration-300 group"
            >
              <div className="aspect-w-4 aspect-h-3">
                <img
                  src={image}
                  alt={`White Frame Tent ${index + 1}`}
                  className="w-full h-full object-cover transform group-hover:scale-105 transition-transform duration-300"
                />
              </div>
              <div className="absolute inset-0 bg-black bg-opacity-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            </div>
          ))}
        </div>
      </div>
      </div>
      <div>
        <Footer/>
      </div>
      </div>
    </>
  )
}

export default TentLiner
