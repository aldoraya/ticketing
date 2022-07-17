import AliceCarousel from 'react-alice-carousel';
import "react-alice-carousel/lib/alice-carousel.css";
import Image from "next/image"

export default function ImageSlider(pros) {
    return (
        <div className="md:mt-10 mx-5 md:mx-32 relative bottom-12 md:bottom-0 z-0">
            <h2 className="font-bold text-base md:text-3xl mb-4 text-left">Promo Tiket Kereta Api</h2>
            <nav className="hidden md:flex">
                <AliceCarousel autoPlay infinite autoPlayInterval={3000} mouseTracking>
                    <Image src="/1.jpg" width={1200} height={400} alt="gambar-1" className="rounded-xl" priority />
                    <Image src="/2.jpg" width={1200} height={400} alt="gambar-2" className="rounded-xl" priority />
                    <Image src="/3.jpg" width={1200} height={400} alt="gambar-3" className="rounded-xl" priority />
                    <Image src="/4.jpg" width={1200} height={400} alt="gambar-4" className="rounded-xl" priority />
                    <Image src="/6.jpg" width={1200} height={400} alt="gambar-6" className="rounded-xl" priority />
                    <Image src="/7.jpg" width={1200} height={400} alt="gambar-7" className="rounded-xl" priority />
                </AliceCarousel>
            </nav>
            <nav className='block md:hidden'>
                <AliceCarousel autoPlay infinite autoPlayInterval={3000} mouseTracking>
                    <Image src="/1.jpg" width={700} height={250} alt="gambar-1" className="rounded-xl" priority />
                    <Image src="/2.jpg" width={700} height={250} alt="gambar-2" className="rounded-xl" priority />
                    <Image src="/3.jpg" width={700} height={250} alt="gambar-3" className="rounded-xl" priority />
                    <Image src="/4.jpg" width={700} height={250} alt="gambar-4" className="rounded-xl" priority />
                    <Image src="/6.jpg" width={700} height={250} alt="gambar-6" className="rounded-xl" priority />
                    <Image src="/7.jpg" width={700} height={250} alt="gambar-7" className="rounded-xl" priority />
                </AliceCarousel>
            </nav>
        </div>
    )
}