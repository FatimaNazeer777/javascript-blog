import Image from "next/image";
import img1 from "../images/carousel1.png"
import img2 from "../images/carousel2.png"
import img3 from "../images/carousel3.png"
import img4 from "../images/carousel4.png"

export default function Carousel() {
    return (
      <>
       <div className="carousel w-full">
  <div id="slide1" className="carousel-item relative w-full">
    <Image
      src={img1}
      alt="image"
      className="w-full h-[400px]"/>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide4" className="btn btn-circle">❮</a>
      <a href="#slide2" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide2" className="carousel-item relative w-full">
    <Image
      src={img2}
      alt="image"
      className="w-full h-[400px]" />
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide1" className="btn btn-circle">❮</a>
      <a href="#slide3" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide3" className="carousel-item relative w-full">
  <Image
      src={img3}
      alt="image"
      className="w-full h-[400px]"/>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide2" className="btn btn-circle">❮</a>
      <a href="#slide4" className="btn btn-circle">❯</a>
    </div>
  </div>
  <div id="slide4" className="carousel-item relative w-full">
  <Image
      src={img4}
      alt="image"
      className="w-full h-[400px]"/>
    <div className="absolute left-5 right-5 top-1/2 flex -translate-y-1/2 transform justify-between">
      <a href="#slide3" className="btn btn-circle">❮</a>
      <a href="#slide1" className="btn btn-circle">❯</a>
    </div>
  </div>
</div>
      </>
    );
  }
  