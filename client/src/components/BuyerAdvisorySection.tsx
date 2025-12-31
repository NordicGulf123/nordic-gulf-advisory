import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { CheckCircle2, AlertCircle, Target } from "lucide-react";

export function BuyerAdvisorySection() {
  return (
    <section className="py-20 bg-white">
      <div className="container mx-auto px-4">
        {/* Main Heading */}
        <div className="max-w-3xl mx-auto text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold mb-6 text-foreground">
            Thinking of Buying Property in the UAE?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Independent real estate advisory for buyers and investors. Clear, buyer-first guidance to help you choose the right property, at the right time, for the right reason.
          </p>
          <p className="text-lg font-semibold text-primary mb-8">
            Built on 13+ years inside the UAE real estate market.
          </p>
          <Button size="lg" className="bg-primary hover:bg-primary/90 text-white">
            Request a 20-Minute Advisory Call
          </Button>
          <p className="text-sm text-muted-foreground mt-4">
            Confidential. No obligation. No sales pitch.
          </p>
        </div>

        {/* Problem Section */}
        <div className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          <div>
            <h3 className="text-3xl font-bold mb-8 text-foreground">
              Buying Property in the UAE Is Complex
            </h3>
            <p className="text-lg text-muted-foreground mb-6">
              The UAE property market offers opportunity, but also risk. Buyers are often faced with:
            </p>
            <ul className="space-y-4">
              {[
                "Hundreds of projects and developers",
                "Conflicting advice from multiple agents",
                "Sales-driven recommendations",
                "Unclear pricing, payment plans, and exit scenarios"
              ].map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <AlertCircle className="w-5 h-5 text-accent flex-shrink-0 mt-1" />
                  <span className="text-muted-foreground">{item}</span>
                </li>
              ))}
            </ul>
            <p className="text-lg font-semibold text-primary mt-8">
              Most buyers do not lack choice. They lack independent clarity.
            </p>
            <p className="text-muted-foreground mt-4">
              A poor decision can impact returns for years.
            </p>
          </div>
          <div className="bg-secondary/50 p-8 rounded-lg border border-border">
            <h4 className="text-xl font-bold mb-6 text-foreground">Why Advice Often Feels Biased</h4>
            <p className="text-muted-foreground mb-6">
              Much of the information available comes from:
            </p>
            <ul className="space-y-3 mb-8">
              {[
                "Agents incentivised by commissions",
                "Property portals focused on listings, not suitability",
                "Marketing-led content with limited context"
              ].map((item, i) => (
                <li key={i} className="text-sm text-muted-foreground">• {item}</li>
              ))}
            </ul>
            <p className="text-muted-foreground mb-4">
              This frequently results in:
            </p>
            <ul className="space-y-2">
              {[
                "Overpaying",
                "Buying unsuitable projects",
                "Weak rental or resale performance"
              ].map((item, i) => (
                <li key={i} className="text-sm font-semibold text-primary">• {item}</li>
              ))}
            </ul>
            <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
              Independent advice is uncommon, but essential.
            </p>
          </div>
        </div>

        {/* Solution Section */}
        <div className="bg-primary text-white rounded-lg p-12 mb-16">
          <h3 className="text-3xl font-bold mb-8">A Buyer-First Advisory Approach</h3>
          <p className="text-lg mb-8 opacity-90">
            I work exclusively in the interest of the buyer. My role is to help you:
          </p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              "Define your objectives, investment, end-use, or diversification",
              "Identify suitable locations and project types",
              "Understand pricing, payment structures, and risks",
              "Compare options objectively",
              "Make a confident, informed decision"
            ].map((item, i) => (
              <div key={i} className="flex items-start gap-3">
                <CheckCircle2 className="w-5 h-5 flex-shrink-0 mt-1" />
                <span>{item}</span>
              </div>
            ))}
          </div>
          <p className="text-lg font-semibold mt-8 pt-8 border-t border-white/20">
            I do not promote projects. I help you decide wisely.
          </p>
        </div>

        {/* Who This Is For */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <Target className="w-5 h-5 text-accent" />
                Who This Advisory Is For
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                This advisory is suitable if you:
              </p>
              <ul className="space-y-3">
                {[
                  "Are considering buying property in the UAE",
                  "Want independent guidance before committing",
                  "Are unsure which project or developer fits your goals",
                  "Prefer clarity over sales pressure"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 pt-6 border-t border-border">
                Both first-time buyers and experienced investors benefit from unbiased advice.
              </p>
            </CardContent>
          </Card>

          <Card className="border-border">
            <CardHeader>
              <CardTitle className="flex items-center gap-2">
                <CheckCircle2 className="w-5 h-5 text-accent" />
                Experience You Can Rely On
              </CardTitle>
            </CardHeader>
            <CardContent>
              <p className="text-muted-foreground mb-6">
                This advisory is built on:
              </p>
              <ul className="space-y-3">
                {[
                  "Over 13 years in the UAE real estate market",
                  "Direct exposure to leading developers and broker networks",
                  "Deep understanding of buyer risks, mistakes, and success patterns",
                  "Objective advice across the entire market"
                ].map((item, i) => (
                  <li key={i} className="flex items-start gap-2">
                    <span className="text-accent font-bold">✓</span>
                    <span className="text-muted-foreground">{item}</span>
                  </li>
                ))}
              </ul>
              <p className="text-muted-foreground mt-6 pt-6 border-t border-border">
                Having worked across the market, I am able to advise objectively.
              </p>
            </CardContent>
          </Card>
        </div>

        {/* Final CTA */}
        <div className="text-center">
          <h3 className="text-2xl font-bold mb-4 text-foreground">
            Ready for Independent, Buyer-First Guidance?
          </h3>
          <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
            Schedule your confidential 20-minute advisory call today. No obligation. No sales pitch. Just clear, independent guidance.
          </p>
          <Button size="lg" className="bg-accent hover:bg-accent/90 text-white">
            Book Your Advisory Call
          </Button>
        </div>
      </div>
    </section>
  );
}
