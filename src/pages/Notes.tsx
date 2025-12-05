import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Download, Filter, Book, Tag, User, Calendar } from "lucide-react";
import { useState } from "react";

const Notes = () => {
  const [filter, setFilter] = useState("all");

  const notes = [
    {
      title: "Data Structures & Algorithms - Lecture 1",
      description: "Introduction to fundamental data structures like arrays, linked lists, and their complexities.",
      subject: "DSA",
      topic: "Introduction",
      author: "Dr. Alan Turing",
      date: "2025-09-05",
      fileType: "PDF",
      downloadUrl: "/notes/dsa_lecture_1.pdf"
    },
    {
      title: "Web Development - Flexbox vs. Grid",
      description: "A comprehensive guide comparing CSS Flexbox and Grid for modern web layouts.",
      subject: "Web Dev",
      topic: "CSS",
      author: "Ada Lovelace",
      date: "2025-09-12",
      fileType: "PDF",
      downloadUrl: "/notes/webdev_flexbox_grid.pdf"
    },
    {
      title: "Machine Learning - Linear Regression",
      description: "Notes covering the theory and implementation of Linear Regression from scratch.",
      subject: "ML/AI",
      topic: "Regression",
      author: "Grace Hopper",
      date: "2025-09-18",
      fileType: "PDF",
      downloadUrl: "/notes/ml_linear_regression.pdf"
    },
    {
      title: "Linux Basics - Command Line Interface",
      description: "Essential CLI commands for navigating and managing files in a Linux environment.",
      subject: "Linux",
      topic: "CLI",
      author: "Linus Torvalds",
      date: "2025-09-22",
      fileType: "PDF",
      downloadUrl: "/notes/linux_cli_basics.pdf"
    },
    {
      title: "UI/UX Design - Prototyping in Figma",
      description: "A step-by-step tutorial on creating interactive prototypes using Figma.",
      subject: "UI/UX",
      topic: "Prototyping",
      author: "Anvita Shukla",
      date: "2025-10-01",
      fileType: "PDF",
      downloadUrl: "/notes/uiux_figma_prototyping.pdf"
    },
    {
      title: "Advanced DSA - Dynamic Programming",
      description: "Exploring the core concepts of Dynamic Programming with classic problem examples.",
      subject: "DSA",
      topic: "DP",
      author: "Dr. Alan Turing",
      date: "2025-10-08",
      fileType: "PDF",
      downloadUrl: "/notes/dsa_dynamic_programming.pdf"
    }
  ];

  const subjects = ["all", "DSA", "Web Dev", "ML/AI", "Linux", "UI/UX"];

  const filteredNotes = filter === "all" ? notes : notes.filter(n => n.subject === filter);

  return (
    <div className="min-h-screen bg-background">
      {/* Hero Section */}
      <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute bottom-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">Shared </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">Knowledge</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-8 leading-relaxed">
              Access a curated collection of notes from our community. Learn, share, and grow together.
            </p>
          </div>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-dark-surface border-y border-border sticky top-16 z-20 backdrop-blur-sm">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-wrap items-center gap-2">
            <Filter className="w-5 h-5 text-muted-foreground mr-2" />
            {subjects.map((subject) => (
              <Button
                key={subject}
                variant={filter === subject ? "default" : "ghost"}
                size="sm"
                onClick={() => setFilter(subject)}
                className={`capitalize ${filter === subject ? "bg-primary" : ""}`}
              >
                {subject === 'all' ? 'All Notes' : subject}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* Notes Grid */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 md:grid-cols-2 gap-8">
            {filteredNotes.map((note, index) => (
              <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 group hover:shadow-card flex flex-col">
                <CardHeader>
                  <div className="flex flex-wrap gap-2 mb-4">
                    <Badge variant="secondary" className="bg-primary/10 text-primary flex items-center gap-1">
                      <Book className="w-3 h-3" /> {note.subject}
                    </Badge>
                    <Badge variant="secondary" className="flex items-center gap-1">
                      <Tag className="w-3 h-3" /> {note.topic}
                    </Badge>
                  </div>
                  <CardTitle className="text-xl font-display group-hover:text-primary transition-colors">
                    {note.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground text-sm leading-relaxed pt-2">
                    {note.description}
                  </CardDescription>
                </CardHeader>

                <CardContent className="space-y-4 flex-grow flex flex-col justify-between">
                  <div>
                    <div className="flex items-center space-x-4 text-xs text-muted-foreground border-t border-border pt-4">
                      <div className="flex items-center space-x-1.5">
                        <User className="w-3.5 h-3.5" />
                        <span>{note.author}</span>
                      </div>
                      <div className="flex items-center space-x-1.5">
                        <Calendar className="w-3.5 h-3.5" />
                        <span>{new Date(note.date).toLocaleDateString('en-US', { year: 'numeric', month: 'short', day: 'numeric' })}</span>
                      </div>
                    </div>
                  </div>

                  <a href={note.downloadUrl} download className="block w-full mt-4">
                    <Button size="sm" className="w-full bg-gradient-primary hover:opacity-90 text-white">
                      <Download className="w-4 h-4 mr-2" />
                      Download ({note.fileType})
                    </Button>
                  </a>
                </CardContent>
              </Card>
            ))}
          </div>

          {filteredNotes.length === 0 && (
            <div className="text-center py-16 text-muted-foreground">
              <h3 className="text-2xl font-semibold mb-2">No Notes Found</h3>
              <p>There are no notes available for this subject yet. Check back later!</p>
            </div>
          )}
        </div>
      </section>
    </div>
  );
};

export default Notes;



