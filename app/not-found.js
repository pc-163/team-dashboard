import Picture from "@/public/assets/404.png";
import Image from 'next/image';

const Error = () => {
  return (
    <div className="text-center">
    <Image src={Picture} className="card_image" alt='404 Error' priority={true} />
    
    </div>
  )
}

export default Error