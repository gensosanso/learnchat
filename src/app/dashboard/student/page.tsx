import React from "react";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Progress } from "@/components/ui/progress";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Bell, BookOpen, Calendar, Clock, Search, Star } from "lucide-react";

export default function StudentDashboard() {
  // Mock data for enrolled courses
  const enrolledCourses = [
    {
      id: "1",
      title: "Introduction to Web Development",
      instructor: "Sarah Johnson",
      progress: 65,
      thumbnail:
        "https://images.unsplash.com/photo-1587620962725-abab7fe55159?w=800&q=80",
      nextLesson: "CSS Flexbox Layout",
      nextLessonDate: "Today, 3:00 PM",
    },
    {
      id: "2",
      title: "Python for Data Science",
      instructor: "Michael Chen",
      progress: 42,
      thumbnail:
        "https://images.unsplash.com/photo-1526379095098-d400fd0bf935?w=800&q=80",
      nextLesson: "Pandas DataFrames",
      nextLessonDate: "Tomorrow, 5:30 PM",
    },
    {
      id: "3",
      title: "UX Design Fundamentals",
      instructor: "Emily Rodriguez",
      progress: 89,
      thumbnail:
        "https://images.unsplash.com/photo-1561070791-2526d30994b5?w=800&q=80",
      nextLesson: "User Testing Methods",
      nextLessonDate: "Wed, 2:00 PM",
    },
  ];

  // Mock data for recommended courses
  const recommendedCourses = [
    {
      id: "4",
      title: "Advanced JavaScript Concepts",
      instructor: "David Wilson",
      rating: 4.8,
      price: 79.99,
      thumbnail:
        "https://images.unsplash.com/photo-1555099962-4199c345e5dd?w=800&q=80",
      description:
        "Master advanced JavaScript concepts including closures, prototypes, and async programming.",
    },
    {
      id: "5",
      title: "UI/UX Design Systems",
      instructor: "Sophia Lee",
      rating: 4.9,
      price: 89.99,
      thumbnail:
        "https://images.unsplash.com/photo-1559028012-481c04fa702d?w=800&q=80",
      description:
        "Learn how to create and implement comprehensive design systems for digital products.",
    },
    {
      id: "6",
      title: "React Native Mobile Development",
      instructor: "James Martinez",
      rating: 4.7,
      price: 94.99,
      thumbnail:
        "https://images.unsplash.com/photo-1512941937669-90a1b58e7e9c?w=800&q=80",
      description:
        "Build cross-platform mobile applications using React Native and JavaScript.",
    },
  ];

  // Mock data for notifications
  const notifications = [
    {
      id: "1",
      type: "reminder",
      message:
        'Your "Introduction to Web Development" live session starts in 1 hour',
      time: "2 hours ago",
    },
    {
      id: "2",
      type: "feedback",
      message: "Your assignment has been graded. You received 95/100",
      time: "1 day ago",
    },
    {
      id: "3",
      type: "announcement",
      message: 'New bonus lecture added to "Python for Data Science"',
      time: "2 days ago",
    },
  ];

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col bg-card border-r p-4 space-y-6">
        <div className="flex items-center space-x-2 mb-8">
          <div className="h-8 w-8 rounded-full bg-primary flex items-center justify-center">
            <span className="text-primary-foreground font-bold">LC</span>
          </div>
          <h1 className="text-xl font-bold">LearnConnect</h1>
        </div>

        <div className="space-y-1">
          <Button variant="ghost" className="w-full justify-start">
            <BookOpen className="mr-2 h-4 w-4" />
            My Courses
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Calendar className="mr-2 h-4 w-4" />
            Schedule
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Star className="mr-2 h-4 w-4" />
            Wishlist
          </Button>
          <Button variant="ghost" className="w-full justify-start">
            <Bell className="mr-2 h-4 w-4" />
            Notifications
          </Button>
        </div>

        <div className="mt-auto pt-6">
          <div className="flex items-center space-x-3 p-3 rounded-lg bg-muted">
            <Avatar>
              <AvatarImage src="https://api.dicebear.com/7.x/avataaars/svg?seed=student" />
              <AvatarFallback>ST</AvatarFallback>
            </Avatar>
            <div>
              <p className="text-sm font-medium">Alex Johnson</p>
              <p className="text-xs text-muted-foreground">Student</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="max-w-6xl mx-auto space-y-8">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4">
            <div>
              <h1 className="text-3xl font-bold tracking-tight">
                Welcome back, Alex
              </h1>
              <p className="text-muted-foreground">
                Track your progress and continue learning
              </p>
            </div>
            <div className="relative w-full sm:w-64">
              <Search className="absolute left-2 top-2.5 h-4 w-4 text-muted-foreground" />
              <input
                type="text"
                placeholder="Search courses..."
                className="pl-8 h-10 w-full rounded-md border border-input bg-background px-3 py-2 text-sm ring-offset-background focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2"
              />
            </div>
          </div>

          {/* Stats overview */}
          <div className="grid gap-4 md:grid-cols-3">
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Courses Enrolled
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">3</div>
                <p className="text-xs text-muted-foreground">
                  2 in progress, 1 completed
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Hours Learned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">24.5</div>
                <p className="text-xs text-muted-foreground">
                  +2.5 hours this week
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardHeader className="pb-2">
                <CardTitle className="text-sm font-medium">
                  Certificates Earned
                </CardTitle>
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">1</div>
                <p className="text-xs text-muted-foreground">
                  Web Development Basics
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Main dashboard content */}
          <Tabs defaultValue="my-courses" className="space-y-4">
            <TabsList>
              <TabsTrigger value="my-courses">My Courses</TabsTrigger>
              <TabsTrigger value="recommended">Recommended</TabsTrigger>
              <TabsTrigger value="notifications">Notifications</TabsTrigger>
            </TabsList>

            {/* My Courses Tab */}
            <TabsContent value="my-courses" className="space-y-4">
              <h2 className="text-xl font-semibold">Continue Learning</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {enrolledCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>
                        Instructor: {course.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-4">
                      <div className="space-y-2">
                        <div className="flex justify-between text-sm">
                          <span>Progress</span>
                          <span>{course.progress}%</span>
                        </div>
                        <Progress value={course.progress} />
                      </div>
                      <div className="space-y-2">
                        <p className="text-sm font-medium">Next Lesson:</p>
                        <div className="flex items-start space-x-2">
                          <Clock className="h-4 w-4 mt-0.5 text-muted-foreground" />
                          <div>
                            <p className="text-sm">{course.nextLesson}</p>
                            <p className="text-xs text-muted-foreground">
                              {course.nextLessonDate}
                            </p>
                          </div>
                        </div>
                      </div>
                      <Button className="w-full">Continue Learning</Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Recommended Courses Tab */}
            <TabsContent value="recommended" className="space-y-4">
              <h2 className="text-xl font-semibold">Recommended For You</h2>
              <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
                {recommendedCourses.map((course) => (
                  <Card key={course.id} className="overflow-hidden">
                    <div className="aspect-video w-full overflow-hidden">
                      <img
                        src={course.thumbnail}
                        alt={course.title}
                        className="w-full h-full object-cover"
                      />
                    </div>
                    <CardHeader>
                      <CardTitle>{course.title}</CardTitle>
                      <CardDescription>
                        Instructor: {course.instructor}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="space-y-2">
                      <div className="flex items-center space-x-1">
                        <Star className="h-4 w-4 fill-current text-yellow-400" />
                        <span className="text-sm font-medium">
                          {course.rating}
                        </span>
                      </div>
                      <p className="text-sm">{course.description}</p>
                      <div className="pt-2">
                        <p className="text-lg font-bold">${course.price}</p>
                        <Button className="w-full mt-2">View Course</Button>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>

            {/* Notifications Tab */}
            <TabsContent value="notifications" className="space-y-4">
              <div className="flex justify-between items-center">
                <h2 className="text-xl font-semibold">Recent Notifications</h2>
                <Button variant="outline" size="sm">
                  Mark all as read
                </Button>
              </div>
              <div className="space-y-4">
                {notifications.map((notification) => (
                  <Card key={notification.id}>
                    <CardContent className="p-4 flex justify-between items-start">
                      <div className="space-y-1">
                        <div className="flex items-center space-x-2">
                          <Badge
                            variant={
                              notification.type === "reminder"
                                ? "default"
                                : notification.type === "feedback"
                                  ? "secondary"
                                  : "outline"
                            }
                          >
                            {notification.type}
                          </Badge>
                          <span className="text-xs text-muted-foreground">
                            {notification.time}
                          </span>
                        </div>
                        <p className="text-sm">{notification.message}</p>
                      </div>
                      <Button variant="ghost" size="sm" className="h-8 w-8 p-0">
                        <span className="sr-only">Dismiss</span>
                        <span className="text-lg">&times;</span>
                      </Button>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </TabsContent>
          </Tabs>
        </div>
      </div>
    </div>
  );
}
