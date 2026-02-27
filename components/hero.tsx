import Image from "next/image";
import Link from "next/link";

export function Hero() {
  return (
    <section className="relative overflow-hidden bg-background py-16 lg:py-24">
      <div className="mx-auto flex max-w-7xl flex-col items-center gap-12 px-4 lg:flex-row lg:gap-16 lg:px-8">
        {/* Text Content */}
        <div className="flex flex-1 flex-col gap-6 text-center lg:text-left">
          <h1 className="hero-text-enter text-balance text-4xl font-bold tracking-tight text-foreground md:text-5xl lg:text-6xl">
            Invest with Confidence & Loan with Certainty
          </h1>

          {/* Mobile hero image */}
          <div className="hero-image-enter flex justify-center lg:hidden">
            <Image
              src="/images/money-tree.png"
              alt="Money tree illustration representing wealth and growth"
              width={464}
              height={417}
              className="w-full max-w-sm"
              priority
            />
          </div>

          <p className="hero-text-enter-delay-2 text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            At Money Mart Loans and Investments, we empower students and everyday
            investors to secure their future with confidence. Whether you need
            quick access to affordable student loans or want to grow your savings
            with high-return investment opportunities, we provide simple,
            transparent, and reliable financial solutions.
          </p>
          <div className="hero-text-enter-delay-3">
            <Link
              href="#about"
              className="inline-block rounded-lg bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground transition-all hover:bg-primary/90 hover:shadow-lg hover:shadow-primary/25 active:scale-[0.98]"
            >
              More About Us
            </Link>
          </div>
        </div>

        {/* Desktop hero image */}
        <div className="hero-image-enter hidden flex-1 items-center justify-center lg:flex">
          <Image
            src="/images/money-tree.png"
            alt="Money tree illustration representing wealth and growth"
            width={464}
            height={417}
            className="w-full max-w-md"
            priority
          />
        </div>
      </div>
    </section>
  );
}
