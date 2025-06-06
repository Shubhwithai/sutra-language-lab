
import { Button } from "@/components/ui/button";
import { Book, Github, Linkedin, Youtube, Link, Instagram, ExternalLink, Clock, Users, Code, BookOpen } from "lucide-react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";

const ResourcesSection = () => {
  const resourceLinks = [
    {
      title: "Sutra Cookbook",
      description: "A comprehensive place to find all resources for SUTRA",
      link: "https://github.com/sutra-dev/sutra-cookbook",
      icon: <Book className="h-5 w-5" />,
      category: "Documentation"
    },
    {
      title: "Hackathon Workshop Notebook",
      description: "Tutorial and examples for the SUTRA hackathon",
      link: "https://shorturl.at/s4Wa0",
      icon: <BookOpen className="h-5 w-5" />,
      category: "Learning"
    },
    {
      title: "Team Submission Form",
      description: "Register your team for the hackathon",
      link: "https://forms.gle/dHWJvponP2hJcZWL8",
      icon: <Users className="h-5 w-5" />,
      category: "Submission"
    },
    {
      title: "Idea Submission Form",
      description: "Submit your project proposal",
      link: "https://forms.gle/eY3zBxJwqof9aryf8",
      icon: <Link className="h-5 w-5" />,
      category: "Submission"
    },
    {
      title: "Idea PPT Template",
      description: "Template for your project presentation",
      link: "https://shorturl.at/nH7lk",
      icon: <Link className="h-5 w-5" />,
      category: "Template"
    },
    {
      title: "Hackathon Project Submission",
      description: "Submit your completed project (GitHub)",
      link: "https://shorturl.at/zgs3m",
      icon: <Github className="h-5 w-5" />,
      category: "Submission"
    },
  ];

  const socialLinks = [
    {
      name: "LinkedIn",
      url: "https://www.linkedin.com/company/twoplatforms",
      icon: <Linkedin className="h-5 w-5" />,
      color: "hover:bg-blue-50 hover:text-blue-600"
    },
    {
      name: "YouTube",
      url: "https://www.youtube.com/@twoplatforms",
      icon: <Youtube className="h-5 w-5" />,
      color: "hover:bg-red-50 hover:text-red-600"
    },
    {
      name: "Twitter",
      url: "https://x.com/sutra_dev",
      icon: <Link className="h-5 w-5" />,
      color: "hover:bg-blue-50 hover:text-blue-400"
    },
    {
      name: "Instagram",
      url: "https://www.instagram.com/two_platforms",
      icon: <Instagram className="h-5 w-5" />,
      color: "hover:bg-pink-50 hover:text-pink-600"
    },
    {
      name: "GitHub",
      url: "https://github.com/sutra-dev",
      icon: <Github className="h-5 w-5" />,
      color: "hover:bg-gray-50 hover:text-gray-800"
    },
  ];

  const supportItems = [
    {
      icon: <Clock className="h-6 w-6" />,
      title: "Office Hours",
      content: "Regular sessions throughout the event on Mon, Wed, Fri: 23/25/27th June - 8.30PM to 10PM IST",
      color: "bg-blue-50 text-blue-600"
    },
    {
      icon: <Users className="h-6 w-6" />,
      title: "Q&A Sessions",
      content: "With AI and education experts to guide your development process",
      color: "bg-green-50 text-green-600"
    },
    {
      icon: <Code className="h-6 w-6" />,
      title: "Technical Support",
      content: "For using provided tools and platforms",
      color: "bg-purple-50 text-purple-600"
    },
    {
      icon: <BookOpen className="h-6 w-6" />,
      title: "Virtual Workshops",
      content: "Documentation and tutorials on Generative AI technologies and key topics in AI and EdTech",
      color: "bg-orange-50 text-orange-600"
    },
  ];

  const submissionRequirements = [
    {
      title: "Team Submission",
      deadline: "Due June 28, 2025",
      content: "Include team details, preferred focus area, and commitment to multilingual focus",
      priority: "high"
    },
    {
      title: "Idea Submission",
      deadline: "Due July 1, 2025",
      content: "Use PPT template with problem statement, solution, and technical approach (max 10-12 slides). Include social media postcard.",
      priority: "medium"
    },
    {
      title: "Final Submission",
      deadline: "Due July 10, 2025",
      content: "GitHub repository, README, 3-5 minute demo video, presentation slides (max 15), and optional live deployment",
      priority: "high"
    },
  ];

  return (
    <section id="resources" className="section-padding bg-gradient-to-b from-gray-50 to-white">
      <div className="container mx-auto container-padding">
        {/* Header */}
        <div className="text-center max-w-4xl mx-auto mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 gradient-text">
            Resources & Support
          </h2>
          <p className="text-xl text-gray-600 leading-relaxed">
            Everything you need to excel in the India AI Challenge
          </p>
        </div>

        {/* Main Content Grid */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-16">
          
          {/* Important Links - Left Column */}
          <div className="lg:col-span-4">
            <div className="sticky top-8">
              <h3 className="text-2xl font-bold mb-6 text-gray-900">Important Links</h3>
              <div className="space-y-3">
                {resourceLinks.map((resource, index) => (
                  <a 
                    key={index} 
                    href={resource.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="group flex items-center p-4 bg-white border border-gray-200 rounded-xl transition-all duration-200 hover:shadow-lg hover:-translate-y-1 hover:border-sutra-purple/20"
                  >
                    <div className="flex-shrink-0 w-12 h-12 bg-gradient-to-br from-sutra-purple to-sutra-blue rounded-lg flex items-center justify-center text-white mr-4 group-hover:scale-110 transition-transform">
                      {resource.icon}
                    </div>
                    <div className="flex-1 min-w-0">
                      <div className="flex items-center justify-between">
                        <h4 className="font-semibold text-gray-900 group-hover:text-sutra-purple transition-colors">
                          {resource.title}
                        </h4>
                        <ExternalLink className="h-4 w-4 text-gray-400 group-hover:text-sutra-purple transition-colors" />
                      </div>
                      <p className="text-sm text-gray-600 mt-1">{resource.description}</p>
                      <span className="inline-block px-2 py-1 bg-sutra-light-blue text-sutra-purple text-xs rounded-full mt-2">
                        {resource.category}
                      </span>
                    </div>
                  </a>
                ))}
              </div>
              
              {/* Social Links */}
              <div className="mt-8">
                <h4 className="text-lg font-semibold mb-4 text-gray-900">Follow Build Fast with AI</h4>
                <div className="grid grid-cols-2 gap-3">
                  {socialLinks.map((social, index) => (
                    <a 
                      key={index}
                      href={social.url}
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center gap-3 bg-white border border-gray-200 rounded-lg p-3 transition-all duration-200 hover:shadow-md ${social.color}`}
                    >
                      {social.icon}
                      <span className="font-medium">{social.name}</span>
                    </a>
                  ))}
                </div>
              </div>
            </div>
          </div>
          
          {/* Support Available - Middle Column */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Support Available</h3>
            
            <div className="space-y-4 mb-8">
              {supportItems.map((item, index) => (
                <Card key={index} className="border-0 shadow-sm hover:shadow-md transition-all duration-200">
                  <CardContent className="p-6">
                    <div className="flex items-start space-x-4">
                      <div className={`p-3 rounded-xl ${item.color}`}>
                        {item.icon}
                      </div>
                      <div className="flex-1">
                        <h4 className="font-semibold text-gray-900 mb-2">{item.title}</h4>
                        <p className="text-gray-600 text-sm leading-relaxed">{item.content}</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* API Key Card */}
            <Card className="bg-gradient-to-br from-sutra-purple via-sutra-blue to-sutra-light-purple text-white border-0 shadow-xl">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-white/20 rounded-full flex items-center justify-center mx-auto mb-4">
                  <Code className="h-8 w-8" />
                </div>
                <h3 className="text-2xl font-bold mb-3">Get Your API Key</h3>
                <p className="text-white/90 mb-6 leading-relaxed">
                  Sign up to receive your Sutra developer API key and start building with multilingual AI capabilities.
                </p>
                <Button 
                  size="lg"
                  className="bg-white text-sutra-purple hover:bg-white/90 font-semibold px-8"
                >
                  Get API Key
                </Button>
              </CardContent>
            </Card>
          </div>

          {/* Submission Requirements - Right Column */}
          <div className="lg:col-span-4">
            <h3 className="text-2xl font-bold mb-6 text-gray-900">Submission Requirements</h3>
            <div className="space-y-4">
              {submissionRequirements.map((req, index) => (
                <Card key={index} className={`border-l-4 ${req.priority === 'high' ? 'border-l-red-500' : 'border-l-yellow-500'} shadow-sm hover:shadow-md transition-all duration-200`}>
                  <CardContent className="p-6">
                    <div className="flex items-start justify-between mb-3">
                      <h4 className="font-bold text-gray-900">{req.title}</h4>
                      <span className={`px-3 py-1 rounded-full text-xs font-medium ${
                        req.priority === 'high' 
                          ? 'bg-red-100 text-red-700' 
                          : 'bg-yellow-100 text-yellow-700'
                      }`}>
                        {req.priority === 'high' ? 'Critical' : 'Important'}
                      </span>
                    </div>
                    <p className="text-sm font-medium text-sutra-blue mb-3">{req.deadline}</p>
                    <p className="text-gray-600 text-sm leading-relaxed">{req.content}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
            
            {/* Social Media Requirement */}
            <Card className="mt-6 bg-gradient-to-r from-orange-50 to-yellow-50 border border-orange-200">
              <CardContent className="p-6">
                <div className="flex items-start space-x-3">
                  <div className="w-8 h-8 bg-orange-500 rounded-lg flex items-center justify-center flex-shrink-0">
                    <Instagram className="h-4 w-4 text-white" />
                  </div>
                  <div>
                    <h4 className="font-semibold text-orange-900 mb-2">Social Media Requirement</h4>
                    <p className="text-orange-800 text-sm leading-relaxed">
                      Tag @TWOPlatforms and use hashtags: 
                      <span className="font-mono bg-orange-100 px-2 py-1 rounded ml-1">
                        #SUTRAHackathon #MultilingualAI #AIforIndia
                      </span>
                    </p>
                  </div>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ResourcesSection;
