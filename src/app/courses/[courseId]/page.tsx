import React from "react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  Star,
  Clock,
  Users,
  BookOpen,
  Award,
  Play,
  ShoppingCart,
} from "lucide-react";

interface CoursePageProps {
  params: {
    courseId: string;
  };
}

export default function CoursePage({ params }: CoursePageProps) {
  // Mock data - would be fetched from API based on courseId in real implementation
  const course = {
    id: params.courseId,
    title: "Complete Web Development Bootcamp",
    description:
      "Learn web development from scratch with this comprehensive bootcamp covering HTML, CSS, JavaScript, React, Node.js, and more. Perfect for beginners and intermediate developers looking to expand their skills.",
    price: 89.99,
    discountPrice: 49.99,
    rating: 4.8,
    reviewCount: 2547,
    studentCount: 12845,
    lastUpdated: "March 2023",
    language: "English",
    level: "Beginner to Advanced",
    duration: "42 hours",
    thumbnail:
      "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
    instructor: {
      name: "Dr. Sarah Johnson",
      title: "Senior Web Developer & Educator",
      bio: "Dr. Sarah Johnson has over 10 years of experience in web development and has taught over 50,000 students online. She specializes in making complex concepts easy to understand.",
      avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=sarah",
      courses: 12,
      students: 50000,
      rating: 4.9,
    },
    curriculum: [
      {
        title: "Introduction to Web Development",
        lessons: [
          { title: "Course Overview", duration: "10:15", preview: true },
          {
            title: "Setting Up Your Development Environment",
            duration: "15:45",
            preview: false,
          },
          {
            title: "Understanding the Web Ecosystem",
            duration: "20:30",
            preview: false,
          },
        ],
      },
      {
        title: "HTML Fundamentals",
        lessons: [
          {
            title: "HTML Document Structure",
            duration: "18:22",
            preview: true,
          },
          {
            title: "Working with Text Elements",
            duration: "22:15",
            preview: false,
          },
          {
            title: "Links, Images and Multimedia",
            duration: "25:10",
            preview: false,
          },
          {
            title: "Forms and Input Elements",
            duration: "30:45",
            preview: false,
          },
        ],
      },
      {
        title: "CSS Styling",
        lessons: [
          {
            title: "CSS Selectors and Properties",
            duration: "28:15",
            preview: false,
          },
          { title: "Box Model and Layout", duration: "32:40", preview: false },
          {
            title: "Responsive Design Principles",
            duration: "35:20",
            preview: false,
          },
          {
            title: "Flexbox and Grid Systems",
            duration: "40:15",
            preview: false,
          },
        ],
      },
      {
        title: "JavaScript Essentials",
        lessons: [
          {
            title: "JavaScript Syntax and Variables",
            duration: "25:30",
            preview: false,
          },
          {
            title: "Functions and Control Flow",
            duration: "35:45",
            preview: false,
          },
          { title: "DOM Manipulation", duration: "38:20", preview: false },
          { title: "Event Handling", duration: "28:15", preview: false },
          {
            title: "Asynchronous JavaScript",
            duration: "42:10",
            preview: false,
          },
        ],
      },
    ],
    reviews: [
      {
        name: "Michael P.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=michael",
        rating: 5,
        date: "2 months ago",
        comment:
          "This course exceeded my expectations. The instructor explains complex topics in a way that&apos;s easy to understand. I went from knowing nothing about web development to building my own projects.",
      },
      {
        name: "Jessica T.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=jessica",
        rating: 4,
        date: "1 month ago",
        comment:
          "Great course with lots of practical examples. The projects helped solidify my understanding. Would recommend to anyone starting out in web development.",
      },
      {
        name: "Robert K.",
        avatar: "https://api.dicebear.com/7.x/avataaars/svg?seed=robert",
        rating: 5,
        date: "3 weeks ago",
        comment:
          "Comprehensive and well-structured. The instructor is knowledgeable and responsive to questions. Worth every penny!",
      },
    ],
    whatYouWillLearn: [
      "Build responsive websites using HTML, CSS, and JavaScript",
      "Create dynamic web applications with React",
      "Develop backend services with Node.js and Express",
      "Work with databases including MongoDB and SQL",
      "Deploy your applications to the cloud",
      "Implement authentication and authorization",
      "Write clean, maintainable code following best practices",
      "Debug and troubleshoot common web development issues",
    ],
    requirements: [
      "Basic computer skills",
      "No prior programming experience required",
      "Computer with internet connection",
      "Desire to learn and practice",
    ],
  };

  return (
    <div className="bg-background min-h-screen">
      {/* Course Header Section */}
      <div className="bg-slate-900 text-white py-12">
        <div className="container mx-auto px-4 md:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            <div className="lg:col-span-2">
              <h1 className="text-3xl md:text-4xl font-bold mb-4">
                {course.title}
              </h1>
              <p className="text-lg mb-4">{course.description}</p>

              <div className="flex items-center flex-wrap gap-4 mb-4">
                <div className="flex items-center">
                  <Star className="h-5 w-5 fill-yellow-400 text-yellow-400" />
                  <span className="ml-1 font-medium">{course.rating}</span>
                  <span className="ml-1 text-slate-300">
                    ({course.reviewCount} reviews)
                  </span>
                </div>
                <div className="flex items-center">
                  <Users className="h-5 w-5 text-slate-300" />
                  <span className="ml-1">{course.studentCount} students</span>
                </div>
                <div className="flex items-center">
                  <Clock className="h-5 w-5 text-slate-300" />
                  <span className="ml-1">{course.duration}</span>
                </div>
                <div className="flex items-center">
                  <BookOpen className="h-5 w-5 text-slate-300" />
                  <span className="ml-1">
                    Last updated {course.lastUpdated}
                  </span>
                </div>
              </div>

              <div className="flex items-center mb-6">
                <Avatar className="h-10 w-10 mr-3">
                  <AvatarImage
                    src={course.instructor.avatar}
                    alt={course.instructor.name}
                  />
                  <AvatarFallback>
                    {course.instructor.name.charAt(0)}
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">Created by</p>
                  <p className="text-blue-400">{course.instructor.name}</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3 mb-6">
                <Badge
                  variant="outline"
                  className="bg-slate-800 text-white border-slate-700"
                >
                  {course.level}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-slate-800 text-white border-slate-700"
                >
                  {course.language}
                </Badge>
                <Badge
                  variant="outline"
                  className="bg-slate-800 text-white border-slate-700"
                >
                  Certificate of Completion
                </Badge>
              </div>
            </div>

            <div className="lg:col-span-1">
              <Card className="overflow-hidden">
                <div className="relative">
                  <img
                    src={course.thumbnail}
                    alt={course.title}
                    className="w-full aspect-video object-cover"
                  />
                  <div className="absolute inset-0 bg-black bg-opacity-30 flex items-center justify-center">
                    <Button
                      variant="outline"
                      className="rounded-full bg-white/20 backdrop-blur-sm hover:bg-white/30"
                    >
                      <Play className="h-8 w-8 text-white" />
                    </Button>
                  </div>
                </div>
                <CardContent className="p-6">
                  <div className="mb-4">
                    <div className="flex items-center justify-between">
                      <span className="text-3xl font-bold">
                        ${course.discountPrice}
                      </span>
                      <span className="text-lg text-muted-foreground line-through">
                        ${course.price}
                      </span>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">
                      44% off • 3 days left at this price!
                    </p>
                  </div>

                  <Button className="w-full mb-3 text-lg py-6">
                    <ShoppingCart className="mr-2 h-5 w-5" /> Enroll Now
                  </Button>
                  <Button
                    variant="outline"
                    className="w-full mb-4 text-lg py-6"
                  >
                    Try Free Preview
                  </Button>

                  <div className="text-sm text-center">
                    <p className="mb-1">30-Day Money-Back Guarantee</p>
                    <p>Full Lifetime Access</p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </div>

      {/* Course Content Section */}
      <div className="container mx-auto px-4 md:px-6 lg:px-8 py-12">
        <Tabs defaultValue="overview" className="w-full">
          <TabsList className="mb-8">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="curriculum">Curriculum</TabsTrigger>
            <TabsTrigger value="instructor">Instructor</TabsTrigger>
            <TabsTrigger value="reviews">Reviews</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-8">
            <Card>
              <CardHeader>
                <CardTitle>What You'll Learn</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {course.whatYouWillLearn.map((item, index) => (
                    <div key={index} className="flex items-start">
                      <div className="mr-2 mt-1">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          width="16"
                          height="16"
                          viewBox="0 0 24 24"
                          fill="none"
                          stroke="currentColor"
                          strokeWidth="2"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          className="text-green-500"
                        >
                          <polyline points="20 6 9 17 4 12"></polyline>
                        </svg>
                      </div>
                      <p>{item}</p>
                    </div>
                  ))}
                </div>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Requirements</CardTitle>
              </CardHeader>
              <CardContent>
                <ul className="list-disc pl-5 space-y-2">
                  {course.requirements.map((item, index) => (
                    <li key={index}>{item}</li>
                  ))}
                </ul>
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>Description</CardTitle>
              </CardHeader>
              <CardContent className="prose max-w-none">
                <p className="mb-4">
                  This comprehensive web development bootcamp takes you from
                  absolute beginner to professional developer. You'll learn to
                  build fully-fledged websites and web apps with the latest
                  technologies.
                </p>
                <p className="mb-4">
                  Starting with the fundamentals of HTML, CSS, and JavaScript,
                  you'll progress to advanced topics like React, Node.js,
                  databases, and deployment. By the end of this course, you'll
                  have the skills to create responsive, dynamic web applications
                  and the confidence to apply for web development positions.
                </p>
                <p className="mb-4">
                  Each section includes practical exercises and projects that
                  reinforce your learning. You'll build real-world applications
                  that you can add to your portfolio, demonstrating your skills
                  to potential employers or clients.
                </p>
                <p>
                  Whether you're looking to change careers, enhance your current
                  job skills, or start your own web development business, this
                  course provides everything you need to succeed in the world of
                  web development.
                </p>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="curriculum">
            <Card>
              <CardHeader>
                <CardTitle>Course Content</CardTitle>
                <CardDescription>
                  {course.curriculum.length} sections •{" "}
                  {course.curriculum.reduce(
                    (total, section) => total + section.lessons.length,
                    0,
                  )}{" "}
                  lectures • {course.duration} total length
                </CardDescription>
              </CardHeader>
              <CardContent>
                <Accordion type="single" collapsible className="w-full">
                  {course.curriculum.map((section, index) => (
                    <AccordionItem key={index} value={`section-${index}`}>
                      <AccordionTrigger className="hover:no-underline">
                        <div className="flex justify-between w-full pr-4">
                          <span>{section.title}</span>
                          <span className="text-sm text-muted-foreground">
                            {section.lessons.length} lectures
                          </span>
                        </div>
                      </AccordionTrigger>
                      <AccordionContent>
                        <div className="space-y-2">
                          {section.lessons.map((lesson, lessonIndex) => (
                            <div
                              key={lessonIndex}
                              className="flex items-center justify-between p-2 hover:bg-muted rounded-md"
                            >
                              <div className="flex items-center">
                                <Play className="h-4 w-4 mr-2 text-muted-foreground" />
                                <span>{lesson.title}</span>
                                {lesson.preview && (
                                  <Badge
                                    variant="outline"
                                    className="ml-2 text-xs"
                                  >
                                    Preview
                                  </Badge>
                                )}
                              </div>
                              <span className="text-sm text-muted-foreground">
                                {lesson.duration}
                              </span>
                            </div>
                          ))}
                        </div>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="instructor">
            <Card>
              <CardHeader>
                <div className="flex items-center">
                  <Avatar className="h-16 w-16 mr-4">
                    <AvatarImage
                      src={course.instructor.avatar}
                      alt={course.instructor.name}
                    />
                    <AvatarFallback>
                      {course.instructor.name.charAt(0)}
                    </AvatarFallback>
                  </Avatar>
                  <div>
                    <CardTitle>{course.instructor.name}</CardTitle>
                    <CardDescription>{course.instructor.title}</CardDescription>
                  </div>
                </div>
              </CardHeader>
              <CardContent className="space-y-4">
                <div className="flex flex-wrap gap-8">
                  <div className="flex items-center">
                    <Star className="h-5 w-5 text-yellow-400 mr-2" />
                    <div>
                      <p className="font-medium">
                        {course.instructor.rating} Instructor Rating
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Based on student reviews
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Award className="h-5 w-5 text-blue-500 mr-2" />
                    <div>
                      <p className="font-medium">
                        {course.instructor.courses} Courses
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Created by instructor
                      </p>
                    </div>
                  </div>
                  <div className="flex items-center">
                    <Users className="h-5 w-5 text-green-500 mr-2" />
                    <div>
                      <p className="font-medium">
                        {course.instructor.students.toLocaleString()} Students
                      </p>
                      <p className="text-sm text-muted-foreground">
                        Across all courses
                      </p>
                    </div>
                  </div>
                </div>

                <div>
                  <h3 className="text-lg font-medium mb-2">
                    About the Instructor
                  </h3>
                  <p>{course.instructor.bio}</p>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="reviews">
            <Card>
              <CardHeader>
                <CardTitle>Student Reviews</CardTitle>
                <CardDescription>
                  <div className="flex items-center">
                    <div className="text-4xl font-bold mr-4">
                      {course.rating}
                    </div>
                    <div>
                      <div className="flex">
                        {[...Array(5)].map((_, i) => (
                          <Star
                            key={i}
                            className={`h-5 w-5 ${i < Math.floor(course.rating) ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                          />
                        ))}
                      </div>
                      <p className="text-sm text-muted-foreground">
                        {course.reviewCount} ratings
                      </p>
                    </div>
                  </div>
                </CardDescription>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  {course.reviews.map((review, index) => (
                    <div key={index} className="border-b pb-6 last:border-0">
                      <div className="flex items-start">
                        <Avatar className="h-10 w-10 mr-4">
                          <AvatarImage src={review.avatar} alt={review.name} />
                          <AvatarFallback>
                            {review.name.charAt(0)}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="flex items-center">
                            <h4 className="font-medium">{review.name}</h4>
                            <span className="mx-2 text-muted-foreground">
                              •
                            </span>
                            <span className="text-sm text-muted-foreground">
                              {review.date}
                            </span>
                          </div>
                          <div className="flex my-1">
                            {[...Array(5)].map((_, i) => (
                              <Star
                                key={i}
                                className={`h-4 w-4 ${i < review.rating ? "fill-yellow-400 text-yellow-400" : "text-gray-300"}`}
                              />
                            ))}
                          </div>
                          <p className="mt-2">{review.comment}</p>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </CardContent>
              <CardFooter>
                <Button variant="outline" className="w-full">
                  See All Reviews
                </Button>
              </CardFooter>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}
