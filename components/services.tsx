"use client";

import Image from "next/image";
import { TrendingUp, GraduationCap, Banknote, ArrowRight } from "lucide-react";
import { useScrollAnimation } from "@/hooks/use-scroll-animation";

const investmentTiers = [
  {
    range: "R100 - R500",
    rate: "5%",
    label: "Starter",
    description: "Begin your investment journey",
  },
  {
    range: "R500 - R1,000",
    rate: "10%",
    label: "Growth",
    description: "Accelerate your returns",
  },
  {
    range: "R1,001+",
    rate: "15%",
    label: "Premium",
    description: "Maximize your earnings",
  },
];

export function Services() {
  const headerAnim = useScrollAnimation();
  const cardsAnim = useScrollAnimation({ threshold: 0.1 });

  return (
    <section id="services" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div
          ref={headerAnim.ref}
          className={`animate-on-scroll mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center lg:mb-16 ${headerAnim.isVisible ? "is-visible" : ""}`}
        >
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Services
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            At our enterprise, we offer a range of services and products to help
            both businesses and individuals grow their finances.
          </p>
        </div>

        {/* Services Grid */}
        <div
          ref={cardsAnim.ref}
          className={`stagger-children grid gap-8 lg:grid-cols-2 ${cardsAnim.isVisible ? "is-visible" : ""}`}
        >
          {/* Investments Card */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex flex-col gap-6 p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <TrendingUp className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Investments
                </h3>
              </div>

              {/* Pricelist */}
              <div className="flex flex-col gap-3">
                {investmentTiers.map((tier) => (
                  <div
                    key={tier.label}
                    className="flex items-center gap-4 rounded-xl border border-border bg-muted/50 p-4 transition-colors hover:bg-muted"
                  >
                    <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-lg bg-primary/10">
                      <Banknote className="h-5 w-5 text-primary" />
                    </div>
                    <div className="flex flex-1 flex-col gap-0.5">
                      <div className="flex items-center justify-between">
                        <span className="text-sm font-semibold text-foreground">
                          {tier.label}
                        </span>
                        <span className="rounded-full bg-primary px-3 py-0.5 text-sm font-bold text-primary-foreground">
                          {tier.rate}
                        </span>
                      </div>
                      <span className="text-xs text-muted-foreground">
                        {tier.range}
                      </span>
                      <span className="text-xs text-muted-foreground">
                        {tier.description}
                      </span>
                    </div>
                  </div>
                ))}
              </div>

              <a
                href="https://wa.me/27686750971"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Start investing <ArrowRight className="h-4 w-4" />
              </a>
            </div>

            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/investments.jpg"
                alt="Investment growth illustration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Student Loans Card */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-all duration-300 hover:shadow-lg hover:-translate-y-1">
            <div className="flex flex-col gap-4 p-6 lg:p-8">
              <div className="flex items-center gap-3">
                <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary text-primary-foreground">
                  <GraduationCap className="h-5 w-5" />
                </div>
                <h3 className="text-2xl font-bold text-foreground">
                  Student Loans Available
                </h3>
              </div>
              <p className="text-sm leading-relaxed text-muted-foreground">
                Quick and affordable student loans to help you focus on your
                education. Transparent terms with no hidden fees.
              </p>
              <a
                href="https://wa.me/27686750971"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 text-sm font-semibold text-primary transition-colors hover:text-primary/80"
              >
                Apply now <ArrowRight className="h-4 w-4" />
              </a>
            </div>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/student-loans.png"
                alt="Student financial support illustration"
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
