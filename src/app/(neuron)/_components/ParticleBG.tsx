"use client";
import Particles, { initParticlesEngine } from "@tsparticles/react";
import { loadSlim } from "@tsparticles/slim";
import { useEffect, useState, useMemo } from "react";
export default function ParticleBG() {
  const [init, setInit] = useState(false);
  useEffect(() => {
    initParticlesEngine(async (engine) => {
      // you can initiate the tsParticles instance (engine) here, adding custom shapes or presets
      // this loads the tsparticles package bundle, it's the easiest method for getting everything ready
      // starting from v2 you can add only the features you need reducing the bundle size
      //await loadAll(engine);
      //await loadFull(engine);
      await loadSlim(engine);
      //await loadBasic(engine);
    }).then(() => {
      setInit(true);
    });
  }, []);
  const particlesLoaded = (container: any) => {
    console.log(container);
  };

  const options = useMemo(
    () => ({
      fpsLimit: 120,
      interactivity: {
        events: {
          // onClick: {
          //   enable: true,
          //   mode: "push",
          // },
          // onHover: {
          //   enable: true,
          //   mode: "repulse",
          // },
        },
        modes: {
          push: {
            quantity: 100,
          },
          repulse: {
            distance: 200,
            duration: 0.4,
          },
        },
      },
      particles: {
        color: {
          value: "#57c09b",
        },
        links: {
          color: "#57c09b",
          distance: 150,
          enable: true,
          opacity: 0.5,
          width: 5,
        },
        move: {
          direction: "none",
          enable: true,
          outModes: {
            default: "bounce",
          },
          random: false,
          speed: 1,
          straight: false,
        },
        number: {
          density: {
            enable: true,
          },
          value: 100,
        },
        opacity: {
          value: 0.5,
        },
        shape: {
          type: "circle",
        },
        size: {
          value: { min: 4, max: 10 },
        },
      },
      detectRetina: true,
    }),
    []
  );
  return (
    <>
      <div
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          zIndex: -1,
        }}
      >
        {init ? (
          <Particles
            id="tsparticles"
            particlesLoaded={particlesLoaded as any}
            options={options as any}
          />
        ) : (
          <></>
        )}
      </div>
    </>
  );
}
