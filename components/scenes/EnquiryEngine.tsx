"use client";

import { useState } from "react";
import { ScrollReveal } from "@/components/react-bits/ScrollReveal";
import BorderGlow from "@/components/react-bits/BorderGlow";
import SpotlightCard from "@/components/react-bits/SpotlightCard";

export default function EnquiryEngine() {
  const [formState, setFormState] = useState<"idle" | "submitting" | "success" | "error">("idle");
  const [formData, setFormData] = useState({
    studentName: "", parentName: "", phone: "", email: "", currentClass: "", course: "", message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setFormState("submitting");
    setTimeout(() => {
      setFormState("success");
      setFormData({ studentName: "", parentName: "", phone: "", email: "", currentClass: "", course: "", message: "" });
      setTimeout(() => setFormState("idle"), 5000);
    }, 1500);
  };

  return (
    <section id="enquiry" className="relative py-16 bg-transparent">
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row gap-6 items-stretch w-full">
          
          {/* Left Column: Contact Info */}
          <div className="w-full md:w-5/12 flex flex-col gap-4">
            <ScrollReveal delay={0.1} className="h-full">
              <BorderGlow glowColor="148 100 30" borderRadius={16} className="h-full">
                <SpotlightCard className="h-full bg-white/70 backdrop-blur-md p-5 flex items-center gap-4 border-none !rounded-[16px]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-base text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm mb-1">Phone</h4>
                    <p className="text-gray-500 text-xs">+91 94944 07775</p>
                    <p className="text-gray-500 text-xs">+91 94944 07776</p>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </ScrollReveal>

            <ScrollReveal delay={0.2} className="h-full">
              <BorderGlow glowColor="148 100 30" borderRadius={16} className="h-full">
                <SpotlightCard className="h-full bg-white/70 backdrop-blur-md p-5 flex items-center gap-4 border-none !rounded-[16px]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-base text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm mb-1">Email</h4>
                    <p className="text-gray-500 text-xs">info@sriskandaacademy.com</p>
                    <p className="text-gray-500 text-xs">admissions@sriskandaacademy.com</p>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </ScrollReveal>

            <ScrollReveal delay={0.3} className="h-full">
              <BorderGlow glowColor="148 100 30" borderRadius={16} className="h-full">
                <SpotlightCard className="h-full bg-white/70 backdrop-blur-md p-5 flex items-center gap-4 border-none !rounded-[16px]">
                  <div className="w-10 h-10 rounded-lg bg-emerald-base text-white flex items-center justify-center shrink-0 shadow-sm">
                    <svg className="w-5 h-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.243-4.243a8 8 0 1111.314 0z" />
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                  </div>
                  <div>
                    <h4 className="text-gray-900 font-bold text-sm mb-1">Address</h4>
                    <p className="text-gray-500 text-xs leading-relaxed">
                      5-17-12, Red Convent Street,<br/>
                      Tuni, Andhra Pradesh
                    </p>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </ScrollReveal>

            <ScrollReveal delay={0.4} className="h-full">
              <BorderGlow glowColor="41 62 47" borderRadius={16} className="h-full">
                <SpotlightCard className="h-full bg-emerald-base p-6 border-none !rounded-[16px]">
                  <h4 className="text-white font-bold text-sm mb-4">Office Hours</h4>
                  <div className="space-y-2">
                    <div className="flex justify-between text-xs">
                      <span className="text-emerald-50">Monday - Saturday</span>
                      <span className="text-white font-medium">8:00 AM - 8:00 PM</span>
                    </div>
                    <div className="flex justify-between text-xs">
                      <span className="text-emerald-50">Sunday</span>
                      <span className="text-white font-medium">9:00 AM - 2:00 PM</span>
                    </div>
                  </div>
                </SpotlightCard>
              </BorderGlow>
            </ScrollReveal>
          </div>

          {/* Right Column: Enquiry Form */}
          <div className="w-full md:w-7/12 h-full">
            <ScrollReveal delay={0.3} className="h-full">
              <BorderGlow glowColor="148 100 30" borderRadius={16} className="h-full">
                <SpotlightCard className="h-full bg-white/80 backdrop-blur-xl p-8 border-none !rounded-[16px] flex flex-col relative overflow-hidden">
                  
                  {formState === "success" && (
                    <div className="absolute inset-0 z-20 flex flex-col items-center justify-center bg-white/95 backdrop-blur-md">
                      <div className="w-14 h-14 rounded-full bg-emerald-50 text-emerald-base flex items-center justify-center text-2xl mb-3">
                        ✅
                      </div>
                      <h3 className="text-gray-900 text-lg font-bold mb-1">Enquiry Submitted</h3>
                      <p className="text-gray-500 text-sm">We&apos;ll be in touch shortly.</p>
                    </div>
                  )}

                  <h3 className="text-2xl font-[family-name:var(--font-heading)] font-bold text-gray-900 mb-6">Enquiry Form</h3>
                  
                  <form onSubmit={handleSubmit} className="space-y-4 flex-1 flex flex-col">
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">Student Name *</label>
                        <input required type="text" placeholder="Enter student name" value={formData.studentName} onChange={(e) => setFormData({...formData, studentName: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">Parent Name *</label>
                        <input required type="text" placeholder="Enter parent name" value={formData.parentName} onChange={(e) => setFormData({...formData, parentName: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">Phone Number *</label>
                        <input required type="tel" placeholder="+91 XXXXX XXXXX" pattern="[6-9][0-9]{9}" maxLength={10} value={formData.phone} onChange={(e) => setFormData({...formData, phone: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm placeholder:text-gray-400" />
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">Email</label>
                        <input type="email" placeholder="email@example.com" value={formData.email} onChange={(e) => setFormData({...formData, email: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm placeholder:text-gray-400" />
                      </div>
                    </div>

                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">Current Class *</label>
                        <select required value={formData.currentClass} onChange={(e) => setFormData({...formData, currentClass: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm">
                          <option value="">Select class</option>
                          <option value="10th">10th</option>
                          <option value="11th">11th (Jr. Inter)</option>
                          <option value="12th">12th (Sr. Inter)</option>
                        </select>
                      </div>
                      <div>
                        <label className="block text-gray-700 text-xs font-semibold mb-1.5">Course Interested *</label>
                        <select required value={formData.course} onChange={(e) => setFormData({...formData, course: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm">
                          <option value="">Select course</option>
                          <option value="MPC">M.P.C</option>
                          <option value="BiPC">Bi.P.C</option>
                        </select>
                      </div>
                    </div>

                    <div className="flex-1 pb-4">
                      <label className="block text-gray-700 text-xs font-semibold mb-1.5">Message (Optional)</label>
                      <textarea placeholder="Any specific queries or requirements..." rows={4} value={formData.message} onChange={(e) => setFormData({...formData, message: e.target.value})} className="w-full bg-gray-50/50 border border-gray-200 rounded-lg px-3 py-2 text-gray-900 focus:border-emerald-base focus:bg-white outline-none transition-colors text-sm placeholder:text-gray-400 resize-none h-full min-h-[100px]"></textarea>
                    </div>

                    <div className="pt-2">
                      <button type="submit" disabled={formState === "submitting"} className="w-full px-6 py-3 rounded-lg font-bold text-sm bg-emerald-base text-white hover:bg-emerald-deep transition-colors shadow-md flex justify-center items-center gap-2">
                        {formState === "submitting" ? "Submitting..." : (
                          <>
                            Submit Enquiry 
                            <svg className="w-4 h-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
                            </svg>
                          </>
                        )}
                      </button>
                    </div>
                  </form>
                </SpotlightCard>
              </BorderGlow>
            </ScrollReveal>
          </div>
        </div>
        
        <div className="mt-12 text-center flex flex-col sm:flex-row items-center justify-center pt-5 border-t border-gray-200 text-gray-500 text-[10px] font-medium">
          <p>© 2026 Sri Skanda Academy</p>
        </div>

      </div>
    </section>
  );
}
