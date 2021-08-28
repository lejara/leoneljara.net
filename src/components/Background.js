import * as React from "react";
import Particles from "react-tsparticles";
import { useEffect, useState } from "react";

const Background = ({ bg_containerRef }) => {
  return (
    <>
      {/* <button
        onClick={() => {
          console.log(bg_containerRef);
          bg_containerRef.current.particles.array.map((x) => {
            // x.maxSpeed = 100;
            x.moveSpeed = 0.2;
            x.direction = -0.5;
            x.color.h.value = 0;
            x.color.l.value = 81;
            x.color.s.value = 50;
          });
        }}
      >
        The Button2
      </button>
      <button
        onClick={() => {
          console.log(bg_containerRef);
          // containerRef.current.pause();
          bg_containerRef.current.particles.array.map((x) => {
            x.moveSpeed = 0;
          });

          // containerRef.current.refresh();
        }}
      >
        Bg MoveSpeed
      </button> */}
      <Particles
        container={bg_containerRef}
        id="tsparticles"
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#0a0d26",
            },
            opacity: 0,
          },
          fullScreen: {
            enable: true,
            zIndex: -20,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 30,
          motion: {
            disable: false,
            reduce: {
              factor: 4,
              value: true,
            },
          },
          particles: {
            bounce: {
              horizontal: {
                random: {
                  enable: true,
                  minimumValue: 0.1,
                },
                value: 1,
              },
              vertical: {
                random: {
                  enable: false,
                  minimumValue: 0.1,
                },
                value: 1,
              },
            },
            color: {
              value: "#ddf0ff",
              animation: {
                h: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 9,
                  sync: false,
                },
                s: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
                l: {
                  count: 0,
                  enable: false,
                  offset: 0,
                  speed: 1,
                  sync: true,
                },
              },
            },
            move: {
              angle: {
                offset: 1,
                value: 97,
              },
              distance: {},
              direction: "bottom",
              enable: true,
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              speed: 0.4,
            },
            number: {
              limit: 0,
              value: 100,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.8,
              },
              value: {
                min: 0.8,
                max: 1,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 0.53,
                sync: false,
                destroy: "none",
                minimumValue: 0.6,
                startValue: "random",
              },
            },
            shadow: {
              blur: 5,
              color: {
                value: "#0734e4",
              },
              enable: true,
              offset: {
                x: 1,
                y: 1,
              },
            },
            shape: {
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 1,
              },
              value: {
                min: 1.7,
                max: 2.2,
              },
            },
            zIndex: {
              random: {
                enable: false,
                minimumValue: 0,
              },
              value: 0,
              opacityRate: 1,
              sizeRate: 1,
              velocityRate: 1,
            },
          },
          pauseOnBlur: false,
          pauseOnOutsideViewport: false,
          responsive: [
            {
              maxWidth: 600,
              options: {
                particles: {
                  number: {
                    limit: 0,
                    value: 30,
                  },
                },
              },
            },
            {
              maxWidth: 768,
              options: {
                particles: {
                  number: {
                    limit: 0,
                    value: 70,
                  },
                },
              },
            },
          ],
          themes: [],
        }}
      />
    </>
  );
};

export default Background;
