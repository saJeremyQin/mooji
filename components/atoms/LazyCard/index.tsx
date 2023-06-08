import React,{useState, useEffect} from 'react';
import Image from 'next/image';
// import { relative } from 'path';
import Text from '../Text/index'

interface LazyCardProps {
  bottomSquareSize?: 'small' | 'big';
  height?: 300 | 350 | 400 | 450;
  imageSrc?: string;
  title:string;
}
const LazyCard = ({
  bottomSquareSize = 'small',
  height = 450,
  imageSrc,
  title
}: LazyCardProps) => {
  const [imageDimensions, setImageDimensions] = useState({ width: 0, height: 0 });
  const [windowWidth, setWindowWidth] = useState(0);

  // set the windowWidth
  useEffect(() => {
    const handleResize = () => {
      setWindowWidth(window.innerWidth);
    };

    if (typeof window !== 'undefined') {
      setWindowWidth(window.innerWidth);
      window.addEventListener('resize', handleResize);
    }

    return () => {
      if (typeof window !== 'undefined') {
        window.removeEventListener('resize', handleResize);
      }
    };
  }, []);

  const shouldLimitImageWidth = windowWidth < imageDimensions.width;

  useEffect(() => {
    const calculateImageDimensions = () => {
      if (!imageSrc) return;

      const img = document.createElement('img');
      img.src = imageSrc;
      img.onload = () => {

        const imgAspectRatio = img.width / img.height;

        if (imgAspectRatio > 1.5) {
          // Landscape image
          const maxWidth = 480;
          const calculatedWidth = Math.min(img.width, maxWidth);
          const calculatedHeight = calculatedWidth / imgAspectRatio;
          setImageDimensions({ width: calculatedWidth, height: calculatedHeight });
        } else {
          // Portrait image
          const maxHeight = 320;
          const calculatedHeight = Math.min(img.height, maxHeight);
          const calculatedWidth = calculatedHeight * imgAspectRatio;
          setImageDimensions({ width: calculatedWidth, height: calculatedHeight });
        }
      };
    };

    calculateImageDimensions();
  }, [imageSrc]);
  console.log("the title is", title);
  console.log(`card dimension:${imageDimensions.width},${imageDimensions.height}`);
  console.log(`the height is ${height}, the bottomSquaresize is ${bottomSquareSize}`);
  


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
      } flex flex-col place-items-center place-content-between bg-white bg-opacity-10 border border-light pt-[36px] rounded-md px-12 lg:px-16 py-5`}
    >
      <div className="w-full flex flex-col place-items-center">
        {/* bg-[#212136] */}
        <div className="w-full max-w-[160px] h-[26px] flex items-center justify-center mb-3.5 rounded-full bg-light">
          <Text value={title} textStyle="ProjectTitle" />
        </div>
        <div className="w-full max-w-[96px] h-[26px] rounded-full"></div>
      </div>
      <div
        className={`w-full ${
          bottomSquareSize == 'small' ? 'max-w-[480px] max-h-[300px]' : ''
        } h-7/12 rounded-tr-[20px] rounded-tl-[20px] bg-[#212136]`}
        style={{position:'relative', width:shouldLimitImageWidth? '100%' : imageDimensions.width, height:imageDimensions.height}}
      >
        {/* <div className={ shouldLimitImageWidth ? 'max-w-full':`w-${imageDimensions.width}`} > */}
        { 
          imageSrc && (
              <Image
                src={imageSrc}
                alt="cardImage"
                layout="fill"
                // width={shouldLimitImageWidth ? windowWidth*0.8 : imageDimensions.width}
                // height={imageDimensions.height}
                objectFit="cover"
                className="rounded-tr-[20px] rounded-tl-[20px]"
              />
          )
        }
        {/* </div> */}
      </div>
    </div>
  )
}

export default LazyCard;
export type {LazyCardProps};