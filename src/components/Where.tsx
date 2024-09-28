import React from "react";
import Title from "./ui/Title";
import MapComponent from "./Map";
// WEBSITE :: https://www.mapchart.net/world.html
export default function Where() {
  return (
    <section className="my-10 overflow-hidden">
      <Title
        title="أين ايكومبو ؟"
        description="ايكومبو بيوجد في أكثر من دولة"
      />
      <MapComponent/>
      {/* <div className="container my-5">
        <div className="min-h-[450px] bg-cover bg-center bg-no-repeat rounded-lg relative">
          <div
            className="absolute inset-0 bg-black bg-opacity-50 z-10 rounded-lg"
            style={{
              backgroundImage:
                "linear-gradient(to top, #00000030, #00000030), url('/images/Map.png')",
              backgroundSize: "cover",
              backgroundPosition: "center",
            }}
          >
            <div className="w-full h-[450px] relative">
              <svg
                width={50}
                height={50}
                className="pin-animation absolute top-[42%] left-[45%] transition-all transform hover:scale-110 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
                  <path
                    fill="#e13b36"
                    d="M24 9c0 6-8 20-8 20S8 15 8 9c0-3.3 4-6 8-6s8 2.7 8 6z"
                  />
                  <path
                    fill="#c32a28"
                    d="M24 9c0 6-8 20-8 20V3c4 0 8 2.7 8 6z"
                  />
                  <circle cx="16" cy="11" r="3" fill="#fff" />
              </svg>

              <svg
                width={50}
                height={50}
                className="pin-animation absolute top-[44%] md:top-[46%] left-[78%] md:left-[62%] transition-all transform hover:scale-110 animate-bounce"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
              >
               
                  <path
                    fill="#e13b36"
                    d="M24 9c0 6-8 20-8 20S8 15 8 9c0-3.3 4-6 8-6s8 2.7 8 6z"
                  />
                  <path
                    fill="#c32a28"
                    d="M24 9c0 6-8 20-8 20V3c4 0 8 2.7 8 6z"
                  />
                  <circle cx="16" cy="11" r="3" fill="#fff" />
               
              </svg>
            </div>
          </div>
        </div>
      </div> */}
    </section>
  );
}
