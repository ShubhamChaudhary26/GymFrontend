"use client";
import React from "react";
import { StickyScrollRevealDemo } from "./Trainers";
import ChromaGrid from "./TrainersGrid";

const items = [
  {
    image: "https://i.pravatar.cc/300?img=11",
    title: "Rohit Sharma",
    subtitle: "Strength Trainer",
    handle: "@rohitgym",
    borderColor: "#A2CD04",
    gradient: "linear-gradient(145deg, #A2CD04, #000)",
    url: "https://instagram.com/rohitgym",
  },
  {
    image: "https://i.pravatar.cc/300?img=12",
    title: "Anjali Mehta",
    subtitle: "Yoga Instructor",
    handle: "@anjaliyoga",
    borderColor: "#A2CD04",
    gradient: "linear-gradient(180deg, #A2CD04, #000)",
    url: "https://instagram.com/anjaliyoga",
  },
  {
    image: "https://i.pravatar.cc/300?img=13",
    title: "Vikram Patel",
    subtitle: "Cardio Specialist",
    handle: "@vikramcardio",
    borderColor: "#A2CD04",
    gradient: "linear-gradient(135deg, #A2CD04, #000)",
    url: "https://instagram.com/vikramcardio",
  },
  {
    image: "https://i.pravatar.cc/300?img=14",
    title: "Sneha Reddy",
    subtitle: "Personal Trainer",
    handle: "@sneha_fitness",
    borderColor: "#A2CD04",
    gradient: "linear-gradient(120deg, #A2CD04, #000)",
    url: "https://instagram.com/sneha_fitness",
  },
  {
    image: "https://i.pravatar.cc/300?img=15",
    title: "Arjun Singh",
    subtitle: "Crossfit Coach",
    handle: "@arjun_crossfit",
    borderColor: "#A2CD04",
    gradient: "linear-gradient(150deg, #A2CD04, #000)",
    url: "https://instagram.com/arjun_crossfit",
  },
  {
    image: "https://i.pravatar.cc/300?img=16",
    title: "Priya Desai",
    subtitle: "Pilates Trainer",
    handle: "@priyapilates",
    borderColor: "#A2CD04",
    gradient: "linear-gradient(135deg, #A2CD04, #000)",
    url: "https://instagram.com/priyapilates",
  },
];

const MainTrainer = () => {
  return (
    <div >
        <div className="my-[100px] ">

      <div style={{ height: "800px", position: "relative" }}>
        <ChromaGrid
          items={items}
          radius={300}
          damping={0.45}
          fadeOut={0.6}
          ease="power3.out"
          />
      </div>
          </div>
      <StickyScrollRevealDemo />
    </div>
  );
};

export default MainTrainer;
