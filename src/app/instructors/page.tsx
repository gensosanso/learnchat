"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import {
  BookOpen,
  Search,
  Star,
  Users,
  Award,
  MapPin,
  Filter,
} from "lucide-react";

export default function Instructors() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedExpertise, setSelectedExpertise] = useState("all");
  const [sortBy, setSortBy] = useState("rating");

  const expertiseAreas = [
    { id: "all", name: "All Expertise", count: 1200 },
    { id: "development", name: "Development", count: 425 },
    { id: "business", name: "Business", count: 310 },
    { id: "design", name: "Design", count: 275 },
    { id: "marketing", name: "Marketing", count: 190 },
    { id: "photography", name: "Photography", count: 150 },
    { id: "music", name: "Music", count: 120 },
    { id: "health", name: "Health & Fitness", count: 95 },
    { id: "language", name: "Language", count: 85 },
  ];

  const sortOptions = [
    { id: "rating", name: "Highest Rated" },
    { id: "students", name: "Most Students" },
    { id: "courses", name: "Most Courses" },
    { id: "experience", name: "Most Experience" },
  ];

  // Mock instructors data
  const allInstructors = [
    {
      id: "1",
      name: "Sarah Johnson",
      title: "Senior Full-Stack Developer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Sarah",
      rating: 4.9,
      reviewCount: 2456,
      students: 15420,
      courses: 12,
      expertise: ["development", "business"],
      location: "San Francisco, CA",
      experience: "8+ years",
      bio: "Former Google engineer with expertise in React, Node.js, and cloud architecture. Passionate about teaching modern web development.",
      achievements: [
        "Google Certified",
        "AWS Solutions Architect",
        "Top Instructor 2023",
      ],
      languages: ["English", "Spanish"],
    },
    {
      id: "2",
      name: "Michael Chen",
      title: "Data Science Expert",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Michael",
      rating: 4.8,
      reviewCount: 1834,
      students: 11230,
      courses: 8,
      expertise: ["development"],
      location: "New York, NY",
      experience: "10+ years",
      bio: "PhD in Computer Science with specialization in machine learning and data analytics. Published researcher and industry consultant.",
      achievements: [
        "PhD Computer Science",
        "Published Author",
        "Kaggle Grandmaster",
      ],
      languages: ["English", "Mandarin"],
    },
    {
      id: "3",
      name: "Emma Rodriguez",
      title: "Digital Marketing Strategist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Emma",
      rating: 4.7,
      reviewCount: 3421,
      students: 18750,
      courses: 15,
      expertise: ["marketing", "business"],
      location: "Austin, TX",
      experience: "12+ years",
      bio: "Former CMO at Fortune 500 companies. Expert in digital transformation, brand strategy, and performance marketing.",
      achievements: [
        "Forbes 30 Under 30",
        "Marketing Excellence Award",
        "Certified Google Partner",
      ],
      languages: ["English", "Spanish", "Portuguese"],
    },
    {
      id: "4",
      name: "David Wilson",
      title: "UX/UI Design Lead",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=David",
      rating: 4.6,
      reviewCount: 1987,
      students: 9876,
      courses: 10,
      expertise: ["design"],
      location: "London, UK",
      experience: "7+ years",
      bio: "Award-winning designer with experience at Apple and Airbnb. Specializes in user-centered design and design systems.",
      achievements: [
        "Apple Design Award",
        "Webby Award Winner",
        "Design Systems Expert",
      ],
      languages: ["English", "French"],
    },
    {
      id: "5",
      name: "Dr. Lisa Park",
      title: "AI Research Scientist",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Lisa",
      rating: 4.9,
      reviewCount: 2156,
      students: 13450,
      courses: 6,
      expertise: ["development"],
      location: "Seattle, WA",
      experience: "15+ years",
      bio: "Leading AI researcher with publications in top-tier conferences. Expert in deep learning, computer vision, and natural language processing.",
      achievements: ["PhD MIT", "100+ Publications", "AI Innovation Award"],
      languages: ["English", "Korean", "Japanese"],
    },
    {
      id: "6",
      name: "Robert Thompson",
      title: "Business Strategy Consultant",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Robert",
      rating: 4.5,
      reviewCount: 1654,
      students: 7654,
      courses: 9,
      expertise: ["business"],
      location: "Chicago, IL",
      experience: "20+ years",
      bio: "Former McKinsey partner with extensive experience in corporate strategy, digital transformation, and leadership development.",
      achievements: [
        "McKinsey Partner",
        "Harvard MBA",
        "Strategy Excellence Award",
      ],
      languages: ["English", "German"],
    },
    {
      id: "7",
      name: "Anna Martinez",
      title: "Professional Photographer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Anna",
      rating: 4.8,
      reviewCount: 2987,
      students: 16789,
      courses: 14,
      expertise: ["photography"],
      location: "Barcelona, Spain",
      experience: "12+ years",
      bio: "Award-winning photographer specializing in portrait, landscape, and commercial photography. Work featured in National Geographic.",
      achievements: [
        "National Geographic Featured",
        "World Press Photo Award",
        "Sony Ambassador",
      ],
      languages: ["Spanish", "English", "Catalan"],
    },
    {
      id: "8",
      name: "Jake Williams",
      title: "Music Producer & Composer",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=Jake",
      rating: 4.7,
      reviewCount: 1432,
      students: 8901,
      courses: 11,
      expertise: ["music"],
      location: "Nashville, TN",
      experience: "15+ years",
      bio: "Grammy-nominated producer and composer with credits on platinum albums. Expert in modern production techniques and songwriting.",
      achievements: [
        "Grammy Nomination",
        "Platinum Albums",
        "ASCAP Award Winner",
      ],
      languages: ["English"],
    },
  ];

  // Filter instructors based on search and filters
  const filteredInstructors = allInstructors.filter((instructor) => {
    const matchesSearch =
      instructor.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      instructor.bio.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesExpertise =
      selectedExpertise === "all" ||
      instructor.expertise.includes(selectedExpertise);

    return matchesSearch && matchesExpertise;
  });

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
                className="text-sm font-medium text-primary"
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
        <section className="py-16 bg-gradient-to-b from-background to-muted/30">
          <div className="container px-4 md:px-6">
            <div className="text-center max-w-3xl mx-auto mb-8">
              <h1 className="text-4xl md:text-6xl font-bold tracking-tight mb-6">
                Meet Our Instructors
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Learn from industry experts and thought leaders who are
                passionate about sharing their knowledge.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search instructors by name, expertise, or background..."
                  className="pl-12 h-12 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Instructor Grid */}
        <section className="py-8 bg-background">
          <div className="container px-4 md:px-6">
            <div className="flex flex-col lg:flex-row gap-8">
              {/* Sidebar Filters */}
              <div className="lg:w-64 space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <h3 className="font-semibold mb-4 flex items-center">
                      <Filter className="h-4 w-4 mr-2" />
                      Filters
                    </h3>

                    {/* Expertise Areas */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Expertise</h4>
                      <div className="space-y-2">
                        {expertiseAreas.map((area) => (
                          <button
                            key={area.id}
                            onClick={() => setSelectedExpertise(area.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedExpertise === area.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span>{area.name}</span>
                              <span className="text-xs opacity-70">
                                ({area.count})
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Sort By */}
                    <div>
                      <h4 className="font-medium mb-3">Sort By</h4>
                      <div className="space-y-2">
                        {sortOptions.map((option) => (
                          <button
                            key={option.id}
                            onClick={() => setSortBy(option.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              sortBy === option.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {option.name}
                          </button>
                        ))}
                      </div>
                    </div>
                  </CardContent>
                </Card>

                {/* Become an Instructor CTA */}
                <Card className="bg-primary text-primary-foreground">
                  <CardContent className="p-6 text-center">
                    <Award className="h-8 w-8 mx-auto mb-4" />
                    <h3 className="font-semibold mb-2">Become an Instructor</h3>
                    <p className="text-sm opacity-90 mb-4">
                      Share your expertise and earn money teaching what you
                      love.
                    </p>
                    <Button variant="secondary" size="sm" className="w-full">
                      Apply Now
                    </Button>
                  </CardContent>
                </Card>
              </div>

              {/* Instructor Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {filteredInstructors.length} Instructor
                      {filteredInstructors.length !== 1 ? "s" : ""} Found
                    </h2>
                    <p className="text-muted-foreground">
                      {selectedExpertise !== "all" &&
                        `in ${expertiseAreas.find((e) => e.id === selectedExpertise)?.name}`}
                    </p>
                  </div>
                </div>

                {filteredInstructors.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {filteredInstructors.map((instructor) => (
                      <Card
                        key={instructor.id}
                        className="hover:shadow-lg transition-shadow"
                      >
                        <CardHeader>
                          <div className="flex items-start gap-4">
                            <Avatar className="h-16 w-16">
                              <AvatarImage src={instructor.avatar} />
                              <AvatarFallback>
                                {instructor.name
                                  .split(" ")
                                  .map((n) => n[0])
                                  .join("")}
                              </AvatarFallback>
                            </Avatar>
                            <div className="flex-1">
                              <CardTitle className="text-xl mb-1">
                                {instructor.name}
                              </CardTitle>
                              <p className="text-primary font-medium mb-2">
                                {instructor.title}
                              </p>
                              <div className="flex items-center gap-4 text-sm text-muted-foreground mb-2">
                                <div className="flex items-center">
                                  <MapPin className="h-3 w-3 mr-1" />
                                  {instructor.location}
                                </div>
                                <div>{instructor.experience}</div>
                              </div>
                              <div className="flex items-center gap-4 text-sm">
                                <div className="flex items-center">
                                  <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                  <span className="font-medium">
                                    {instructor.rating}
                                  </span>
                                  <span className="text-muted-foreground ml-1">
                                    ({instructor.reviewCount})
                                  </span>
                                </div>
                                <div className="flex items-center text-muted-foreground">
                                  <Users className="h-3 w-3 mr-1" />
                                  {instructor.students.toLocaleString()}{" "}
                                  students
                                </div>
                              </div>
                            </div>
                          </div>
                        </CardHeader>
                        <CardContent>
                          <p className="text-muted-foreground mb-4 line-clamp-3">
                            {instructor.bio}
                          </p>

                          <div className="space-y-3">
                            <div>
                              <h4 className="font-medium text-sm mb-2">
                                Expertise
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {instructor.expertise.map((exp) => (
                                  <Badge
                                    key={exp}
                                    variant="secondary"
                                    className="text-xs"
                                  >
                                    {
                                      expertiseAreas.find((e) => e.id === exp)
                                        ?.name
                                    }
                                  </Badge>
                                ))}
                              </div>
                            </div>

                            <div>
                              <h4 className="font-medium text-sm mb-2">
                                Achievements
                              </h4>
                              <div className="flex flex-wrap gap-1">
                                {instructor.achievements
                                  .slice(0, 2)
                                  .map((achievement, index) => (
                                    <Badge
                                      key={index}
                                      variant="outline"
                                      className="text-xs"
                                    >
                                      {achievement}
                                    </Badge>
                                  ))}
                                {instructor.achievements.length > 2 && (
                                  <Badge variant="outline" className="text-xs">
                                    +{instructor.achievements.length - 2} more
                                  </Badge>
                                )}
                              </div>
                            </div>

                            <div className="flex justify-between items-center pt-2">
                              <div className="text-sm text-muted-foreground">
                                {instructor.courses} courses •{" "}
                                {instructor.languages.join(", ")}
                              </div>
                              <Button size="sm">View Profile</Button>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <Users className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      No instructors found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or filters to find more
                      instructors.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedExpertise("all");
                      }}
                    >
                      Clear Filters
                    </Button>
                  </div>
                )}
              </div>
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
