"use client";

import { useState } from "react";
import { useForm, Controller } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod";
import Select from "react-select";
import { Loader2, CheckCircle2, Send } from "lucide-react";

// 1. Validation Schema using Zod
const bookingSchema = z.object({
  name: z.string().min(2, "Name is required"),
  contactNo: z.string().min(8, "Valid contact number is required"),
  email: z.string().email("Valid email is required"),
  services: z.array(z.string()).min(1, "Please select at least one service"),
  message: z.string().optional(),
});

type BookingFormValues = z.infer<typeof bookingSchema>;

// 2. Service Options extracted from the original client form
const serviceOptions = [
  { value: "Residential Cleaning", label: "Residential Cleaning" },
  { value: "Commercial Cleaning", label: "Commercial Cleaning" },
  { value: "Move-In and Out cleaning", label: "Move-In and Out cleaning" },
  { value: "Office Boy / Girl", label: "Office Boy / Girl" },
  { value: "Sanitization and Disinfection", label: "Sanitization and Disinfection" },
  { value: "Maids", label: "Maids" },
  { value: "Pest Control", label: "Pest Control" },
  { value: "Educational Institutes", label: "Educational Institutes" },
  { value: "Resto/Café", label: "Resto/Café" },
  { value: "Deep Cleaning", label: "Deep Cleaning" },
  { value: "Floor Cleaning & Polishing", label: "Floor Cleaning & Polishing" },
  { value: "Other", label: "Other" },
];

export default function BookingForm() {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const {
    register,
    handleSubmit,
    control,
    reset,
    formState: { errors },
  } = useForm<BookingFormValues>({
    resolver: zodResolver(bookingSchema),
  });

  const onSubmit = async (data: BookingFormValues) => {
    setIsSubmitting(true);
    
    // TODO: Wire this up to the Next.js API route later. 
    // For now, we simulate a 1.5-second network request to show the UI transition.
    await new Promise((resolve) => setTimeout(resolve, 1500));
    console.log("Booking Payload Ready for API:", data);
    
    setIsSubmitting(false);
    setIsSuccess(true);
    reset(); // Clear the form
    
    // Hide the success message after 5 seconds
    setTimeout(() => setIsSuccess(false), 5000);
  };

  return (
    <form onSubmit={handleSubmit(onSubmit)} className="space-y-6 text-left">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Name Field */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">NAME</label>
          <input
            {...register("name")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-javlin-blue focus:ring-2 focus:ring-javlin-blue/20 outline-none transition-all"
            placeholder="John Doe"
          />
          {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name.message}</p>}
        </div>

        {/* Contact Field */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">CONTACT NO.</label>
          <input
            {...register("contactNo")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-javlin-blue focus:ring-2 focus:ring-javlin-blue/20 outline-none transition-all"
            placeholder="+974 1234 5678"
          />
          {errors.contactNo && <p className="text-red-500 text-xs mt-1">{errors.contactNo.message}</p>}
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {/* Email Field */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">EMAIL</label>
          <input
            {...register("email")}
            className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-javlin-blue focus:ring-2 focus:ring-javlin-blue/20 outline-none transition-all"
            placeholder="john@example.com"
          />
          {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email.message}</p>}
        </div>

        {/* Services Dropdown (Controlled via React-Select) */}
        <div className="space-y-2">
          <label className="text-sm font-semibold text-slate-700">CHOOSE YOUR SERVICE(S)</label>
          <Controller
            name="services"
            control={control}
            render={({ field }) => (
              <Select
                {...field}
                instanceId="booking-services-select"
                isMulti
                options={serviceOptions}
                placeholder="Select services..."
                className="react-select-container"
                classNamePrefix="react-select"
                onChange={(selectedOptions) => {
                  field.onChange(selectedOptions ? selectedOptions.map(opt => opt.value) : []);
                }}
                value={serviceOptions.filter(opt => field.value?.includes(opt.value))}
                styles={{
                  control: (base, state) => ({
                    ...base,
                    padding: "4px",
                    borderRadius: "0.75rem",
                    borderColor: state.isFocused ? "var(--color-javlin-blue)" : "#e2e8f0",
                    boxShadow: state.isFocused ? "0 0 0 2px rgba(30, 115, 190, 0.2)" : "none",
                    "&:hover": { borderColor: "var(--color-javlin-blue)" }
                  }),
                  multiValue: (base) => ({
                    ...base,
                    backgroundColor: "rgba(106, 176, 76, 0.1)", // javlin-green lightened
                    borderRadius: "0.5rem",
                  }),
                  multiValueLabel: (base) => ({
                    ...base,
                    color: "var(--color-javlin-green)",
                    fontWeight: "500",
                  }),
                }}
              />
            )}
          />
          {errors.services && <p className="text-red-500 text-xs mt-1">{errors.services.message}</p>}
        </div>
      </div>

      {/* Message Field */}
      <div className="space-y-2">
        <label className="text-sm font-semibold text-slate-700">MESSAGE</label>
        <textarea
          {...register("message")}
          rows={4}
          className="w-full px-4 py-3 rounded-xl border border-slate-200 focus:border-javlin-blue focus:ring-2 focus:ring-javlin-blue/20 outline-none transition-all resize-none"
          placeholder="How can we help you?"
        />
      </div>

      {/* Submit Button & Success State */}
      <div className="pt-4">
        {isSuccess ? (
          <div className="w-full bg-javlin-green/10 border border-javlin-green text-javlin-green py-4 rounded-xl flex items-center justify-center gap-2 font-bold animate-in fade-in zoom-in duration-300">
            <CheckCircle2 className="w-6 h-6" />
            Booking Request Sent Successfully!
          </div>
        ) : (
          <button
            type="submit"
            disabled={isSubmitting}
            className="w-full bg-slate-900 hover:bg-javlin-blue text-white py-4 rounded-xl font-bold flex items-center justify-center gap-2 transition-colors disabled:opacity-70"
          >
            {isSubmitting ? (
              <>
                <Loader2 className="w-5 h-5 animate-spin" />
                Processing...
              </>
            ) : (
              <>
                SEND MESSAGE
                <Send className="w-5 h-5" />
              </>
            )}
          </button>
        )}
      </div>
    </form>
  );
}