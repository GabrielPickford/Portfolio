import React from 'react'
import Image from 'next/image'
import Link from 'next/link';

type CardProps = {
  image: string;
  title: string;
  text: string;
}   

const Card = ({ image, title, text }: CardProps) => {
    return (
        <Link href="/work" className='startup-card'>
            <Image
                src={image}
                alt="DotDager"
                width={800}
                height={200}
                className='image'
            />
            <h1 className='text-30-semibold'>{title}</h1>
            <p className='text-20-medium'>{text}</p>
        </Link>
    )
}
//href={"https://www.youtube.com/watch?v=dQw4w9WgXcQ"}
export default Card
