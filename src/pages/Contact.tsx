import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useState } from "react";
import { Discord, Github, Linkedin, Mail } from "@/components/icons";

const Contact = () => {
  const contactMethods = [
    {
      icon: Mail,
      title: "Email Us",
      description: "Get in touch via email",
      value: "info@zenyukti.in",
      href: "mailto:info@zenyukti.in",
    },
    {
      icon: Discord,
      title: "Discord",
      description: "Join our community server",
      value: "ZenYukti Community",
      href: "https://discord.gg/HuBa9r33kW",
    },
    {
      icon: Github,
      title: "GitHub",
      description: "Check out our projects",
      value: "github.com/ZenYukti",
      href: "https://github.com/ZenYukti",
    },
    {
      icon: Linkedin,
      title: "LinkedIn",
      description: "Connect with us professionally",
      value: "linkedin.com/company/zenyukti",
      href: "https://linkedin.com/company/zenyukti",
    },
  ];

  const [form, setForm] = useState({
    firstName: "",
    lastName: "",
    email: "",
    subject: "",
    message: "",
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setForm((prev) => ({
      ...prev,
      [e.target.id]: e.target.value,
    }));
  };

  const handleSubmit = () => {
    const fullName = `${form.firstName} ${form.lastName}`;
    const subject = encodeURIComponent(form.subject || `Message from ${fullName}`);
    const body = encodeURIComponent(
      `Name: ${fullName}\nEmail: ${form.email}\n\nMessage:\n${form.message}`
    );
  
    const mailtoLink = `mailto:teamzenyukti@gmail.com?subject=${subject}&body=${body}`;
  
    window.open(mailtoLink, '_blank');
  };

  return (
    <div className="min-h-screen bg-background">
      <main className="pt-20">
        {/* Hero Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
              <span className="text-foreground">Get In</span>
              <span className="bg-gradient-primary bg-clip-text text-transparent">
                {" "}
                Touch
              </span>
            </h1>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-12">
              Have questions, ideas, or want to collaborate? We'd love to hear
              from you. Reach out and let's build something amazing together.
            </p>
          </div>
        </section>

        {/* Contact Form and Info */}
        <section className="py-20 px-4">
          <div className="container mx-auto">
            <div className="grid lg:grid-cols-2 gap-12">
              {/* Contact Form */}
              <Card className="bg-card border-border">
                <CardHeader>
                  <CardTitle className="text-2xl font-bold text-foreground">
                    Send us a Message
                  </CardTitle>
                  <CardDescription className="text-muted-foreground">
                    Fill out the form below and we'll get back to you as soon as
                    possible.
                  </CardDescription>
                </CardHeader>
                <CardContent className="space-y-6">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="space-y-2">
                      <Label htmlFor="firstName" className="text-foreground">
                        First Name
                      </Label>
                      <Input
                        id="firstName"
                        placeholder="John"
                        className="bg-background border-border text-foreground"
                        value={form.firstName}
                        onChange={handleChange}
                      />
                    </div>
                    <div className="space-y-2">
                      <Label htmlFor="lastName" className="text-foreground">
                        Last Name
                      </Label>
                      <Input
                        id="lastName"
                        placeholder="Doe"
                        className="bg-background border-border text-foreground"
                        value={form.lastName}
                        onChange={handleChange}
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email" className="text-foreground">
                      Email
                    </Label>
                    <Input
                      id="email"
                      type="email"
                      placeholder="your-email@domain.com"
                      className="bg-background border-border text-foreground"
                      value={form.email}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="subject" className="text-foreground">
                      Subject
                    </Label>
                    <Input
                      id="subject"
                      placeholder="What's this about?"
                      className="bg-background border-border text-foreground"
                      value={form.subject}
                      onChange={handleChange}
                    />
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="message" className="text-foreground">
                      Message
                    </Label>
                    <Textarea
                      id="message"
                      placeholder="Tell us more..."
                      rows={6}
                      className="bg-background border-border text-foreground"
                      value={form.message}
                      onChange={handleChange}
                    />
                  </div>

                  <Button
                    className="w-full bg-gradient-primary hover:opacity-90 text-white"
                    onClick={handleSubmit}
                  >
                    Send Message
                  </Button>
                </CardContent>
              </Card>

              {/* Contact Methods */}
              <div className="space-y-8">
                <div>
                  <h2 className="text-3xl font-bold text-foreground mb-6">
                    Let's Connect
                  </h2>
                  <p className="text-muted-foreground mb-8">
                    Choose the best way to reach us. We're active across
                    multiple platforms and always ready to help.
                  </p>
                </div>
                <div className="space-y-6">
                  {contactMethods.map((method, index) => {
                    const Icon = method.icon;
                    return (
                      <Card
                        key={index}
                        className="bg-card border-border hover:border-primary/50 transition-colors duration-300"
                      >
                        <CardContent className="p-6">
                          <div className="flex items-start space-x-4">
                            <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                              <Icon className="w-6 h-6 text-white" />
                            </div>
                            <div className="flex-1">
                              <h3 className="font-semibold text-foreground mb-1">
                                {method.title}
                              </h3>
                              <p className="text-muted-foreground text-sm mb-2">
                                {method.description}
                              </p>
                              <a
                                href={method.href}
                                className="text-primary hover:underline"
                                target="_blank"
                                rel="noopener noreferrer"
                              >
                                {method.value}
                              </a>
                            </div>
                          </div>
                        </CardContent>
                      </Card>
                    );
                  })}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Partnership Section  ----------------------This section is added to the Contact page as per the request---------------------- *
        <section className="py-20 px-4 bg-dark-surface/50">
          <div className="container mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
                Partner With Us
              </h2>
              <p className="text-muted-foreground max-w-2xl mx-auto">
                Join forces with ZenYukti to create meaningful impact in the tech community. 
                Let's grow together.
              </p>
            </div>

            <div className="grid md:grid-cols-3 gap-8">
              {partnershipTypes.map((partnership, index) => (
                <Card key={index} className="bg-card border-border">
                  <CardHeader>
                    <CardTitle className="text-xl font-bold text-foreground">
                      {partnership.title}
                    </CardTitle>
                    <CardDescription className="text-muted-foreground">
                      {partnership.description}
                    </CardDescription>
                  </CardHeader>
                  <CardContent>
                    <h4 className="font-medium text-foreground mb-3">What we offer:</h4>
                    <ul className="space-y-2 mb-6">
                      {partnership.benefits.map((benefit, idx) => (
                        <li key={idx} className="text-muted-foreground flex items-start">
                          <span className="w-2 h-2 bg-primary rounded-full mt-2 mr-3 flex-shrink-0"></span>
                          {benefit}
                        </li>
                      ))}
                    </ul>
                    <Button variant="outline" className="w-full border-primary text-primary hover:bg-primary hover:text-white">
                      Learn More
                    </Button>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section> */}
        {/* CTA Section */}
        <section className="py-20 px-4">
          <div className="container mx-auto text-center">
            <Card className="bg-gradient-primary p-8 border-0">
              <CardContent className="p-0">
                <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                  Ready to Join Our Mission?
                </h2>
                <p className="text-white/90 mb-8 max-w-2xl mx-auto">
                  Whether you're a student, professional, or organization,
                  there's a place for you in the ZenYukti community.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button
                    size="lg"
                    variant="secondary"
                    className="bg-white text-primary hover:bg-white/90"
                    onClick={() =>
                      window.open("https://discord.gg/HuBa9r33kW", "_blank")
                    }
                  >
                    Join Community
                  </Button>
                  <Button
  size="lg"
  variant="outline"
  className="border-white text-white hover:bg-white hover:text-primary"
  onClick={() =>
    window.open(
      `mailto:partnerships@zenyukti.in?subject=${encodeURIComponent(
        "Partnership Proposal with ZenYukti"
      )}&body=${encodeURIComponent(
        "Hi ZenYukti Team,\n\nI’m interested in partnering with your community. Please let me know the next steps.\n\nBest regards,\n[Your Name]"
      )}`,
      "_blank"
    )
  }
>
  Become a Partner
</Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </section>
      </main>
    </div>
  );
};

export default Contact;
