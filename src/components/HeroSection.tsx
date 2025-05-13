
import { Button } from "@/components/ui/button";
import { Calendar, Users } from "lucide-react";

const HeroSection = () => {
  return (
    <section className="pt-28 pb-16 md:pt-40 md:pb-24 bg-gradient-to-br from-sutra-blue to-sutra-purple relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute top-20 left-10 w-64 h-64 bg-sutra-light-purple opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      <div className="absolute bottom-10 right-10 w-80 h-80 bg-sutra-orange opacity-10 rounded-full blur-3xl animate-pulse-slow"></div>
      
      <div className="container mx-auto text-center relative z-10 container-padding">
        <div className="inline-block bg-white/10 backdrop-blur-md px-4 py-1 rounded-full mb-4">
          <p className="text-white/90 text-sm font-medium flex items-center">
            <Calendar size={16} className="mr-2" />
            Registration Deadline: June 15, 2025
          </p>
        </div>
        
        <h1 className="text-4xl md:text-6xl font-bold text-white mb-6 leading-tight">
          SUTRA Indic AI Hackathon
        </h1>
        
        <div className="max-w-3xl mx-auto">
          <p className="text-xl md:text-2xl text-white/80 mb-8">
            Building Apps That Understand Bharat
          </p>
          <p className="text-white/70 mb-10 text-lg">
            Harness the power of multilingual AI to create transformative 
            applications that address the challenges of India's diverse linguistic landscape.
          </p>
        </div>
        
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4 mb-12">
          <Button size="lg" className="bg-white text-sutra-blue hover:bg-sutra-light-blue">
            Register Now
          </Button>
          <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
            Learn More
          </Button>
        </div>
        
        <div className="flex flex-wrap justify-center gap-8 text-white/80">
          <div className="flex items-center">
            <Users size={20} className="mr-2" />
            <span>1000+ Participants</span>
          </div>
          <div className="flex items-center">
            <Calendar size={20} className="mr-2" />
            <span>June 16 - July 6, 2025</span>
          </div>
          <div className="flex items-center">
            <span className="font-semibold text-white">Prizes Worth ₹300,000+</span>
          </div>
        </div>
      </div>
      
      {/* Language bubbles floating animation */}
      <div className="hidden md:block absolute -bottom-8 left-1/4 transform -translate-x-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full animate-float">
        <span className="text-white font-medium">हिन्दी</span>
      </div>
      <div className="hidden md:block absolute bottom-16 left-1/2 transform -translate-x-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: "1s" }}>
        <span className="text-white font-medium">தமிழ்</span>
      </div>
      <div className="hidden md:block absolute -bottom-4 left-3/4 transform -translate-x-1/2 p-3 bg-white/10 backdrop-blur-sm rounded-full animate-float" style={{ animationDelay: "2s" }}>
        <span className="text-white font-medium">ಕನ್ನಡ</span>
      </div>
    </section>
  );
};

export default HeroSection;
