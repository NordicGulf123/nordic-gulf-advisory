import { useState } from "react";
import { ChevronDown } from "lucide-react";

const faqs = [
  {
    question: "What is the minimum investment required to buy property in Dubai?",
    answer: "There is no official minimum investment requirement. However, most properties start from around AED 500,000 (€130,000). Entry-level apartments in communities like Jumeirah Village Circle can be found from €120,000, while luxury properties can exceed €2 million. Your budget depends on your investment strategy and goals."
  },
  {
    question: "Can non-UAE residents buy property in Dubai?",
    answer: "Yes, foreign investors can purchase property in designated freehold areas of Dubai. Most popular communities like Dubai Marina, Downtown Dubai, and Arabian Ranches are open to foreign buyers. You will need to obtain a property registration from the Dubai Land Department and pay applicable fees."
  },
  {
    question: "What are the tax implications for foreign investors?",
    answer: "One of Dubai's major advantages is that there is no capital gains tax or rental income tax for property investors. You only pay a 4% transfer fee when purchasing and a 2% real estate agency fee. This is significantly lower than most European countries where capital gains tax ranges from 18-28% and rental income tax can be 20-45%."
  },
  {
    question: "What is the Golden Visa and how does it relate to property investment?",
    answer: "The UAE Golden Visa is a 10-year residency visa. To qualify, you can invest AED 2 million (€540,000) in real estate. This allows you to live, work, and study in the UAE while building wealth through property investment. It is an excellent option for investors seeking both residency and investment returns."
  },
  {
    question: "What are typical rental yields for Dubai properties?",
    answer: "Rental yields vary by location and property type. Entry-level apartments in communities like JVC typically offer 6-7% gross yields. Mid-range properties in Dubai Hills Estate offer 4-6% yields. Premium locations like Dubai Marina offer 5-7% yields. Buy-to-let strategies can generate consistent monthly income while building long-term capital appreciation."
  },
  {
    question: "How long does the property purchase process take?",
    answer: "The typical process takes 3-6 months from consultation to ownership transfer. The timeline includes: consultation and property selection (2-4 weeks), due diligence and analysis (1-2 weeks), MOU signing (1 week), developer approval (2-4 weeks), and final transfer (2-4 weeks). We handle all steps to ensure a smooth process."
  },
  {
    question: "What are the main risks when buying property in Dubai?",
    answer: "Common risks include: oversupply in certain areas, market volatility, currency fluctuations, developer delays, and poor property selection. Our advisory service helps you avoid these risks by providing independent analysis, identifying suitable projects, and ensuring you make informed decisions based on your specific goals and risk tolerance."
  },
  {
    question: "Should I buy off-plan or ready property?",
    answer: "Both have advantages. Off-plan properties offer lower prices and payment flexibility, but involve construction risk and longer timelines. Ready properties provide immediate rental income and certainty, but cost more upfront. The best choice depends on your investment strategy, timeline, and risk tolerance. We help you decide based on your specific situation."
  },
  {
    question: "How do I manage my property remotely from Europe?",
    answer: "You can hire a property management company to handle tenant relations, maintenance, rent collection, and repairs. Most management companies charge 5-8% of monthly rental income. Alternatively, you can use online platforms to monitor your property and communicate with tenants. We can recommend trusted property management partners."
  },
  {
    question: "What happens if I want to sell my property?",
    answer: "The resale process typically takes 2-4 months. You pay a 2% real estate agency fee and 4% transfer fee. Most properties appreciate over time, especially in established communities. We help you understand exit scenarios and timing to maximize your returns when you decide to sell."
  }
];

export function FAQSection() {
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section className="py-20 bg-secondary/30">
      <div className="container mx-auto px-4 max-w-3xl">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold mb-4">Frequently Asked Questions</h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about Dubai property investment, the process, and our advisory service.
          </p>
        </div>

        <div className="space-y-4">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="border border-border rounded-lg overflow-hidden bg-background hover:border-primary transition"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? null : index)}
                className="w-full px-6 py-4 flex items-center justify-between hover:bg-secondary/30 transition"
              >
                <h3 className="text-lg font-semibold text-left text-foreground">{faq.question}</h3>
                <ChevronDown
                  className={`w-5 h-5 text-primary flex-shrink-0 transition-transform ${
                    openIndex === index ? "transform rotate-180" : ""
                  }`}
                />
              </button>

              {openIndex === index && (
                <div className="px-6 py-4 border-t border-border bg-secondary/10">
                  <p className="text-muted-foreground leading-relaxed">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>

        <div className="mt-12 p-6 bg-primary text-white rounded-lg text-center">
          <h3 className="text-xl font-bold mb-2">Still have questions?</h3>
          <p className="opacity-90 mb-4">
            Schedule a consultation with our advisors for personalized guidance on your specific situation.
          </p>
          <button className="bg-white text-primary hover:bg-white/90 px-6 py-2 rounded-lg font-semibold transition">
            Book Your Consultation
          </button>
        </div>
      </div>
    </section>
  );
}
