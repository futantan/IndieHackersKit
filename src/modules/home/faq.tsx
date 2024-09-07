import { FaqSection } from "@/modules/faq/components/faq-section";

export async function Faq() {
  return (
    <section className="bg-primary/5 py-16 lg:py-24" id="faq">
      <div className="container max-w-3xl">
        <div className="mb-12 pt-8 text-center">
          <h1 className="mb-2 text-5xl font-bold">
            Frequently asked questions
          </h1>
          <p className="text-lg opacity-50">
            Do you have any questions? We have got you covered.
          </p>
        </div>
        <FaqSection
          items={[
            {
              question: "What is the refund policy?",
              answer:
                "We offer a 30-day money-back guarantee if you're not happy with our product.",
            },
            {
              question: "How do I cancel my subscription?",
              answer:
                "You can cancel your subscription by visiting the billing page.",
            },
            {
              question: "Can I change my plan?",
              answer:
                "Yes, you can change your plan at any time by visiting the billing page.",
            },
            {
              question: "Do you offer a free trial?",
              answer: "Yes, we offer a 14-day free trial.",
            },
          ]}
        />
      </div>
    </section>
  );
}
