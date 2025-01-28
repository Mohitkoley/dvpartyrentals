import { Tent } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import sl1 from "../../../assets/images/Skylight/sl1.jpg";
import sl2 from "../../../assets/images/Skylight/sl2.jpg";
import sl3 from "../../../assets/images/Skylight/sl3.jpg";
import sl4 from "../../../assets/images/Skylight/sl4.jpg";
import sl5 from "../../../assets/images/Skylight/sl5.jpg";
import sl6 from "../../../assets/images/Skylight/sl6.jpg";

const Skylight = () => {
  const images = [
    sl1,sl2,sl3,sl4,sl5,sl6,
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
          <h1 className="text-4xl font-bold text-white mb-6">Skylight</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
          With an ample selection of shapes and sizes, skylight tents are the perfect choice for everything from intimate gatherings to large-scale events. But what truly sets them apart is their show-stopping skylight roof. This unique feature allows natural light to pour into the event space, creating a beautiful and vibrant atmosphere that your guests will love.
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

export default Skylight
