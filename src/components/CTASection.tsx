
import { Button } from "@/components/ui/button";
import { RocketIcon } from "lucide-react";

const CTASection = () => {
  return (
    <section className="py-20 bg-gradient-to-br from-sutra-blue to-sutra-purple text-white">
      <div className="container mx-auto container-padding text-center">
        <div className="max-w-3xl mx-auto">
          <RocketIcon className="h-16 w-16 mx-auto mb-6 text-white/80" />
          <h2 className="text-3xl md:text-4xl font-bold mb-6">
            Ready to Build the Future of Multilingual AI?
          </h2>
          <p className="text-xl text-white/80 mb-8">
            Join innovators from across India in creating solutions that make AI accessible in every language.
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <Button size="lg" className="bg-white text-sutra-blue hover:bg-sutra-light-blue">
              Register Now
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
              Learn More
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
