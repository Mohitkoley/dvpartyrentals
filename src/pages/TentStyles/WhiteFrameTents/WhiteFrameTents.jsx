import { Tent } from 'lucide-react';
import Navbar from '../../../components/PartyRentalsPage/Navbar';
import Footer from '../../../components/Footer/Footer';
import wft1 from '../../../assets/images/Tent Styles/wft1.jpg';
import wft2 from '../../../assets/images/Tent Styles/wft2.jpg';
import wft3 from '../../../assets/images/Tent Styles/wft3.jpg';
import wft4 from '../../../assets/images/Tent Styles/wft4.jpg';
import wft5 from '../../../assets/images/Tent Styles/wft5.jpg';
import wft6 from '../../../assets/images/Tent Styles/wft6.jpg';
import wft7 from '../../../assets/images/Tent Styles/wft7.jpg';
import wft8 from '../../../assets/images/Tent Styles/wft8.jpg';
import wft9 from '../../../assets/images/Tent Styles/wft9.jpg';


const WhiteFrameTents = () => {
  
  const images = [wft1,wft2,wft3,wft4,wft5,wft6,wft7,wft8,wft9,];

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
          <h1 className="text-4xl font-bold text-white mb-6">White Frame Tents</h1>
          <p className="max-w-3xl mx-auto text-lg text-white leading-relaxed">
            White frame tents are a popular choice for many outdoor events and gatherings. 
            The sturdy aluminum frames provide a secure and stable structure that can be 
            installed on any surface. There are no poles in the center of the tent, only 
            around the perimeter. With the ability to accommodate a variety of configurations, 
            our white frame tents can offer endless possibilities for your event!
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

export default WhiteFrameTents
