import React from "react";
import {
  ComposableMap,
  Geographies,
  Geography,
  Marker,
} from "react-simple-maps";
import { motion } from "framer-motion";

const geoUrl = "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json";

const MapComponent: React.FC = () => {
  const activeCountries = ["Saudi Arabia", "United Arab Emirates"];

  return (
    <div className="container mx-auto p-4 overflow-hidden">
      <div className="w-full h-96 rounded-lg overflow-hidden">
        <ComposableMap
          projection="geoMercator"
          projectionConfig={{
            scale: 1600,
            center: [45, 25],
          }}
          className="w-full h-full"
        >
          <Geographies geography={geoUrl}>
            {({ geographies }) =>
              geographies.map((geo) => (
                <Geography
                  key={geo.rsmKey}
                  geography={geo}
                  fill={
                    activeCountries.includes(geo.properties.name)
                      ? "#f3a837"
                      : "#E5E7EB"
                  }
                  stroke="#FFFFFF"
                  className="outline-none transition-colors duration-300"
                />
              ))
            }
          </Geographies>

          {/* Active Country Markers */}
          {activeCountries.map((country) => (
            <Marker
              key={country}
              coordinates={country === "Saudi Arabia" ? [45, 25] : [54, 24]}
            >
              <motion.circle
                r={5}
                fill="#f3a837"
                initial={{ scale: 0 }}
                animate={{
                  scale: [0, 1.2, 1],
                  opacity: [0, 1, 0.8],
                }}
                transition={{
                  duration: 2,
                  repeat: Infinity,
                  repeatType: "reverse",
                }}
              />
            </Marker>
          ))}

          {/* Saudi Arabia Marker */}
          <Marker coordinates={[45, 25]}>
            <motion.g
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                  },
                },
              }}
            >
              {/* Main Marker */}
              <motion.circle
                cx={0}
                cy={0}
                r={6}
                fill="#FFD700"
                stroke="#fff"
                strokeWidth={2}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: [0, 1.2, 1],
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      times: [0, 0.6, 1],
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2,
                    },
                  },
                }}
              />
              {/* Outer Ring */}
              <motion.circle
                cx={0}
                cy={0}
                r={10}
                fill="none"
                stroke="#FFD700"
                strokeWidth={2}
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: [0.8, 1.5, 1.2],
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  },
                }}
              />
              {/* Label */}
              <motion.text
                x={12}
                y={-8}
                textAnchor="middle"
                fill="#1F2937"
                className="text-xl text-primary font-medium"
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                SAU
              </motion.text>
            </motion.g>
          </Marker>

          {/* United Arab Emirates Marker */}
          <Marker coordinates={[54, 24]}>
            <motion.g
              initial="hidden"
              animate="visible"
              variants={{
                hidden: {},
                visible: {
                  transition: {
                    staggerChildren: 0.3,
                    delayChildren: 1,
                  },
                },
              }}
            >
              {/* Main Marker */}
              <motion.circle
                cx={0}
                cy={0}
                r={6}
                fill="#1E90FF"
                stroke="#fff"
                strokeWidth={2}
                variants={{
                  hidden: { scale: 0, opacity: 0 },
                  visible: {
                    scale: [0, 1.2, 1],
                    opacity: 1,
                    transition: {
                      duration: 0.8,
                      times: [0, 0.6, 1],
                      repeat: Infinity,
                      repeatType: "reverse",
                      repeatDelay: 2,
                    },
                  },
                }}
              />
              {/* Outer Ring */}
              <motion.circle
                cx={0}
                cy={0}
                r={10}
                fill="none"
                stroke="#1E90FF"
                strokeWidth={2}
                variants={{
                  hidden: { scale: 0.8, opacity: 0 },
                  visible: {
                    scale: [0.8, 1.5, 1.2],
                    opacity: [0, 1, 0],
                    transition: {
                      duration: 2,
                      repeat: Infinity,
                      repeatType: "loop",
                    },
                  },
                }}
              />
              {/* Label */}
              <motion.text
                x={12}
                y={-8}
                textAnchor="middle"
                fill="#1F2937"
                className="text-xl font-medium"
                variants={{
                  hidden: { opacity: 0, y: 5 },
                  visible: {
                    opacity: 1,
                    y: 0,
                    transition: { duration: 0.5 },
                  },
                }}
              >
                UAE
              </motion.text>
            </motion.g>
          </Marker>
        </ComposableMap>
      </div>
    </div>
  );
};

export default MapComponent;
