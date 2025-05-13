
import { Button } from "@/components/ui/button";
import { Book, Github, Linkedin, Youtube, Link } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resourceLinks = [
    {
      title: "Sutra Cookbook",
      description: "A comprehensive place to find all resources for SUTRA",
      link: "https://github.com/sutra-dev/sutra-cookbook",
      icon: <Github className="h-5 w-5" />,
    },
    {
      title: "Hackathon Workshop Notebook",
      description: "Tutorial and examples for the SUTRA hackathon",
      link: "https://shorturl.at/s4Wa0",
      icon: <Book className="h-5 w-5" />,
    },
    {
      title: "Team Submission Form",
      description: "Register your team for the hackathon",
      link: "https://forms.gle/dHWJvponP2hJcZWL8",
      icon: <Link className="h-5 w-5" />,
    },
    {
      title: "Idea Submission Form",
      description: "Submit your project proposal",
      link: "https://forms.gle/eY3zBxJwqof9aryf8",
      icon: <Link className="h-5 w-5" />,
    },
    {
      title: "Idea PPT Template",
      description: "Template for your project presentation",
      link: "https://shorturl.at/nH7lk",
      icon: <Link className="h-5 w-5" />,
    },
    {
      title: "Hackathon Project Submission",
      description: "Submit your completed project (GitHub)",
      link: "https://shorturl.at/zgs3m",
      icon: <Github className="h-5 w-5" />,
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/twoplatforms",
      icon: <Linkedin className="h-5 w-5" />,
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@twoplatforms",
      icon: <Youtube className="h-5 w-5" />,
    },
    {
      name: "Twitter",
      url: "https://x.com/sutra_dev",
      icon: <Link className="h-5 w-5" />,
    },
    {
      name: "GitHub",
      url: "https://github.com/sutra-dev",
      icon: <Github className="h-5 w-5" />,
    },
  ];

  const supportInformation = [
    {
      title: "Office Hours",
      content: "Regular sessions throughout the event on Mon, Wed, Fri: 23/25/27th June - 8.30PM to 10PM IST",
    },
    {
      title: "Q&A Sessions",
      content: "With AI and education experts to guide your development process",
    },
    {
      title: "Technical Support",
      content: "For using provided tools and platforms",
    },
  ];

  return (
    <section id="resources" className="section-padding bg-gradient-to-b from-sutra-light-gray to-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Resources and Support</h2>
          <p className="text-gray-700">
            Everything you need to excel in the SUTRA Indic AI Hackathon
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
          <div>
            <h3 className="text-2xl font-semibold mb-6">Important Links</h3>
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
              {resourceLinks.map((resource, index) => (
                <a 
                  key={index} 
                  href={resource.link}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-start p-4 bg-white border rounded-lg transition-all hover:shadow-md hover:-translate-y-1 group"
                >
                  <div className="mr-3 mt-1 text-sutra-purple group-hover:text-sutra-blue transition-colors">
                    {resource.icon}
                  </div>
                  <div>
                    <h4 className="font-medium text-gray-900">{resource.title}</h4>
                    <p className="text-sm text-gray-600">{resource.description}</p>
                  </div>
                </a>
              ))}
            </div>

            <h3 className="text-2xl font-semibold mt-12 mb-6">Follow SUTRA</h3>
            <div className="flex flex-wrap gap-4">
              {socialLinks.map((social, index) => (
                <a 
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-2 bg-white border rounded-lg p-3 transition-all hover:shadow-md hover:text-sutra-purple"
                >
                  {social.icon}
                  <span>{social.name}</span>
                </a>
              ))}
            </div>
          </div>
          
          <div>
            <h3 className="text-2xl font-semibold mb-6">Support Available</h3>
            <Card className="bg-sutra-light-blue/30 border-none">
              <CardHeader>
                <CardTitle>Event Support</CardTitle>
              </CardHeader>
              <CardContent className="space-y-4">
                {supportInformation.map((info, index) => (
                  <div key={index} className="border-b border-sutra-light-blue pb-4 last:border-0">
                    <h4 className="font-semibold mb-1">{info.title}</h4>
                    <p className="text-gray-700">{info.content}</p>
                  </div>
                ))}
              </CardContent>
            </Card>
            
            <div className="mt-8 bg-gradient-to-r from-sutra-blue to-sutra-purple text-white rounded-lg p-8">
              <h3 className="text-xl font-bold mb-4">Get Your API Key</h3>
              <p className="mb-6">Sign up to receive your Sutra developer API key and start building with multilingual AI capabilities.</p>
              <Button variant="outline" className="bg-white hover:bg-sutra-light-blue text-sutra-blue border-none">
                Get API Key
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
