
import { useEffect } from "react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { ArrowRight, Check, Users, Mail } from "lucide-react";
import { Textarea } from "@/components/ui/textarea";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Checkbox } from "@/components/ui/checkbox";

const Index = () => {
  // Scroll to section if URL has hash on load
  useEffect(() => {
    if (window.location.hash) {
      const id = window.location.hash.substring(1);
      const element = document.getElementById(id);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  // Sample game data
  const games = [
    {
      title: "FlightSim Pro",
      description: "Experience the thrill of flight with our meticulously detailed aircraft and realistic physics. From takeoff to landing, every aspect has been crafted for maximum immersion.",
      image: "https://images.unsplash.com/photo-1487887235947-a955ef187fcc?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "Urban Architect",
      description: "Build and manage your dream city with advanced economic simulations. Balance resources, manage traffic, and watch your city grow in this detailed urban simulator.",
      image: "https://images.unsplash.com/photo-1487958449943-2429e8be8625?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80"
    },
    {
      title: "What's Next?",
      description: "We're constantly innovating and working on the next generation of simulation experiences. Stay tuned for updates!",
      image: "https://images.unsplash.com/photo-1461749280684-dccba630e2f6?ixlib=rb-1.2.1&auto=format&fit=crop&w=1200&q=80",
      isComingSoon: true
    }
  ];

  // Company values
  const values = [
    {
      title: "Authenticity",
      description: "We strive for unparalleled realism, grounding our simulations in meticulous research and accurate mechanics."
    },
    {
      title: "Innovation",
      description: "We leverage the latest technology and creative design to push the boundaries of what simulation games can achieve."
    },
    {
      title: "Player Focus",
      description: "We design engaging and rewarding experiences, listening to our community to build games players love."
    },
    {
      title: "Quality Craftsmanship",
      description: "From code to art, we are committed to the highest standards of development and polish."
    },
    {
      title: "Collaboration",
      description: "We foster a creative and supportive environment where great ideas can flourish."
    }
  ];

  // FAQ data
  const faqs = [
    {
      question: "What types of simulation games do you create?",
      answer: "We specialise in high-fidelity simulations, including flight simulators, vehicle (cars, trucks, specialized machinery) simulators, and city/economic simulation games. Our focus is always on realism and depth."
    },
    {
      question: "What platforms are your games available on?",
      answer: "Platform availability varies per title. Please check the specific game pages for details. We primarily target PC platforms but are always exploring opportunities on consoles where feasible for the simulation experience."
    },
    {
      question: "Are you hiring?",
      answer: "We are always interested in hearing from talented individuals passionate about simulation games. While we may not always have open positions, feel free to reach out via our contact email with your portfolio or CV."
    },
    {
      question: "How can I report a bug or provide feedback?",
      answer: "We value player feedback! Please use the contact form or email address provided on our Contact page. For game-specific issues, check if there are dedicated support channels listed on the game's page or community forums."
    }
  ];

  return (
    <>
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-24 px-4 bg-gradient-to-r from-hello-primary to-hello-secondary text-white">
          <div className="container mx-auto text-center">
            <h1 className="text-4xl md:text-6xl font-bold mb-6 max-w-4xl mx-auto">
              Building Worlds, Simulating Reality.
            </h1>
            <p className="text-xl mb-10 max-w-3xl mx-auto opacity-90">
              HELLO GAMES LIMITED: Crafting immersive simulation experiences with unparalleled detail and realism.
            </p>
            <Button 
              variant="outline" 
              className="text-white border-white hover:bg-white hover:text-hello-primary"
              onClick={() => document.getElementById("games")?.scrollIntoView({ behavior: "smooth" })}
            >
              Explore Our Games <ArrowRight className="ml-2 h-4 w-4" />
            </Button>
          </div>
        </section>

        {/* About Us Section */}
        <section id="about" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Driven by Detail. Defined by Realism.
            </h2>
            <div className="max-w-4xl mx-auto">
              <p className="text-lg leading-relaxed text-gray-700 mb-6">
                Welcome to HELLO GAMES LIMITED. Based in the UK, we are a passionate team of developers, designers, and artists dedicated to pushing the boundaries of simulation gaming. We believe in the power of immersion and specialise in creating intricate, authentic, and engaging simulation experiences.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                From the physics of flight to the complexities of city management and the mechanics of advanced vehicles, our focus is on capturing the essence of reality within a digital world. We combine cutting-edge technology with meticulous research to build worlds that players can truly lose themselves in.
              </p>
            </div>
          </div>
        </section>

        {/* Our Games Section */}
        <section id="games" className="py-20 px-4 bg-hello-bg-alt">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Step Into Our Worlds
            </h2>
            <p className="text-lg text-center text-gray-700 mb-12 max-w-3xl mx-auto">
              Explore our portfolio of simulation titles. Each game is a testament to our commitment to realism, depth, and player engagement. Discover the experiences we've brought to life.
            </p>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {games.map((game, index) => (
                <div key={index} className="bg-white rounded-lg shadow-md overflow-hidden hover:shadow-lg transition-shadow">
                  <div className="h-48 overflow-hidden">
                    <img 
                      src={game.image} 
                      alt={game.title} 
                      className="w-full h-full object-cover transition-transform hover:scale-105 duration-500"
                    />
                  </div>
                  <div className="p-6">
                    <h3 className="text-xl font-bold mb-2 text-hello-primary">{game.title}</h3>
                    <p className="text-gray-700 mb-4">{game.description}</p>
                    {!game.isComingSoon ? (
                      <Button className="bg-hello-primary hover:bg-hello-primary/90">
                        Learn More
                      </Button>
                    ) : (
                      <div className="text-hello-secondary font-medium">Coming Soon</div>
                    )}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Our Values Section */}
        <section id="values" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              The Principles That Guide Us
            </h2>
            
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto">
              {values.map((value, index) => (
                <div key={index} className="p-6 rounded-lg bg-white shadow-sm border border-gray-100 hover:shadow-md transition-shadow">
                  <div className="flex items-start mb-4">
                    <div className="bg-hello-primary rounded-full p-1 mr-3">
                      <Check className="h-5 w-5 text-white" />
                    </div>
                    <h3 className="text-xl font-bold text-hello-text">{value.title}</h3>
                  </div>
                  <p className="text-gray-700">{value.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section id="team" className="py-20 px-4 bg-hello-bg-alt">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-8">
              The Architects Behind the Simulations
            </h2>
            
            <div className="max-w-4xl mx-auto text-center">
              <div className="mb-8">
                <Users className="h-16 w-16 mx-auto text-hello-primary mb-4" />
              </div>
              <p className="text-lg leading-relaxed text-gray-700 mb-4">
                HELLO GAMES LIMITED is powered by a diverse team of talented individuals united by a shared passion for simulation and gaming. While we value our collective effort, we believe our strength comes from the unique expertise each member brings.
              </p>
              <p className="text-lg leading-relaxed text-gray-700">
                We are engineers, artists, designers, and testers dedicated to creating world-class simulation experiences.
              </p>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section id="faq" className="py-20 px-4 bg-white">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
              Frequently Asked Questions
            </h2>
            
            <div className="max-w-3xl mx-auto">
              <Accordion type="single" collapsible className="w-full">
                {faqs.map((faq, index) => (
                  <AccordionItem key={index} value={`item-${index}`}>
                    <AccordionTrigger className="text-left text-lg font-medium hover:text-hello-primary">
                      {faq.question}
                    </AccordionTrigger>
                    <AccordionContent className="text-gray-700">
                      {faq.answer}
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Contact Section */}
        <section id="contact" className="py-20 px-4 bg-hello-bg-alt">
          <div className="container mx-auto">
            <h2 className="text-3xl md:text-4xl font-bold text-center mb-4">
              Get In Touch
            </h2>
            <p className="text-center text-gray-700 mb-12 max-w-2xl mx-auto">
              Have a question, a business inquiry, or just want to say hello? We'd love to hear from you.
            </p>
            
            <div className="max-w-5xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12">
              {/* Contact Info */}
              <div>
                <h3 className="text-xl font-bold mb-4 flex items-center text-hello-primary">
                  <Mail className="mr-2 h-5 w-5" /> Email Us
                </h3>
                <p className="text-gray-700 mb-6">
                  For general inquiries, press, or business development: 
                  <a href="mailto:hello@hellogames.co.uk" className="text-hello-primary hover:underline block mt-1 font-medium">
                    hello@hellogames.co.uk
                  </a>
                </p>
                
                <h3 className="text-xl font-bold mb-4 mt-8 text-hello-primary">
                  Registered Office Address
                </h3>
                <p className="text-gray-700">
                  HELLO GAMES LIMITED<br />
                  Dolphin House, 3 North Street,<br />
                  Guildford, Surrey, England,<br />
                  GU1 4AA, B74 2DG
                </p>
                <p className="text-gray-500 mt-2 text-sm">(For reference, not primary contact)</p>
              </div>
              
              {/* Contact Form */}
              <div>
                <form className="space-y-4">
                  <div>
                    <Label htmlFor="name">Name</Label>
                    <Input 
                      id="name" 
                      name="name" 
                      placeholder="Your name" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="email">Email Address</Label>
                    <Input 
                      id="email" 
                      name="email" 
                      type="email" 
                      placeholder="Your email" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="subject">Subject</Label>
                    <Input 
                      id="subject" 
                      name="subject" 
                      placeholder="Message subject" 
                    />
                  </div>
                  
                  <div>
                    <Label htmlFor="message">Message</Label>
                    <Textarea 
                      id="message" 
                      name="message" 
                      rows={5}
                      placeholder="Your message" 
                    />
                  </div>
                  
                  <div className="flex items-start space-x-2">
                    <Checkbox id="consent" />
                    <Label htmlFor="consent" className="text-sm font-normal">
                      I consent to HELLO GAMES LIMITED collecting my details via this form and agree to the 
                      <a href="/privacy-policy" className="text-hello-primary hover:underline ml-1">Privacy Policy</a>.
                    </Label>
                  </div>
                  
                  <Button type="submit" className="w-full bg-hello-primary hover:bg-hello-primary/90">
                    Send Message
                  </Button>
                </form>
              </div>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
};

export default Index;
