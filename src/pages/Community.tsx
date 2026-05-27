import ScrollToHash from "@/components/ScrollToHash";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import {
  Instagram,
  Linkedin,
  X,
  Users,
  Whatsapp,
  Discord,
} from "@/components/icons";
import { useEffect, useState } from "react";
import EventCard from "@/components/EventCard";

const carouselImages = [
  "/assets/teamImages/offline_meetup.jpg",
  "/assets/teamImages/online_meetu.jpeg",
  "/assets/teamImages/candid_shot_1.jpg",
  "/assets/teamImages/candid_shot_2.jpg",
  "/assets/teamImages/team_side_profile.jpg",
  "/assets/teamImages/team_shot.jpg",
];

const Community = () => {
  const socialPlatforms = [
    {
      name: "LinkedIn",
      icon: Linkedin,
      followers: "",
      description: "Professional updates and industry insights",
      color: "text-blue-400",
      url: "https://www.linkedin.com/company/zenyukti/",
    },
    {
      name: "Instagram",
      icon: Instagram,
      followers: "",
      description: "Behind the scenes and community highlights",
      color: "text-pink-400",
      url: "https://www.instagram.com/zenyukti/",
    },
    {
      name: "X",
      icon: X,
      followers: "",
      description: "Quick updates and tech discussions",
      color: "text-blue-400",
      url: "https://x.com/zenyukti",
    },
  ];
  const [events, setEvents] = useState<{ upcoming: any[]; past: any[] }>({
    upcoming: [],
    past: [],
  });

  useEffect(() => {
    fetch("/events.json")
      .then((res) => res.json())
      .then((data) => {
        const now = new Date().getTime();
        const sorted = data.sort(
          (a: any, b: any) =>
            new Date(a.time).getTime() - new Date(b.time).getTime()
        );

        const upcoming = sorted.filter(
          (e: any) => new Date(e.time).getTime() > now
        );
        const past = sorted.filter(
          (e: any) => new Date(e.time).getTime() <= now
        );

        setEvents({ upcoming, past });
      });
  }, []);

  const teamRoles = [
    {
      role: "Social Media Department",
      description: "Manages our online presence across all platforms",
      responsibilities: [
        "Content strategy",
        "Community engagement",
        "Analytics tracking",
      ],
    },
    {
      role: "Graphics & Creative Department",
      description: "Creates visual content and brand materials",
      responsibilities: [
        "Social media graphics",
        "Event posters",
        "Brand identity",
      ],
    },
    {
      role: "PR & Outreach",
      description: "Builds partnerships and expands our reach",
      responsibilities: [
        "Partnership development",
        "Event promotion",
        "Media relations",
      ],
    },
  ];

  // Carousel state
  const [current, setCurrent] = useState(0);

  // Auto-slide effect
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent((prev) => (prev + 1) % carouselImages.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                Community
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Join a vibrant community of learners, builders, and innovators.
              Connect with like-minded individuals and grow together.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button
                asChild
                size="lg"
                className="bg-gradient-primary hover:opacity-90 text-white"
              >
                <a
                  href="https://discord.gg/HuBa9r33kW"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Discord className="w-5 h-5 mr-2" /> Join Discord
                </a>
              </Button>
              <Button
                size="lg"
                variant="outline"
                className="border-primary text-primary hover:bg-primary hover:text-white"
              >
                <a
                  href="https://chat.whatsapp.com/Em0d53VddahBeIEv69W4o8"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center"
                >
                  <Whatsapp className="w-5 h-5 mr-2" />
                  WhatsApp Group
                </a>
              </Button>
            </div>
          </div>
        </section>

        {/* Carousel Section */}
        <section className="py-10 px-4">
          <div className="container mx-auto flex flex-col items-center">
            <div className="relative w-full max-w-xl h-64 sm:h-72 md:h-80 lg:h-96 rounded-xl overflow-hidden shadow-xl border border-border flex items-center justify-center">
              {carouselImages.map((src, idx) => (
                <img
                  key={idx}
                  src={src}
                  alt={`Community ${idx + 1}`}
                  className={`absolute top-0 left-0 w-full h-full object-contain transition-opacity duration-700 rounded-xl ${
                    idx === current ? "opacity-100 z-10" : "opacity-0 z-0"
                  }`}
                  style={{
                    aspectRatio: '16/9',
                    minHeight: '180px',
                    maxHeight: '100%',
                  }}
                />
              ))}
              {/* Navigation arrows */}
              <button
                className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 bg-card/50 rounded-full p-2 sm:p-4 text-xl sm:text-2xl text-primary cursor-pointer transition hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl z-20"
                onClick={() =>
                  setCurrent((prev) =>
                    prev === 0 ? carouselImages.length - 1 : prev - 1
                  )
                }
                aria-label="Previous image"
              >
                &#8592;
              </button>
              <button
                className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 bg-card/50 rounded-full p-2 sm:p-4 text-xl sm:text-2xl text-primary cursor-pointer transition hover:bg-primary hover:text-white hover:scale-110 hover:shadow-xl z-20"
                onClick={() =>
                  setCurrent((prev) =>
                    prev === carouselImages.length - 1 ? 0 : prev + 1
                  )
                }
                aria-label="Next image"
              >
                &#8594;
              </button>
              {/* Dots */}
              <div className="absolute bottom-2 sm:bottom-4 left-1/2 -translate-x-1/2 flex gap-2 sm:gap-3 z-20">
                {carouselImages.map((_, idx) => (
                  <span
                    key={idx}
                    className={`w-2 sm:w-3 h-2 sm:h-3 rounded-full border-2 border-primary ${
                      idx === current ? "bg-primary" : "bg-muted-foreground"
                    } cursor-pointer transition-all duration-300`}
                    onClick={() => setCurrent(idx)}
                  />
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Community Stats */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <div className="grid md:grid-cols-4 gap-8 text-center">
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">1000+</h3>
                <p className="text-muted-foreground">Total Members</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">20+</h3>
                <p className="text-muted-foreground">Active Contributors</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">...</h3>
                <p className="text-muted-foreground">Projects Completed</p>
              </div>
              <div className="bg-card border border-border rounded-lg p-6">
                <h3 className="text-3xl font-bold text-primary mb-2">...</h3>
                <p className="text-muted-foreground">Mentors</p>
              </div>
            </div>
          </div>
        </section>

        {/* Social Presence */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Follow Our Journey
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {socialPlatforms.map((platform, index) => {
                const Icon = platform.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card border-border hover:border-primary/50 transition-all duration-300 group"
                  >
                    <CardHeader className="text-center">
                      <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center mx-auto mb-4 group-hover:scale-110 transition-transform duration-300">
                        <Icon className="w-8 h-8 text-white" />
                      </div>
                      <CardTitle className="text-2xl font-bold text-foreground">
                        {platform.name}
                      </CardTitle>
                      <CardDescription className="text-muted-foreground">
                        {platform.description}
                      </CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <div className="text-3xl font-bold text-primary mb-4">
                        {/*{platform.followers} */}
                      </div>
                      <a
                        href={platform.url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="block"
                      >
                        <Button className="w-full bg-gradient-primary hover:opacity-90 text-white">
                          Follow Us
                        </Button>
                      </a>
                    </CardContent>
                  </Card>
                );
              })}
            </div>
          </div>
        </section>

        {/* Team Roles */}
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-5xl font-bold text-center text-foreground mb-12">
              Community Team
            </h2>

            <div className="grid md:grid-cols-3 gap-8">
              {teamRoles.map((team, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {team.role}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {team.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-foreground mb-3">
                      Key Responsibilities:
                    </h4>
                    <ul className="space-y-2">
                      {team.responsibilities.map((responsibility, idx) => (
                        <li
                          key={idx}
                          className="text-muted-foreground flex items-start"
                        >
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {responsibility}
                        </li>
                      ))}
                    </ul>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>
        <ScrollToHash />
        {/* Events Section */}
        <section id="events" className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Upcoming Events
            </h2>
            <p className="text-muted-foreground mb-12 max-w-2xl mx-auto">
              Join our regular events, workshops, and community meetups
            </p>

            {events.upcoming.length === 0 ? (
              <div className="text-xl text-muted-foreground mt-12">
                No events in mind.
              </div>
            ) : (
              <>
                <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mb-16">
                  {events.upcoming.map((event, index) => (
                    <EventCard key={index} {...event} />
                  ))}
                </div>

                {events.past.length > 0 && (
                  <>
                    <h3 className="text-2xl font-semibold text-foreground mb-4 text-center">
                      Past Events
                    </h3>
                    <div className="flex flex-wrap justify-center gap-6 max-w-7xl mx-auto mb-16">
                      {events.past.map((event, index) => (
                        <EventCard key={index} {...event} />
                      ))}
                    </div>
                  </>
                )}
              </>
            )}
          </div>
        </section>
      </main>
    </div>
  );
};

export default Community;
