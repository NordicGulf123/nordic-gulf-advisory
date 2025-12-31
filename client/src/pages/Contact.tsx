import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Mail, Phone, MapPin, Clock } from "lucide-react";
import { Link } from "wouter";
import { useState } from "react";

export default function Contact() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    investmentBudget: "",
    message: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // Form submission logic would go here
    console.log("Form submitted:", formData);
    alert("Thank you for your inquiry. We will contact you shortly.");
    setFormData({ name: "", email: "", phone: "", investmentBudget: "", message: "" });
  };

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
            <Link href="/properties" className="text-sm hover:text-primary transition">Properties</Link>
            <Link href="/blog" className="text-sm hover:text-primary transition">Blog</Link>
            <Link href="/contact" className="text-sm hover:text-primary transition font-semibold">Contact</Link>
          </div>
          <Button className="bg-primary hover:bg-primary/90">Book Consultation</Button>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="py-16 bg-primary text-white">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-4xl md:text-5xl font-bold mb-4">Get in Touch</h1>
          <p className="text-lg opacity-90 max-w-2xl mx-auto">
            Have questions about investing in Dubai? Schedule a consultation or reach out to our team.
          </p>
        </div>
      </section>

      {/* Contact Information */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-4 gap-8 mb-16">
            <Card className="border-border text-center">
              <CardHeader>
                <Mail className="w-8 h-8 text-accent mx-auto mb-4" />
                <CardTitle>Email</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">info@nordicgulfadvisory.com</p>
                <p className="text-sm text-muted-foreground mt-2">We respond within 24 hours</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <Phone className="w-8 h-8 text-accent mx-auto mb-4" />
                <CardTitle>Phone</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">+47 XXX XX XXX</p>
                <p className="text-sm text-muted-foreground mt-2">Available for calls</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <MapPin className="w-8 h-8 text-accent mx-auto mb-4" />
                <CardTitle>Location</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Stavanger, Norway</p>
                <p className="text-sm text-muted-foreground mt-2">Serving European investors</p>
              </CardContent>
            </Card>

            <Card className="border-border text-center">
              <CardHeader>
                <Clock className="w-8 h-8 text-accent mx-auto mb-4" />
                <CardTitle>Hours</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground">Mon - Fri: 9am - 6pm CET</p>
                <p className="text-sm text-muted-foreground mt-2">Flexible for consultations</p>
              </CardContent>
            </Card>
          </div>

          {/* Contact Form */}
          <div className="grid md:grid-cols-2 gap-12 max-w-4xl mx-auto">
            <div>
              <h2 className="text-3xl font-bold mb-6">Schedule Your Consultation</h2>
              <p className="text-muted-foreground mb-4">
                Fill out the form below and we will contact you to schedule a 20-minute advisory call. This is a confidential, no-obligation consultation where we discuss your investment goals and create a personalized strategy.
              </p>
              <div className="space-y-4">
                <div className="flex items-start gap-3">
                  <div className="text-accent font-bold text-lg">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">Confidential</h4>
                    <p className="text-sm text-muted-foreground">Your information is secure and private</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent font-bold text-lg">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">No Obligation</h4>
                    <p className="text-sm text-muted-foreground">Explore options without commitment</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="text-accent font-bold text-lg">✓</div>
                  <div>
                    <h4 className="font-semibold mb-1">Expert Guidance</h4>
                    <p className="text-sm text-muted-foreground">13+ years of market experience</p>
                  </div>
                </div>
              </div>
            </div>

            <Card className="border-border">
              <CardHeader>
                <CardTitle>Contact Form</CardTitle>
                <CardDescription>Tell us about your investment goals</CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name *</label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="Your name"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Email *</label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="your@email.com"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                      placeholder="+47 XXX XX XXX"
                    />
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Investment Budget</label>
                    <select
                      name="investmentBudget"
                      value={formData.investmentBudget}
                      onChange={handleChange}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent"
                    >
                      <option value="">Select budget range</option>
                      <option value="entry">€120K - €240K</option>
                      <option value="mid">€240K - €720K</option>
                      <option value="premium">€720K - €2.4M</option>
                      <option value="ultra">€2.4M+</option>
                    </select>
                  </div>

                  <div>
                    <label className="block text-sm font-medium mb-2">Message</label>
                    <textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      rows={4}
                      className="w-full px-4 py-2 rounded-lg border border-border bg-background focus:outline-none focus:ring-2 focus:ring-accent resize-none"
                      placeholder="Tell us about your investment goals..."
                    />
                  </div>

                  <Button type="submit" className="w-full bg-accent hover:bg-accent/90 text-white">
                    Schedule Consultation
                  </Button>

                  <p className="text-xs text-muted-foreground text-center">
                    We respect your privacy. Your information will not be shared.
                  </p>
                </form>
              </CardContent>
            </Card>
          </div>
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
