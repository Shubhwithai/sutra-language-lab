
import { 
  BookOpen, 
  Stethoscope, 
  Landmark, 
  Building2, 
  ShoppingBag
} from "lucide-react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const FocusAreasSection = () => {
  const focusAreas = [
    {
      title: "Multilingual Education Platforms",
      description: "Develop AI-powered platforms that generate personalized learning content in multiple Indian languages, tailored to regional curricula.",
      icon: <BookOpen className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Healthcare Accessibility",
      description: "Design multilingual health assistants that provide medical advice and support in languages like Marathi, Telugu, or Punjabi.",
      icon: <Stethoscope className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Cultural Preservation",
      description: "Build AI-driven virtual tour guides for Indian heritage sites, offering narratives in multiple languages with cultural context.",
      icon: <Landmark className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Governance & Public Services",
      description: "Create multilingual grievance redressal chatbots that assist citizens in filing complaints in their native language.",
      icon: <Building2 className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Inclusive E-Commerce",
      description: "Develop AI tools that auto-generate product descriptions in regional languages for small businesses.",
      icon: <ShoppingBag className="h-10 w-10 text-sutra-purple" />,
    },
  ];

  return (
    <section id="focus-areas" className="section-padding bg-gradient-to-b from-white to-sutra-light-gray">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Suggested Focus Areas</h2>
          <p className="text-gray-700">
            Participants are encouraged to explore any India-specific challenge that benefits 
            from SUTRA's multilingual capabilities. Below are suggested focus areas:
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {focusAreas.map((area, index) => (
            <Card key={index} className="card-with-hover bg-card-gradient border-none">
              <CardHeader className="pb-2">
                <div className="mb-4">{area.icon}</div>
                <CardTitle className="text-xl">{area.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-gray-700 text-base">
                  {area.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="mt-12 p-6 bg-sutra-light-blue/50 rounded-lg border border-sutra-light-purple/20 text-center">
          <p className="font-medium text-sutra-blue">
            <span className="font-semibold">Additional Considerations:</span> Ensure solutions support at least 3–5 Indian 
            languages, design apps that can scale across urban and rural settings, and incorporate 
            robust data privacy measures.
          </p>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
