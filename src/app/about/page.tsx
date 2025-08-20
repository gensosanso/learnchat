import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { BookOpen, Users, Star, Award, Globe, CheckCircle } from "lucide-react";

export default function About() {
  const certifications = [
    {
      name: "ISO 9001:2015",
      description: "Quality Management Systems",
      year: "2023",
    },
    {
      name: "ISO 27001:2013",
      description: "Information Security Management",
      year: "2023",
    },
    {
      name: "ISO 14001:2015",
      description: "Environmental Management Systems",
      year: "2022",
    },
  ];

  const partnerships = [
    {
      name: "Harvard University",
      country: "United States",
      type: "Academic Partnership",
      logo: "https://images.unsplash.com/photo-1562774053-701939374585?w=200&q=80",
    },
    {
      name: "Oxford University",
      country: "United Kingdom",
      type: "Research Collaboration",
      logo: "https://images.unsplash.com/photo-1541339907198-e08756dedf3f?w=200&q=80",
    },
    {
      name: "MIT",
      country: "United States",
      type: "Technology Partnership",
      logo: "https://images.unsplash.com/photo-1498243691581-b145c3f54a5a?w=200&q=80",
    },
    {
      name: "University of Tokyo",
      country: "Japan",
      type: "Cultural Exchange",
      logo: "https://images.unsplash.com/photo-1540959733332-eab4deabeeaf?w=200&q=80",
    },
    {
      name: "Sorbonne University",
      country: "France",
      type: "Academic Partnership",
      logo: "https://images.unsplash.com/photo-1499856871958-5b9627545d1a?w=200&q=80",
    },
    {
      name: "ETH Zurich",
      country: "Switzerland",
      type: "Research Partnership",
      logo: "https://images.unsplash.com/photo-1506905925346-21bda4d32df4?w=200&q=80",
    },
  ];

  const stats = [
    { label: "Students Worldwide", value: "50,000+" },
    { label: "Expert Instructors", value: "1,200+" },
    { label: "Countries Served", value: "85+" },
    { label: "Course Completion Rate", value: "94%" },
  ];

  const values = [
    {
      icon: <BookOpen className="h-8 w-8 text-primary" />,
      title: "Excellence in Education",
      description:
        "We are committed to providing world-class educational experiences that transform lives and careers.",
    },
    {
      icon: <Users className="h-8 w-8 text-primary" />,
      title: "Global Community",
      description:
        "Building bridges across cultures and continents through shared learning experiences.",
    },
    {
      icon: <Star className="h-8 w-8 text-primary" />,
      title: "Innovation First",
      description:
        "Leveraging cutting-edge technology to create engaging and effective learning platforms.",
    },
    {
      icon: <Award className="h-8 w-8 text-primary" />,
      title: "Quality Assurance",
      description:
        "Maintaining the highest standards through rigorous quality control and continuous improvement.",
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
              <Link href="/about" className="text-sm font-medium text-primary">
                About
              </Link>
              <Link
                href="/contact"
                className="text-sm font-medium hover:text-primary"
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
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                About LearnConnect
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Empowering learners worldwide through innovative education
                technology and world-class partnerships.
              </p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
                {stats.map((stat, index) => (
                  <div key={index} className="text-center">
                    <div className="text-3xl font-bold text-primary mb-2">
                      {stat.value}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {stat.label}
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Mission Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="grid lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl font-bold tracking-tight mb-6">
                  Our Mission
                </h2>
                <p className="text-lg text-muted-foreground mb-6">
                  At LearnConnect, we believe that quality education should be
                  accessible to everyone, everywhere. Our mission is to
                  democratize learning by connecting passionate instructors with
                  eager students through cutting-edge technology and innovative
                  teaching methods.
                </p>
                <p className="text-lg text-muted-foreground mb-8">
                  We are committed to maintaining the highest standards of
                  educational excellence while fostering a global community of
                  lifelong learners who support and inspire each other.
                </p>
                <div className="flex flex-wrap gap-2">
                  <Badge variant="secondary">Global Reach</Badge>
                  <Badge variant="secondary">Quality Education</Badge>
                  <Badge variant="secondary">Innovation</Badge>
                  <Badge variant="secondary">Community</Badge>
                </div>
              </div>
              <div className="relative">
                <img
                  src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                  alt="Students collaborating"
                  className="rounded-lg shadow-xl"
                />
              </div>
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              Our Values
            </h2>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
              {values.map((value, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4">{value.icon}</div>
                    <CardTitle className="text-xl">{value.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{value.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* ISO Certifications Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                ISO Certifications
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Our commitment to quality and excellence is validated by
                internationally recognized certifications.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {certifications.map((cert, index) => (
                <Card
                  key={index}
                  className="text-center hover:shadow-lg transition-shadow"
                >
                  <CardHeader>
                    <div className="mx-auto mb-4 h-16 w-16 rounded-full bg-primary/10 flex items-center justify-center">
                      <Award className="h-8 w-8 text-primary" />
                    </div>
                    <CardTitle className="text-lg">{cert.name}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground mb-2">
                      {cert.description}
                    </p>
                    <Badge variant="outline">Certified {cert.year}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* International Partnerships Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                International Partnerships
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                We collaborate with leading institutions worldwide to bring you
                the best educational content and opportunities.
              </p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {partnerships.map((partner, index) => (
                <Card key={index} className="hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="flex items-center gap-4">
                      <div className="h-12 w-12 rounded-lg overflow-hidden">
                        <img
                          src={partner.logo}
                          alt={partner.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <CardTitle className="text-lg">
                          {partner.name}
                        </CardTitle>
                        <div className="flex items-center gap-2 mt-1">
                          <Globe className="h-4 w-4 text-muted-foreground" />
                          <span className="text-sm text-muted-foreground">
                            {partner.country}
                          </span>
                        </div>
                      </div>
                    </div>
                  </CardHeader>
                  <CardContent>
                    <Badge variant="secondary">{partner.type}</Badge>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight mb-4">
                Leadership Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries behind LearnConnect's mission to transform
                global education.
              </p>
            </div>
            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  name: "Sarah Johnson",
                  role: "CEO & Founder",
                  bio: "Former education technology executive with 15+ years of experience.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
                },
                {
                  name: "Michael Chen",
                  role: "CTO",
                  bio: "Technology leader specializing in scalable learning platforms.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
                },
                {
                  name: "Emma Rodriguez",
                  role: "Head of Education",
                  bio: "Curriculum expert with a passion for innovative teaching methods.",
                  avatar:
                    "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
                },
              ].map((member, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <div className="mx-auto mb-4 h-20 w-20 rounded-full overflow-hidden">
                      <img
                        src={member.avatar}
                        alt={member.name}
                        className="h-full w-full object-cover"
                      />
                    </div>
                    <CardTitle className="text-xl">{member.name}</CardTitle>
                    <p className="text-primary font-medium">{member.role}</p>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{member.bio}</p>
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
              Join Our Global Learning Community
            </h2>
            <p className="text-primary-foreground/80 max-w-2xl mx-auto mb-8">
              Be part of a movement that's transforming education worldwide.
              Start your learning journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Link href="/courses">
                <Button size="lg" variant="secondary">
                  Explore Courses
                </Button>
              </Link>
              <Link href="/contact">
                <Button
                  size="lg"
                  variant="outline"
                  className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
                >
                  Contact Us
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
