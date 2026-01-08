/**
 * Team Component - Displays ZenYukti team members with social links
 * Features:
 * - Responsive grid layout for team member cards
 * - Interactive social media icons (GitHub, LinkedIn, Instagram, Discord)
 * - Smooth hover animations and transitions
 * - Modular structure for easy maintenance and scaling
 * - SEO-friendly markup with proper semantic HTML
 */

import { useState } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Card, CardContent } from "@/components/ui/card";
import teamMembersk from "@/assets/teamdata/teamdata.json";
import SEO from "@/components/SEO";
import { pageMetadata } from "@/config/metadata";
import {
  Users,
  Linkedin,
  Github,
  Code,
  Heart,
  X,
} from "@/components/icons";
import { Mail, Discord } from "@/components/icons";


/**
 * Interface for team member data structure
 * Ensures type safety and consistency across the component
 */
interface TeamMember {
  id: string;
  name: string;
  subname?: string;
  role?: string;
  github?: string;
  linkedin?: string;
  avatar?: string;
  bio?: string;
  isFounder?: boolean;
  department?: string;
  twitter?: string;
}

/**
 * Interface for social link structure
 * Standardizes social media link handling
 */
interface SocialLink {
  platform: string;
  url: string;
  icon: React.ComponentType<any>;
  color: string;
}

const Team = () => {
  // State for managing loading states and interactions
  const [imageErrors, setImageErrors] = useState<Record<string, boolean>>({});

  /**
   * Core team members data
   * Contains all team member information with exact details as provided
   */
  
  const teamMembers: TeamMember[] = teamMembersk

  /**
   * Generates social media links for a team member
   * @param member - The team member object
   * @returns Array of social link objects
   */
const getSocialLinks = (member: TeamMember): SocialLink[] => {
  const links: SocialLink[] = [];

  // GitHub
  if (member.github) {
    links.push({
      platform: "GitHub",
      url: member.github,
      icon: Github,
      color: "text-gray-300 hover:text-white",
    });
  }

  // LinkedIn
  if (member.linkedin) {
    links.push({
      platform: "LinkedIn",
      url: member.linkedin,
      icon: Linkedin,
      color: "text-blue-400 hover:text-blue-300",
    });
  }

  // Twitter
  if (member.twitter) {
    links.push({
      platform: "Twitter",
      url: member.twitter,
      icon: X,
      color: "text-gray-200 hover:text-gray-100",
    });
  }

  return links;
};


  /**
   * Handles image loading errors by setting fallback state
   * @param memberId - The ID of the member whose image failed to load
   */
  const handleImageError = (memberId: string) => {
    setImageErrors((prev) => ({ ...prev, [memberId]: true }));
  };

  /**
   * Generates avatar fallback initials from member name
   * @param name - The member's full name
   * @returns String of initials (max 2 characters)
   */
  const getInitials = (name: string): string => {
    return name
      .split(" ")
      .map((word) => word[0])
      .join("")
      .substring(0, 2)
      .toUpperCase();
  };

  return (
    <>
      <SEO
        title={pageMetadata.team.title}
        description={pageMetadata.team.description}
        keywords={pageMetadata.team.keywords}
      />
      <div className="min-h-screen bg-background">
      <Header />

      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4 relative overflow-hidden">
          {/* Background gradient effects */}
          <div className="absolute inset-0 bg-gradient-dark opacity-50"></div>
          <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl"></div>
          <div className="absolute bottom-1/4 left-1/4 w-64 h-64 bg-neon-green/10 rounded-full blur-2xl"></div>

          <div className="container mx-auto text-center relative z-10">
            <h1 className="text-4xl md:text-6xl font-bold mb-6">
              <span className="text-foreground">Meet Our </span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                Team
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              The passionate individuals behind ZenYukti's mission to
              democratize tech education and build inclusive learning
              communities.
            </p>

            {/* Team stats */}
            <div className="grid md:grid-cols-3 gap-6 max-w-2xl mx-auto">
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-green mb-2">
                  {/*{teamMembers.length}*/} {/*Dynamic handler, don't remove it until our core team is small*/}
                  20+
                </div>
                <div className="text-muted-foreground">Team Members</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-purple mb-2">
                  5+
                </div>
                <div className="text-muted-foreground">Domains</div>
              </div>
              <div className="text-center">
                <div className="text-3xl font-bold text-neon-blue mb-2">
                  1000+
                </div>
                <div className="text-muted-foreground">Community Members</div>
              </div>
            </div>
          </div>
        </section>

        {/* Founder Section */}
        <section className="py-20 px-4 bg-dark-surface/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                ZenBoard • The Initiators
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Meet the visionaries who started ZenYukti with a dream to make
                tech education accessible to all.
              </p>
            </div>

            {/* Founders grid - responsive layout */}
            <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {/* Co-founder Left - Anvita Shukla */}
              <div className="order-2 md:order-1">
                {(() => {
                  const anvita = teamMembers.find(member => member.id === "anvita-shukla");
                  if (!anvita) return null;
                  return (
                    <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <CardContent className="p-8 text-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                          {!imageErrors[anvita.id] && anvita.avatar ? (
                            <img
                              src={anvita.avatar}
                              alt={`${anvita.name} - Co-founder`}
                              className="w-full h-full rounded-full object-cover border-4 border-gradient-primary"
                              onError={() => handleImageError(anvita.id)}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-pink-500 to-purple-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-primary/20">
                              {getInitials(anvita.name)}
                            </div>
                          )}
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-purple rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Co-founder info */}
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {anvita.name}
                        </h3>
                        <p className="text-lg text-primary mb-2">Co-founder & Creative Head</p>
                        <p className="text-muted-foreground mb-4"></p>
                        {anvita.bio && (
                          <p className="text-muted-foreground mb-6 italic">
                            {anvita.bio}
                          </p>
                        )}

                        {/* Social links */}
                        <div className="flex justify-center space-x-4">
                          {getSocialLinks(anvita).map((social, idx) => {
                            const IconComponent = social.icon;
                            return (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 hover:bg-secondary/50 ${social.color} transition-all duration-200 hover:scale-110`}
                              >
                                <IconComponent className="w-5 h-5" />
                              </a>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })()}
              </div>

              {/* Main Founder - Center */}
              <div className="order-1 md:order-2">
                {teamMembers
                  .filter((member) => member.isFounder)
                  .map((founder) => (
                    <Card
                      key={founder.id}
                      className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10"
                    >
                      <CardContent className="p-8 text-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                          {!imageErrors[founder.id] && founder.avatar ? (
                            <img
                              src={founder.avatar}
                              alt={`${founder.name} - Founder`}
                              className="w-full h-full rounded-full object-cover border-4 border-gradient-primary"
                              onError={() => handleImageError(founder.id)}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-primary flex items-center justify-center text-white text-2xl font-bold border-4 border-primary/20">
                              {getInitials(founder.name)}
                            </div>
                          )}
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-green rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Founder info */}
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {founder.name}
                        </h3>
                        <h6 className="text-2x1 text-foreground mb-2.5">
                          {founder.subname}
                        </h6>
                        <p className="text-lg text-primary mb-2">{founder.role}</p>
                        <p className="text-muted-foreground mb-4"></p>
                        {founder.bio && (
                          <p className="text-muted-foreground mb-6 italic">
                            {founder.bio}
                          </p>
                        )}

                        {/* Social links */}
                        <div className="flex justify-center space-x-4">
                          {getSocialLinks(founder).map((social, idx) => {
                            const IconComponent = social.icon;
                            return (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 hover:bg-secondary/50 ${social.color} transition-all duration-200 hover:scale-110`}
                              >
                                <IconComponent className="w-5 h-5" />
                              </a>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  ))}
              </div>

              {/* Co-founder Right - Avinash Shukla */}
              <div className="order-3 md:order-3">
                {(() => {
                  const avinash = teamMembers.find(member => member.id === "avinash-shukla");
                  if (!avinash) return null;
                  return (
                    <Card className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10">
                      <CardContent className="p-8 text-center">
                        {/* Avatar */}
                        <div className="w-32 h-32 mx-auto mb-6 relative">
                          {!imageErrors[avinash.id] && avinash.avatar ? (
                            <img
                              src={avinash.avatar}
                              alt={`${avinash.name} - Co-founder`}
                              className="w-full h-full rounded-full object-cover border-4 border-gradient-primary"
                              onError={() => handleImageError(avinash.id)}
                            />
                          ) : (
                            <div className="w-full h-full rounded-full bg-gradient-to-br from-blue-500 to-cyan-600 flex items-center justify-center text-white text-2xl font-bold border-4 border-primary/20">
                              {getInitials(avinash.name)}
                            </div>
                          )}
                          <div className="absolute -bottom-2 -right-2 w-8 h-8 bg-neon-blue rounded-full flex items-center justify-center">
                            <Heart className="w-4 h-4 text-white" />
                          </div>
                        </div>

                        {/* Co-founder info */}
                        <h3 className="text-2xl font-bold text-foreground mb-2">
                          {avinash.name}
                        </h3>
                        <p className="text-lg text-primary mb-2">Co-founder & Operations Head</p>
                        <p className="text-muted-foreground mb-4"></p>
                        {avinash.bio && (
                          <p className="text-muted-foreground mb-6 italic">
                            {avinash.bio}
                          </p>
                        )}

                        {/* Social links */}
                        <div className="flex justify-center space-x-4">
                          {getSocialLinks(avinash).map((social, idx) => {
                            const IconComponent = social.icon;
                            return (
                              <a
                                key={idx}
                                href={social.url}
                                target="_blank"
                                rel="noopener noreferrer"
                                className={`inline-flex items-center justify-center rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 p-2 hover:bg-secondary/50 ${social.color} transition-all duration-200 hover:scale-110`}
                              >
                                <IconComponent className="w-5 h-5" />
                              </a>
                            );
                          })}
                        </div>
                      </CardContent>
                    </Card>
                  );
                })()}
              </div>
            </div>
          </div>
        </section>

        {/* Core Team Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                ZenCrew • The Core Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The dedicated individuals working together to build and grow the
                ZenYukti community.
              </p>
            </div>

            {/* Team grid - responsive layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers
                .filter((member) => !member.isFounder && member.department === "ZenCrew")
                .map((member, index) => (
                  <Card
                    key={member.id}
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/50 transition-all duration-300 hover:shadow-lg hover:shadow-primary/10 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Avatar */}
                      <div className="w-20 h-20 mx-auto mb-4 relative">
                        {!imageErrors[member.id] && member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={`${member.name} profile`}
                            className="w-full h-full rounded-full object-cover border-2 border-border"
                            onError={() => handleImageError(member.id)}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-primary to-primary/70 flex items-center justify-center text-white text-lg font-bold">
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>

                      {/* Member info */}
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                      </p>

                      {/* Social links */}
                      <div className="flex justify-center space-x-2">
                        {getSocialLinks(member).map((social, idx) => {
                          const IconComponent = social.icon;
                          return (
                            <a
                              key={idx}
                              href={social.url !== "#" ? social.url : undefined}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-md hover:bg-secondary/50 ${
                                social.color
                              } transition-all duration-200 hover:scale-110 ${
                                social.url === "#"
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </a>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* ZenMates Section */}
        <section className="py-20 px-4 bg-dark-surface/30">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                ZenMates • The Action Team
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The hands-on crew that makes sure ideas don’t just stay ideas.
              </p>
            </div>

            {/* ZenMates grid - responsive layout */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {teamMembers
                .filter((member) => member.department === "ZenMates")
                .map((member, index) => (
                  <Card
                    key={member.id}
                    className="bg-card/50 backdrop-blur-sm border-border hover:border-primary/30 transition-all duration-300 hover:shadow-lg hover:shadow-primary/5 hover:-translate-y-1"
                    style={{
                      animationDelay: `${index * 100}ms`,
                    }}
                  >
                    <CardContent className="p-6 text-center">
                      {/* Avatar */}
                      <div className="w-20 h-20 mx-auto mb-4 relative">
                        {!imageErrors[member.id] && member.avatar ? (
                          <img
                            src={member.avatar}
                            alt={`${member.name} profile`}
                            className="w-full h-full rounded-full object-cover border-2 border-border"
                            onError={() => handleImageError(member.id)}
                          />
                        ) : (
                          <div className="w-full h-full rounded-full bg-gradient-to-br from-secondary to-secondary/70 flex items-center justify-center text-white text-lg font-bold">
                            {getInitials(member.name)}
                          </div>
                        )}
                      </div>

                      {/* Member info */}
                      <h3 className="text-lg font-bold text-foreground mb-1">
                        {member.name}
                      </h3>
                      <p className="text-sm text-primary/80 mb-2">{member.role}</p>
                      <p className="text-sm text-muted-foreground mb-4">
                      </p>

                      {/* Social links */}
                      <div className="flex justify-center space-x-2">
                        {getSocialLinks(member).map((social, idx) => {
                          const IconComponent = social.icon;
                          return (
                            <a
                              key={idx}
                              href={social.url !== "#" ? social.url : undefined}
                              target="_blank"
                              rel="noopener noreferrer"
                              className={`p-2 rounded-md hover:bg-secondary/50 ${
                                social.color
                              } transition-all duration-200 hover:scale-110 ${
                                social.url === "#"
                                  ? "pointer-events-none opacity-50"
                                  : ""
                              }`}
                            >
                              <IconComponent className="w-4 h-4" />
                            </a>
                          );
                        })}
                      </div>
                    </CardContent>
                  </Card>
                ))}
            </div>
          </div>
        </section>

        {/* Values Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="text-center mb-16">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-4">
                What Drives Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                The core values and principles that guide our team in everything
                we do.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8 max-w-4xl mx-auto">
              {[
                {
                  icon: Users,
                  title: "Collaboration",
                  description:
                    "We believe great things happen when diverse minds work together toward a common goal.",
                },
                {
                  icon: Heart,
                  title: "Inclusivity",
                  description:
                    "Everyone deserves equal opportunities to learn, grow, and contribute to the tech community.",
                },
                {
                  icon: Code,
                  title: "Innovation",
                  description:
                    "We constantly push boundaries and explore new ways to make tech education more accessible.",
                },
              ].map((value, index) => {
                const IconComponent = value.icon;
                return (
                  <Card
                    key={index}
                    className="bg-card/50 backdrop-blur-sm border-border text-center"
                  >
                    <CardContent className="p-8">
                      <div className="w-16 h-16 bg-gradient-primary rounded-2xl flex items-center justify-center mx-auto mb-6">
                        <IconComponent className="w-8 h-8 text-white" />
                      </div>
                      <h3 className="text-xl font-bold text-foreground mb-4">
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

        {/* Join Team CTA */}
        <section className="py-20 px-4 bg-dark-surface/30">
          <div className="container mx-auto text-center">
            <Card className="bg-gradient-primary p-8 border-0 max-w-3xl mx-auto">
              <CardContent className="p-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Want to Join Our Team?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  We're always looking for passionate individuals who share our
                  vision of building collaborately and growing together. Join us in making a
                  difference!
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <a
                    href="mailto:info@zenyukti.in"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-2 h-11 rounded-md bg-white text-primary hover:bg-white/90"
                  >
                    <Mail className="w-5 h-5 mr-2" />
                    Contact Us
                  </a>

                  <a
                    href="https://discord.gg/HuBa9r33kW"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center justify-center text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 px-6 py-2 h-11 rounded-md border border-white text-white hover:bg-white hover:text-primary"
                  >
                    <Discord className="w-5 h-5 mr-2" />
                    Join Discord
                  </a>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
    </>
  );
};

export default Team;