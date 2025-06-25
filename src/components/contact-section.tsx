import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { MapPin, Phone, Mail } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertContactSchema, type InsertContactMessage } from "@shared/schema";

export default function ContactSection() {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InsertContactMessage>({
    resolver: zodResolver(insertContactSchema),
    defaultValues: {
      firstName: "",
      lastName: "",
      email: "",
      message: "",
    },
  });

  const contactMutation = useMutation({
    mutationFn: async (data: InsertContactMessage) => {
      return await apiRequest("POST", "/api/contact", data);
    },
    onSuccess: () => {
      toast({
        title: "Message sent successfully!",
        description: "We'll get back to you soon.",
      });
      reset();
      queryClient.invalidateQueries({ queryKey: ["/api/contact"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to send message",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertContactMessage) => {
    contactMutation.mutate(data);
  };

  return (
    <section id="contact" className="section-padding bg-muted/20">
      <div className="container-padding">
        <div className="text-center mb-16">
          <h2 className="apple-text-medium text-foreground mb-6">Get In Touch</h2>
          <p className="apple-text-body">Ready to solve your business puzzles? Let's start the conversation.</p>
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          <div>
            <h3 className="text-2xl font-semibold text-foreground mb-8">Contact Information</h3>
            <div className="space-y-8">

              <div className="flex items-start">
                <div className="bg-accent/10 rounded-2xl w-12 h-12 flex items-center justify-center mr-4 mt-1">
                  <Phone className="text-accent h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Phone</h4>
                  <p className="text-muted-foreground">(815) 683-6072</p>
                </div>
              </div>
              <div className="flex items-start">
                <div className="bg-success/10 rounded-2xl w-12 h-12 flex items-center justify-center mr-4 mt-1">
                  <Mail className="text-success h-6 w-6" />
                </div>
                <div>
                  <h4 className="text-lg font-semibold text-foreground mb-2">Email</h4>
                  <p className="text-muted-foreground">info@puzzlebusinessgroup.com</p>
                </div>
              </div>
            </div>
          </div>

          <div className="apple-card p-8">
            <form onSubmit={handleSubmit(onSubmit)} className="space-y-6">
              <div className="grid md:grid-cols-2 gap-6">
                <div className="space-y-3">
                  <Label htmlFor="firstName" className="text-base font-medium">First Name</Label>
                  <Input
                    id="firstName"
                    {...register("firstName")}
                    className="w-full h-12 rounded-xl border-border/50 text-base"
                  />
                  {errors.firstName && (
                    <p className="text-sm text-destructive">{errors.firstName.message}</p>
                  )}
                </div>
                <div className="space-y-3">
                  <Label htmlFor="lastName" className="text-base font-medium">Last Name</Label>
                  <Input
                    id="lastName"
                    {...register("lastName")}
                    className="w-full h-12 rounded-xl border-border/50 text-base"
                  />
                  {errors.lastName && (
                    <p className="text-sm text-destructive">{errors.lastName.message}</p>
                  )}
                </div>
              </div>
              <div className="space-y-3">
                <Label htmlFor="email" className="text-base font-medium">Email</Label>
                <Input
                  id="email"
                  type="email"
                  {...register("email")}
                  className="w-full h-12 rounded-xl border-border/50 text-base"
                />
                {errors.email && (
                  <p className="text-sm text-destructive">{errors.email.message}</p>
                )}
              </div>
              <div className="space-y-3">
                <Label htmlFor="message" className="text-base font-medium">Message</Label>
                <Textarea
                  id="message"
                  rows={5}
                  {...register("message")}
                  className="w-full rounded-xl border-border/50 text-base resize-none"
                />
                {errors.message && (
                  <p className="text-sm text-destructive">{errors.message.message}</p>
                )}
              </div>
              <Button 
                type="submit" 
                className="apple-button w-full h-12 text-lg mt-8"
                disabled={isSubmitting || contactMutation.isPending}
              >
                {isSubmitting || contactMutation.isPending ? "Sending..." : "Send Message"}
              </Button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
}
