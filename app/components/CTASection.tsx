"use client";

import { Play, MessageSquare, Users } from "lucide-react";

interface FeatureCardProps {
  icon: React.ReactNode;
  title: string;
  subtitle: string;
}

function FeatureCard({ icon, title, subtitle }: FeatureCardProps) {
  return (
    <div className="bg-white dark:bg-gray-900 rounded-lg p-8 text-center border border-gray-200 dark:border-gray-800 hover:shadow-lg transition">
      <div className="flex justify-center mb-4 text-red-600">
        {icon}
      </div>
      <h3 className="text-sm font-bold text-gray-900 dark:text-white mb-2 uppercase tracking-wide">{subtitle}</h3>
      <p className="text-xl font-bold text-gray-900 dark:text-white">{title}</p>
    </div>
  );
}

export default function CTASection() {
  return (
    <section className="bg-gray-50 dark:bg-black py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <FeatureCard
            icon={<Play size={32} />}
            title="Get the On-Demand Course"
            subtitle="Most Popular"
          />
          <FeatureCard
            icon={<MessageSquare size={32} />}
            title="Attend the Live Workshop"
            subtitle=""
          />
          <FeatureCard
            icon={<Users size={32} />}
            title="Book a Messaging Intervention"
            subtitle=""
          />
        </div>
      </div>
    </section>
  );
}
