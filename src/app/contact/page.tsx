import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Textarea } from "@/components/ui/textarea";
import {
  BookOpen,
  Mail,
  Phone,
  MapPin,
  Clock,
  MessageSquare,
} from "lucide-react";

export default function Contact() {
  const contactInfo = [
    {
      icon: <Mail className="h-6 w-6 text-primary" />,
      title: "Email Us",
      details: "support@learnconnect.com",
      description: "Get in touch with our support team",
    },
    {
      icon: <Phone className="h-6 w-6 text-primary" />,
      title: "Call Us",
      details: "+1 (555) 123-4567",
      description: "Monday to Friday, 9 AM - 6 PM EST",
    },
    {
      icon: <MapPin className="h-6 w-6 text-primary" />,
      title: "Visit Us",
      details: "123 Education Street, Learning City, LC 12345",
      description: "Our headquarters location",
    },
    {
      icon: <Clock className="h-6 w-6 text-primary" />,
      title: "Business Hours",
      details: "Mon - Fri: 9 AM - 6 PM EST",
      description: "Weekend support via email",
    },
  ];

  const departments = [
    {
      name: "General Support",
      email: "support@learnconnect.com",
      description: "Course enrollment, technical issues, account help",
    },
    {
      name: "Instructor Relations",
      email: "instructors@learnconnect.com",
      description: "Become an instructor, course creation, partnerships",
    },
    {
      name: "Business Inquiries",
      email: "business@learnconnect.com",
      description: "Corporate training, bulk licenses, custom solutions",
    },
    {
      name: "Media & Press",
      email: "press@learnconnect.com",
      description: "Press releases, media kits, interview requests",
    },
  ];

  const faqs = [
    {
      question: "How do I enroll in a course?",
      answer:
        "Simply browse our course catalog, select a course, and click 'Enroll Now'. You'll be guided through the payment process.",
    },
    {
      question: "Can I get a refund?",
      answer:
        "Yes, we offer a 30-day money-back guarantee for all courses. Contact support for refund requests.",
    },
    {
      question: "How do I become an instructor?",
      answer:
        "Visit our instructor application page and submit your proposal. Our team will review and get back to you within 5 business days.",
    },
    {
      question: "Do you offer certificates?",
      answer:
        "Yes, upon successful completion of a course, you'll receive a certificate of completion that you can share on LinkedIn.",
    },
  ];

  return (
    <div className="min-h-screen bg-background">
      {/* Navigation Header */}
      <header className="border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60">
        <div className="container flex h-16 items-center justify-between">
          <div className="flex items-center gap-8">
            <Link href="/" className="flex items-center">
              <BookOpen className="h-6 w-6 text-primary mr-2" />
              <span className="text-xl font-bold">LearnConnect</span>
            </Link>
            <nav className="hidden md:flex gap-6">
              <Link
                href="/courses"
                className="text-sm font-medium hover:text-primary"
              >
                Courses
              </Link>
              <Link
                href="/instructors"
                className="text-sm font-medium hover:text-primary"
              >
                Instructors
              </Link>
              <Link
                href="/about"
                className="text-sm font-medium hover:text-primary"
              >
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <Link href="/login">
              <Button variant="ghost" className="font-medium">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Get in Touch
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Have questions? We're here to help. Reach out to our team and
                we'll get back to you as soon as possible.
              </p>
            </div>
          </div>
        </section>

        {/* Contact Information */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 mb-16">
              {contactInfo.map((info, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center">
                      {info.icon}
                    </div>
                    <CardTitle className="text-lg">{info.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="font-medium mb-2">{info.details}</p>
                    <p className="text-sm text-muted-foreground">
                      {info.description}
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Contact Form and Map */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Send us a Message
                </h2>
                <Card>
                  <CardContent className="p-6">
                    <form className="space-y-6">
                      <div className="grid md:grid-cols-2 gap-4">
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            First Name
                          </label>
                          <Input placeholder="John" />
                        </div>
                        <div>
                          <label className="text-sm font-medium mb-2 block">
                            Last Name
                          </label>
                          <Input placeholder="Doe" />
                        </div>
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Email
                        </label>
                        <Input type="email" placeholder="john@example.com" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Subject
                        </label>
                        <Input placeholder="How can we help you?" />
                      </div>
                      <div>
                        <label className="text-sm font-medium mb-2 block">
                          Message
                        </label>
                        <Textarea
                          placeholder="Tell us more about your inquiry..."
                          className="min-h-[120px]"
                        />
                      </div>
                      <Button className="w-full" size="lg">
                        <MessageSquare className="h-4 w-4 mr-2" />
                        Send Message
                      </Button>
                    </form>
                  </CardContent>
                </Card>
              </div>

              {/* Map and Additional Info */}
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Find Us
                </h2>
                <Card className="mb-8">
                  <CardContent className="p-0">
                    <div className="aspect-video bg-muted rounded-lg flex items-center justify-center">
                      <div className="text-center">
                        <MapPin className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                        <p className="text-muted-foreground">Interactive Map</p>
                        <p className="text-sm text-muted-foreground">
                          123 Education Street, Learning City
                        </p>
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Department Contacts */}
                <h3 className="text-xl font-bold mb-4">Department Contacts</h3>
                <div className="space-y-4">
                  {departments.map((dept, index) => (
                    <Card key={index}>
                      <CardContent className="p-4">
                        <h4 className="font-medium mb-1">{dept.name}</h4>
                        <p className="text-sm text-primary mb-2">
                          {dept.email}
                        </p>
                        <p className="text-sm text-muted-foreground">
                          {dept.description}
                        </p>
                      </CardContent>
                    </Card>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Frequently Asked Questions
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Quick answers to common questions. Can't find what you're
                looking for? Contact us directly.
              </p>
            </div>
            <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
              {faqs.map((faq, index) => (
                <Card key={index}>
                  <CardHeader>
                    <CardTitle className="text-lg">{faq.question}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{faq.answer}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-16 bg-primary text-primary-foreground">
          <div className="container px-4 md:px-6 text-center">
            <h2 className="text-3xl font-bold tracking-tight mb-4">
              Ready to Start Learning?
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Don't wait! Join thousands of students already learning on
              LearnConnect.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" variant="secondary">
                  Browse Courses
                </Button>
              </Link>
              <Link href="/signup">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Sign Up Now
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-8">
          <div className="text-center">
            <p className="text-sm text-muted-foreground">
              © 2023 LearnConnect. All rights reserved.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
