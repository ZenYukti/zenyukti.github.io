import { Card, CardContent } from "@/components/ui/card";
import { Target, Eye, Heart,Code, Share2 } from "lucide-react";
import { Users } from "@/components/icons";
import SEO from "@/components/SEO";
import { pageMetadata } from "@/config/metadata";

const About = () => {
  const timeline = [
      {
        "phase": "Concept & Foundation",
        "period": "May-June 2025",
        "description": "Initial ideation, defining core values, and outlining community structure.",
        "status": "completed"
      },
      {
        "phase": "Core Team Formation",
        "period": "July 2025",
        "description": "Bringing together passionate individuals to lead and shape the community's early stages.",
        "status": "completed"
      },
      {
        "phase": "Community Soft Launch",
        "period": "July-August 2025",
        "description": "Officially opening doors to a wider audience and initiating initial community activities.",
        "status": "completed"
      },
      {
        "phase": "Growth & Engagement Initiatives",
        "period": "September Onwards 2025",
        "description": "Implementing programs, events, and resources to foster active participation and growth.",
        "status": "upcoming"
      },
  ];

  const values = [
    {
      icon: Heart,
      title: "Openness",
      description: "We welcome everyone regardless of their skill level, background, or experience. Every voice matters in our community."
    },
    {
      icon: Users,
      title: "Collaboration",
      description: "Great things happen when people work together. We foster cross-domain collaboration and knowledge sharing."
    },
    {
      icon: Code,
      title: "Growth",
      description: "Continuous learning and improvement drive us forward. We celebrate both small wins and major breakthroughs."
    }
  ];

  return (
    <>
      <SEO
        title={pageMetadata.about.title}
        description={pageMetadata.about.description}
        keywords={pageMetadata.about.keywords}
      />
      <div className="min-h-screen bg-background">
        {/* Hero Section */}
        <section className="pt-24 pb-16 relative overflow-hidden">
        <div className="absolute inset-0 bg-gradient-dark"></div>
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
        
        <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
          <div className="text-center max-w-4xl mx-auto">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">About </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">ZenYukti</span>
            </h1>
            <p className="text-xl sm:text-2xl text-muted-foreground mb-6 leading-relaxed">
              Born from the belief that every student deserves opportunities to learn, 
              build, and share in the tech ecosystem.
            </p>
            <div className="text-center">
              <p className="text-lg text-muted-foreground mb-2">Founded by</p>
              <p className="text-xl font-semibold text-primary">Ayush Hardeniya</p>
              <p className="text-md text-muted-foreground"><a href="https://ayushhardeniya.site/" target="_blank" rel="noopener noreferrer">
                [www.ayushhardeniya.site] </a>
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Purpose, Vision, Mission */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Purpose */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-neon-green/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Target className="w-8 h-8 text-neon-green" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Our Purpose
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To democratize access to tech education and opportunities by creating 
                  an inclusive platform where students can learn from each other, 
                  build meaningful projects, and share knowledge freely.
                </p>
              </CardContent>
            </Card>

            {/* Vision */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-neon-purple/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Eye className="w-8 h-8 text-neon-purple" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Our Vision
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  A world where every student has equal access to learning opportunities, 
                  where collaboration transcends boundaries, and where innovation 
                  emerges from diverse perspectives working together.
                </p>
              </CardContent>
            </Card>

            {/* Mission */}
            <Card className="bg-card/50 backdrop-blur-sm border-border">
              <CardContent className="p-8 text-center">
                <div className="w-16 h-16 bg-neon-blue/20 rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <Share2 className="w-8 h-8 text-neon-blue" />
                </div>
                <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                  Our Mission
                </h3>
                <p className="text-muted-foreground leading-relaxed">
                  To build and maintain an open platform that enables students to 
                  discover their passion, develop skills through real projects, 
                  and contribute back to the community that helped them grow.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6 text-foreground">
              Our Journey
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From a simple idea to a thriving community platform
            </p>
          </div>

          <div className="max-w-4xl mx-auto">
            {timeline.map((item, index) => (
              <div key={index} className="flex items-start space-x-6 pb-12">
                <div className="flex flex-col items-center">
                  <div className={`w-4 h-4 rounded-full ${
                    item.status === 'completed' ? 'bg-neon-green' :
                    item.status === 'current' ? 'bg-neon-purple' : 'bg-muted'
                  }`}></div>
                  {index < timeline.length - 1 && (
                    <div className="w-px h-16 bg-border mt-4"></div>
                  )}
                </div>
                <div className="flex-1 pb-8">
                  <div className="flex items-center space-x-4 mb-2">
                    <h3 className="font-semibold text-lg text-foreground">{item.phase}</h3>
                    <span className="text-sm text-muted-foreground">{item.period}</span>
                  </div>
                  <p className="text-muted-foreground">{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="py-20 bg-dark-surface">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="font-display font-bold text-4xl sm:text-5xl mb-6 text-foreground">
              Our Core Values
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8">
            {values.map((value, index) => {
              const IconComponent = value.icon;
              return (
                <Card key={index} className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300">
                  <CardContent className="p-8">
                    <div className="w-16 h-16 bg-primary/20 rounded-2xl flex items-center justify-center mb-6">
                      <IconComponent className="w-8 h-8 text-primary" />
                    </div>
                    <h3 className="font-display font-bold text-2xl mb-4 text-foreground">
                      {value.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {value.description}
                    </p>
                  </CardContent>
                </Card>
              );
            })}
          </div>
        </div>
      </section>
    </div>
    </>
  
  );
};

export default About;