import * as React from "react";
import Particles from "react-tsparticles";

class Background extends React.Component {
  render() {
    return (
      <Particles
        id="tsparticles"
        init={this.particlesInit}
        loaded={this.particlesLoaded}
        options={{
          autoPlay: true,
          background: {
            color: {
              value: "#0a0d26",
            },
            image: "",
            position: "",
            repeat: "",
            size: "",
            opacity: 0,
          },
          fullScreen: {
            enable: true,
            zIndex: -1,
          },
          detectRetina: true,
          duration: 0,
          fpsLimit: 60,
          manualParticles: [],
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
                  enable: false,
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
            collisions: {
              bounce: {
                horizontal: {
                  random: {
                    enable: false,
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
              enable: true,
              mode: "bounce",
              overlap: {
                enable: true,
                retries: 0,
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
            destroy: {
              mode: "none",
              split: {
                count: 1,
                factor: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: 3,
                },
                rate: {
                  random: {
                    enable: false,
                    minimumValue: 0,
                  },
                  value: {
                    min: 4,
                    max: 9,
                  },
                },
                sizeOffset: true,
              },
            },
            groups: {},
            life: {
              count: 0,
              delay: {
                random: {
                  enable: false,
                  minimumValue: 0,
                },
                value: 0,
                sync: false,
              },
              duration: {
                random: {
                  enable: false,
                  minimumValue: 0.0001,
                },
                value: 0,
                sync: false,
              },
            },
            links: {
              blink: false,
              color: {
                value: "random",
              },
              consent: false,
              distance: 100,
              enable: false,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: false,
                color: {
                  value: "#021bc8",
                },
                enable: false,
              },
              triangles: {
                enable: false,
                frequency: 1,
              },
              width: 1,
              warp: false,
            },
            move: {
              angle: {
                offset: 1,
                value: 97,
              },
              attract: {
                distance: 200,
                enable: false,
                rotate: {
                  x: 3000,
                  y: 3000,
                },
              },
              decay: 0,
              distance: {},
              direction: "bottom",
              drift: 0,
              enable: true,
              gravity: {
                acceleration: 9.81,
                enable: false,
                inverse: false,
                maxSpeed: 50,
              },
              outModes: {
                default: "out",
                bottom: "out",
                left: "out",
                right: "out",
                top: "out",
              },
              random: false,
              size: false,
              speed: 0.4,
              spin: {
                acceleration: 0,
                enable: false,
              },
              straight: false,
              trail: {
                enable: false,
                length: 4,
                fillColor: {
                  value: "#0a0d26",
                },
              },
              vibrate: false,
              warp: false,
            },
            number: {
              density: {
                enable: false,
                area: 900,
                factor: 1000,
              },
              limit: 0,
              value: 100,
            },
            opacity: {
              random: {
                enable: true,
                minimumValue: 0.7,
              },
              value: {
                min: 0.7,
                max: 0.9,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 0.53,
                sync: false,
                destroy: "none",
                minimumValue: 0.3,
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
                x: 0,
                y: 0,
              },
            },
            shape: {
              options: {},
              type: "circle",
            },
            size: {
              random: {
                enable: true,
                minimumValue: 2,
              },
              value: {
                min: 2,
                max: 2,
              },
              animation: {
                count: 0,
                enable: true,
                speed: 2,
                sync: false,
                destroy: "none",
                minimumValue: 1,
                startValue: "max",
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
          pauseOnBlur: true,
          pauseOnOutsideViewport: true,
          responsive: [],
          themes: [],
        }}
      />
    );
  }
}

export default Background;
