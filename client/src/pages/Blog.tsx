import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { ArrowRight, Calendar, User } from "lucide-react";
import { Link } from "wouter";

const blogPosts = [
  {
    id: 1,
    title: "Dubai Property Market 2025: What European Investors Need to Know",
    excerpt: "A comprehensive guide to the current Dubai real estate market, key trends, and opportunities for European investors looking to build wealth through UAE property.",
    date: "December 28, 2024",
    author: "Nordic Gulf Advisory",
    category: "Market Insights",
    readTime: "8 min read"
  },
  {
    id: 2,
    title: "The Golden Visa Strategy: Real Estate Investment for Residency",
    excerpt: "Explore how to leverage UAE real estate investments to secure a 10-year Golden Visa while building long-term wealth and portfolio diversification.",
    date: "December 20, 2024",
    author: "Nordic Gulf Advisory",
    category: "Investment Strategy",
    readTime: "6 min read"
  },
  {
    id: 3,
    title: "Buy-to-Let in Dubai: Maximizing Rental Yields and Long-Term Returns",
    excerpt: "A detailed analysis of buy-to-let strategies in Dubai, including yield calculations, property selection criteria, and risk management for rental investors.",
    date: "December 15, 2024",
    author: "Nordic Gulf Advisory",
    category: "Investment Strategy",
    readTime: "10 min read"
  },
  {
    id: 4,
    title: "Common Mistakes European Buyers Make in the UAE Market",
    excerpt: "Learn from the mistakes of other international investors. We break down the most common pitfalls and how to avoid them when buying property in Dubai.",
    date: "December 10, 2024",
    author: "Nordic Gulf Advisory",
    category: "Buyer Education",
    readTime: "7 min read"
  },
  {
    id: 5,
    title: "Understanding Payment Plans and Financing Options for UAE Property",
    excerpt: "A complete guide to developer payment plans, mortgage options, and financing strategies for international buyers investing in Dubai real estate.",
    date: "December 5, 2024",
    author: "Nordic Gulf Advisory",
    category: "Buyer Education",
    readTime: "9 min read"
  },
  {
    id: 6,
    title: "Dubai vs. Abu Dhabi: Choosing the Right Emirate for Your Investment",
    excerpt: "Compare investment opportunities across UAE emirates. Understand the differences in market dynamics, returns, and suitability for different investor profiles.",
    date: "November 28, 2024",
    author: "Nordic Gulf Advisory",
    category: "Market Insights",
    readTime: "8 min read"
  }
];

export default function Blog() {
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
            <a href="/#investment-options" className="text-sm hover:text-primary transition">Investment Options</a>
            <Link href="/properties" className="text-sm hover:text-primary transition">Properties</Link>
            <Link href="/blog" className="text-sm hover:text-primary transition">Blog</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition">Contact</Link>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Investment Insights & Market Knowledge</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Expert analysis, market trends, and buyer education to help you make informed decisions about UAE real estate investment.
          </p>
        </div>
      </section>

      {/* Blog Posts Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {blogPosts.map((post) => (
              <Card key={post.id} className="hover:shadow-lg transition border-border flex flex-col">
                <CardHeader>
                  <div className="flex items-center gap-2 mb-3">
                    <span className="text-xs font-semibold text-accent bg-accent/10 px-3 py-1 rounded">
                      {post.category}
                    </span>
                  </div>
                  <CardTitle className="line-clamp-2">{post.title}</CardTitle>
                  <CardDescription className="line-clamp-2">{post.excerpt}</CardDescription>
                </CardHeader>
                <CardContent className="flex-1 flex flex-col justify-between">
                  <div className="space-y-3 mb-4">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Calendar className="w-4 h-4" />
                      {post.date}
                    </div>
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <User className="w-4 h-4" />
                      {post.author}
                    </div>
                    <div className="text-sm text-muted-foreground">{post.readTime}</div>
                  </div>
                  <Button variant="outline" className="w-full justify-between">
                    Read Article <ArrowRight className="w-4 h-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Newsletter Signup */}
      <section className="py-16 bg-secondary/30">
        <div className="container mx-auto px-4 max-w-2xl text-center">
          <h2 className="text-3xl font-bold mb-4">Stay Updated with Market Insights</h2>
          <p className="text-muted-foreground mb-8">
            Subscribe to our newsletter for exclusive market analysis, investment opportunities, and buyer education delivered to your inbox.
          </p>
          <div className="flex gap-2">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
            />
            <Button className="bg-accent hover:bg-accent/90 text-white">Subscribe</Button>
          </div>
          <p className="text-xs text-muted-foreground mt-3">We respect your privacy. Unsubscribe anytime.</p>
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
