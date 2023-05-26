import React,{useState, useEffect} from 'react';
import Image from 'next/image';
// import { relative } from 'path';

interface LazyCardProps {
  bottomSquareSize?: 'small' | 'big';
  height?: 300 | 350 | 400 | 450;
  imageSrc?: string;
}
const LazyCard = ({
  bottomSquareSize = 'small',
  height = 450,
  imageSrc
}: LazyCardProps) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });

  useEffect(() => {
    const calculateImageDimensions = () => {
      if (!imageSrc) return;

      const img = document.createElement('img');
      img.src = imageSrc;
      img.onload = () => {

        const imgAspectRatio = img.width / img.height;

        if (imgAspectRatio > 1.6) {
          // Landscape image
          const maxWidth = 480;
          const calculatedWidth = Math.min(img.width, maxWidth);
          const calculatedHeight = calculatedWidth / imgAspectRatio;
          setImageDimensions({ width: calculatedWidth, height: calculatedHeight });
        } else {
          // Portrait image
          const maxHeight = 300;
          const calculatedHeight = Math.min(img.height, maxHeight);
          const calculatedWidth = calculatedHeight * imgAspectRatio;
          setImageDimensions({ width: calculatedWidth, height: calculatedHeight });
        }
      };
    };

    calculateImageDimensions();
  }, [imageSrc]);
  console.log(`card dimension:${imageDimensions.width},${imageDimensions.height}`);


  return (
    <div
      className={`w-full ${
        height == 300
          ? 'h-[300px]'
          : height == 350
          ? 'h-[350px]'
          : height == 400
          ? 'h-[400px]'
          : height == 450
          ? 'h-[450px]'
          : ''
      } flex flex-col place-items-center place-content-between bg-cardDark border border-lightPurple pt-[54px] rounded-md px-12 lg:px-16 py-2`}
    >
      <div className="w-full flex flex-col place-items-center">
        {/* bg-[#212136] */}
        <div className="w-full max-w-[160px] h-[26px] mb-3.5 rounded-full bg-primary "></div>
        <div className="w-full max-w-[96px] h-[26px] rounded-full bg-white"></div>
      </div>
      <div
        className={`w-full ${
          bottomSquareSize == 'small' ? 'max-w-[480px] max-h-[300px]' : ''
        } h-7/12 rounded-tr-[20px] rounded-tl-[20px] bg-[#212136]`}
        style={{position:'relative', width:imageDimensions.width, height:imageDimensions.height}}
      >
        {   
          imageSrc && (
              <Image
                src={imageSrc}
                alt="cardImage"
                layout="fill"
                objectFit="cover"
                // objectPosition="center"
                className="rounded-tr-[20px] rounded-tl-[20px]"
              />
          )
        }
      </div>
    </div>
  )
}

export default LazyCard;
export type {LazyCardProps};