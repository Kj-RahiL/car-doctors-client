import img1 from '../../../../assets/images/banner/1.jpg'
import img2 from '../../../../assets/images/banner/2.jpg'
import img3 from '../../../../assets/images/banner/3.jpg'
import img4 from '../../../../assets/images/banner/4.jpg'
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const Banner = () => {
    return (
        <div className="carousel w-full h-[90vh]">
            {/* slide 1 */}
            <div id="slide1" className="carousel-item relative w-full">
                <img src={img1} className="w-full" />
                <div className="absolute h-full flex items-center top-0 left-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className="pl-12 w-2/5 text-white space-y-7 ">
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex '>
                            <button className="btn normal-case btn-active text-white hover:text-black bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn normal-case btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-5 ">
                    <a href="#slide4" className="btn btn-circle "><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide2" className="btn btn-circle text-white hover:text-black bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
                
            </div>

            {/* slide 2 */}
            <div id="slide2" className="carousel-item relative w-full">
                <img src={img2} className="w-full" />
                <div className="absolute h-full flex items-center top-0 left-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className="pl-12 w-2/5 text-white space-y-7 ">
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex '>
                            <button className="btn normal-case btn-active text-white hover:text-black bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn normal-case btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-5 ">
                    <a href="#slide1" className="btn btn-circle "><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide3" className="btn btn-circle text-white hover:text-black bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
                
            </div>

            {/* slide 3 */}
            <div id="slide3" className="carousel-item relative w-full">
                <img src={img3} className="w-full" />
                <div className="absolute h-full flex items-center top-0 left-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className="pl-12 w-2/5 text-white space-y-7 ">
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex '>
                            <button className="btn normal-case btn-active text-white hover:text-black bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn normal-case btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-5 ">
                    <a href="#slide2" className="btn btn-circle "><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide4" className="btn btn-circle text-white hover:text-black bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
                
            </div>

            {/* slide 4 */}
            <div id="slide4" className="carousel-item relative w-full">
                <img src={img4} className="w-full" />
                <div className="absolute h-full flex items-center top-0 left-0   bg-gradient-to-r from-[#151515] to-[rgba(21, 21, 21, 0.00)] ">
                    <div className="pl-12 w-2/5 text-white space-y-7 ">
                        <h1 className='text-6xl font-bold'>Affordable Price For Car Servicing</h1>
                        <p>There are many variations of passages of  available, but the majority have suffered alteration in some form</p>
                        <div className='flex '>
                            <button className="btn normal-case btn-active text-white hover:text-black bg-[#FF3811] mr-5">Discover More</button>
                            <button className="btn normal-case btn-outline text-white">Latest Project</button>
                        </div>
                    </div>
                </div>

                <div className="absolute flex justify-end transform -translate-y-1/2 left-5 right-5 bottom-5 gap-5 ">
                    <a href="#slide3" className="btn btn-circle "><FaArrowLeft></FaArrowLeft></a>
                    <a href="#slide1" className="btn btn-circle text-white hover:text-black bg-[#FF3811]"><FaArrowRight></FaArrowRight></a>
                </div>
                
            </div>
            
        </div>
    );
};

export default Banner;