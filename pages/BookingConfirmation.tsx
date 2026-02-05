import React from 'react';
import { Link } from 'react-router-dom';
import { CheckCircle2, Calendar, ArrowUpRight } from 'lucide-react';

export default function BookingConfirmation() {
  return (
    <div className="min-h-screen bg-[#0a0a0a] text-white py-16 px-4">
      <div className="max-w-2xl mx-auto">
        <div className="bg-[#0a0a0a]/90 border border-[#0066FF]/30 rounded-lg p-8 md:p-12 text-center">
          <CheckCircle2 className="w-20 h-20 text-[#0066FF] mx-auto mb-6" />
          <h1 className="text-3xl md:text-4xl font-bold mb-4 text-white">
            Your Consultation is Scheduled!
          </h1>
          <p className="text-lg text-gray-300 mb-6">
            We've received your booking and sent a confirmation email with all the details.
          </p>
          <div className="bg-[#0a0a0a] border border-white/10 rounded-lg p-6 mb-8 text-left">
            <div className="flex items-center gap-3 mb-4">
              <Calendar className="w-6 h-6 text-[#0066FF]" />
              <h2 className="text-xl font-semibold text-white">What's Next?</h2>
            </div>
            <ul className="space-y-3 text-gray-300">
              <li className="flex items-start gap-3">
                <span className="text-[#0066FF] font-bold mt-1">1.</span>
                <span>Check your email for the calendar invite and meeting details.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0066FF] font-bold mt-1">2.</span>
                <span>Add the meeting to your calendar using the link in the email.</span>
              </li>
              <li className="flex items-start gap-3">
                <span className="text-[#0066FF] font-bold mt-1">3.</span>
                <span>We'll review your current lead flow before the call to make the most of our time together.</span>
              </li>
            </ul>
          </div>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              to="/"
              className="w-full sm:w-auto px-8 py-3 rounded-lg bg-[#0066FF] text-white font-semibold hover:bg-[#0052CC] transition-colors duration-200 flex items-center justify-center gap-2"
            >
              Back to Home
              <ArrowUpRight className="w-4 h-4" />
            </Link>
            <Link
              to="/services"
              className="w-full sm:w-auto px-8 py-3 rounded-lg border border-white/20 text-gray-300 font-semibold hover:border-white/40 hover:text-white transition-all duration-200 flex items-center justify-center gap-2"
            >
              View Services
              <ArrowUpRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
}

