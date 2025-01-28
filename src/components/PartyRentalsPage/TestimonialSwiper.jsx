import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import { Navigation, Pagination } from 'swiper/modules';
// import "./Testimonial.css";

const testimonials = [
  {
    id: 1,
    text: "The custom fabrication services were exceptional! They perfectly captured our vision and created stunning pieces that elevated our event.",
    author: "Samantha R.",
    image: "https://images.pexels.com/photos/3769021/pexels-photo-3769021.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 2,
    text: "I was blown away by the quality and creativity of the custom bars and DJ front boards. They were a huge hit with our guests!",
    author: "Michael B.",
    image: "https://images.pexels.com/photos/4342352/pexels-photo-4342352.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 3,
    text: "The vinyl lettering for our seating chart was a beautiful and personalized touch. It made our event feel so special and unique.",
    author: "Jessica L.",
    image: "https://images.pexels.com/photos/5648100/pexels-photo-5648100.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 4,
    text: "From start to finish, the team was professional and collaborative. They listened to our ideas and delivered beyond our expectations.",
    author: "David K.",
    image: "https://images.pexels.com/photos/8636600/pexels-photo-8636600.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
  {
    id: 5,
    text: "The custom fabrication services were a game-changer for our event. The pieces were not only beautiful but also functional and well-made.",
    author: "Emily S.",
    image: "https://images.pexels.com/photos/5876513/pexels-photo-5876513.jpeg?auto=compress&cs=tinysrgb&w=400",
  },
];

const TestimonialSwiper = () => {
  return (
    <div className='bg-custom-gradient-2 mx-10'>
      <Swiper
        modules={[Navigation, Pagination]}
        spaceBetween={50}
        slidesPerView={1}
        navigation
        pagination={{ clickable: true, el: '.custom-pagination' }}
        onSlideChange={() => console.log('slide change')}
        onSwiper={(swiper) => console.log(swiper)}
        className="custom-swiper">
        {testimonials.map((testimonial) => (
          <SwiperSlide key={testimonial.id}>
            <div className="bg-gray-900/50 rounded-lg p-8 flex flex-col items-center">
              <img
                src={testimonial.image}
                alt={testimonial.author}
                className="rounded-full w-24 h-24 mb-4 object-cover shadow-lg border-2 border-gray-300"
              />
              <p className="text-white text-lg italic mb-4">{testimonial.text}</p>
              <p className="text-amber-500 font-semibold">- {testimonial.author}</p>
            </div>
          </SwiperSlide>
        ))}
        {/* <div className="custom-pagination"></div> */}
      </Swiper>
    </div>
  );
};

export default TestimonialSwiper;
