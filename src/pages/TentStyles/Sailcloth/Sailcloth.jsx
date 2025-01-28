import { Tent } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import sc1 from "../../../assets/images/Sailcloth/sc1.jpg";
import sc2 from "../../../assets/images/Sailcloth/sc2.jpg";
import sc3 from "../../../assets/images/Sailcloth/sc3.jpg";
import sc4 from "../../../assets/images/Sailcloth/sc4.jpg";
import sc5 from "../../../assets/images/Sailcloth/sc5.jpg";
import sc6 from "../../../assets/images/Sailcloth/sc6.jpg";
import sc7 from "../../../assets/images/Sailcloth/sc7.jpg";
import sc8 from "../../../assets/images/Sailcloth/sc8.jpg";
import sc9 from "../../../assets/images/Sailcloth/sc9.jpg";

const Sailcloth = () => {
  const images = [
    sc1,sc2,sc3,sc4,sc5,sc6,sc7,sc8,sc9,
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
          <h1 className="text-4xl font-bold text-white mb-6">Sailcloth</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          Sailcloth tents are among the most versatile and unique tents in our industry. With its high peaks and translucent tops, a sailcloth tent will give your event a distinctive flair and elegance. This tent style offers your event a classic, sophisticated look no matter which size you choose! Sailcloth tents require an additional 6 feet in conjunction with the tent size and can only be installed on a grass surface.
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

export default Sailcloth
