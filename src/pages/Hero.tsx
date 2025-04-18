import { useRef } from 'react';
import Squares from '../Backgrounds/Squares/Squares';
import ClickSpark from '../Animations/ClickSpark/ClickSpark';
import { animations, heroContent } from '../content';
import { useTheme } from '../context/ThemeContext';
import VariableProximity from '../TextAnimations/VariableProximity/VariableProximity';

const Hero = () => {
  const { themeColors } = useTheme();
  const containerRef = useRef(null);

  return (
    <div className="w-full h-screen">
      <ClickSpark
        sparkColor={themeColors.sparkColor}
        sparkSize={animations.spark.size}
        sparkRadius={animations.spark.radius}
        sparkCount={animations.spark.count}
        duration={animations.spark.duration}
      >
        <div 
          className="relative w-full h-screen overflow-hidden transition-colors duration-300" 
          style={{ backgroundColor: themeColors.background }}
        >
          <Squares 
            speed={animations.grid.speed} 
            squareSize={animations.grid.squareSize}
            direction={animations.grid.direction}
            borderColor={themeColors.gridBorder}
            hoverFillColor={themeColors.gridHover}
            backgroundColor={themeColors.background}
          />
          
          <div className="relative z-10 flex flex-col md:flex-row items-center justify-between h-full px-6 md:px-16 lg:px-24 max-w-7xl mx-auto pt-16">
            {/* Left side content */}
            <div className="text-left md:w-1/2 mb-12 md:mb-0 mt-16 md:mt-0">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-4" style={{ color: themeColors.text.primary }}>
                <VariableProximity
                  label={heroContent.title}
                  className="variable-proximity-demo font-sans"
                  fromFontVariationSettings="'wght' 400, 'opsz' 9"
                  toFontVariationSettings="'wght' 1000, 'opsz' 40"
                  containerRef={containerRef as unknown as React.RefObject<HTMLElement>}
                  radius={100}
                  falloff='linear'
                  style={{ color: themeColors.text.primary }}
                />
              </h1>
              <p className="text-lg md:text-xl mb-8" style={{ color: themeColors.text.secondary }}>
                {heroContent.subtitle}
              </p>
              
              <button
                className="px-6 py-3 rounded-lg font-medium transition-colors duration-300"
                style={{ 
                  backgroundColor: themeColors.secondary,
                  color: '#FFFFFF'
                }}
              >
                {heroContent.cta}
              </button>
            </div>
            
            {/* Right side content with image */}
            <div className="md:w-1/2 h-64 md:h-96 lg:h-[500px] relative flex flex-col items-center justify-center">
              {/* Transport Image */}
              <div className="w-full h-auto mt-4 flex justify-center">
                <img 
                  src="/assets/transport-truck.png" 
                  alt="Transport Truck" 
                  className="max-w-full max-h-[300px] object-contain rounded-lg shadow-lg"
                  onError={(e) => {
                    const target = e.target as HTMLImageElement;
                    target.src = "https://placehold.co/600x400/1A365D/FFFFFF?text=Transport+Solutions";
                  }}
                />
              </div>
            </div>
          </div>
        </div>
      </ClickSpark>
    </div>
  );
};

export default Hero;