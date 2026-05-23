import { Button } from "@/components/ui/button";
import { ArrowRight, Share2 } from "lucide-react";
import { useEffect, useRef } from 'react';
import { Discord , Github , Users , Code, Whatsapp} from "./icons";

const Hero = () => {
  const canvasRef = useRef(null);
  const animationIdRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let particles = [];
    let mouseX = 0;
    let mouseY = 0;

    // Set canvas size 
    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    // Enhanced particle class with more visual appeal
    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.size = Math.random() * 3 + 1;
        this.speedX = (Math.random() - 0.5) * 0.8;
        this.speedY = (Math.random() - 0.5) * 0.8;
        this.opacity = Math.random() * 0.3 + 0.1; // Increased opacity
        this.maxOpacity = this.opacity;
        this.color = this.getRandomColor();
        this.originalX = this.x;
        this.originalY = this.y;
        this.angle = Math.random() * Math.PI * 2;
        this.drift = Math.random() * 0.03 + 0.01;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.trail = [];
        this.maxTrailLength = 5;
      }

      getRandomColor() {
        const colors = [
          'rgba(147, 51, 234, ', // Purple
          'rgba(168, 85, 247, ', // Violet
          'rgba(192, 132, 252, ', // Violet-300
          'rgba(124, 58, 237, ', // Violet-600
          'rgba(109, 40, 217, ', // Violet-700
          'rgba(236, 72, 153, ', // Pink-500
        ];
        return colors[Math.floor(Math.random() * colors.length)];
      }

      update() {
        // Enhanced floating motion
        this.angle += this.drift;
        this.pulsePhase += this.pulseSpeed;
        
        const floatX = Math.sin(this.angle) * 40;
        const floatY = Math.cos(this.angle * 0.7) * 25;
        
        this.x = this.originalX + floatX + this.speedX;
        this.y = this.originalY + floatY + this.speedY;
        
        // Pulsing opacity
        this.opacity = this.maxOpacity + Math.sin(this.pulsePhase) * 0.1;

        // Update trail
        this.trail.push({ x: this.x, y: this.y });
        if (this.trail.length > this.maxTrailLength) {
          this.trail.shift();
        }

        // Wrap around edges smoothly
        if (this.x < -50) {
          this.x = canvas.width + 50;
          this.originalX = this.x;
          this.trail = [];
        }
        if (this.x > canvas.width + 50) {
          this.x = -50;
          this.originalX = this.x;
          this.trail = [];
        }
        if (this.y < -50) {
          this.y = canvas.height + 50;
          this.originalY = this.y;
          this.trail = [];
        }
        if (this.y > canvas.height + 50) {
          this.y = -50;
          this.originalY = this.y;
          this.trail = [];
        }

        // Enhanced mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 200) {
          const force = (200 - distance) / 200;
          this.x -= dx * force * 0.02;
          this.y -= dy * force * 0.02;
          this.opacity = Math.min(this.maxOpacity * 2, this.opacity + force * 0.3);
          this.size = Math.min(5, this.size + force * 1.5);
        } else {
          this.size = Math.max(1, this.size - 0.05);
        }
      }

      draw() {
        // Draw trail
        for (let i = 0; i < this.trail.length; i++) {
          const trailPoint = this.trail[i];
          const trailOpacity = (i / this.trail.length) * this.opacity * 0.3;
          const trailSize = (i / this.trail.length) * this.size * 0.5;
          
          ctx.beginPath();
          ctx.arc(trailPoint.x, trailPoint.y, trailSize, 0, Math.PI * 2);
          ctx.fillStyle = this.color + trailOpacity + ')';
          ctx.fill();
        }

        // Draw main particle with enhanced glow
        ctx.save();
        ctx.shadowBlur = 15;
        ctx.shadowColor = this.color + this.opacity + ')';
        
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fillStyle = this.color + this.opacity + ')';
        ctx.fill();
        
        // Inner glow
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = this.color + Math.min(1, this.opacity * 1.5) + ')';
        ctx.fill();
        
        ctx.restore();
      }
    }

    // Enhanced network nodes with more visual appeal
    class NetworkNode {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        this.vx = (Math.random() - 0.5) * 0.4;
        this.vy = (Math.random() - 0.5) * 0.4;
        this.connections = [];
        this.radius = Math.random() * 2 + 1;
        this.pulsePhase = Math.random() * Math.PI * 2;
        this.pulseSpeed = Math.random() * 0.02 + 0.01;
        this.baseOpacity = Math.random() * 0.3 + 0.2;
        this.glowIntensity = 0;
      }

      update() {
        this.x += this.vx;
        this.y += this.vy;
        this.pulsePhase += this.pulseSpeed;

        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Mouse interaction
        const dx = mouseX - this.x;
        const dy = mouseY - this.y;
        const distance = Math.sqrt(dx * dx + dy * dy);
        
        if (distance < 120) {
          this.glowIntensity = Math.min(1, this.glowIntensity + 0.05);
        } else {
          this.glowIntensity = Math.max(0, this.glowIntensity - 0.02);
        }
      }

      draw() {
        // Draw enhanced connections
        this.connections.forEach(node => {
          const distance = Math.sqrt((this.x - node.x) ** 2 + (this.y - node.y) ** 2);
          if (distance < 250) {
            ctx.beginPath();
            ctx.moveTo(this.x, this.y);
            ctx.lineTo(node.x, node.y);
            
            const baseOpacity = (250 - distance) / 250 * 0.15;
            const opacity = baseOpacity + (this.glowIntensity + node.glowIntensity) * 0.1;
            
            // Gradient line for more appeal
            const gradient = ctx.createLinearGradient(this.x, this.y, node.x, node.y);
            gradient.addColorStop(0, `rgba(147, 51, 234, ${opacity})`);
            gradient.addColorStop(0.5, `rgba(168, 85, 247, ${opacity * 1.2})`);
            gradient.addColorStop(1, `rgba(192, 132, 252, ${opacity})`);
            
            ctx.strokeStyle = gradient;
            ctx.lineWidth = 0.8 + this.glowIntensity * 0.5;
            ctx.stroke();
          }
        });

        // Draw enhanced node
        const currentRadius = this.radius + Math.sin(this.pulsePhase) * 0.5 + this.glowIntensity * 1.5;
        const currentOpacity = this.baseOpacity + Math.sin(this.pulsePhase) * 0.1 + this.glowIntensity * 0.3;
        
        // Outer glow
        if (this.glowIntensity > 0) {
          ctx.save();
          ctx.shadowBlur = 20;
          ctx.shadowColor = `rgba(168, 85, 247, ${this.glowIntensity * 0.5})`;
          ctx.beginPath();
          ctx.arc(this.x, this.y, currentRadius * 1.5, 0, Math.PI * 2);
          ctx.fillStyle = `rgba(168, 85, 247, ${this.glowIntensity * 0.1})`;
          ctx.fill();
          ctx.restore();
        }
        
        // Main node
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(168, 85, 247, ${currentOpacity})`;
        ctx.fill();
        
        // Inner highlight
        ctx.beginPath();
        ctx.arc(this.x, this.y, currentRadius * 0.6, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(192, 132, 252, ${currentOpacity * 0.8})`;
        ctx.fill();
      }
    }

    // Initialize particles and nodes with more elements
    const initElements = () => {
      particles = [];
      const nodeCount = Math.min(20, Math.floor(canvas.width / 80));
      const particleCount = Math.min(80, Math.floor((canvas.width * canvas.height) / 20000));
      
      // Create network nodes
      for (let i = 0; i < nodeCount; i++) {
        particles.push(new NetworkNode());
      }
      
      // Connect nodes with more interesting patterns
      particles.slice(0, nodeCount).forEach((node, i) => {
        const connections = Math.min(4, Math.floor(Math.random() * 3) + 2);
        for (let j = 0; j < connections; j++) {
          const targetIndex = (i + j + 1) % nodeCount;
          if (targetIndex !== i) {
            node.connections.push(particles[targetIndex]);
          }
        }
      });

      // Create floating particles
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

      animationIdRef.current = requestAnimationFrame(animate);
    };

    // Mouse move handler
    const handleMouseMove = (e) => {
      const rect = canvas.getBoundingClientRect();
      mouseX = e.clientX - rect.left;
      mouseY = e.clientY - rect.top;
    };

    // Setup
    resizeCanvas();
    initElements();
    animate();

    // Event listeners
    window.addEventListener('resize', () => {
      resizeCanvas();
      initElements();
    });
    canvas.addEventListener('mousemove', handleMouseMove);

    // Cleanup
    return () => {
      if (animationIdRef.current) {
        cancelAnimationFrame(animationIdRef.current);
      }
      window.removeEventListener('resize', resizeCanvas);
      canvas.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <section className="min-h-screen flex items-center justify-center relative overflow-hidden">
      {/* Original Background Effects */}
      <div className="absolute inset-0 bg-gradient-dark"></div>
      <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-neon-green/10 rounded-full blur-3xl animate-pulse"></div>
      <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-neon-purple/10 rounded-full blur-3xl animate-pulse delay-1000"></div>
      
      {/* New Dynamic Background Canvas */}
      <canvas
        ref={canvasRef}
        className="absolute inset-0 z-5"
        style={{ background: 'transparent' }}
      />
      
      {/* Enhanced subtle animated elements */}
      <div className="absolute inset-0 z-5">
        {/* Floating geometric shapes with better animations */}
        <div className="absolute top-1/3 left-1/6 w-4 h-4 border border-violet-400/30 rotate-45 animate-pulse" style={{ animationDelay: '0s', animationDuration: '4s' }} />
        <div className="absolute top-2/3 right-1/6 w-3 h-3 border border-purple-400/30 animate-pulse" style={{ animationDelay: '2s', animationDuration: '6s' }} />
        <div className="absolute top-1/2 left-3/4 w-3 h-3 bg-violet-500/25 rounded-full animate-pulse" style={{ animationDelay: '1s', animationDuration: '5s' }} />
        <div className="absolute top-1/4 right-1/3 w-8 h-1 bg-purple-400/20 animate-pulse" style={{ animationDelay: '3s', animationDuration: '7s' }} />
        <div className="absolute bottom-1/3 left-1/2 w-1 h-8 bg-violet-400/20 animate-pulse" style={{ animationDelay: '1.5s', animationDuration: '4.5s' }} />
        
        {/* Additional floating elements for more visual appeal */}
        <div className="absolute top-1/5 left-2/3 w-2 h-2 border-2 border-pink-400/25 rounded-full animate-bounce" style={{ animationDelay: '0.5s', animationDuration: '3s' }} />
        <div className="absolute bottom-1/4 right-2/3 w-6 h-6 border border-violet-300/20 rotate-12 animate-spin" style={{ animationDelay: '2.5s', animationDuration: '20s' }} />
        <div className="absolute top-3/4 left-1/5 w-1 h-1 bg-purple-300/40 animate-ping" style={{ animationDelay: '4s', animationDuration: '3s' }} />
      </div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="text-center max-w-4xl mx-auto">
          {/* Main Heading */}
          <h1 className="font-display font-bold text-5xl sm:text-6xl lg:text-7xl leading-tight mb-6">
            <span className="text-foreground"> Welcome to
               <span className="bg-gradient-primary bg-clip-text text-transparent"> ZenYukti</span>
            </span>
            <br />
          </h1>
          <br />

          {/* Subheading */}
          <p className="text-xl sm:text-2xl text-muted-foreground mb-8 max-w-3xl mx-auto leading-relaxed">
            <span className="text-neon-green font-semibold"> Student-led initiative</span>, enabling 
            community-driven growth in tech.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
            <Button 
              asChild
              size="lg" 
              className="bg-neon-green hover:bg-neon-green/90 shadow-neon text-lg px-8 py-6 group"
              
            >
              <a
               href="https://discord.gg/HuBa9r33kW"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Discord className="w-5 h-5 mr-3" />Join Discord
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
            </a>
            </Button>
            <Button 
              asChild
              size="lg" 
              variant="outline" 
              className="border-neon-purple text-neon-purple hover:bg-neon-purple hover:text-white text-lg px-8 py-6 shadow-purple group"
            >
              <a
              href="https://chat.whatsapp.com/Em0d53VddahBeIEv69W4o8"
              target="_blank"
              rel="noopener noreferrer">
              <Whatsapp className="w-5 h-5 mr-3" />
              WhatsApp
              <ArrowRight className="w-5 h-5 ml-3 group-hover:translate-x-1 transition-transform" />
              </a>
            </Button>
          </div>

          {/* Feature Pills */}
          <div className="flex flex-wrap justify-center gap-4">
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border">
              <Users className="w-4 h-4 " />
              <span className="text-sm font-medium">Community Driven</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border">
              <Code className="w-4 h-4 text-neon-purple" />
              <span className="text-sm font-medium">Open Source</span>
            </div>
            <div className="flex items-center space-x-2 bg-secondary/50 rounded-full px-4 py-2 border border-border">
              <Share2 className="w-4 h-4 text-neon-blue" />
              <span className="text-sm font-medium">Knowledge Sharing</span>
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-neon-green rounded-full flex justify-center">
          <div className="w-1 h-3 bg-neon-green rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;