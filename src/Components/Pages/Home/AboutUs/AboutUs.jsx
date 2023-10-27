import person from '../../../../assets/images/about_us/person.jpg'
import parts from '../../../../assets/images/about_us/parts.jpg'
const AboutUs = () => {
    return (
        <div className="grid lg:grid-cols-2  gap-5 mt-20 ">
            <div className='relative '>
                <img className='w-3/4 h-3/4' src={person} alt="" />
                <img className='w-1/2 border-8 rounded border-white right-0 bottom-0 absolute' src={parts} alt="" />
            </div>
            <div className='space-y-5'>
                <h3 className='text-xl font-bold text-[#FF3811]'>About US</h3>
                <h2 className='text-5xl font-bold'>We are qualified & of experience in this field</h2>
                <p className='text-[#737373] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <p className='text-[#737373] font-normal'>There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration in some form, by injected humour, or randomised words which don't look even slightly believable. </p>
                <button className="btn normal-case btn-active text-white hover:text-black bg-[#FF3811] mr-5">Discover More</button>
            </div>
        </div>


    );
};

export default AboutUs;