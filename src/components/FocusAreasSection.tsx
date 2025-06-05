
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
      description: "Develop AI-powered platforms that generate personalized learning content in multiple Indian languages, create chatbots for real-time tutoring, or build tools that translate educational resources into regional languages.",
      icon: <BookOpen className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Healthcare Accessibility",
      description: "Design multilingual health assistants, develop apps for real-time doctor-patient conversation translation, or create medication reminder systems with voice-based alerts in regional languages.",
      icon: <Stethoscope className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Cultural Preservation and Engagement",
      description: "Build AI-driven virtual tour guides for heritage sites, develop chatbots that educate about Indian festivals and traditions, or create apps that generate folk stories in regional languages.",
      icon: <Landmark className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Governance & Public Services",
      description: "Create multilingual grievance redressal chatbots, develop apps that translate legal documents, or build real-time information portals for government schemes in multiple Indian languages.",
      icon: <Building2 className="h-10 w-10 text-sutra-purple" />,
    },
    {
      title: "Inclusive E-Commerce & Business",
      description: "Create AI tools for auto-generating product descriptions in regional languages, develop multilingual customer support chatbots, or build apps providing market insights for rural entrepreneurs.",
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

        <div className="mt-12 space-y-6">
          <div className="p-6 bg-sutra-light-blue/50 rounded-lg border border-sutra-light-purple/20">
            <h3 className="font-semibold text-sutra-blue mb-3">Additional Considerations:</h3>
            <ul className="text-gray-700 space-y-2">
              <li><strong>Multilingual Accessibility:</strong> Ensure solutions support at least 3–5 Indian languages</li>
              <li><strong>Scalability:</strong> Design apps that can scale across urban and rural settings</li>
              <li><strong>Ethics and Privacy:</strong> Incorporate robust data privacy measures and address biases</li>
              <li><strong>User Experience:</strong> Focus on intuitive interfaces supporting text, voice, and visual inputs</li>
              <li><strong>Cultural Sensitivity:</strong> Ensure content respects India's cultural diversity</li>
            </ul>
          </div>
          
          <div className="p-6 bg-gradient-to-r from-sutra-purple/10 to-sutra-blue/10 rounded-lg border border-sutra-purple/20">
            <h3 className="font-semibold text-sutra-blue mb-3">Evaluation Criteria:</h3>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 text-gray-700">
              <div>
                <p><strong>Innovation and Creativity:</strong> Novel use of SUTRA's multilingual capabilities</p>
                <p><strong>Impact and Relevance:</strong> Potential to drive social, economic, or cultural impact</p>
              </div>
              <div>
                <p><strong>Technical Excellence:</strong> Robust implementation leveraging SUTRA's API</p>
                <p><strong>User-Centric Design:</strong> Ease of use and accessibility for diverse audiences</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FocusAreasSection;
