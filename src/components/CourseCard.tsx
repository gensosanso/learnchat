"use client";

import React from "react";
import { Card, CardContent, CardFooter, CardHeader } from "./ui/card";
import { Avatar, AvatarFallback, AvatarImage } from "./ui/avatar";
import { Badge } from "./ui/badge";
import { Star } from "lucide-react";
import { Button } from "./ui/button";

interface CourseCardProps {
  id: string;
  title: string;
  instructorName: string;
  instructorAvatar?: string;
  thumbnailUrl: string;
  rating: number;
  reviewCount: number;
  price: number;
  description: string;
  category?: string;
  level?: string;
  onEnroll?: (courseId: string) => void;
}

const CourseCard = ({
  id = "course-1",
  title = "Introduction to Web Development",
  instructorName = "Jane Smith",
  instructorAvatar,
  thumbnailUrl = "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80",
  rating = 4.5,
  reviewCount = 128,
  price = 49.99,
  description = "Learn the fundamentals of web development including HTML, CSS, and JavaScript in this comprehensive course.",
  category = "Development",
  level = "Beginner",
  onEnroll = () => {},
}: CourseCardProps) => {
  return (
    <Card className="w-[350px] h-[420px] overflow-hidden flex flex-col bg-card">
      <div className="relative h-48 overflow-hidden">
        <img
          src={thumbnailUrl}
          alt={title}
          className="w-full h-full object-cover transition-transform hover:scale-105"
        />
        {category && (
          <Badge className="absolute top-3 left-3 bg-primary/80">
            {category}
          </Badge>
        )}
        {level && (
          <Badge className="absolute top-3 right-3 bg-secondary/80">
            {level}
          </Badge>
        )}
      </div>

      <CardHeader className="pb-2">
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <Avatar className="h-6 w-6">
              <AvatarImage
                src={
                  instructorAvatar ||
                  `https://api.dicebear.com/7.x/avataaars/svg?seed=${instructorName}`
                }
              />
              <AvatarFallback>{instructorName.charAt(0)}</AvatarFallback>
            </Avatar>
            <span className="text-sm text-muted-foreground">
              {instructorName}
            </span>
          </div>
          <div className="flex items-center">
            <Star className="h-4 w-4 fill-yellow-400 text-yellow-400 mr-1" />
            <span className="text-sm font-medium">{rating}</span>
            <span className="text-xs text-muted-foreground ml-1">
              ({reviewCount})
            </span>
          </div>
        </div>
        <h3 className="font-semibold text-lg line-clamp-2 mt-2">{title}</h3>
      </CardHeader>

      <CardContent className="flex-grow">
        <p className="text-sm text-muted-foreground line-clamp-3">
          {description}
        </p>
      </CardContent>

      <CardFooter className="flex justify-between items-center border-t pt-4">
        <div className="font-bold text-lg">${price.toFixed(2)}</div>
        <Button onClick={() => onEnroll(id)}>Enroll Now</Button>
      </CardFooter>
    </Card>
  );
};

export default CourseCard;
