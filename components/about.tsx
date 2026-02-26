import Image from "next/image";

export function About() {
  return (
    <section id="about" className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        <div className="overflow-hidden rounded-2xl border border-border bg-card shadow-sm">
          <div className="grid items-center gap-8 lg:grid-cols-2 lg:gap-0">
            {/* Text Content */}
            <div className="flex flex-col gap-6 p-8 lg:p-12">
              <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
                About Us
              </h2>
              <div className="flex flex-col gap-4 text-base leading-relaxed text-muted-foreground">
                <p>
                  At Money Mart Loans and Investments, our{" "}
                  <strong className="text-foreground">mission</strong> is to
                  provide accessible, reliable, and innovative financial solutions
                  that empower individuals and businesses to achieve their
                  financial goals. We are committed to delivering exceptional
                  service, building trust, and fostering long-term relationships
                  with our clients.
                </p>
                <p>
                  Our <strong className="text-foreground">vision</strong> at Money
                  Mart Loans and Investments is to be the trusted partner for
                  individuals and businesses seeking financial growth and security.
                  We aim to innovate, adapt, and lead in the financial services
                  industry, while upholding the highest standards of integrity and
                  customer care.
                </p>
              </div>
              <div>
                <a
                  href="https://wa.me/27686750971"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-colors hover:bg-primary/90"
                >
                  Request a quote
                </a>
              </div>
            </div>

            {/* Image */}
            <div className="relative hidden aspect-square lg:block">
              <Image
                src="/images/investing.png"
                alt="Investing and financial growth"
                fill
                className="object-cover"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
