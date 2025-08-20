import React from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Search, BookOpen, Users, Star, ChevronRight } from "lucide-react";
import CourseCard from "@/components/CourseCard";

export default function Home() {
  // Mock data for featured courses
  const featuredCourses = [
    {
      id: "1",
      title: "Introduction to Web Development",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviewCount: 245,
      price: 49.99,
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      description:
        "Learn the fundamentals of web development including HTML, CSS, and JavaScript.",
    },
    {
      id: "2",
      title: "Data Science Fundamentals",
      instructor: "Michael Chen",
      rating: 4.7,
      reviewCount: 189,
      price: 59.99,
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description:
        "Master the basics of data analysis, visualization, and machine learning.",
    },
    {
      id: "3",
      title: "Digital Marketing Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.9,
      reviewCount: 312,
      price: 69.99,
      thumbnail:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
      description:
        "Comprehensive guide to digital marketing strategies and tools.",
    },
    {
      id: "4",
      title: "UX/UI Design Principles",
      instructor: "David Wilson",
      rating: 4.6,
      reviewCount: 178,
      price: 54.99,
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description:
        "Learn to create beautiful, functional user interfaces and experiences.",
    },
  ];

  // Mock data for categories
  const categories = [
    { name: "Development", icon: <BookOpen className="h-5 w-5" />, count: 425 },
    { name: "Business", icon: <Users className="h-5 w-5" />, count: 310 },
    { name: "Design", icon: <Star className="h-5 w-5" />, count: 275 },
    { name: "Marketing", icon: <BookOpen className="h-5 w-5" />, count: 190 },
    { name: "Photography", icon: <BookOpen className="h-5 w-5" />, count: 150 },
    { name: "Music", icon: <BookOpen className="h-5 w-5" />, count: 120 },
  ];

  // Mock data for testimonials
  const testimonials = [
    {
      id: 1,
      name: "Alex Thompson",
      role: "Software Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Alex",
      content:
        "LearnConnect completely transformed my career. The courses were comprehensive and the instructors were incredibly knowledgeable.",
    },
    {
      id: 2,
      name: "Priya Sharma",
      role: "Marketing Specialist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Priya",
      content:
        "I was able to apply what I learned immediately in my job. The practical approach to teaching made all the difference.",
    },
    {
      id: 3,
      name: "Marcus Johnson",
      role: "UX Designer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Marcus",
      content:
        "The community aspect of LearnConnect is amazing. I connected with other professionals and even found my current job through the platform.",
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
                className="text-sm font-medium hover:text-primary"
              >
                Contact
              </Link>
            </nav>
          </div>
          <div className="flex items-center gap-4">
            <div className="relative hidden md:flex w-full max-w-sm items-center">
              <Search className="absolute left-2.5 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for courses..."
                className="pl-8 w-[200px] lg:w-[300px]"
              />
            </div>
            <Link href="/login">
              <Button variant="ghost" className="font-medium p-2">
                Log in
              </Button>
            </Link>
            <Link href="/signup">
              <Button className="bg-gradient-to-r from-primary to-primary/80 hover:from-primary/90 hover:to-primary/70 shadow-lg p-2">
                Sign up
              </Button>
            </Link>
          </div>
        </div>
      </header>

      <main>
        {/* Hero Section */}
        <section className="py-20 md:py-28 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="grid gap-6 lg:grid-cols-2 lg:gap-12 items-center">
              <div className="space-y-4">
                <h1 className="text-3xl md:text-5xl font-bold tracking-tighter">
                  Expand Your Knowledge with Expert-Led Courses
                </h1>
                <p className="text-muted-foreground md:text-xl">
                  Join thousands of learners mastering new skills and advancing
                  their careers through our comprehensive online courses.
                </p>
                <div className="flex flex-col sm:flex-row gap-3 pt-4">
                  <Button size="lg" className="w-full sm:w-auto">
                    Explore Courses
                  </Button>
                  <Button
                    size="lg"
                    variant="outline"
                    className="w-full sm:w-auto"
                  >
                    Become an Instructor
                  </Button>
                </div>
                <div className="flex items-center gap-4 pt-4">
                  <div className="flex -space-x-2">
                    {[1, 2, 3, 4].map((i) => (
                      <div
                        key={i}
                        className="h-8 w-8 rounded-full border-2 border-background overflow-hidden"
                      >
                        <img
                          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${i}`}
                          alt="User avatar"
                          className="h-full w-full object-cover"
                        />
                      </div>
                    ))}
                  </div>
                  <div className="text-sm">
                    <span className="font-medium">10,000+</span> students
                    already enrolled
                  </div>
                </div>
              </div>
              <div className="relative lg:block">
                <div className="relative overflow-hidden rounded-lg border bg-background p-2 shadow-xl">
                  <img
                    src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?w=800&q=80"
                    alt="Students learning"
                    className="aspect-video w-full rounded-md object-cover"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent"></div>
                  <div className="absolute bottom-4 left-4 right-4 grid gap-1">
                    <div className="text-sm font-medium text-white">
                      Start learning today
                    </div>
                    <div className="text-xs text-white/70">
                      Join our community of learners
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Featured Courses Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-8">
              <div>
                <h2 className="text-3xl font-bold tracking-tight">
                  Featured Courses
                </h2>
                <p className="text-muted-foreground mt-2">
                  Explore our most popular and highly-rated courses
                </p>
              </div>
              <Link
                href="/courses"
                className="flex items-center text-primary mt-4 md:mt-0"
              >
                View all courses <ChevronRight className="h-4 w-4 ml-1" />
              </Link>
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
              {featuredCourses.map((course) => (
                <CourseCard 
                  key={course.id} 
                  id={course.id}
                  title={course.title}
                  instructorName={course.instructor}
                  rating={course.rating}
                  reviewCount={course.reviewCount}
                  price={course.price}
                  thumbnailUrl={course.thumbnail}
                  description={course.description}
                />
              ))}
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight mb-8">
              Browse Categories
            </h2>
            <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-4">
              {categories.map((category, index) => (
                <Card
                  key={index}
                  className="hover:shadow-md transition-shadow cursor-pointer"
                >
                  <CardContent className="flex flex-col items-center justify-center p-6">
                    <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                      {category.icon}
                    </div>
                    <h3 className="font-medium">{category.name}</h3>
                    <p className="text-sm text-muted-foreground">
                      {category.count} courses
                    </p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Why Choose Us Section */}
        <section className="py-16 bg-background">
          <div className="container px-4 md:px-6">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight">
                Why Choose LearnConnect
              </h2>
              <p className="text-muted-foreground mt-2 max-w-2xl mx-auto">
                We're dedicated to providing the best online learning experience
                possible
              </p>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <BookOpen className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Expert Instructors</h3>
                <p className="text-muted-foreground">
                  Learn from industry professionals with years of experience and
                  proven expertise.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Community Support</h3>
                <p className="text-muted-foreground">
                  Join a thriving community of learners and instructors for
                  networking and support.
                </p>
              </div>
              <div className="flex flex-col items-center text-center p-4">
                <div className="h-12 w-12 rounded-full bg-primary/10 flex items-center justify-center mb-4">
                  <Star className="h-6 w-6 text-primary" />
                </div>
                <h3 className="text-xl font-medium mb-2">Flexible Learning</h3>
                <p className="text-muted-foreground">
                  Study at your own pace with lifetime access to course
                  materials and resources.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Testimonials Section */}
        <section className="py-16 bg-muted/30">
          <div className="container px-4 md:px-6">
            <h2 className="text-3xl font-bold tracking-tight text-center mb-12">
              What Our Students Say
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {testimonials.map((testimonial) => (
                <Card key={testimonial.id} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex items-center gap-4 mb-4">
                      <div className="h-10 w-10 rounded-full overflow-hidden">
                        <img
                          src={testimonial.avatar}
                          alt={testimonial.name}
                          className="h-full w-full object-cover"
                        />
                      </div>
                      <div>
                        <h4 className="font-medium">{testimonial.name}</h4>
                        <p className="text-sm text-muted-foreground">
                          {testimonial.role}
                        </p>
                      </div>
                    </div>
                    <p className="text-muted-foreground italic">
                      "{testimonial.content}"
                    </p>
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
              Join thousands of students already learning on LearnConnect. Start
              your journey today.
            </p>
            <div className="flex flex-col sm:flex-row justify-center gap-4">
              <Button size="lg" variant="secondary">
                Explore Courses
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="bg-transparent border-primary-foreground text-primary-foreground hover:bg-primary-foreground/10"
              >
                Sign Up Now
              </Button>
            </div>
          </div>
        </section>
      </main>

      {/* Footer */}
      <footer className="border-t bg-background">
        <div className="container px-4 md:px-6 py-8">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8">
            <div>
              <h3 className="font-medium mb-4">LearnConnect</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/about"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    About Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/careers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Careers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/blog"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Blog
                  </Link>
                </li>
                <li>
                  <Link
                    href="/press"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Press
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Community</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/partners"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Partners
                  </Link>
                </li>
                <li>
                  <Link
                    href="/affiliates"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Affiliates
                  </Link>
                </li>
                <li>
                  <Link
                    href="/developers"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Developers
                  </Link>
                </li>
                <li>
                  <Link
                    href="/forum"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Forum
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Support</h3>
              <ul className="space-y-2 text-sm">
                <li>
                  <Link
                    href="/help"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Help Center
                  </Link>
                </li>
                <li>
                  <Link
                    href="/contact"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Contact Us
                  </Link>
                </li>
                <li>
                  <Link
                    href="/terms"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Terms of Service
                  </Link>
                </li>
                <li>
                  <Link
                    href="/privacy"
                    className="text-muted-foreground hover:text-foreground"
                  >
                    Privacy Policy
                  </Link>
                </li>
              </ul>
            </div>
            <div>
              <h3 className="font-medium mb-4">Stay Connected</h3>
              <p className="text-sm text-muted-foreground mb-4">
                Subscribe to our newsletter for updates
              </p>
              <div className="flex">
                <Input
                  type="email"
                  placeholder="Your email"
                  className="rounded-r-none"
                />
                <Button className="rounded-l-none">Subscribe</Button>
              </div>
            </div>
          </div>
          <div className="border-t mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
            <p className="text-sm text-muted-foreground">
              © 2023 LearnConnect. All rights reserved.
            </p>
            <div className="flex space-x-4 mt-4 md:mt-0">
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Twitter</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-twitter"
                >
                  <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Facebook</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-facebook"
                >
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z"></path>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">Instagram</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-instagram"
                >
                  <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                  <path d="M16 11.37A4 4 0 1 1 12.63 8 4 4 0 0 1 16 11.37z"></path>
                  <line x1="17.5" x2="17.51" y1="6.5" y2="6.5"></line>
                </svg>
              </Link>
              <Link
                href="#"
                className="text-muted-foreground hover:text-foreground"
              >
                <span className="sr-only">LinkedIn</span>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20"
                  height="20"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-linkedin"
                >
                  <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6z"></path>
                  <rect width="4" height="12" x="2" y="9"></rect>
                  <circle cx="4" cy="4" r="2"></circle>
                </svg>
              </Link>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
}
