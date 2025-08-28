import React from "react";

import { ArrowRight, BrainCircuit, FileOutput, FileText } from "lucide-react";
import Cards from "../Cards";

const WorkSection = () => {
  return (
    <>
      <div className=" flex flex-col justify-center items-center">
        <p className="text-rose-500 font-bold">HOW IT WORKS</p>
        <h2 className="font-bold lg:text-3xl sm:text-2xl text-center">
          Transform any PDF into an easy-to-digest
          <br /> summary in three simple step
        </h2>
      </div>
      <section className="flex  gap-6 justify-center py-10 ">
        <Cards
          title="Upload your PDF"
          description="Simply drag and drop your PDF document or click to upload"
          icon={FileText}
        />
        <div className="py-20">
          <ArrowRight size={30} />
        </div>

        <Cards
          title="AI Analysis"
          description="Our advanced AI processes and analyzes your document instantly"
          icon={BrainCircuit}
        />
        <div className="py-20">
          <ArrowRight size={30} />
        </div>
        <Cards
          title="Get Summary"
          description="Receive a clear, concise summary of your document"
          icon={FileOutput}
        />
      </section>
    </>
  );
};

export default WorkSection;
