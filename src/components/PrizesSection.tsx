
import { Award, Briefcase, Gift, Code } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";

const PrizesSection = () => {
  return (
    <section id="prizes" className="section-padding bg-white">
      <div className="container mx-auto container-padding">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6 gradient-text">Incentives and Prizes</h2>
          <p className="text-gray-700">
            Win exciting rewards and recognition for your innovative solutions
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {/* First Prize */}
          <Card className="card-with-hover bg-gradient-to-br from-amber-50 to-amber-100 border-2 border-amber-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-amber-500 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
              1st Prize
            </div>
            <CardContent className="p-8 text-center">
              <div className="bg-amber-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Award className="h-10 w-10 text-amber-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Macbook Air</h3>
              <p className="text-gray-700">For the top-performing team with the most innovative solution</p>
            </CardContent>
          </Card>

          {/* Second Prize */}
          <Card className="card-with-hover bg-gradient-to-br from-slate-50 to-slate-100 border-2 border-slate-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-slate-500 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
              2nd Prize
            </div>
            <CardContent className="p-8 text-center">
              <div className="bg-slate-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-10 w-10 text-slate-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Phone/Tablet</h3>
              <p className="text-gray-700">For the second-place team with exceptional implementation</p>
            </CardContent>
          </Card>

          {/* Third Prize */}
          <Card className="card-with-hover bg-gradient-to-br from-rose-50 to-rose-100 border-2 border-rose-200 overflow-hidden relative">
            <div className="absolute top-0 right-0 bg-rose-500 text-white py-1 px-4 rounded-bl-lg font-semibold text-sm">
              3rd Prize
            </div>
            <CardContent className="p-8 text-center">
              <div className="bg-rose-100 rounded-full w-20 h-20 flex items-center justify-center mx-auto mb-6">
                <Gift className="h-10 w-10 text-rose-500" />
              </div>
              <h3 className="text-2xl font-bold mb-2">Smart Watch</h3>
              <p className="text-gray-700">For the third-place team with innovative approach</p>
            </CardContent>
          </Card>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {/* Career Opportunities */}
          <Card className="card-with-hover">
            <CardContent className="p-6 text-center">
              <div className="bg-sutra-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Briefcase className="h-8 w-8 text-sutra-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Career Opportunities</h3>
              <p className="text-gray-600">Internship opportunities with TWO AI for Top 5 Teams</p>
            </CardContent>
          </Card>

          {/* API Credits */}
          <Card className="card-with-hover">
            <CardContent className="p-6 text-center">
              <div className="bg-sutra-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Code className="h-8 w-8 text-sutra-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Technical Expertise</h3>
              <p className="text-gray-600">API Credits worth $100 for Top 10 Teams</p>
            </CardContent>
          </Card>

          {/* Recognition */}
          <Card className="card-with-hover">
            <CardContent className="p-6 text-center">
              <div className="bg-sutra-light-blue rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4">
                <Award className="h-8 w-8 text-sutra-blue" />
              </div>
              <h3 className="text-xl font-semibold mb-2">Recognition</h3>
              <p className="text-gray-600">Qualification for SUTRA Champion Program for Top 20 Teams</p>
            </CardContent>
          </Card>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-700">
            <span className="font-semibold">Additional Perks:</span> Certificate of participation for all teams
          </p>
        </div>
      </div>
    </section>
  );
};

export default PrizesSection;
