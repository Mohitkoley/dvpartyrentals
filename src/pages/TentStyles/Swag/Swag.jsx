import { Tent } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import sw1 from "../../../assets/images/Swag/sw1.jpg";
import sw2 from "../../../assets/images/Swag/sw2.jpg";   
import sw3 from "../../../assets/images/Swag/sw3.jpg";
import sw4 from "../../../assets/images/Swag/sw4.jpg";
import sw5 from "../../../assets/images/Swag/sw5.jpg";
import sw6 from "../../../assets/images/Swag/sw6.jpg";
import sw7 from "../../../assets/images/Swag/sw7.jpg";
import sw8 from "../../../assets/images/Swag/sw8.jpg";
import sw9 from "../../../assets/images/Swag/sw9.jpg";

const Swag = () => {
  const images = [
    sw1,sw2,sw3,sw4,sw5,sw6,sw7,sw8,sw9
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
          <h1 className="text-4xl font-bold text-white mb-6">Swag</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          Choosing to add swag to your tent will help to create a one-of-a-kind backdrop that will leave a lasting impression on your guests! We have multiple colors to choose from to match your event’s ambiance and style.
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

export default Swag
