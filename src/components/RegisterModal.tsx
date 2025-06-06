import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Checkbox } from "@/components/ui/checkbox";
import { Label } from "@/components/ui/label";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
  DialogFooter,
} from "@/components/ui/dialog";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { toast } from "sonner";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import * as z from "zod";
import { X, Plus, Trash2 } from "lucide-react";

// Define the form validation schema using Zod
const formSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters"),
  teamLeaderName: z.string().min(2, "Team leader name is required"),
  teamLeaderEmail: z.string().email("A valid email is required"),
  contactNumber: z.string().regex(/^[0-9]{10}$/, "Please enter a valid 10-digit phone number"),
  university: z.string().min(5, "University, City, and State are required"),
  teamMembers: z.array(z.object({
    name: z.string().min(1, "Member name is required"),
    email: z.string().email("Valid email is required")
  })).min(1, "At least 1 additional team member is required").max(4, "Maximum 4 additional members allowed"),
  focusArea: z.string().min(1, "Please select a focus area"),
  focusAreaDescription: z.string().min(100, "Description must be at least 100 words").max(200, "Description must be at most 200 words"),
  languages: z.string().min(10, "Please list 3-5 Indian languages"),
  multilingualCommitment: z.string().min(100, "Commitment description must be at least 100 words").max(200, "Commitment description must be at most 200 words"),
  agreedToTerms: z.boolean().refine(val => val === true, {
    message: "You must agree to the terms and conditions",
  }),
});

type FormValues = z.infer<typeof formSchema>;

type RegisterModalProps = {
  isOpen: boolean;
  onClose: () => void;
};

const RegisterModal = ({ isOpen, onClose }: RegisterModalProps) => {
  const [teamMembers, setTeamMembers] = useState([{ name: "", email: "" }]);

  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      teamLeaderName: "",
      teamLeaderEmail: "",
      contactNumber: "",
      university: "",
      teamMembers: [{ name: "", email: "" }],
      focusArea: "",
      focusAreaDescription: "",
      languages: "",
      multilingualCommitment: "",
      agreedToTerms: false,
    },
  });

  const addTeamMember = () => {
    if (teamMembers.length < 4) {
      const newMembers = [...teamMembers, { name: "", email: "" }];
      setTeamMembers(newMembers);
      form.setValue("teamMembers", newMembers);
    } else {
      toast.error("Maximum of 5 team members (including leader) allowed.");
    }
  };

  const removeTeamMember = (index: number) => {
    const newMembers = teamMembers.filter((_, i) => i !== index);
    setTeamMembers(newMembers);
    form.setValue("teamMembers", newMembers);
  };

  const updateTeamMember = (index: number, field: "name" | "email", value: string) => {
    const newMembers = [...teamMembers];
    newMembers[index][field] = value;
    setTeamMembers(newMembers);
    form.setValue("teamMembers", newMembers);
  };

  const countWords = (text: string) => {
    return text.trim().split(/\s+/).filter(word => word.length > 0).length;
  };

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Validate word counts
    const focusWordCount = countWords(data.focusAreaDescription);
    const commitmentWordCount = countWords(data.multilingualCommitment);
    
    if (focusWordCount < 100 || focusWordCount > 200) {
      toast.error("Focus area description must be between 100-200 words");
      return;
    }
    
    if (commitmentWordCount < 100 || commitmentWordCount > 200) {
      toast.error("Multilingual commitment must be between 100-200 words");
      return;
    }

    // Validate languages
    const languageList = data.languages.split(',').map(lang => lang.trim()).filter(lang => lang.length > 0);
    if (languageList.length < 3 || languageList.length > 5) {
      toast.error("Please list 3-5 Indian languages, separated by commas");
      return;
    }
    
    toast.success("Team registration submitted successfully! We'll be in touch soon.", {
      duration: 5000,
    });
    
    // Reset form and close modal
    form.reset();
    setTeamMembers([{ name: "", email: "" }]);
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[700px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">India AI Challenge Powered by SUTRA - Team Submission</DialogTitle>
            <Button variant="ghost" size="icon" onClick={onClose} className="rounded-full">
              <X className="h-4 w-4" />
            </Button>
          </div>
          <DialogDescription>
            Fill out this form to register your team for the SUTRA Indic AI Hackathon.
          </DialogDescription>
        </DialogHeader>

        <Form {...form}>
          <form onSubmit={form.handleSubmit(onSubmit)} className="space-y-6">
            {/* Team Information */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Team Information</h3>
              
              <FormField
                control={form.control}
                name="teamName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Enter your team name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamLeaderName"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Leader Name <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="Enter team leader's full name" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <FormField
                  control={form.control}
                  name="teamLeaderEmail"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Team Leader Email <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input type="email" placeholder="email@example.com" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name="contactNumber"
                  render={({ field }) => (
                    <FormItem>
                      <FormLabel>Contact Number <span className="text-red-500">*</span></FormLabel>
                      <FormControl>
                        <Input placeholder="10-digit phone number" {...field} />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </div>

              <FormField
                control={form.control}
                name="university"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>University, City, State <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., IIT Delhi, New Delhi, Delhi" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Team Members */}
            <div className="space-y-4">
              <div>
                <Label className="text-base font-semibold">Team Members (2–5 members, including leader) <span className="text-red-500">*</span></Label>
                <p className="text-sm text-gray-500">Add 1–4 additional team members (the team leader is already counted as one member).</p>
              </div>
              
              {teamMembers.map((member, index) => (
                <div key={index} className="flex space-x-2 items-end">
                  <div className="flex-1">
                    <Input
                      placeholder={`Member ${index + 1} Name`}
                      value={member.name}
                      onChange={(e) => updateTeamMember(index, "name", e.target.value)}
                    />
                  </div>
                  <div className="flex-1">
                    <Input
                      type="email"
                      placeholder={`Member ${index + 1} Email`}
                      value={member.email}
                      onChange={(e) => updateTeamMember(index, "email", e.target.value)}
                    />
                  </div>
                  {teamMembers.length > 1 && (
                    <Button
                      type="button"
                      variant="outline"
                      size="icon"
                      onClick={() => removeTeamMember(index)}
                    >
                      <Trash2 className="h-4 w-4" />
                    </Button>
                  )}
                </div>
              ))}
              
              {teamMembers.length < 4 && (
                <Button
                  type="button"
                  variant="outline"
                  onClick={addTeamMember}
                  className="flex items-center gap-2"
                >
                  <Plus className="h-4 w-4" />
                  Add Another Member
                </Button>
              )}
            </div>

            {/* Focus Area */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Project Focus</h3>
              
              <FormField
                control={form.control}
                name="focusArea"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Preferred Focus Area <span className="text-red-500">*</span></FormLabel>
                    <Select onValueChange={field.onChange} defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger>
                          <SelectValue placeholder="Select a focus area" />
                        </SelectTrigger>
                      </FormControl>
                      <SelectContent>
                        <SelectItem value="Multilingual Education Platforms">Multilingual Education Platforms</SelectItem>
                        <SelectItem value="Healthcare Accessibility">Healthcare Accessibility</SelectItem>
                        <SelectItem value="Cultural Preservation and Engagement">Cultural Preservation and Engagement</SelectItem>
                        <SelectItem value="Governance and Public Services">Governance and Public Services</SelectItem>
                        <SelectItem value="Inclusive E-Commerce and Business">Inclusive E-Commerce and Business</SelectItem>
                        <SelectItem value="Agricultural Innovation and Farmer Support">Agricultural Innovation and Farmer Support</SelectItem>
                        <SelectItem value="Other">Other (Specify in description)</SelectItem>
                      </SelectContent>
                    </Select>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="focusAreaDescription"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Focus Area Description <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Describe your chosen focus area and problem statement (100–200 words)"
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Word count: {countWords(field.value)} / 100-200 words
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            {/* Multilingual Commitment */}
            <div className="space-y-4">
              <h3 className="text-lg font-semibold">Multilingual Focus</h3>
              
              <FormField
                control={form.control}
                name="languages"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Targeted Indian Languages (3–5 languages) <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Input placeholder="e.g., Hindi, Tamil, Telugu, Marathi, Bengali" {...field} />
                    </FormControl>
                    <FormDescription>
                      List 3-5 Indian languages separated by commas
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="multilingualCommitment"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Commitment to Multilingual Focus <span className="text-red-500">*</span></FormLabel>
                    <FormControl>
                      <Textarea 
                        placeholder="Explain how your solution will leverage SUTRA's multilingual capabilities to address the chosen problem (100–200 words)"
                        className="min-h-[100px]"
                        {...field} 
                      />
                    </FormControl>
                    <FormDescription>
                      Word count: {countWords(field.value)} / 100-200 words
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="agreedToTerms"
              render={({ field }) => (
                <FormItem className="flex flex-row items-start space-x-3 space-y-0 rounded-md border p-4">
                  <FormControl>
                    <Checkbox
                      checked={field.value}
                      onCheckedChange={field.onChange}
                    />
                  </FormControl>
                  <div className="space-y-1 leading-none">
                    <FormLabel>
                      I agree to the terms and conditions of the hackathon
                    </FormLabel>
                    <FormDescription>
                      By checking this box, you agree to abide by the rules and guidelines of the SUTRA Indic AI Hackathon.
                    </FormDescription>
                  </div>
                  <FormMessage />
                </FormItem>
              )}
            />

            <DialogFooter>
              <Button type="button" variant="outline" onClick={onClose}>
                Cancel
              </Button>
              <Button 
                type="submit" 
                className="bg-sutra-purple hover:bg-sutra-blue text-white"
              >
                Submit Team Details
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
