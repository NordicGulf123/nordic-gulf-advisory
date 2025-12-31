import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, MapPin, Home, TrendingUp, Users } from "lucide-react";
import { Link } from "wouter";

const properties = [
  {
    id: 1,
    name: "Dubai Hills Estate - Villa Community",
    location: "Dubai Hills Estate",
    type: "Villas & Townhouses",
    priceRange: "€240K - €480K",
    yield: "4-6%",
    description: "Established luxury community with excellent amenities, schools, and lifestyle facilities. Strong capital appreciation and rental demand.",
    highlights: ["Premium community", "Strong resale value", "Family-friendly", "Balanced returns"],
    image: "/images/dubai-hills.jpg"
  },
  {
    id: 2,
    name: "Arabian Ranches - Luxury Villas",
    location: "Arabian Ranches",
    type: "Luxury Villas",
    priceRange: "€480K - €720K",
    yield: "3-5%",
    description: "Exclusive villa community with world-class amenities. Ideal for investors seeking premium positioning and strong capital appreciation.",
    highlights: ["Exclusive community", "Strong appreciation", "Premium lifestyle", "High-net-worth investors"],
    image: "/images/arabian-ranches.jpg"
  },
  {
    id: 3,
    name: "Dubai Marina - Waterfront Apartments",
    location: "Dubai Marina",
    type: "Apartments",
    priceRange: "€720K - €1.5M",
    yield: "5-7%",
    description: "Iconic waterfront location with premium apartments. Strong rental demand from international residents and tourists.",
    highlights: ["Prime location", "High rental yield", "Global recognition", "Steady demand"],
    image: "/images/dubai-marina.jpg"
  },
  {
    id: 4,
    name: "Jumeirah Village Circle - Modern Apartments",
    location: "Jumeirah Village Circle",
    type: "Apartments",
    priceRange: "€120K - €180K",
    yield: "6-7%",
    description: "Vibrant community with modern apartments and excellent amenities. Strong expat demand and consistent rental income.",
    highlights: ["Strong rental yield", "Expat community", "Modern amenities", "Entry-level pricing"],
    image: "/images/jvc.jpg"
  },
  {
    id: 5,
    name: "Dubai South - Emerging Development",
    location: "Dubai South",
    type: "Apartments & Villas",
    priceRange: "€180K - €240K",
    yield: "5-8%",
    description: "Strategic emerging area with major infrastructure development. High growth potential for capital appreciation.",
    highlights: ["High growth potential", "New developments", "Strategic location", "Future appreciation"],
    image: "/images/dubai-south.jpg"
  },
  {
    id: 6,
    name: "Palm Jumeirah - Ultra-Luxury",
    location: "Palm Jumeirah",
    type: "Luxury Apartments & Villas",
    priceRange: "€1.5M - €2.4M+",
    yield: "2-4%",
    description: "Ultra-luxury island development with exclusive properties. Premium positioning and strong long-term appreciation.",
    highlights: ["Ultra-luxury", "Exclusive location", "Strong appreciation", "Premium lifestyle"],
    image: "/images/palm-jumeirah.jpg"
  }
];

export default function Properties() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      {/* Navigation */}
      <nav className="sticky top-0 z-50 bg-background border-b border-border">
        <div className="container mx-auto px-4 py-4 flex items-center justify-between">
          <Link href="/">
            <img src="/images/nordic-gulf-logo.png" alt="Nordic Gulf" className="h-12 cursor-pointer" />
          </Link>
          <div className="hidden md:flex gap-8">
            <a href="/#strategies" className="text-sm hover:text-primary transition">Strategies</a>
            <a href="/#why-dubai" className="text-sm hover:text-primary transition">Why Dubai</a>
            <Link href="/properties" className="text-sm hover:text-primary transition font-semibold">Properties</Link>
            <Link href="/blog" className="text-sm hover:text-primary transition">Blog</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition">Contact</Link>
          </div>
          <a href="https://calendly.com/nordicgulfadvisory-support/uae-real-estate-advisory-call" target="_blank" rel="noopener noreferrer">
            <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
          </a>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Featured Investment Properties</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Carefully selected developments across Dubai, offering diverse investment strategies and return profiles for European investors.
          </p>
        </div>
      </section>

      {/* Properties Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {properties.map((property) => (
              <Card key={property.id} className="hover:shadow-lg transition border-border overflow-hidden flex flex-col">
                <div className="h-48 bg-secondary/30 flex items-center justify-center">
                  <Home className="w-16 h-16 text-muted-foreground opacity-50" />
                </div>
                <CardHeader>
                  <CardTitle className="line-clamp-2">{property.name}</CardTitle>
                  <CardDescription className="flex items-center gap-1">
                    <MapPin className="w-4 h-4" />
                    {property.location}
                  </CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-4 mb-4">
                    <div>
                      <div className="text-sm text-muted-foreground mb-1">Property Type</div>
                      <div className="font-semibold">{property.type}</div>
                    </div>
                    <div className="grid grid-cols-2 gap-4">
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Price Range</div>
                        <div className="font-semibold text-primary">{property.priceRange}</div>
                      </div>
                      <div>
                        <div className="text-sm text-muted-foreground mb-1">Rental Yield</div>
                        <div className="font-semibold text-accent">{property.yield}</div>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground">{property.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {property.highlights.map((highlight, i) => (
                        <span key={i} className="text-xs bg-secondary text-foreground px-2 py-1 rounded">
                          {highlight}
                        </span>
                      ))}
                    </div>
                  </div>
                  <Button variant="outline" className="w-full justify-between">
                    Learn More <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-6">Find Your Perfect Investment Property</h2>
          <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
            Schedule a consultation with our advisors to discuss which property and strategy aligns best with your investment goals.
          </p>
          <a href="https://calendly.com/nordicgulfadvisory-support/uae-real-estate-advisory-call" target="_blank" rel="noopener noreferrer">
            <Button size="lg" className="bg-white text-primary hover:bg-white/90">
              Book Your Consultation <ArrowRight className="ml-2 w-4 h-4" />
            </Button>
          </a>
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
                <li><a href="#" className="opacity-75 hover:opacity-100 transition">Blog</a></li>
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
