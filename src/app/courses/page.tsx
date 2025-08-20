"use client";

import React, { useState } from "react";
import Link from "next/link";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import {
  BookOpen,
  Search,
  Filter,
  Star,
  Clock,
  Users,
  ChevronDown,
} from "lucide-react";
import CourseCard from "@/components/CourseCard";

export default function Courses() {
  const [searchTerm, setSearchTerm] = useState("");
  const [selectedCategory, setSelectedCategory] = useState("all");
  const [selectedLevel, setSelectedLevel] = useState("all");
  const [sortBy, setSortBy] = useState("popular");

  const categories = [
    { id: "all", name: "All Categories", count: 1250 },
    { id: "development", name: "Development", count: 425 },
    { id: "business", name: "Business", count: 310 },
    { id: "design", name: "Design", count: 275 },
    { id: "marketing", name: "Marketing", count: 190 },
    { id: "photography", name: "Photography", count: 150 },
    { id: "music", name: "Music", count: 120 },
    { id: "health", name: "Health & Fitness", count: 95 },
    { id: "language", name: "Language", count: 85 },
  ];

  const levels = [
    { id: "all", name: "All Levels" },
    { id: "beginner", name: "Beginner" },
    { id: "intermediate", name: "Intermediate" },
    { id: "advanced", name: "Advanced" },
  ];

  const sortOptions = [
    { id: "popular", name: "Most Popular" },
    { id: "newest", name: "Newest" },
    { id: "rating", name: "Highest Rated" },
    { id: "price-low", name: "Price: Low to High" },
    { id: "price-high", name: "Price: High to Low" },
  ];

  // Mock courses data
  const allCourses = [
    {
      id: "1",
      title: "Complete Web Development Bootcamp",
      instructor: "Sarah Johnson",
      rating: 4.8,
      reviewCount: 2456,
      price: 89.99,
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      description:
        "Learn HTML, CSS, JavaScript, React, Node.js and more in this comprehensive bootcamp.",
      category: "development",
      level: "beginner",
      duration: "40 hours",
      students: 15420,
    },
    {
      id: "2",
      title: "Advanced React Development",
      instructor: "Michael Chen",
      rating: 4.9,
      reviewCount: 1834,
      price: 129.99,
      thumbnail:
        "https://images.unsplash.com/photo-1633356122544-f134324a6cee?w=800&q=80",
      description:
        "Master advanced React concepts including hooks, context, performance optimization.",
      category: "development",
      level: "advanced",
      duration: "25 hours",
      students: 8920,
    },
    {
      id: "3",
      title: "Digital Marketing Masterclass",
      instructor: "Emma Rodriguez",
      rating: 4.7,
      reviewCount: 3421,
      price: 79.99,
      thumbnail:
        "https://images.unsplash.com/photo-1533750349088-cd871a92f312?w=800&q=80",
      description:
        "Complete guide to digital marketing including SEO, social media, and paid advertising.",
      category: "marketing",
      level: "intermediate",
      duration: "30 hours",
      students: 12340,
    },
    {
      id: "4",
      title: "UX/UI Design Fundamentals",
      instructor: "David Wilson",
      rating: 4.6,
      reviewCount: 1987,
      price: 94.99,
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      description:
        "Learn user experience and interface design principles with hands-on projects.",
      category: "design",
      level: "beginner",
      duration: "35 hours",
      students: 9876,
    },
    {
      id: "5",
      title: "Data Science with Python",
      instructor: "Dr. Lisa Park",
      rating: 4.8,
      reviewCount: 2156,
      price: 149.99,
      thumbnail:
        "https://images.unsplash.com/photo-1551288049-bebda4e38f71?w=800&q=80",
      description:
        "Comprehensive data science course covering pandas, numpy, matplotlib, and machine learning.",
      category: "development",
      level: "intermediate",
      duration: "50 hours",
      students: 11234,
    },
    {
      id: "6",
      title: "Business Strategy & Leadership",
      instructor: "Robert Thompson",
      rating: 4.5,
      reviewCount: 1654,
      price: 119.99,
      thumbnail:
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=800&q=80",
      description:
        "Develop strategic thinking and leadership skills for modern business challenges.",
      category: "business",
      level: "advanced",
      duration: "28 hours",
      students: 7654,
    },
    {
      id: "7",
      title: "Photography Masterclass",
      instructor: "Anna Martinez",
      rating: 4.7,
      reviewCount: 2987,
      price: 69.99,
      thumbnail:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?w=800&q=80",
      description:
        "Master photography techniques from composition to post-processing.",
      category: "photography",
      level: "beginner",
      duration: "22 hours",
      students: 13567,
    },
    {
      id: "8",
      title: "Music Production Essentials",
      instructor: "Jake Williams",
      rating: 4.6,
      reviewCount: 1432,
      price: 99.99,
      thumbnail:
        "https://images.unsplash.com/photo-1493225457124-a3eb161ffa5f?w=800&q=80",
      description:
        "Learn music production using industry-standard software and techniques.",
      category: "music",
      level: "intermediate",
      duration: "32 hours",
      students: 6789,
    },
  ];

  // Filter courses based on search and filters
  const filteredCourses = allCourses.filter((course) => {
    const matchesSearch =
      course.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
      course.instructor.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory =
      selectedCategory === "all" || course.category === selectedCategory;
    const matchesLevel =
      selectedLevel === "all" || course.level === selectedLevel;

    return matchesSearch && matchesCategory && matchesLevel;
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
                className="text-sm font-medium text-primary"
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
                Explore Our Courses
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Discover thousands of courses taught by expert instructors.
                Learn new skills and advance your career.
              </p>

              {/* Search Bar */}
              <div className="relative max-w-2xl mx-auto">
                <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 h-5 w-5 text-muted-foreground" />
                <Input
                  type="search"
                  placeholder="Search for courses, instructors, or topics..."
                  className="pl-12 h-12 text-lg"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
            </div>
          </div>
        </section>

        {/* Filters and Course Grid */}
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

                    {/* Categories */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Categories</h4>
                      <div className="space-y-2">
                        {categories.map((category) => (
                          <button
                            key={category.id}
                            onClick={() => setSelectedCategory(category.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedCategory === category.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            <div className="flex justify-between items-center">
                              <span>{category.name}</span>
                              <span className="text-xs opacity-70">
                                ({category.count})
                              </span>
                            </div>
                          </button>
                        ))}
                      </div>
                    </div>

                    {/* Levels */}
                    <div className="mb-6">
                      <h4 className="font-medium mb-3">Level</h4>
                      <div className="space-y-2">
                        {levels.map((level) => (
                          <button
                            key={level.id}
                            onClick={() => setSelectedLevel(level.id)}
                            className={`w-full text-left px-3 py-2 rounded-md text-sm transition-colors ${
                              selectedLevel === level.id
                                ? "bg-primary text-primary-foreground"
                                : "hover:bg-muted"
                            }`}
                          >
                            {level.name}
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
              </div>

              {/* Course Grid */}
              <div className="flex-1">
                <div className="flex justify-between items-center mb-6">
                  <div>
                    <h2 className="text-2xl font-bold">
                      {filteredCourses.length} Course
                      {filteredCourses.length !== 1 ? "s" : ""} Found
                    </h2>
                    <p className="text-muted-foreground">
                      {selectedCategory !== "all" &&
                        `in ${categories.find((c) => c.id === selectedCategory)?.name}`}
                      {selectedLevel !== "all" &&
                        ` • ${levels.find((l) => l.id === selectedLevel)?.name} level`}
                    </p>
                  </div>
                </div>

                {filteredCourses.length > 0 ? (
                  <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6">
                    {filteredCourses.map((course) => (
                      <div key={course.id} className="group">
                        <Card className="h-full overflow-hidden hover:shadow-lg transition-shadow">
                          <div className="relative h-48 overflow-hidden">
                            <img
                              src={course.thumbnail}
                              alt={course.title}
                              className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-300"
                            />
                            <Badge className="absolute top-3 left-3 bg-primary/90">
                              {
                                categories.find((c) => c.id === course.category)
                                  ?.name
                              }
                            </Badge>
                            <Badge className="absolute top-3 right-3 bg-secondary/90">
                              {levels.find((l) => l.id === course.level)?.name}
                            </Badge>
                          </div>
                          <CardContent className="p-6">
                            <div className="flex items-center justify-between mb-2">
                              <span className="text-sm text-muted-foreground">
                                {course.instructor}
                              </span>
                              <div className="flex items-center">
                                <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
                                <span className="text-sm font-medium">
                                  {course.rating}
                                </span>
                                <span className="text-xs text-muted-foreground ml-1">
                                  ({course.reviewCount})
                                </span>
                              </div>
                            </div>
                            <h3 className="font-semibold text-lg mb-2 line-clamp-2">
                              {course.title}
                            </h3>
                            <p className="text-sm text-muted-foreground mb-4 line-clamp-2">
                              {course.description}
                            </p>

                            <div className="flex items-center gap-4 text-xs text-muted-foreground mb-4">
                              <div className="flex items-center">
                                <Clock className="h-3 w-3 mr-1" />
                                {course.duration}
                              </div>
                              <div className="flex items-center">
                                <Users className="h-3 w-3 mr-1" />
                                {course.students.toLocaleString()} students
                              </div>
                            </div>

                            <div className="flex justify-between items-center">
                              <div className="font-bold text-xl">
                                ${course.price}
                              </div>
                              <Link href={`/courses/${course.id}`}>
                                <Button>View Course</Button>
                              </Link>
                            </div>
                          </CardContent>
                        </Card>
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="text-center py-12">
                    <BookOpen className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
                    <h3 className="text-lg font-medium mb-2">
                      No courses found
                    </h3>
                    <p className="text-muted-foreground mb-4">
                      Try adjusting your search terms or filters to find more
                      courses.
                    </p>
                    <Button
                      onClick={() => {
                        setSearchTerm("");
                        setSelectedCategory("all");
                        setSelectedLevel("all");
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
