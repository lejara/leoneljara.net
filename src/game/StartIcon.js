// import gsap from "gsap";

// export default function play_icon() {
//   var t = gsap.timeline({ paused: true });
//   t.to(
//     "#top_right",
//     {
//       duration: 0.4,
//       startAt: { x: 40, y: 0 },
//       x: -20,
//       y: 40,
//       ease: "power4",
//       onStart: () => {
//         gsap.set("#top_right, #bottom_left, #top_left, #bottom_right", {
//           opacity: 100,
//         });
//       },
//       onComplete: () => {
//         gsap.set("#top_right, #bottom_left, #top_left, #bottom_right", {
//           opacity: 0,
//         });
//       },
//     },
//     0
//   )
//     .to(
//       "#bottom_left",
//       {
//         duration: 0.4,
//         startAt: { x: 22, y: 0 },
//         x: 50,
//         y: -30,
//         ease: "power3",
//       },
//       0
//     )
//     .to(
//       "#top_left",
//       {
//         duration: 0.4,
//         startAt: { x: 0, y: 10 },
//         x: 50,
//         y: 50,
//         ease: "power2",
//       },
//       0
//     )
//     .to(
//       "#bottom_right",
//       {
//         duration: 0.4,
//         startAt: { x: 5, y: 0 },
//         x: -25,
//         y: -25,
//         ease: "power4",
//       },
//       0
//     );

//   t.restart();
// }
