
import { Button } from "@/components/ui/button";

const OverviewSection = () => {
  return (
    <section id="overview" className="section-padding bg-white relative">
      <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-sutra-light-purple/5 to-transparent"></div>
      <div className="container mx-auto container-padding">
        <div className="flex flex-col lg:flex-row gap-12 items-center">
          <div className="lg:w-1/2">
            <div className="relative">
              <div className="absolute -top-6 -left-6 w-24 h-24 bg-sutra-light-purple/10 rounded-lg"></div>
              <div className="relative z-10 bg-gradient-to-br from-sutra-light-purple to-sutra-purple rounded-lg overflow-hidden shadow-xl">
                <div className="bg-sutra-purple/10 p-8">
                  <img 
                    src="https://placehold.co/600x400?text=SUTRA+Multilingual+Model" 
                    alt="SUTRA Multilingual Model" 
                    className="rounded-lg w-full"
                  />
                </div>
              </div>
              <div className="absolute -bottom-6 -right-6 w-24 h-24 bg-sutra-orange/10 rounded-lg"></div>
            </div>
          </div>
          
          <div className="lg:w-1/2">
            <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">
              About The Challenge
            </h2>
            
            <div className="space-y-4 text-gray-700">
              <p>
                The Sutra Indic AI Hackathon invites innovators to harness the power of Large 
                Language Models (LLMs) to create transformative applications serving India's 
                diverse linguistic landscape.
              </p>
              <p>
                This event focuses on developing practical AI solutions that address real 
                challenges facing Indian communities while celebrating and leveraging the 
                country's rich language diversity.
              </p>
              <p>
                Participants will build cutting-edge LLM applications that make technology 
                more accessible and impactful across India.
              </p>
            </div>
            
            <div className="mt-8">
              <h3 className="text-xl font-semibold mb-3">Objective</h3>
              <p className="text-gray-700">
                Design and develop innovative LLM-powered applications that solve critical 
                challenges across various sectors in India using local languages. Your creation 
                should demonstrate clear potential to improve lives, bridge linguistic divides, 
                and bring advanced AI capabilities to millions of Indians in their native tongues.
              </p>
            </div>
            
            <div className="mt-8">
              <Button className="bg-sutra-purple hover:bg-sutra-blue text-white">
                Get Started
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default OverviewSection;
