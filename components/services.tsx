import Image from "next/image";
import { ArrowUpRight } from "lucide-react";

export function Services() {
  return (
    <section id="services" className="bg-muted py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Services
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            At our enterprise, we offer a range of services and products to help
            both businesses and individuals grow their finances.
          </p>
        </div>

        {/* Services Grid */}
        <div className="grid gap-8 md:grid-cols-2">
          {/* Investments Card */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-col gap-4 p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-foreground">
                Investments
              </h3>
              <div className="flex items-start gap-3">
                <div className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-primary text-primary-foreground">
                  <ArrowUpRight className="h-5 w-5" />
                </div>
                <div className="text-sm leading-relaxed text-muted-foreground">
                  <p>R100 - R500 = 5%</p>
                  <p>R500 - R1000 = 10%</p>
                  <p>R1001 and above = 15%</p>
                </div>
              </div>
            </div>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/investments.jpg"
                alt="Investment growth illustration"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>

          {/* Student Loans Card */}
          <div className="group overflow-hidden rounded-2xl border border-border bg-card shadow-sm transition-shadow hover:shadow-md">
            <div className="flex flex-col gap-4 p-6 lg:p-8">
              <h3 className="text-2xl font-bold text-foreground">
                Student Loans Available
              </h3>
            </div>
            <div className="relative aspect-video w-full overflow-hidden">
              <Image
                src="/images/student-loans.png"
                alt="Student financial support illustration"
                fill
                className="object-cover transition-transform duration-300 group-hover:scale-105"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
