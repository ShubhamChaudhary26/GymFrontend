// import { Dumbbell, Heart, Flame, Zap } from "lucide-react";
// import workoutImage from "@/assets/workout-programs.jpg";

// const programs = [
//   {
//     icon: Dumbbell,
//     title: "Strength Training",
//     description: "Build lean muscle mass and increase strength with our progressive overload programs.",
//     features: ["Custom weight programs", "Form correction", "Progress tracking", "Advanced techniques"],
//     color: "from-primary to-primary/70"
//   },
//   {
//     icon: Heart,
//     title: "Cardio Conditioning",
//     description: "Improve cardiovascular health and burn fat with high-intensity interval training.",
//     features: ["HIIT workouts", "Endurance building", "Fat burning focus", "Heart rate zones"],
//     color: "from-red-500 to-red-600"
//   },
//   {
//     icon: Flame,
//     title: "Fat Loss Program",
//     description: "Comprehensive fat loss approach combining training, nutrition, and lifestyle changes.",
//     features: ["Metabolism boosting", "Nutrition coaching", "Body composition", "Sustainable habits"],
//     color: "from-orange-500 to-orange-600"
//   },
//   {
//     icon: Zap,
//     title: "Athletic Performance",
//     description: "Elite training for athletes and those seeking peak physical performance.",
//     features: ["Sport-specific training", "Power development", "Agility & speed", "Injury prevention"],
//     color: "from-blue-500 to-blue-600"
//   }
// ];

// const ProgramsSection = () => {
//   return (
//     <section className="py-20 bg-background">
//       <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
//         <div className="text-center mb-16">
//           <h2 className="text-4xl md:text-5xl font-bold mb-6">
//             Train Smarter, <span className="text-neon">Unleash Your Potential</span>
//           </h2>
//           <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
//             Choose from our scientifically-designed programs, each crafted to deliver
//             maximum results in minimum time.
//           </p>
//         </div>

//         {/* Featured Image */}
//         <div className="mb-16 relative">
//           <img
//             src={workoutImage.src}
//             alt="Professional workout programs"
//             className="w-full h-96 object-cover rounded-2xl opacity-80"
//           />
//           <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent rounded-2xl"></div>
//         </div>

//         <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
//           {programs.map((program, index) => (
//             <div
//               key={index}
//               className="section-card p-8 rounded-xl card-hover group relative overflow-hidden"
//             >
//               {/* Background Gradient */}
//               <div className={`absolute top-0 right-0 w-32 h-32 bg-gradient-to-br ${program.color} opacity-10 rounded-full -mr-16 -mt-16 group-hover:scale-150 transition-transform duration-500`}></div>

//               <div className="relative z-10">
//                 <div className="w-16 h-16 rounded-lg bg-primary/10 flex items-center justify-center mb-6 group-hover:bg-primary/20 transition-colors">
//                   <program.icon className="w-8 h-8 text-primary" />
//                 </div>

//                 <h3 className="text-2xl font-bold mb-4 group-hover:text-neon transition-colors">
//                   {program.title}
//                 </h3>

//                 <p className="text-muted-foreground mb-6">
//                   {program.description}
//                 </p>

//                 <ul className="space-y-2 mb-6">
//                   {program.features.map((feature, featureIndex) => (
//                     <li key={featureIndex} className="flex items-center text-sm">
//                       <div className="w-2 h-2 bg-primary rounded-full mr-3"></div>
//                       {feature}
//                     </li>
//                   ))}
//                 </ul>

//                 <button className="btn-secondary text-sm px-6 py-3">
//                   Learn More
//                 </button>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// };

// export default ProgramsSection;

"use client";
import { ThreeDMarquee } from "@/components/ui/3d-marquee";

export function ThreeDMarqueeDemo() {
  const images = [
    "https://imgs.search.brave.com/D53grwa6TRDNKjcO5Aqmw9jX2n22y2W85MC9Gge-YHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/OTMyMTQ2NzQ0Nzct/MTE1OWJkZGYxNTk4/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5ueDhaVzF3/ZEhrbE1qQm5lVzE4/Wlc1OE1IeDhNSHg4/ZkRBPQ",
    "https://imgs.search.brave.com/kIEcp5aKg7Km_cmWsApH5CLKu-_DXSMiumN1tRxtEnc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/OTI0NjMzMy9waG90/by9tb2Rlcm4tbHV4/dXJ5LWd5bS1pbnRl/cmlvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dFpvblFu/bWpkNkk1bmx1Wllm/VFZNRy00cExiXzg3/OU9EV0UzNUlHZkRO/az0",
    "https://imgs.search.brave.com/0ejr7q28vdQs01nAemzfkdTiQvMgTSZ2aPf77dtgD3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTI4/MjUwODQ4L3Bob3Rv/L2d5bS1iYWNrZ3Jv/dW5kLWJsdXJyZWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTBnZ21seXFVS2p5/S2pkODF0aERacDk4/WDhRYXRsWldPZWkx/OWt4SVBlY009",
    "https://imgs.search.brave.com/0ejr7q28vdQs01nAemzfkdTiQvMgTSZ2aPf77dtgD3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTI4/MjUwODQ4L3Bob3Rv/L2d5bS1iYWNrZ3Jv/dW5kLWJsdXJyZWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTBnZ21seXFVS2p5/S2pkODF0aERacDk4/WDhRYXRsWldPZWkx/OWt4SVBlY009",
    "https://imgs.search.brave.com/D53grwa6TRDNKjcO5Aqmw9jX2n22y2W85MC9Gge-YHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/OTMyMTQ2NzQ0Nzct/MTE1OWJkZGYxNTk4/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5ueDhaVzF3/ZEhrbE1qQm5lVzE4/Wlc1OE1IeDhNSHg4/ZkRBPQ",
    "https://imgs.search.brave.com/D53grwa6TRDNKjcO5Aqmw9jX2n22y2W85MC9Gge-YHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/OTMyMTQ2NzQ0Nzct/MTE1OWJkZGYxNTk4/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5ueDhaVzF3/ZEhrbE1qQm5lVzE4/Wlc1OE1IeDhNSHg4/ZkRBPQ",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://imgs.search.brave.com/D53grwa6TRDNKjcO5Aqmw9jX2n22y2W85MC9Gge-YHE/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMudW5zcGxhc2gu/Y29tL3Bob3RvLTE2/OTMyMTQ2NzQ0Nzct/MTE1OWJkZGYxNTk4/P2ZtPWpwZyZxPTYw/Jnc9MzAwMCZpeGxp/Yj1yYi00LjEuMCZp/eGlkPU0zd3hNakEz/ZkRCOE1IeHpaV0Z5/WTJoOE5ueDhaVzF3/ZEhrbE1qQm5lVzE4/Wlc1OE1IeDhNSHg4/ZkRBPQ",
    "https://imgs.search.brave.com/kIEcp5aKg7Km_cmWsApH5CLKu-_DXSMiumN1tRxtEnc/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvMTI2/OTI0NjMzMy9waG90/by9tb2Rlcm4tbHV4/dXJ5LWd5bS1pbnRl/cmlvci5qcGc_cz02/MTJ4NjEyJnc9MCZr/PTIwJmM9dFpvblFu/bWpkNkk1bmx1Wllm/VFZNRy00cExiXzg3/OU9EV0UzNUlHZkRO/az0",
    "https://imgs.search.brave.com/0ejr7q28vdQs01nAemzfkdTiQvMgTSZ2aPf77dtgD3A/rs:fit:500:0:1:0/g:ce/aHR0cHM6Ly9tZWRp/YS5pc3RvY2twaG90/by5jb20vaWQvOTI4/MjUwODQ4L3Bob3Rv/L2d5bS1iYWNrZ3Jv/dW5kLWJsdXJyZWQu/anBnP3M9NjEyeDYx/MiZ3PTAmaz0yMCZj/PTBnZ21seXFVS2p5/S2pkODF0aERacDk4/WDhRYXRsWldPZWkx/OWt4SVBlY009",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
    "https://images.pexels.com/photos/3253501/pexels-photo-3253501.jpeg",
  ];
  return (
    <div className="mx-auto my-10 max-w-7xl rounded-3xl bg-gray-950/5 p-2 ring-1 ring-neutral-700/10 dark:bg-neutral-800">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-gray-900 dark:text-white">
          Explore Our Gym Gallery
        </h2>
        <p className="mt-2 text-gray-600 dark:text-gray-300">
          A glimpse into our state-of-the-art fitness center, where strength meets
          motivation. Browse through highlights of our facilities, equipment, and
          energetic environment.
        </p>
      </div>
      <ThreeDMarquee images={images} />
    </div>
  );
}
