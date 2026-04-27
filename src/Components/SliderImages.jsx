import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const SliderImages = () => {
  return (
    <div className="max-w-7xl mx-auto mt-8">
      <Carousel
        autoPlay
        infiniteLoop
        showThumbs={false}
        showStatus={false}
        interval={3000}
        stopOnHover
      >
        <div className="h-[500px]">
          <img
            src="https://cdn.pixabay.com/photo/2022/05/06/20/51/beach-7179100_1280.jpg"
            alt="Beach"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>

        <div className="h-[500px]">
          <img
            src="https://cdn.pixabay.com/photo/2023/05/06/20/20/ai-generated-7975077_1280.png"
            alt="Travel"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>


        <div className="h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1530521954074-e64f6810b32d?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Adventure"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://images.unsplash.com/photo-1571648393873-29bad2324860?q=80&w=1170&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="Adventure"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://cdn.pixabay.com/photo/2017/08/16/01/23/desert-2646209_1280.jpg"
            alt="Adventure"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
        <div className="h-[500px]">
          <img
            src="https://cdn.pixabay.com/photo/2017/09/29/12/24/skenderberg-2798901_1280.jpg"
            alt="Adventure"
            className="w-full h-full object-cover rounded-xl"
          />
        </div>
      </Carousel>
    </div>
  );
};

export default SliderImages;