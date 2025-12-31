import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, TrendingUp, Home as HomeIcon, PieChart, DollarSign, Users, Zap, Briefcase } from "lucide-react";
import { useState } from "react";
import { Link } from "wouter";
import { BuyerAdvisorySection } from "@/components/BuyerAdvisorySection";
import { FAQSection } from "@/components/FAQSection";

export default function HomePage() {
  const [selectedBudget, setSelectedBudget] = useState("mid-range");

  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/" className="text-xl font-bold text-primary">Nordic Gulf</Link>
          <div className="hidden md:flex gap-8">
            <a href="#strategies" className="text-sm hover:text-primary transition">Strategies</a>
            <a href="#why-dubai" className="text-sm hover:text-primary transition">Why Dubai</a>
            <a href="#investment-options" className="text-sm hover:text-primary transition">Investment Options</a>
            <Link href="/properties" className="text-sm hover:text-primary transition">Properties</Link>
            <Link href="/blog" className="text-sm hover:text-primary transition">Blog</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition">Contact</Link>
          </div>
          <a href="https://calendly.com/nordicgulfadvisory-support/uae-real-estate-advisory-call" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="relative overflow-hidden bg-gradient-to-br from-background via-background to-secondary/20 py-20 md:py-32">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-5xl md:text-6xl font-bold mb-6 leading-tight">
                Premium UAE Real Estate for <span className="text-primary">European Investors</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                13+ years of direct developer experience. Scandinavian transparency. Expert guidance for your Dubai investment journey.
              </p>
              <div className="flex gap-4">
                <a href="https://calendly.com/nordicgulfadvisory-support/uae-real-estate-advisory-call" target="_blank" rel="noopener noreferrer">
                  <Button size="lg" className="bg-primary hover:bg-primary/90">
                    Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                  </Button>
                </a>
                <Button size="lg" variant="outline">
                  Explore Options
                </Button>
              </div>
            </div>
            <div className="relative h-96 rounded-lg overflow-hidden">
              <img src="/images/dubai-skyline-hero.jpg" alt="Dubai Skyline" className="w-full h-full object-cover rounded-lg" />
            </div>
          </div>
        </div>
      </section>

      {/* Buyer Advisory Section */}
      <BuyerAdvisorySection />

      {/* Market Statistics */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Dubai Real Estate Market 2025</h2>
          <div className="grid md:grid-cols-4 gap-8">
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-5xl text-primary">226K</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Transactions in 2024</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-5xl text-primary">32.2%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Villa price growth (2025)</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-5xl text-primary">5-8%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Average rental yield</p>
              </CardContent>
            </Card>
            <Card className="border-border">
              <CardHeader>
                <CardTitle className="text-5xl text-primary">0%</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground">Capital gains tax</p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section id="strategies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Investment Strategies</h2>
          <div className="grid md:grid-cols-2 gap-8">
            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <HomeIcon className="w-5 h-5 text-primary" />
                  Buy-to-Let
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Generate consistent rental income from premium properties with 5-8% annual yields</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Stable monthly income</li>
                  <li>✓ Property appreciation</li>
                  <li>✓ Tax-efficient returns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <TrendingUp className="w-5 h-5 text-primary" />
                  Capital Appreciation
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Invest in emerging areas with high growth potential - villas up 32% in 2025</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ High growth areas</li>
                  <li>✓ Long-term appreciation</li>
                  <li>✓ Developer-backed projects</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Briefcase className="w-5 h-5 text-primary" />
                  Golden Visa
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Invest AED 2M+ for residency and build wealth simultaneously</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ 10-year residency</li>
                  <li>✓ Family sponsorship</li>
                  <li>✓ Investment returns</li>
                </ul>
              </CardContent>
            </Card>

            <Card className="border-primary">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <PieChart className="w-5 h-5 text-primary" />
                  Portfolio Mix
                </CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-sm text-muted-foreground mb-4">Diversify across rental income, appreciation, and residency benefits</p>
                <ul className="space-y-2 text-sm">
                  <li>✓ Balanced approach</li>
                  <li>✓ Risk mitigation</li>
                  <li>✓ Multiple income streams</li>
                </ul>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section id="why-dubai" className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Why Dubai for European Investors</h2>
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tax Advantages</h3>
              <div className="space-y-4">
                {[
                  { label: "Capital Gains Tax", dubai: "0%", europe: "18-28%" },
                  { label: "Rental Income Tax", dubai: "0%", europe: "20-45%" },
                  { label: "Annual Property Tax", dubai: "0%", europe: "0.5-2%" },
                  { label: "Rental Yields", dubai: "5-8%", europe: "2-3%" }
                ].map((item, i) => (
                  <div key={i} className="flex justify-between items-center p-4 bg-background rounded-lg border border-border">
                    <span className="font-medium">{item.label}</span>
                    <div className="flex gap-8">
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Dubai</div>
                        <div className="text-lg font-bold text-primary">{item.dubai}</div>
                      </div>
                      <div className="text-right">
                        <div className="text-xs text-muted-foreground">Europe</div>
                        <div className="text-lg font-bold text-muted-foreground">{item.europe}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div>
              <h3 className="text-2xl font-semibold mb-6">Market Growth & Vision</h3>
              <div className="space-y-4">
                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Dubai D33 Agenda</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">Double the economy to AED 32 trillion by 2033 with 100+ transformative projects</p>
                    <div className="flex items-center gap-2 text-primary font-semibold">
                      <TrendingUp className="w-4 h-4" />
                      Strong growth trajectory
                    </div>
                  </CardContent>
                </Card>

                <Card className="border-border">
                  <CardHeader>
                    <CardTitle className="text-lg">Dubai 2040 Master Plan</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-3">7.8M population, 60% green spaces, sustainable urban development</p>
                    <div className="flex items-center gap-2 text-accent font-semibold">
                      <Zap className="w-4 h-4" />
                      Sustainable growth
                    </div>
                  </CardContent>
                </Card>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Investment Options by Budget */}
      <section id="investment-options" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Investment Options by Budget</h2>
          <p className="text-lg text-muted-foreground mb-12">Find the perfect investment tier for your financial goals (2025 Market Prices)</p>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { id: "entry", label: "Entry-Level", range: "€200K - €400K" },
              { id: "mid-range", label: "Mid-Range", range: "€600K - €1.6M" },
              { id: "premium", label: "Premium", range: "€1.1M - €4M" },
              { id: "ultra", label: "Ultra-Luxury", range: "€2.7M+" }
            ].map((tier) => (
              <button
                key={tier.id}
                onClick={() => setSelectedBudget(tier.id)}
                className={`p-4 rounded-lg border-2 transition ${
                  selectedBudget === tier.id
                    ? "border-primary bg-primary/5"
                    : "border-border hover:border-primary"
                }`}
              >
                <div className="font-semibold">{tier.label}</div>
                <div className="text-sm text-muted-foreground">{tier.range}</div>
              </button>
            ))}
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {selectedBudget === "entry" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Dubai Silicon Oasis (DSO)</CardTitle>
                    <CardDescription>AED 750K - 1.2M (€200K - €320K)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Studio & 1-bed apartments. Fastest growing area with 29% price increase in 2025</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 5-6% rental yield</div>
                      <div>✓ 29% annual growth (2025)</div>
                      <div>✓ Tech hub community</div>
                      <div className="text-xs text-muted-foreground mt-2">Source: Property Finder, Bayut 2025</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Jumeirah Village Circle (JVC)</CardTitle>
                    <CardDescription>AED 1.1M - 1.5M (€290K - €400K)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Modern 1-2 bed apartments with excellent rental demand</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 6-7% rental yield</div>
                      <div>✓ Strong expat community</div>
                      <div>✓ Growing infrastructure</div>
                      <div className="text-xs text-muted-foreground mt-2">Avg: AED 1,150/sqft</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedBudget === "mid-range" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Jumeirah Beach Residence (JBR)</CardTitle>
                    <CardDescription>AED 2.2M - 4M (€580K - €1.1M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Iconic beachfront community. 2-3 bed apartments with strong short-term rental appeal</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 5-8% rental yield</div>
                      <div>✓ Beachfront location</div>
                      <div>✓ Tourism demand</div>
                      <div className="text-xs text-muted-foreground mt-2">AED 2,000-2,800/sqft</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Arabian Ranches (Villas)</CardTitle>
                    <CardDescription>AED 3.7M - 6M (€980K - €1.6M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">3-4 bed luxury villas. 32.2% price growth in 2025. Strong capital appreciation</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 32.2% annual growth (2025)</div>
                      <div>✓ Premium community</div>
                      <div>✓ Strong resale value</div>
                      <div className="text-xs text-muted-foreground mt-2">Avg villa: AED 5.2M</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedBudget === "premium" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Dubai Marina (Luxury Apartments)</CardTitle>
                    <CardDescription>AED 4M - 8M (€1.1M - €2.1M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Iconic waterfront. 2-3 bed luxury apartments with strong rental demand</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 5-7% rental yield</div>
                      <div>✓ Prime waterfront location</div>
                      <div>✓ Global recognition</div>
                      <div className="text-xs text-muted-foreground mt-2">AED 1,700-2,600/sqft</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Palm Jumeirah (Villas)</CardTitle>
                    <CardDescription>AED 7M - 15M (€1.9M - €4M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Ultra-luxury island villas with exclusive positioning and strong appreciation</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Ultra-premium positioning</div>
                      <div>✓ Strong capital appreciation</div>
                      <div>✓ Exclusive lifestyle</div>
                      <div className="text-xs text-muted-foreground mt-2">Source: Property Finder 2025</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedBudget === "ultra" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Emirates Hills (Luxury Villas)</CardTitle>
                    <CardDescription>AED 10M - 25M (€2.7M - €6.7M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Ultra-luxury hillside villas with panoramic views. Premium investment for high-net-worth</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Ultra-premium positioning</div>
                      <div>✓ Exclusive location</div>
                      <div>✓ Strong capital appreciation</div>
                      <div className="text-xs text-muted-foreground mt-2">Avg villa: AED 5.2M (32% growth 2025)</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Downtown Dubai - Penthouse</CardTitle>
                    <CardDescription>AED 6M - 20M (€1.6M - €5.3M)</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Iconic downtown location with luxury penthouses overlooking Burj Khalifa</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Iconic location</div>
                      <div>✓ Strong appreciation potential</div>
                      <div>✓ Premium lifestyle</div>
                      <div className="text-xs text-muted-foreground mt-2">Penthouse range: AED 6.8M - 105M</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/10">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          <div className="grid md:grid-cols-6 gap-4">
            {[
              { step: "1", title: "Consultation", desc: "Understand your goals & budget" },
              { step: "2", title: "Analysis", desc: "Market research & property matching" },
              { step: "3", title: "Selection", desc: "Review options & negotiate" },
              { step: "4", title: "Due Diligence", desc: "Legal & financial review" },
              { step: "5", title: "Transaction", desc: "Complete purchase & registration" },
              { step: "6", title: "Management", desc: "Ongoing support & optimization" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-background font-bold flex items-center justify-center mx-auto mb-4">{item.step}</div>
                <h4 className="font-semibold mb-2">{item.title}</h4>
                <p className="text-sm text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter */}
      <section className="py-20 bg-primary text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Stay Updated on Dubai Market</h2>
          <p className="text-lg mb-8 opacity-90">Get exclusive insights, investment opportunities, and market analysis delivered to your inbox</p>
          <div className="flex gap-4 max-w-md mx-auto">
            <input type="email" placeholder="Your email" className="flex-1 px-4 py-3 rounded-lg bg-background text-foreground" />
            <Button className="bg-background text-primary hover:bg-background/90">Subscribe</Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-primary to-primary/80 text-background">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Dubai Investment?</h2>
          <p className="text-xl mb-8 opacity-90">Schedule a free 20-minute consultation with our expert advisors</p>
          <a href="https://calendly.com/nordicgulfadvisory-support/uae-real-estate-advisory-call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-background text-primary hover:bg-background/90">
              Book Your Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-background border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h4 className="font-semibold mb-4">Nordic Gulf Advisory</h4>
              <p className="text-sm text-muted-foreground">Your trusted partner for UAE real estate investment</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="#strategies" className="hover:text-primary">Investment Strategies</a></li>
                <li><a href="/properties" className="hover:text-primary">Properties</a></li>
                <li><a href="/blog" className="hover:text-primary">Blog</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm text-muted-foreground">
                <li><a href="/contact" className="hover:text-primary">Contact</a></li>
                <li><a href="/business-setup" className="hover:text-primary">Business Setup</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <p className="text-sm text-muted-foreground">Email: info@nordicgulfadvisory.com</p>
              <p className="text-sm text-muted-foreground">Phone: +971 4 XXX XXXX</p>
            </div>
          </div>
          <div className="border-t border-border pt-8 text-center text-sm text-muted-foreground">
            <p>&copy; 2025 Nordic Gulf Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
