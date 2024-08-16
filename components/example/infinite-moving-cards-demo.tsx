"use client";

import React, { useEffect, useState } from "react";
import { InfiniteMovingCards } from "../ui/infinite-moving-cards";

export default function InfiniteMovingCardsDemo() {
  return (
    <div className="h-[40rem] rounded-md flex flex-col antialiased bg-white dark:bg-black dark:bg-grid-white/[0.05] items-center justify-center relative overflow-hidden">
      <InfiniteMovingCards
        items={testimonials}
        direction="right"
        speed="slow"
      />
    </div>
  );
}

const testimonials = [
  {
    quote:
      "Harsh's implementation of our Zero Trust architecture was flawless. We've seen a 70% reduction in security incidents and our team's confidence in our infrastructure has never been higher. His expertise in modern cybersecurity practices is truly unparalleled.",
    name: "Priya Sharma",
    title: "CTO, TechNova Solutions",
  },
  {
    quote:
      "When we suffered a ransomware attack, Harsh's incident response team was our lifeline. They contained the threat within hours and helped us recover with minimal data loss. Their 24/7 support and clear communication throughout the crisis were invaluable.",
    name: "Rajesh Patel",
    title: "IT Director, GlobalHealth India",
  },
  {
    quote: "Integrating security into our DevOps pipeline seemed daunting until we brought Harsh on board. His DevSecOps strategies have not only tightened our security but also improved our deployment efficiency by 40%. A game-changer for our development process.",
    name: "Aisha Khan",
    title: "Lead Developer, FinTech Innovations",
  },
  {
    quote:
      "Harsh's cloud security audit revealed vulnerabilities we had no idea existed. His remediation plan was comprehensive, and the follow-up support ensured we implemented every recommendation effectively. Our multi-cloud environment has never been more secure.",
    name: "Vikram Mehta",
    title: "Cloud Architect, DataSphere Corp",
  },
  {
    quote:
      "As a rapidly growing startup, we needed a security partner who could scale with us. Harsh and his team provided that and more. Their proactive threat intelligence has prevented numerous potential breaches, and their training programs have instilled a culture of security awareness across our organization.",
    name: "Neha Gupta",
    title: "Founder & CEO, SecureStartup",
  },
];

