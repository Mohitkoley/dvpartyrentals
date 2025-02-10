import { useNavigate } from 'react-router-dom';
import { Instagram, Facebook, } from '@mui/icons-material';
import logo from "../../assets/images/logo.png"

const Footer = () => {
  const navigate = useNavigate();

  return (
    <section className="FooterContainer flex flex-col text-white py-6">
      {/* Links Section */}
      <div className="AboveLine w-full flex md:flex-row flex-col md:justify-between justify-center items-center mb-4 px-6">
        {/* Infolinks */}
        <div className="infolinks flex gap-6 flex-wrap md:mb-0 mb-4">
          <span className="cursor-pointer hover:underline">
            About Us
          </span>
          <span className="cursor-pointer hover:underline">
            Services
          </span>
          <span
            className="cursor-pointer hover:underline"
            onClick={()=>navigate('/request')}
          >
            Contact Us
          </span>
        </div>

        {/* Footer Logo */}
        <span className="FooterLogo font-lobster text-gradient text-4xl md:mr-6 cursor-pointer">
          <img src={logo} alt="Logo" className="logo w-20 h-12" />
        </span>
      </div>

      {/* Divider Line */}
      <div className="line bg-gray-600 h-px w-full"></div>

      {/* Below Line Section */}
      <div className="belowline w-full flex md:justify-between justify-center flex-wrap items-center mt-4 px-6">
        {/* Left Section */}
        <div className="left-section flex gap-6 flex-wrap md:mb-0 mb-4">
          <span className="cursor-pointer hover:underline">Email</span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate('#')}
          >
            Privacy Policy
          </span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate('#')}
          >
            Terms of Service
          </span>
        </div>

        {/* Right Section */}
        <div className="right-section flex gap-4 flex-wrap md:mr-6">
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate('#')}
          >
            <Instagram fontSize='large' className=' hover:text-pink-600' />
          </span>
          <span
            className="cursor-pointer hover:underline"
            onClick={() => navigate('#')}
          >
            <Facebook fontSize='large' className='hover:text-sky-500' />
          </span>
        </div>
      </div>
      {/* Copyright Text */}
      <div className="copyright text-center text-gray-400 text-lg mt-4">
        Copyright &copy; {new Date().getFullYear()} Dynamic Vibes - Party Rentals. All Rights Reserved
      </div>
    </section>
  );
};

export default Footer;
