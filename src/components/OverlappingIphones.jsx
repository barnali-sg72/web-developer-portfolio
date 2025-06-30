import React from "react";

export default function OverlappingIPhones({ imgSrc1, imgSrc2 }) {
  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 to-purple-50 flex items-center justify-center p-8">
      <div className="relative w-full max-w-4xl">
        {/* Container for both phones */}
        <div className="relative h-96 md:h-[500px] lg:h-[600px]">
          {/* First iPhone - Back phone */}
          <div className="absolute top-0 left-1/2 transform -translate-x-1/2 md:translate-x-8 rotate-12 z-10">
            <div className="marvel-device iphone-x scale-75 md:scale-90 lg:scale-100">
              <div className="notch">
                <div className="camera"></div>
                <div className="speaker"></div>
              </div>
              <div className="top-bar"></div>
              <div className="sleep"></div>
              <div className="bottom-bar"></div>
              <div className="volume"></div>
              <div className="overflow">
                <div className="shadow shadow--tr"></div>
                <div className="shadow shadow--tl"></div>
                <div className="shadow shadow--br"></div>
                <div className="shadow shadow--bl"></div>
              </div>
              <div className="inner-shadow"></div>
              <div className="screen">
                <img
                  src={imgSrc1}
                  alt="App Screenshot 1"
                  className="w-full h-full object-cover"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* Second iPhone - Front phone */}
          <div className="absolute top-8 left-1/2 transform -translate-x-1/2 md:-translate-x-8 -rotate-12 z-20">
            <div className="marvel-device iphone-x scale-75 md:scale-90 lg:scale-100">
              <div className="notch">
                <div className="camera"></div>
                <div className="speaker"></div>
              </div>
              <div className="top-bar"></div>
              <div className="sleep"></div>
              <div className="bottom-bar"></div>
              <div className="volume"></div>
              <div className="overflow">
                <div className="shadow shadow--tr"></div>
                <div className="shadow shadow--tl"></div>
                <div className="shadow shadow--br"></div>
                <div className="shadow shadow--bl"></div>
              </div>
              <div className="inner-shadow"></div>
              <div className="screen">
                <img
                  src={imgSrc2}
                  alt="App Screenshot 2"
                  className="w-full h-full object-cover"
                />
              </div>
            </div>
          </div>
        </div>

        {/* Optional: Add some shadow effects */}
        <div className="absolute inset-0 pointer-events-none">
          <div className="absolute top-12 left-1/2 transform -translate-x-1/2 translate-x-8 rotate-12 w-64 h-96 bg-black/10 rounded-3xl blur-xl scale-75 md:scale-90 lg:scale-100"></div>
          <div className="absolute top-16 left-1/2 transform -translate-x-1/2 -translate-x-8 -rotate-12 w-64 h-96 bg-black/10 rounded-3xl blur-xl scale-75 md:scale-90 lg:scale-100"></div>
        </div>
      </div>
    </div>
  );
}
