import Navbar from '../../components/PartyRentalsPage/Navbar';
import Footer from '../../components/Footer/Footer';
import { Wine, Lightbulb, Table2 } from 'lucide-react';
import fruitwood from "../../assets/images/Rustic Inventory/Fruitwood-BQT.jpg";
import cocktail from "../../assets/images/Rustic Inventory/round-rustick-cocktail.jpg";
import cocktail2 from "../../assets/images/Rustic Inventory/sq-rustic-cocktail.jpg";
import winebarrel from "../../assets/images/Rustic Inventory/wine-cocktail-table.jpg";
import farmtable from "../../assets/images/Rustic Inventory/farm-table.jpg";
import whitefarmtable from "../../assets/images/Rustic Inventory/white-farm-3.jpg";
import farmtable2 from "../../assets/images/Rustic Inventory/6ft-farm-3.jpg";
import sweetheart from "../../assets/images/Rustic Inventory/sweetheart-table.jpg";
import chestnut from "../../assets/images/Rustic Inventory/chestnut-crossback.jpg";
import driftwood from "../../assets/images/Rustic Inventory/driftwood-crossback.jpg";
import whitecross from "../../assets/images/Rustic Inventory/white-crossback.jpg";
import ivory from "../../assets/images/Rustic Inventory/fruitwood-ivory-seat.jpg";

export const RusticInventory = () => {
  const farmTablesData = [
    { name: "72\" l x 30\" w fruitwood banquet", image: fruitwood },
    { name: "30\" Round Rustic Cocktail Table", image: cocktail },
    { name: "30\" Square Rustic Cocktail table", image: cocktail2 },
    { name: "Wine Barrel Cocktail Table", image: winebarrel },
    { name: "96\" L x 40\" w farm table", image: farmtable },
    { name: "96\" L x 40\" w white farm table", image: whitefarmtable },
    { name: "72\" l x 36\" w farm table", image: farmtable2 },
    { name: "60″ sweetheart table", image: sweetheart },
  ];

  const chairsData = [
    { name: "Fruitwood Crossback Chair", image: chestnut },
    { name: "Driftwood Crossback Chair", image: driftwood },
    { name: "White Crossback Chair", image: whitecross },
    { name: "Fruitwood Crossback Chair with Ivory Seat", image: ivory },
  ];

  const barsData = [
    { 
      name: "Wine Barrel Bar with Shelving",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental"
    },
    { 
      name: "2 Barrel or 3 Barrel Wine Bar",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental"
    },
    { 
      name: "2 Barrel or 3 Barrel Whiskey Bar",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental"
    },
    { 
      name: "Rustic Portable Bar",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental. Also available in white & dark maple."
    },
    { 
      name: "Wooden Rustic Bar",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental"
    },
  ];

  const additionalItems = [
    { 
      name: "Rustic Cooler",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental"
    },
    { 
      name: "Rustic Flooring",
      image: "https://placehold.co/100x100/png",
      description: "Only Available With Tent Rental"
    },
  ];
  return (
    <>
      <div className="bg-custom-gradient-2 min-h-screen overflow-x-hidden">
      <Navbar />
      <div className="container mx-auto px-4 py-8">
        <h1 className="text-4xl font-bold text-center text-white mb-8">Rustic Inventory</h1>
        
        <div className="p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Table2 size={24} />
            <h2 className="text-2xl font-semibold">Farm Tables & Chairs</h2>
          </div>
          <p className="text-center text-amber-400 mb-6">Only Available With Tent Rental</p>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 mb-8">
            {farmTablesData.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-30 h-30 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{item.name}</h3>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
            {chairsData.map((chair, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={chair.image} alt={chair.name} className="mb-2 w-30 h-30 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{chair.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="bg-gray-900/50 p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Lightbulb size={24} />
            <h2 className="text-2xl font-semibold">Lighting</h2>
          </div>
          <p className="text-center text-amber-400">Only Available With Tent Rental</p>
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 mt-10 gap-6">
            {chairsData.map((chair, index) => (
              <div key={index} className="p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={chair.image} alt={chair.name} className="mb-2 w-30 h-30 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center">{chair.name}</h3>
              </div>
            ))}
          </div>
        </div>

        <div className="p-6 rounded-lg mb-8">
          <div className="flex items-center justify-center gap-2 text-amber-500 mb-4">
            <Wine size={24} />
            <h2 className="text-2xl font-semibold">Bars & Additional Items</h2>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 mb-8">
            {barsData.map((bar, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={bar.image} alt={bar.name} className="mb-2 w-30 h-30 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center mb-2">{bar.name}</h3>
                <p className="text-sm text-gray-400 text-center">{bar.description}</p>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {additionalItems.map((item, index) => (
              <div key={index} className="bg-gray-900 p-4 rounded-lg flex flex-col items-center transform hover:scale-105 transition-transform">
                <img src={item.image} alt={item.name} className="mb-2 w-30 h-30 object-cover rounded-lg" />
                <h3 className="text-lg font-medium text-white text-center mb-2">{item.name}</h3>
                <p className="text-sm text-gray-400 text-center">{item.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
    </>
  )
}

