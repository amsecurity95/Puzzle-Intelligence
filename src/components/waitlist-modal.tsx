import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Dialog, DialogContent, DialogHeader, DialogTitle } from "@/components/ui/dialog";
import { useToast } from "@/hooks/use-toast";
import { useMutation, useQueryClient } from "@tanstack/react-query";
import { apiRequest } from "@/lib/queryClient";
import { Rocket, X } from "lucide-react";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { insertWaitlistSchema, type InsertWaitlistEntry } from "@shared/schema";

interface WaitlistModalProps {
  isOpen: boolean;
  onClose: () => void;
}

export default function WaitlistModal({ isOpen, onClose }: WaitlistModalProps) {
  const { toast } = useToast();
  const queryClient = useQueryClient();

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<InsertWaitlistEntry>({
    resolver: zodResolver(insertWaitlistSchema),
    defaultValues: {
      fullName: "",
      email: "",
    },
  });

  const waitlistMutation = useMutation({
    mutationFn: async (data: InsertWaitlistEntry) => {
      return await apiRequest("POST", "/api/waitlist", data);
    },
    onSuccess: () => {
      toast({
        title: "Welcome to our waitlist!",
        description: "We'll notify you as soon as we launch new services.",
      });
      reset();
      onClose();
      queryClient.invalidateQueries({ queryKey: ["/api/waitlist"] });
    },
    onError: (error: Error) => {
      toast({
        title: "Failed to join waitlist",
        description: error.message,
        variant: "destructive",
      });
    },
  });

  const onSubmit = (data: InsertWaitlistEntry) => {
    waitlistMutation.mutate(data);
  };

  return (
    <Dialog open={isOpen} onOpenChange={onClose}>
      <DialogContent className="max-w-lg apple-card border-0">
        <DialogHeader>
          <DialogTitle className="text-center">
            <div className="bg-primary/10 rounded-3xl w-20 h-20 flex items-center justify-center mx-auto mb-6">
              <Rocket className="text-primary h-10 w-10" />
            </div>
            <h3 className="text-3xl font-semibold text-foreground mb-4 tracking-tight">Join Our Waitlist</h3>
            <p className="text-muted-foreground font-normal text-lg leading-relaxed">
              Be the first to know when we launch new services and exclusive offers.
            </p>
          </DialogTitle>
        </DialogHeader>
        
        <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 mt-8">
          <div className="space-y-3">
            <Label htmlFor="fullName" className="text-base font-medium">Full Name</Label>
            <Input
              id="fullName"
              {...register("fullName")}
              className="w-full h-12 rounded-xl border-border/50 text-base"
            />
            {errors.fullName && (
              <p className="text-sm text-destructive">{errors.fullName.message}</p>
            )}
          </div>
          <div className="space-y-3">
            <Label htmlFor="email" className="text-base font-medium">Email Address</Label>
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
          <Button 
            type="submit" 
            className="apple-button w-full h-12 text-lg mt-8"
            disabled={isSubmitting || waitlistMutation.isPending}
          >
            {isSubmitting || waitlistMutation.isPending ? "Joining..." : "Join Waitlist"}
          </Button>
        </form>
      </DialogContent>
    </Dialog>
  );
}
