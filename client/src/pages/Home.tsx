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
          <Link href="/">
            <img src="/images/nordic-gulf-logo.png" alt="Nordic Gulf" className="h-12 cursor-pointer" />
          </Link>
          <div className="hidden md:flex gap-8">
            <a href="#strategies" className="text-sm hover:text-primary transition">Strategies</a>
            <a href="#why-dubai" className="text-sm hover:text-primary transition">Why Dubai</a>
            <a href="#investment-options" className="text-sm hover:text-primary transition">Investment Options</a>
            <Link href="/properties"><a className="text-sm hover:text-primary transition">Properties</a></Link>
            <Link href="/blog"><a className="text-sm hover:text-primary transition">Blog</a></Link>
            <Link href="/contact"><a className="text-sm hover:text-primary transition">Contact</a></Link>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
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
                <Button size="lg" className="bg-primary hover:bg-primary/90">
                  Schedule Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
                </Button>
                <Button size="lg" variant="outline">
                  Explore Options
                </Button>
              </div>
            </div>
            <div className="relative h-96 md:h-full rounded-lg overflow-hidden shadow-2xl">
              <img 
                src="/images/dubai-skyline-hero.jpg" 
                alt="Dubai Skyline" 
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Buyer-First Advisory Section */}
      <BuyerAdvisorySection />

      {/* Market Statistics */}
      <section className="py-16 bg-card border-y border-border">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">Dubai's Real Estate Market at a Glance</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            {[
              { value: "226,000", label: "Transactions in 2024" },
              { value: "AED 761B", label: "Transaction Value" },
              { value: "110,000", label: "New Investors" },
              { value: "5.7%", label: "Population Growth" }
            ].map((stat, i) => (
              <div key={i} className="text-center p-6 bg-background rounded-lg border border-border hover:border-primary transition">
                <div className="text-3xl md:text-4xl font-bold text-primary mb-2">{stat.value}</div>
                <div className="text-sm text-muted-foreground">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Investment Strategies */}
      <section id="strategies" className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-4">Investment Strategies</h2>
          <p className="text-lg text-muted-foreground mb-12 max-w-2xl">
            Choose the strategy that aligns with your investment goals and timeline.
          </p>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {[
              {
                icon: HomeIcon,
                title: "Buy-to-Let",
                description: "Generate consistent rental income with 6-9% gross yields",
                highlight: "Income Focus"
              },
              {
                icon: TrendingUp,
                title: "Capital Appreciation",
                description: "Invest in emerging areas for significant growth potential",
                highlight: "Growth Focus"
              },
              {
                icon: Briefcase,
                title: "Golden Visa",
                description: "Secure 10-year residency while building wealth",
                highlight: "Residency + Returns"
              },
              {
                icon: PieChart,
                title: "Portfolio Mix",
                description: "Diversify across multiple strategies and locations",
                highlight: "Balanced Approach"
              }
            ].map((strategy, i) => {
              const Icon = strategy.icon;
              return (
                <Card key={i} className="hover:shadow-lg transition border-border hover:border-primary">
                  <CardHeader>
                    <Icon className="w-8 h-8 text-accent mb-4" />
                    <CardTitle>{strategy.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm text-muted-foreground mb-4">{strategy.description}</p>
                    <div className="inline-block px-3 py-1 bg-primary/10 text-primary text-xs font-semibold rounded">
                      {strategy.highlight}
                    </div>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>

      {/* Why Dubai */}
      <section id="why-dubai" className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">Why Dubai Outperforms European Markets</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <div>
              <h3 className="text-2xl font-semibold mb-6">Tax & Financial Advantages</h3>
              <div className="space-y-4">
                {[
                  { label: "Capital Gains Tax", dubai: "0%", europe: "18-28%" },
                  { label: "Rental Income Tax", dubai: "0%", europe: "20-45%" },
                  { label: "Annual Property Tax", dubai: "0%", europe: "0.5-2%" },
                  { label: "Rental Yields", dubai: "5.45-9%", europe: "2-3%" }
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
          <p className="text-lg text-muted-foreground mb-12">Find the perfect investment tier for your financial goals</p>

          <div className="grid md:grid-cols-4 gap-4 mb-12">
            {[
              { id: "entry", label: "Entry-Level", range: "€120K - €240K" },
              { id: "mid-range", label: "Mid-Range", range: "€240K - €720K" },
              { id: "premium", label: "Premium", range: "€720K - €2.4M" },
              { id: "ultra", label: "Ultra-Luxury", range: "€2.4M+" }
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
                    <CardTitle>Jumeirah Village Circle (JVC)</CardTitle>
                    <CardDescription>€120K - €180K</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Modern apartments with excellent rental demand and community amenities</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 6-7% rental yield</div>
                      <div>✓ Strong expat community</div>
                      <div>✓ Growing infrastructure</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Dubai South</CardTitle>
                    <CardDescription>€180K - €240K</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Emerging area with major infrastructure development and high growth potential</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ High appreciation potential</div>
                      <div>✓ New developments</div>
                      <div>✓ Strategic location</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedBudget === "mid-range" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Dubai Hills Estate</CardTitle>
                    <CardDescription>€240K - €480K</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Established community with villas and apartments, excellent lifestyle amenities</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Balanced returns</div>
                      <div>✓ Premium community</div>
                      <div>✓ Strong resale value</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Arabian Ranches</CardTitle>
                    <CardDescription>€480K - €720K</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Luxury villa community with strong capital appreciation and lifestyle appeal</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Premium positioning</div>
                      <div>✓ Strong appreciation</div>
                      <div>✓ Exclusive community</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedBudget === "premium" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Dubai Marina</CardTitle>
                    <CardDescription>€720K - €1.5M</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Iconic waterfront location with premium apartments and strong rental demand</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ 5-7% rental yield</div>
                      <div>✓ Prime location</div>
                      <div>✓ Global recognition</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Palm Jumeirah</CardTitle>
                    <CardDescription>€1.5M - €2.4M</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Ultra-luxury island development with exclusive properties and strong appreciation</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Exclusive positioning</div>
                      <div>✓ Strong appreciation</div>
                      <div>✓ Luxury lifestyle</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}

            {selectedBudget === "ultra" && (
              <>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Emirates Hills</CardTitle>
                    <CardDescription>€2.4M+</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Ultra-luxury hillside villas with panoramic views and exclusive community</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Premium positioning</div>
                      <div>✓ Exclusive location</div>
                      <div>✓ Strong capital appreciation</div>
                    </div>
                  </CardContent>
                </Card>
                <Card className="border-primary bg-primary/5">
                  <CardHeader>
                    <CardTitle>Bulgari Residences</CardTitle>
                    <CardDescription>€2.4M+</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <p className="text-sm mb-4">Iconic luxury brand residences with world-class amenities and design</p>
                    <div className="space-y-2 text-sm">
                      <div>✓ Brand prestige</div>
                      <div>✓ Ultra-luxury positioning</div>
                      <div>✓ Strong investment value</div>
                    </div>
                  </CardContent>
                </Card>
              </>
            )}
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-secondary/30">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-bold mb-12">How It Works</h2>
          
          <div className="grid md:grid-cols-6 gap-4 mb-12">
            {[
              { step: "1", title: "Consultation", desc: "Discuss goals & strategy" },
              { step: "2", title: "Search", desc: "Find perfect property" },
              { step: "3", title: "Due Diligence", desc: "Verify & analyze" },
              { step: "4", title: "MOU", desc: "Agreement signed" },
              { step: "5", title: "NOC", desc: "Developer approval" },
              { step: "6", title: "Transfer", desc: "Ownership secured" }
            ].map((item, i) => (
              <div key={i} className="text-center">
                <div className="w-12 h-12 rounded-full bg-primary text-white flex items-center justify-center font-bold mx-auto mb-3">
                  {item.step}
                </div>
                <h3 className="font-semibold text-sm mb-1">{item.title}</h3>
                <p className="text-xs text-muted-foreground">{item.desc}</p>
              </div>
            ))}
          </div>

          <Card className="border-border">
            <CardHeader>
              <CardTitle>Transparent Fee Structure</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="grid md:grid-cols-3 gap-6">
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">4%</div>
                  <p className="text-sm text-muted-foreground">Dubai Land Department Transfer Fee</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">2%</div>
                  <p className="text-sm text-muted-foreground">Real Estate Agency Fee</p>
                </div>
                <div>
                  <div className="text-2xl font-bold text-primary mb-2">Varies</div>
                  <p className="text-sm text-muted-foreground">Developer Fees (off-plan)</p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground mt-6 pt-6 border-t border-border">
                All costs are clearly disclosed upfront with no hidden fees. Our commitment is to provide you with complete transparency throughout your investment journey.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* FAQ Section */}
      <FAQSection />

      {/* Newsletter Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Market Insights</h2>
          <p className="text-lg opacity-90 mb-8">
            Subscribe to our newsletter for exclusive market analysis, investment opportunities, and buyer education delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border-0 bg-white text-foreground focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white">Subscribe</Button>
          </div>
          <p className="text-xs opacity-75 mt-3">We respect your privacy. Unsubscribe anytime.</p>
        </div>
      </section>

      {/* CTA Section */}
      <section id="contact" className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-bold mb-6">Ready to Start Your Dubai Investment Journey?</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto opacity-90">
            Schedule a free, no-obligation consultation with our expert advisors. We will discuss your investment goals and create a personalized strategy.
          </p>
          <Link href="/contact">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Free Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-primary text-white border-t border-border py-12">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-8">
            <div>
              <h3 className="font-bold text-lg mb-4">Nordic Gulf</h3>
              <p className="text-sm opacity-90">Your trusted partner for premium UAE real estate investments.</p>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Company</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition">About Us</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition">Our Team</a></li>
                <li><Link href="/blog"><a className="opacity-75 hover:opacity-100 transition">Blog</a></Link></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Services</h4>
              <ul className="space-y-2 text-sm">
                <li><a href="#" className="opacity-75 hover:opacity-100 transition">Investment Advisory</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition">Property Management</a></li>
                <li><a href="#" className="opacity-75 hover:opacity-100 transition">Webinars</a></li>
              </ul>
            </div>
            <div>
              <h4 className="font-semibold mb-4">Contact</h4>
              <ul className="space-y-2 text-sm">
                <li className="opacity-90">Email: info@nordicgulfadvisory.com</li>
                <li className="opacity-90">Phone: +47 XXX XX XXX</li>
                <li className="opacity-90">Stavanger, Norway</li>
              </ul>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-sm opacity-75">
            <p>&copy; 2025 Nordic Gulf Property Advisory. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
