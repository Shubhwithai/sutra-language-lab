
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
import { X } from "lucide-react";

// Define the form validation schema using Zod
const formSchema = z.object({
  teamName: z.string().min(3, "Team name must be at least 3 characters"),
  teamLeaderName: z.string().min(2, "Name must be at least 2 characters"),
  teamLeaderEmail: z.string().email("Invalid email address"),
  teamLeaderPhone: z.string().min(10, "Please enter a valid phone number"),
  teamMembers: z.string(),
  focusArea: z.string().min(1, "Please select a focus area"),
  projectIdea: z.string().min(20, "Please provide a brief description of your project idea"),
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
  const form = useForm<FormValues>({
    resolver: zodResolver(formSchema),
    defaultValues: {
      teamName: "",
      teamLeaderName: "",
      teamLeaderEmail: "",
      teamLeaderPhone: "",
      teamMembers: "",
      focusArea: "",
      projectIdea: "",
      agreedToTerms: false,
    },
  });

  const onSubmit = (data: FormValues) => {
    console.log("Form submitted:", data);
    
    // Here you would typically send this data to your backend
    // For now, we'll just show a success message
    toast.success("Registration submitted successfully! We'll be in touch soon.", {
      duration: 5000,
    });
    
    // Reset form and close modal
    form.reset();
    onClose();
  };

  return (
    <Dialog open={isOpen} onOpenChange={(open) => !open && onClose()}>
      <DialogContent className="sm:max-w-[600px] max-h-[90vh] overflow-y-auto">
        <DialogHeader>
          <div className="flex items-center justify-between">
            <DialogTitle className="text-2xl">Hackathon Registration</DialogTitle>
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
            <FormField
              control={form.control}
              name="teamName"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Name</FormLabel>
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
                  <FormLabel>Team Leader Name</FormLabel>
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
                    <FormLabel>Team Leader Email</FormLabel>
                    <FormControl>
                      <Input type="email" placeholder="email@example.com" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name="teamLeaderPhone"
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Team Leader Phone</FormLabel>
                    <FormControl>
                      <Input placeholder="Contact number" {...field} />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name="teamMembers"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Team Members</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="List your team members with their names and emails (one per line)"
                      className="min-h-[80px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormDescription>
                    Teams can have up to 4 members including the team leader.
                  </FormDescription>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="focusArea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Focus Area</FormLabel>
                  <Select 
                    onValueChange={field.onChange} 
                    defaultValue={field.value}
                  >
                    <FormControl>
                      <SelectTrigger>
                        <SelectValue placeholder="Select your preferred focus area" />
                      </SelectTrigger>
                    </FormControl>
                    <SelectContent>
                      <SelectItem value="education">Multilingual Education Platforms</SelectItem>
                      <SelectItem value="healthcare">Healthcare Accessibility</SelectItem>
                      <SelectItem value="culture">Cultural Preservation and Engagement</SelectItem>
                      <SelectItem value="governance">Governance and Public Services</SelectItem>
                      <SelectItem value="commerce">Inclusive E-Commerce and Business</SelectItem>
                      <SelectItem value="other">Other (Specify in Project Idea)</SelectItem>
                    </SelectContent>
                  </Select>
                  <FormMessage />
                </FormItem>
              )}
            />

            <FormField
              control={form.control}
              name="projectIdea"
              render={({ field }) => (
                <FormItem>
                  <FormLabel>Project Idea</FormLabel>
                  <FormControl>
                    <Textarea 
                      placeholder="Briefly describe your project idea and which Indian languages you plan to support"
                      className="min-h-[120px]"
                      {...field} 
                    />
                  </FormControl>
                  <FormMessage />
                </FormItem>
              )}
            />

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
                Register Team
              </Button>
            </DialogFooter>
          </form>
        </Form>
      </DialogContent>
    </Dialog>
  );
};

export default RegisterModal;
