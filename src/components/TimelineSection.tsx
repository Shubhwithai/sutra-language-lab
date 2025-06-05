
import { Card, CardContent } from "@/components/ui/card";
import { Calendar } from "lucide-react";

const TimelineSection = () => {
  const timelineEvents = [
    {
      date: "June 12, 2025",
      event: "Registration Opens",
      description: "Start of the registration period for all interested participants",
    },
    {
      date: "June 25, 2025",
      event: "Registration Closes",
      description: "Last day to register for the hackathon",
      important: true,
    },
    {
      date: "June 26, 2025",
      event: "Kickoff Session",
      description: "Virtual orientation and introduction to the hackathon",
    },
    {
      date: "June 28, 2025",
      event: "Team Submission Deadline",
      description: "Deadline for submitting your team details",
      important: true,
    },
    {
      date: "July 1, 2025",
      event: "Round 1: Proposal Submission",
      description: "Deadline for submitting your project idea and proposal. Top 100 teams qualify for final round.",
      important: true,
    },
    {
      date: "July 10, 2025",
      event: "Round 2: Final Submission",
      description: "Deadline for submitting your completed project with demo video",
      important: true,
    },
    {
      date: "July 10-12, 2025",
      event: "Round 3: Evaluations & Interviews",
      description: "Judging and project evaluation period",
    },
    {
      date: "July 13, 2025",
      event: "Demo Day",
      description: "Final presentations and announcement of winners",
      important: true,
    },
  ];

  return (
    <section id="timeline" className="section-padding bg-sutra-light-gray">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Event Timeline</h2>
          <p className="text-gray-700">
            Key dates and deadlines for the India AI Challenge
          </p>
        </div>

        <div className="relative">
          {/* Vertical line for desktop */}
          <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-sutra-purple/30"></div>

          <div className="space-y-8">
            {timelineEvents.map((item, index) => (
              <div key={index} className={`flex flex-col md:flex-row ${index % 2 === 0 ? 'md:flex-row-reverse' : ''}`}>
                <div className="md:w-1/2"></div>
                
                {/* Dot in the middle */}
                <div className="hidden md:flex items-center justify-center w-10 h-10 absolute left-1/2 transform -translate-x-1/2" style={{ top: `${index * 160 + 40}px` }}>
                  <div className={`w-5 h-5 rounded-full ${item.important ? 'bg-sutra-orange' : 'bg-sutra-purple'} z-10`}></div>
                </div>
                
                <div className="md:w-1/2 pl-12 md:pl-0 relative">
                  {/* Dot for mobile */}
                  <div className="md:hidden absolute left-0 top-0 w-6 h-6 rounded-full bg-sutra-purple flex items-center justify-center">
                    <div className="w-3 h-3 rounded-full bg-white"></div>
                  </div>
                  
                  <Card className={`card-with-hover ${item.important ? 'border-l-4 border-l-sutra-orange' : ''} ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'}`}>
                    <CardContent className="p-6">
                      <div className="flex items-center mb-3 text-sutra-blue">
                        <Calendar className="h-4 w-4 mr-2" />
                        <span className="font-medium">{item.date}</span>
                      </div>
                      <h3 className="text-xl font-semibold mb-2">{item.event}</h3>
                      <p className="text-gray-600">{item.description}</p>
                    </CardContent>
                  </Card>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TimelineSection;
