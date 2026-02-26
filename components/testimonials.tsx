import Image from "next/image";
import { Quote } from "lucide-react";

const testimonials = [
  {
    name: "Khulani Baloi",
    image: "/images/khulani.jpeg",
    text: "I am truly impressed with Money Mart Loan and Investment Company. From the very first day I engaged with them, everything has been smooth, professional, and transparent. Their process is straightforward, and I always felt informed and confident in every step of my transaction. What stood out the most for me is their honesty and commitment to keeping things clear no hidden surprises, just reliable service. Whether you are looking to take a loan or invest your money, I highly recommend Money Mart. They've given me peace of mind, and I believe they can do the same for anyone who values trust and efficiency in financial services.",
  },
  {
    name: "Tebatso Mongadi",
    image: "/images/tebatso.jpeg",
    text: "I, Tebatso Mongadi have been with Money Mart from the beginning. It has been great working with the company especially seeing how the business is growing rapidly. As their first ever investor since the commencement of the business, I can proudly say investing in Money Mart is the best financial decision I have ever made. I still look forward to working with Money Mart because investing in the company has helped me grow my savings more than the interest I used to receive from saving into my bank account. Not forgetting that Money Mart is essentially built for money loaning, their loaning service is transparent and there are no hidden fees, getting a loan from Money Mart is fast and easy. I highly recommend Money Mart to anyone looking for a smart, reliable investment plan and loaning.",
  },
  {
    name: "Unami Busisa Mahlangu",
    image: "/images/unami.jpeg",
    text: "I'd like to sincerely thank Money Marts for helping me manage and grow my finances. Not only have they made saving simple and effective, but they've also ensured my money is kept safe while working for me. What I really appreciate is that my savings aren't just sitting idle, they're actually growing and doubling over time. Money Marts has truly been a reliable and rewarding partner in my financial journey.",
  },
  {
    name: "Prince Malatji",
    image: "/images/prince.jpeg",
    text: "More than just a financial institution, Money Mart has shown a genuine interest in its clients. Recently, they wished me a happy birthday and even provided me with a celebratory amount of money to spend. This gesture, though seemingly small, speaks volumes about the company's commitment to its customers. It's clear that Money Mart isn't just focused on profits; they value the relationships they build and the positive impact they have on their investors' lives. As a final-year student, managing finances is crucial. Money Mart has not only provided me with a steady and impressive return on investment but has also demonstrated exceptional client service. I am incredibly happy with my experience with Money Mart and would highly recommend them to anyone looking for a reputable and reliable investment platform.",
  },
];

export function Testimonials() {
  return (
    <section className="bg-background py-16 lg:py-24">
      <div className="mx-auto max-w-7xl px-4 lg:px-8">
        {/* Section Header */}
        <div className="mx-auto mb-12 flex max-w-2xl flex-col items-center gap-4 text-center lg:mb-16">
          <h2 className="text-3xl font-bold tracking-tight text-foreground md:text-4xl">
            Testimonials
          </h2>
          <p className="text-pretty text-base leading-relaxed text-muted-foreground md:text-lg">
            Hear from our satisfied clients: read our testimonials to learn more
            about our services.
          </p>
        </div>

        {/* Testimonials Grid */}
        <div className="grid gap-6 md:grid-cols-2">
          {testimonials.map((testimonial) => (
            <div
              key={testimonial.name}
              className="flex flex-col gap-4 rounded-2xl border border-border bg-card p-6 shadow-sm lg:p-8"
            >
              <Quote className="h-8 w-8 text-primary/40" />
              <p className="flex-1 text-sm leading-relaxed text-muted-foreground">
                {testimonial.text}
              </p>
              <div className="flex items-center gap-3 border-t border-border pt-4">
                <div className="relative h-10 w-10 flex-shrink-0 overflow-hidden rounded-full">
                  <Image
                    src={testimonial.image}
                    alt={`${testimonial.name} portrait`}
                    fill
                    className="object-cover"
                  />
                </div>
                <div className="font-semibold text-foreground">
                  {testimonial.name}
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
