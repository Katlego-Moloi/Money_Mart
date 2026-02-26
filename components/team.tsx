"use client";

import Image from "next/image";
import { LinkedinIcon } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const teamMembers = [
  {
    name: "Ntombinkulu Khumalo",
    role: "COO",
    image: "/images/ntombi.jpeg",
    linkedin:
      "https://www.linkedin.com/in/ntombinkulu-khumalo-3b604925b/",
    bio: "Dynamic leader and mentor at UFS. She has served as Finance Officer for BMF and EDHE, a radio presenter at Q-lit, and Enactus UFS President, she led her award-winning social enterprise, RootRescue.",
  },
  {
    name: "Francer Sekgobela",
    role: "CEO",
    image: "/images/francer.jpeg",
    linkedin:
      "https://www.linkedin.com/in/francer-sekgobela-995b592b4/",
    bio: "The CEO of Money Mart, with a track record of leadership across campus and business. He has served as President of EDHE UFS Qwaqwa, former Head of Operations at Q-lit Radio, RC Academics at Hector Peterson, Chairperson of Varsity Vibes, and COO of Rare Designs.",
  },
];

export function Team() {
  const headerAnim = useScrollAnimation();
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="team" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerAnim.ref}
          className={`animate-on-scroll mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center lg:mb-16 ${headerAnim.isVisible ? "is-visible" : ""}`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Team
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Meet the skilled and experienced team behind our successful finance
            strategies.
          </p>
        </div>

        {/* Team Grid */}
        <div
          ref={cardsAnim.ref}
          className={`stagger-children grid gap-8 md:grid-cols-2 ${cardsAnim.isVisible ? "is-visible" : ""}`}
        >
          {teamMembers.map((member) => (
            <div
              key={member.name}
              className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1"
            >
              {/* Member header */}
              <div className="flex items-center gap-4 p-6">
                <div className="relative h-16 w-16 flex-shrink-0 overflow-hidden rounded-full ring-2 ring-primary/20 transition-all duration-300 group-hover:ring-primary/50">
                  <Image
                    src={member.image}
                    alt={`${member.name} portrait`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-1">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-semibold text-foreground">
                        {member.name}
                      </div>
                      <div className="text-sm text-primary font-medium">
                        {member.role}
                      </div>
                    </div>
                    <a
                      aria-label={`${member.name} LinkedIn`}
                      href={member.linkedin}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex h-9 w-9 items-center justify-center rounded-full bg-primary text-primary-foreground transition-all hover:bg-primary/90 hover:scale-110"
                    >
                      <LinkedinIcon className="h-4 w-4" />
                    </a>
                  </div>
                </div>
              </div>

              <hr className="border-border" />

              {/* Member bio */}
              <div className="p-6">
                <p className="text-sm leading-relaxed text-muted-foreground">
                  {member.bio}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
