import { useRef, useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import logo from "../../assets/images/logo.png"

const Navbar = () => {
    const [isFixed, setIsFixed] = useState(false);
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const logoRef = useRef(null);
    const navigate = useNavigate();

    useEffect(() => {
        const observer = new IntersectionObserver(
          ([entry]) => {
            setIsFixed(!entry.isIntersecting);
          },
          {
            root: null,
            threshold: 0,
          }
        );
    
        if (logoRef.current) {
          observer.observe(logoRef.current);
        }
    
        return () => {
          if (logoRef.current) {
            observer.unobserve(logoRef.current);
          }
        };
      }, []);

  return (
    <>
      <section className="flex flex-col items-center">
          <div
            ref={logoRef}
            className="w-full h-1/5 text-white flex flex-col justify-center items-center gap-2 mb-8 sm:mb-16 mt-6 sm:mt-10"
          >
            <img src={logo} alt="Logo" className="logo w-36 h-32 sm:w-80 sm:h-64" />
          </div>
          {/* Mobile Menu Button */}
        <button 
          className="lg:hidden fixed top-4 right-4 z-50 text-white p-2 rounded-md"
          onClick={() => setIsMenuOpen(!isMenuOpen)}
        >
          <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            {isMenuOpen ? (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
            ) : (
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
            )}
          </svg>
        </button>

        {/* Navbar */}
        <div
          className={`Navbar w-full bg-black/50 text-white ${
            isFixed ? 'fixed-navbar' : ''
          } ${
            isMenuOpen ? 'flex' : 'hidden lg:flex'
          } ${
            isMenuOpen ? 'fixed inset-0 z-40 flex-col overflow-y-auto pt-16 pb-8 bg-black/90' : 'flex-row flex-wrap'
          } justify-center items-center shadow-lg`}
        >
          <div className={`flex ${isMenuOpen ? 'flex-col w-full px-4' : 'flex-row flex-wrap'} justify-center items-center gap-4 lg:gap-12`}>
            <span className="nav-item" onClick={()=>navigate('/')}>Home</span>
            <span className="nav-item" onClick={()=>navigate('/aboutus')}>About Us</span>

            {/* Dropdown items */}
            <div className={`dropdown ${isMenuOpen ? 'w-full text-center' : ''}`}>
              <span className="nav-item w-full text-center">Tent Styles</span>
              <div className={`dropdown-content ${isMenuOpen ? 'position-static w-full bg-black/50' : ''}`}>
                <a onClick={()=>navigate('/whiteframetents')} className="text-center">White Frame Tents</a>
                <a onClick={()=>navigate('/cleartoptents')} className="text-center">Clear Top Tents</a>
                <a onClick={()=>navigate('/tentliner')} className="text-center">Tent Liner</a>
                <a onClick={()=>navigate('/skylight')} className="text-center">Skylight</a>
                <a onClick={()=>navigate('/sailcloth')} className="text-center">Sailcloth</a>
                <a onClick={()=>navigate('/swag')} className="text-center">Swag</a>
              </div>
            </div>

            <div className='dropdown'>
              <span>Packages</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/tentpackages')}>Tent Packages</a>
                <a onClick={() => navigate('/tentlinerpackages')}>Tent & Liner Package</a>
                <a onClick={() => navigate('/cleartoppackages')}>Clear Top Packages</a>
                <a onClick={() => navigate('/sailclothpackages')}>Sailcloth Packages</a>
                <a onClick={() => navigate('/rusticpackages')}>Rustic Packages</a>
                <a onClick={() => navigate('/loungepackages')}>Lounge Packages</a>
              </div>
            </div>

            <div className='dropdown'>
              <span>Rustic</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/rusticinventory')}>Rustic Inventory</a>
                <a onClick={() => navigate('/rusticpackages')}>Rustic Packages</a>
                <a onClick={() => navigate('/rusticgallery')}>Rustic Gallery</a>
              </div>
            </div>

            <div className='dropdown'>
              <span>Lounge</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/loungeinventory')}>Lounge Inventory</a>
                <a onClick={() => navigate('/loungepackages')}>Lounge Packages</a>
                <a onClick={() => navigate('/loungegallery')}>Lounge Gallery</a>
              </div>
            </div>

            <div className='dropdown'>
              <span>Accessories</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/tablesandchairs')}>Tables & Chairs</a>
                <a onClick={() => navigate('/linens')}>Linens</a>
                <a onClick={() => navigate('/lighting')}>Lighting</a>
                <a onClick={() => navigate('/flooring')}>Flooring</a>
                <a onClick={() => navigate('/bars')}>Bars</a>
                <a onClick={() => navigate('/backdropsanddraping')}>Backdrops and Draping</a>
                <a onClick={() => navigate('/avstaging')}>AV & Staging</a>
                <a onClick={() => navigate('/heatingandcooling')}>Heating And Cooling</a>
              </div>
            </div>

            <div className='dropdown'>
              <span>Décor</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/decorinventory')}>Décor Inventory</a>
                <a onClick={() => navigate('/decorpackages')}>Décor Packages</a>
                <a onClick={() => navigate('/decorgallery')}>Décor Gallery</a>
              </div>
            </div>

            <div className='dropdown'>
              <span>Design</span>
              <div className="dropdown-content">
                <a onClick={() => navigate('/eventdesign')}>Event Design</a>
                <a onClick={() => navigate('/customfabrication')}>Custom Fabrication</a>
              </div>
            </div>

            <span className="nav-item" onClick={()=>navigate('/request')}>Quote Request</span>
          </div>
        </div>
      </section>

      {/* Add styles to your CSS */}
      <style jsx>{`
        .nav-item {
          @apply cursor-pointer hover:text-gray-300 py-2 px-4 text-center w-full;
        }

        .dropdown {
          @apply relative w-full;
        }

        .dropdown-content {
          @apply hidden absolute bg-black/80 min-w-[200px] shadow-lg z-50;
        }

        .dropdown-content a {
          @apply block px-4 py-2 hover:bg-gray-700 cursor-pointer w-full;
        }

        .dropdown:hover .dropdown-content {
          @apply block;
        }

        @media (max-width: 1024px) {
          .dropdown:hover .dropdown-content {
            position: static;
            width: 100%;
          }
          
          .dropdown-content {
            width: 100%;
            text-align: center;
          }
          
          .dropdown span {
            display: block;
            width: 100%;
            text-align: center;
          }
        }

        .fixed-navbar {
          @apply fixed top-0 z-40;
        }
      `}</style>
    </>
  )
}

export default Navbar
