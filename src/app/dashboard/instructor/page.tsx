"use client";

import React, { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Button } from "@/components/ui/button";
import {
  PlusCircle,
  BarChart3,
  Users,
  DollarSign,
  BookOpen,
  Settings,
  ChevronRight,
} from "lucide-react";
import { Progress } from "@/components/ui/progress";
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar";
import { Badge } from "@/components/ui/badge";

export default function InstructorDashboard() {
  const [activeTab, setActiveTab] = useState("overview");

  return (
    <div className="flex min-h-screen bg-background">
      {/* Sidebar */}
      <div className="hidden md:flex w-64 flex-col border-r bg-card p-4">
        <div className="flex items-center gap-3 mb-8">
          <Avatar>
            <AvatarImage
              src="https://api.dicebear.com/7.x/avataaars/svg?seed=instructor"
              alt="Instructor"
            />
            <AvatarFallback>IN</AvatarFallback>
          </Avatar>
          <div>
            <h3 className="font-medium">John Doe</h3>
            <p className="text-xs text-muted-foreground">Instructor</p>
          </div>
        </div>

        <nav className="space-y-1">
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("overview")}
          >
            <BarChart3 className="h-4 w-4" />
            Overview
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("courses")}
          >
            <BookOpen className="h-4 w-4" />
            My Courses
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("students")}
          >
            <Users className="h-4 w-4" />
            Students
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("earnings")}
          >
            <DollarSign className="h-4 w-4" />
            Earnings
          </Button>
          <Button
            variant="ghost"
            className="w-full justify-start gap-3"
            onClick={() => setActiveTab("settings")}
          >
            <Settings className="h-4 w-4" />
            Settings
          </Button>
        </nav>
      </div>

      {/* Main Content */}
      <div className="flex-1 p-6 overflow-auto">
        <div className="flex items-center justify-between mb-6">
          <h1 className="text-2xl font-bold">Instructor Dashboard</h1>
          <Button className="gap-2">
            <PlusCircle className="h-4 w-4" />
            Create New Course
          </Button>
        </div>

        <Tabs value={activeTab} onValueChange={setActiveTab} className="w-full">
          <TabsList className="mb-6">
            <TabsTrigger value="overview">Overview</TabsTrigger>
            <TabsTrigger value="courses">My Courses</TabsTrigger>
            <TabsTrigger value="students">Students</TabsTrigger>
            <TabsTrigger value="earnings">Earnings</TabsTrigger>
            <TabsTrigger value="settings">Settings</TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            {/* Stats Cards */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4">
              <StatsCard
                title="Total Students"
                value="1,245"
                icon={<Users className="h-5 w-5" />}
                trend="+12% from last month"
              />
              <StatsCard
                title="Total Courses"
                value="8"
                icon={<BookOpen className="h-5 w-5" />}
                trend="+1 new course"
              />
              <StatsCard
                title="Total Revenue"
                value="$12,450"
                icon={<DollarSign className="h-5 w-5" />}
                trend="+18% from last month"
              />
              <StatsCard
                title="Avg. Rating"
                value="4.8"
                icon={<BarChart3 className="h-5 w-5" />}
                trend="+0.2 from last month"
              />
            </div>

            {/* Recent Activity */}
            <Card>
              <CardHeader>
                <CardTitle>Recent Activity</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <ActivityItem
                    title="New enrollment"
                    description="Jane Smith enrolled in 'Advanced JavaScript'"
                    time="2 hours ago"
                  />
                  <ActivityItem
                    title="New review"
                    description="Alex Johnson left a 5-star review on 'React Fundamentals'"
                    time="5 hours ago"
                  />
                  <ActivityItem
                    title="Course completion"
                    description="Michael Brown completed 'Python for Beginners'"
                    time="Yesterday"
                  />
                  <ActivityItem
                    title="New question"
                    description="Sarah Lee asked a question in 'Data Science Basics'"
                    time="2 days ago"
                  />
                </div>
              </CardContent>
            </Card>

            {/* Popular Courses */}
            <Card>
              <CardHeader>
                <CardTitle>Popular Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CourseItem
                    title="React Fundamentals"
                    students={342}
                    rating={4.9}
                    revenue="$4,250"
                    progress={85}
                  />
                  <CourseItem
                    title="Advanced JavaScript"
                    students={256}
                    rating={4.7}
                    revenue="$3,120"
                    progress={72}
                  />
                  <CourseItem
                    title="Python for Beginners"
                    students={189}
                    rating={4.8}
                    revenue="$2,340"
                    progress={65}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="courses">
            <Card>
              <CardHeader>
                <CardTitle>My Courses</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <CourseItem
                    title="React Fundamentals"
                    students={342}
                    rating={4.9}
                    revenue="$4,250"
                    progress={85}
                  />
                  <CourseItem
                    title="Advanced JavaScript"
                    students={256}
                    rating={4.7}
                    revenue="$3,120"
                    progress={72}
                  />
                  <CourseItem
                    title="Python for Beginners"
                    students={189}
                    rating={4.8}
                    revenue="$2,340"
                    progress={65}
                  />
                  <CourseItem
                    title="Data Science Basics"
                    students={124}
                    rating={4.6}
                    revenue="$1,560"
                    progress={45}
                  />
                  <CourseItem
                    title="Web Development Bootcamp"
                    students={98}
                    rating={4.5}
                    revenue="$980"
                    progress={30}
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="students">
            <Card>
              <CardHeader>
                <CardTitle>Student Enrollments</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-4">
                  <StudentItem
                    name="Jane Smith"
                    email="jane.smith@example.com"
                    course="Advanced JavaScript"
                    progress={75}
                    joinDate="Apr 12, 2023"
                  />
                  <StudentItem
                    name="Alex Johnson"
                    email="alex.j@example.com"
                    course="React Fundamentals"
                    progress={92}
                    joinDate="Mar 28, 2023"
                  />
                  <StudentItem
                    name="Michael Brown"
                    email="m.brown@example.com"
                    course="Python for Beginners"
                    progress={100}
                    joinDate="Feb 15, 2023"
                  />
                  <StudentItem
                    name="Sarah Lee"
                    email="sarah.lee@example.com"
                    course="Data Science Basics"
                    progress={45}
                    joinDate="May 3, 2023"
                  />
                  <StudentItem
                    name="David Wilson"
                    email="d.wilson@example.com"
                    course="Web Development Bootcamp"
                    progress={30}
                    joinDate="May 10, 2023"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="earnings">
            <Card>
              <CardHeader>
                <CardTitle>Earnings Overview</CardTitle>
              </CardHeader>
              <CardContent>
                <div className="space-y-6">
                  <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
                          <h3 className="text-2xl font-bold">$12,450</h3>
                          <p className="text-sm text-muted-foreground">
                            Total Earnings
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
                          <h3 className="text-2xl font-bold">$2,340</h3>
                          <p className="text-sm text-muted-foreground">
                            This Month
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                    <Card>
                      <CardContent className="pt-6">
                        <div className="text-center">
                          <DollarSign className="h-8 w-8 mx-auto text-primary mb-2" />
                          <h3 className="text-2xl font-bold">$560</h3>
                          <p className="text-sm text-muted-foreground">
                            This Week
                          </p>
                        </div>
                      </CardContent>
                    </Card>
                  </div>

                  <div className="space-y-4">
                    <h3 className="text-lg font-medium">Earnings by Course</h3>
                    <EarningsItem
                      course="React Fundamentals"
                      revenue="$4,250"
                      students={342}
                      percentage={34}
                    />
                    <EarningsItem
                      course="Advanced JavaScript"
                      revenue="$3,120"
                      students={256}
                      percentage={25}
                    />
                    <EarningsItem
                      course="Python for Beginners"
                      revenue="$2,340"
                      students={189}
                      percentage={19}
                    />
                    <EarningsItem
                      course="Data Science Basics"
                      revenue="$1,560"
                      students={124}
                      percentage={13}
                    />
                    <EarningsItem
                      course="Web Development Bootcamp"
                      revenue="$980"
                      students={98}
                      percentage={9}
                    />
                  </div>
                </div>
              </CardContent>
            </Card>
          </TabsContent>

          <TabsContent value="settings">
            <Card>
              <CardHeader>
                <CardTitle>Account Settings</CardTitle>
              </CardHeader>
              <CardContent>
                <p className="text-muted-foreground mb-6">
                  Manage your instructor profile and preferences
                </p>
                <div className="space-y-4">
                  <SettingsItem
                    title="Profile Information"
                    description="Update your name, bio, and profile picture"
                  />
                  <SettingsItem
                    title="Payment Methods"
                    description="Manage your payment and payout methods"
                  />
                  <SettingsItem
                    title="Notifications"
                    description="Configure email and system notifications"
                  />
                  <SettingsItem
                    title="Privacy & Security"
                    description="Manage your account security and privacy settings"
                  />
                </div>
              </CardContent>
            </Card>
          </TabsContent>
        </Tabs>
      </div>
    </div>
  );
}

// Helper Components
interface StatsCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  trend?: string;
}

function StatsCard({ title, value, icon, trend = "" }: StatsCardProps) {
  return (
    <Card>
      <CardContent className="p-6">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm text-muted-foreground">{title}</p>
            <h3 className="text-2xl font-bold mt-1">{value}</h3>
            {trend && <p className="text-xs text-green-500 mt-1">{trend}</p>}
          </div>
          <div className="p-2 bg-primary/10 rounded-full text-primary">
            {icon}
          </div>
        </div>
      </CardContent>
    </Card>
  );
}

interface ActivityItemProps {
  title: string;
  description: string;
  time: string;
}

function ActivityItem({ title, description, time }: ActivityItemProps) {
  return (
    <div className="flex items-start gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="p-2 bg-primary/10 rounded-full text-primary">
        <Users className="h-4 w-4" />
      </div>
      <div className="flex-1">
        <h4 className="text-sm font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <div className="text-xs text-muted-foreground">{time}</div>
    </div>
  );
}

interface CourseItemProps {
  title: string;
  students: number;
  rating: number;
  revenue: string;
  progress: number;
}

function CourseItem({ title, students, rating, revenue, progress }: CourseItemProps) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary">
        <BookOpen className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <div className="flex items-center justify-between mb-1">
          <h4 className="font-medium">{title}</h4>
          <Badge variant="outline">{rating} ★</Badge>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{students} students</p>
          <p className="text-sm font-medium">{revenue}</p>
        </div>
        <Progress value={progress} className="h-1 mt-2" />
      </div>
      <Button variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

interface StudentItemProps {
  name: string;
  email: string;
  course: string;
  progress: number;
  joinDate: string;
}

function StudentItem({ name, email, course, progress, joinDate }: StudentItemProps) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
      <Avatar>
        <AvatarImage
          src={`https://api.dicebear.com/7.x/avataaars/svg?seed=${name}`}
          alt={name}
        />
        <AvatarFallback>
          {name
            .split(" ")
            .map((n) => n[0])
            .join("")}
        </AvatarFallback>
      </Avatar>
      <div className="flex-1">
        <h4 className="font-medium">{name}</h4>
        <p className="text-sm text-muted-foreground">{email}</p>
      </div>
      <div className="hidden md:block">
        <p className="text-sm">{course}</p>
        <Progress value={progress} className="h-1 mt-1 w-24" />
      </div>
      <div className="text-sm text-muted-foreground">{joinDate}</div>
      <Button variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

interface EarningsItemProps {
  course: string;
  revenue: string;
  students: number;
  percentage: number;
}

function EarningsItem({ course, revenue, students, percentage }: EarningsItemProps) {
  return (
    <div className="flex items-center gap-4 pb-4 border-b last:border-0 last:pb-0">
      <div className="w-12 h-12 bg-primary/10 rounded-md flex items-center justify-center text-primary">
        <BookOpen className="h-6 w-6" />
      </div>
      <div className="flex-1">
        <h4 className="font-medium">{course}</h4>
        <div className="flex items-center justify-between">
          <p className="text-sm text-muted-foreground">{students} students</p>
          <Badge variant="outline">{percentage}% of total</Badge>
        </div>
      </div>
      <div className="text-lg font-medium">{revenue}</div>
      <Button variant="ghost" size="icon">
        <ChevronRight className="h-4 w-4" />
      </Button>
    </div>
  );
}

interface SettingsItemProps {
  title: string;
  description: string;
}

function SettingsItem({ title, description }: SettingsItemProps) {
  return (
    <div className="flex items-center justify-between pb-4 border-b last:border-0 last:pb-0">
      <div>
        <h4 className="font-medium">{title}</h4>
        <p className="text-sm text-muted-foreground">{description}</p>
      </div>
      <Button variant="outline">Edit</Button>
    </div>
  );
}
