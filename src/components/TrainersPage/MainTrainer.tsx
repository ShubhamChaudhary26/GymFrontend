"use client";
import React from "react";
import { StickyScrollRevealDemo } from "./Trainers";
import ChromaGrid from "./TrainersGrid";

const MainTrainer = () => {
  return (
    <div>
      <div className="my-[100px] ">
        <div style={{ height: "800px", position: "relative" }}>
          <ChromaGrid
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
