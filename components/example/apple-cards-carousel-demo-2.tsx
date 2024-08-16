"use client";
import Image from "next/image";
import React from "react";
import { Carousel, Card } from "@/components/ui/apple-cards-carousel";

export default function AppleCardsCarouselDemo() {
  const cards = data.map((card, index) => (
    <Card key={card.src} card={card} index={index} layout={true} />
  ));

  return (
    <div className="w-full h-full py-20">
      <h2 className="max-w-7xl pl-4 mx-auto text-xl md:text-5xl font-bold text-neutral-800 dark:text-neutral-200 font-sans">
        Explore Cybersecurity Solutions
      </h2>
      <Carousel items={cards} />
    </div>
  );
}

const CloudSecurityContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Secure your multi-cloud environment with confidence.
        </span>{" "}
        Our cloud security solutions offer comprehensive protection across all major cloud platforms. Implement robust access controls, encrypt sensitive data, and gain real-time visibility into your cloud infrastructure.
      </p>
      <Image
        src="/images/cloud-security.png"
        alt="Cloud Security Illustration"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const ThreatIntelligenceContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Stay one step ahead of cyber threats.
        </span>{" "}
        Our advanced threat detection systems use machine learning and AI to identify and neutralize potential threats before they can cause damage. Get real-time alerts and comprehensive threat intelligence reports.
      </p>
      <Image
        src="/images/threat-intelligence.png"
        alt="Threat Intelligence Dashboard"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const DevSecOpsContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Integrate security into your development pipeline.
        </span>{" "}
        Our DevSecOps solutions help you build security into every stage of your software development lifecycle. Automate security checks, conduct continuous vulnerability assessments, and ensure compliance throughout the CI/CD process.
      </p>
      <Image
        src="/images/devsecops.png"
        alt="DevSecOps Pipeline"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const NetworkSecurityContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Implement a Zero Trust network architecture.
        </span>{" "}
        Our network security solutions help you move beyond traditional perimeter-based security. Verify every user, device, and connection before granting access to your resources, regardless of location.
      </p>
      <Image
        src="/images/zero-trust.png"
        alt="Zero Trust Network Diagram"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const IncidentResponseContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Respond swiftly to cyber incidents.
        </span>{" "}
        Our incident response team is available 24/7 to help you mitigate and recover from cyber attacks. We provide rapid threat containment, forensic analysis, and post-incident recovery support to minimize damage and downtime.
      </p>
      <Image
        src="/images/incident-response.png"
        alt="Incident Response Timeline"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const ComplianceContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Achieve and maintain compliance with ease.
        </span>{" "}
        Our compliance solutions help you meet regulatory requirements such as HIPAA and SOC2. We provide automated compliance checks, documentation support, and ongoing monitoring to ensure your systems remain compliant.
      </p>
      <Image
        src="/images/compliance.png"
        alt="Compliance Dashboard"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const IoTSecurityContent = () => {
  return (
    <div className="bg-[#F5F5F7] p-8 md:p-14 rounded-3xl mb-4">
      <p className="text-neutral-600 text-base md:text-2xl font-sans max-w-3xl mx-auto">
        <span className="font-bold text-neutral-700">
          Secure your Internet of Things ecosystem.
        </span>{" "}
        Our IoT security solutions protect your connected devices and networks from vulnerabilities. We offer device authentication, secure communication protocols, and centralized IoT security management to safeguard your entire IoT infrastructure.
      </p>
      <Image
        src="/images/iot-security.png"
        alt="IoT Security Ecosystem"
        height="500"
        width="500"
        className="md:w-1/2 md:h-1/2 h-full w-full mx-auto object-contain"
      />
    </div>
  );
};

const data = [
  {
    category: "Cloud Security",
    title: "Securing Multi-Cloud Environments",
    src: "https://images.unsplash.com/photo-1451187580459-43490279c0fa?q=80&w=2072&auto=format&fit=crop",
    content: <CloudSecurityContent />,
  },
  {
    category: "Threat Intelligence",
    title: "Advanced Threat Detection Systems",
    src: "https://images.unsplash.com/photo-1550751827-4bd374c3f58b?q=80&w=2070&auto=format&fit=crop",
    content: <ThreatIntelligenceContent />,
  },
  {
    category: "DevSecOps",
    title: "Integrating Security into CI/CD Pipelines",
    src: "https://images.unsplash.com/photo-1555949963-ff9fe0c870eb?q=80&w=2070&auto=format&fit=crop",
    content: <DevSecOpsContent />,
  },
  {
    category: "Network Security",
    title: "Zero Trust Network Implementation",
    src: "https://images.unsplash.com/photo-1558494949-ef010cbdcc31?q=80&w=2034&auto=format&fit=crop",
    content: <NetworkSecurityContent />,
  },
  {
    category: "Incident Response",
    title: "Rapid Response to Cyber Incidents",
    src: "https://images.unsplash.com/photo-1504639725590-34d0984388bd?q=80&w=1974&auto=format&fit=crop",
    content: <IncidentResponseContent />,
  },
  {
    category: "Compliance",
    title: "HIPAA and SOC2 Compliance Solutions",
    src: "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?q=80&w=2070&auto=format&fit=crop",
    content: <ComplianceContent />,
  },
  {
    category: "IoT Security",
    title: "Securing Internet of Things Ecosystems",
    src: "https://images.unsplash.com/photo-1558346490-a72e53ae2d4f?q=80&w=2070&auto=format&fit=crop",
    content: <IoTSecurityContent />,
  }
];