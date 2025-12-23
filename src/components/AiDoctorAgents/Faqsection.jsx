"use client";
import React, { useState } from "react";
// Changed imports to use react-icons
import {
  MdKeyboardArrowDown,
  MdOutlineCalendarMonth,
  MdOutlineWatchLater,
  MdOutlineCreditCard,
  MdOutlineDescription,
  MdOutlinePhoneInTalk,
  MdOutlineGroups,
} from "react-icons/md";
import { IoCallOutline } from "react-icons/io5";

const Faqsection = () => {
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      icon: MdOutlineCalendarMonth, // Replaced Calendar
      question: "How do I book an appointment?",
      answer:
        "You can book an appointment through our online portal, mobile app, or by calling our reception desk. Simply select your preferred doctor, choose an available time slot, and confirm your booking. You'll receive a confirmation email and SMS with appointment details.",
    },
    {
      icon: MdOutlineWatchLater, // Replaced Clock
      question: "What are your clinic hours?",
      answer:
        "Our clinic is open Monday to Friday from 8:00 AM to 8:00 PM, and on Saturdays from 9:00 AM to 5:00 PM. We're closed on Sundays and public holidays. Emergency consultations may be available outside these hours - please call for availability.",
    },
    {
      icon: MdOutlineCreditCard, // Replaced CreditCard
      question: "What payment methods do you accept?",
      answer:
        "We accept all major credit cards, debit cards, cash, and most health insurance plans. Payment is due at the time of service. If you're using insurance, please bring your insurance card and we'll handle the claim process for you.",
    },
    {
      icon: MdOutlineDescription, // Replaced FileText
      question: "Do I need to bring any documents?",
      answer:
        "Please bring a valid ID, your insurance card (if applicable), a list of current medications, and any relevant medical records or test results from previous visits. First-time patients should arrive 15 minutes early to complete registration forms.",
    },
    {
      icon: MdOutlinePhoneInTalk, // Replaced Phone
      question: "Can I cancel or reschedule my appointment?",
      answer:
        "Yes, you can cancel or reschedule up to 24 hours before your appointment without any charges. You can do this through our online portal, app, or by calling us. Cancellations with less than 24 hours notice may incur a fee.",
    },
    {
      icon: MdOutlineGroups, // Replaced Users
      question: "Do you offer telemedicine consultations?",
      answer:
        "Yes, we offer virtual consultations for follow-up appointments, minor ailments, and prescription renewals. Video appointments are available during regular clinic hours. Simply select 'Virtual Visit' when booking your appointment online.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-blue-50 via-white to-purple-50 py-16 px-4">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="text-center mb-12">
          <h1 className="text-5xl font-bold text-gray-900 mb-4">
            Frequently Asked Questions
          </h1>
          <p className="text-xl text-gray-600">
            Find answers to common questions about our doctor appointment
            services
          </p>
        </div>

        {/* FAQ Items */}
        <div className="space-y-4">
          {faqs.map((faq, index) => {
            const Icon = faq.icon;
            const isOpen = openIndex === index;

            return (
              <div
                key={index}
                className="bg-white rounded-xl shadow-md overflow-hidden transition-all duration-300 hover:shadow-lg"
              >
                <button
                  onClick={() => toggleFAQ(index)}
                  className="w-full px-6 py-5 flex items-center justify-between text-left transition-colors duration-200 hover:bg-gray-50"
                >
                  <div className="flex items-center gap-4 flex-1">
                    <div
                      className={`p-3 rounded-lg transition-colors duration-300 ${
                        isOpen
                          ? "bg-[#4161a3] text-white"
                          : "bg-blue-100 text-[#4161a3]"
                      }`}
                    >
                      <Icon size={24} />
                    </div>
                    <h3 className="text-[14px] font-semibold text-gray-900">
                      {faq.question}
                    </h3>
                  </div>
                  {/* Replaced ChevronDown */}
                  <MdKeyboardArrowDown
                    className={`text-gray-500 transition-transform duration-300  ${
                      isOpen ? "rotate-180" : ""
                    }`}
                    size={28}
                  />
                </button>

                <div
                  className={`overflow-hidden transition-all duration-300 ${
                    isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
                  }`}
                >
                  <div className="px-6 pb-5 pl-20">
                    <p className="text-gray-600 leading-relaxed text-[11px]">
                      {faq.answer}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        {/* Contact Section */}
        <div className="mt-12 bg-[#4161a3] rounded-xl shadow-lg  text-center text-white p-9">
          <p className="flex justify-center items-center gap-2">
            <IoCallOutline size={24} /> 24/7 Emergency Hotline: +880 1700-000000
          </p>
        </div>
      </div>
    </div>
  );
};

export default Faqsection;
