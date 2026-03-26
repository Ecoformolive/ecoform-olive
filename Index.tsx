import { Leaf, Recycle, TreePine, Users, TrendingUp, Globe, Instagram, ArrowDown, Sparkles } from "lucide-react";
import logoImg from "@/assets/logo.jpg";
import heroBg from "@/assets/hero-bg.jpg";
import productImg from "@/assets/product.jpg";
import oliveGroveImg from "@/assets/olive-grove.jpg";
import teamPhoto from "@/assets/team-photo.jpg";

const Navbar = () => (
  <nav className="fixed top-0 w-full z-50 bg-background/80 backdrop-blur-md border-b border-primary/10">
    <div className="container flex items-center justify-between py-3">
      <div className="flex items-center gap-3">
        <img src={logoImg} alt="EcoForm Olive logo" className="h-12 w-12 rounded-full object-cover ring-2 ring-primary/30" />
        <span className="font-display text-xl font-bold text-foreground">EcoForm Olive™</span>
      </div>
      <div className="hidden md:flex items-center gap-8 font-body text-sm font-medium text-muted-foreground">
        <a href="#about" className="hover:text-primary transition-colors">About</a>
        <a href="#product" className="hover:text-primary transition-colors">Product</a>
        <a href="#sustainability" className="hover:text-primary transition-colors">Sustainability</a>
        <a href="#financials" className="hover:text-primary transition-colors">Financials</a>
        <a href="#team" className="hover:text-primary transition-colors">Team</a>
        <a href="#contact" className="inline-block bg-primary text-primary-foreground px-5 py-2 rounded-full hover:opacity-90 transition-opacity">Contact</a>
      </div>
    </div>
  </nav>
);

const Hero = () => (
  <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
    <div className="absolute inset-0">
      <img src={heroBg} alt="Olive pits and branches" className="w-full h-full object-cover" width={1920} height={1080} />
      <div className="absolute inset-0 bg-gradient-to-b from-foreground/70 via-foreground/50 to-primary/40" />
    </div>
    <div className="relative z-10 text-center px-6 max-w-4xl">
      <img src={logoImg} alt="EcoForm Olive logo" className="h-36 w-36 rounded-full object-cover mx-auto mb-8 border-4 border-cream shadow-2xl ring-4 ring-amber/30" />
      <h1 className="font-display text-5xl md:text-7xl font-bold text-cream mb-4 drop-shadow-lg">
        EcoForm Olive™
      </h1>
      <p className="font-body text-lg md:text-xl text-cream/90 max-w-2xl mx-auto mb-10">
        Transforming agricultural waste into the future of sustainable packaging
      </p>
      <div className="flex gap-4 justify-center flex-wrap">
        <a href="#about" className="inline-flex items-center gap-2 bg-secondary text-secondary-foreground font-body font-semibold px-8 py-3 rounded-full hover:opacity-90 transition-all shadow-lg">
          <Sparkles className="h-4 w-4" /> Discover More
        </a>
        <a href="#product" className="inline-flex items-center gap-2 bg-cream/20 backdrop-blur text-cream border border-cream/30 font-body font-semibold px-8 py-3 rounded-full hover:bg-cream/30 transition-all">
          Our Product <ArrowDown className="h-4 w-4" />
        </a>
      </div>
    </div>
  </section>
);

const About = () => (
  <section id="about" className="py-24 px-6">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-primary/10 text-primary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Who We Are</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Executive Summary</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            EcoForm Olive™ is a sustainability-focused student company created through the Junior Achievement Cyprus Company Programme. The company aims to address the environmental impact of traditional protective packaging materials such as plastic fillers, foam inserts, and packing peanuts, which contribute significantly to global plastic pollution.
          </p>
          <p>
            EcoForm offers a biodegradable alternative by transforming olive pits, an agricultural by-product of the Cypriot olive oil industry, into protective packaging inserts. Cyprus produces large quantities of olives each year, leaving behind olive pits that are often discarded as waste.
          </p>
        </div>
        <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            The packaging is designed with a flexible geometric structure that absorbs shocks, reduces movement, and stabilizes delicate products such as glass bottles, cosmetics, and other fragile goods inside shipping boxes.
          </p>
          <p>
            The business model is built on both sustainability and practicality. Since olive pits can be sourced locally at little to no cost, production costs remain low while the product remains competitively priced within the sustainable packaging market.
          </p>
          <div className="bg-gradient-to-r from-primary/10 to-teal/10 border-l-4 border-secondary p-5 rounded-r-xl">
            <p className="text-foreground font-medium italic">
              "Our mission is to prove that sustainability and business success go hand in hand."
            </p>
            <span className="text-sm text-muted-foreground mt-2 block">— CEO, Alexandra Pala</span>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Product = () => (
  <section id="product" className="py-24 px-6 bg-gradient-to-br from-card via-card to-primary/5">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Innovation</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Product</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-center">
        <div className="relative">
          <div className="absolute -inset-4 bg-gradient-to-br from-primary/20 to-secondary/20 rounded-3xl blur-xl" />
          <img src={productImg} alt="EcoForm biodegradable packaging insert" className="relative rounded-2xl shadow-2xl w-full" loading="lazy" width={1024} height={1024} />
        </div>
        <div className="space-y-6">
          <p className="font-body text-muted-foreground leading-relaxed">
            EcoForm's product is a box with a protective packaging insert designed to hold fragile items securely inside shipping boxes or products in stores. Its flexible geometric structure absorbs shocks, reduces movement, and helps prevent damage during transport.
          </p>
          <p className="font-body text-muted-foreground leading-relaxed">
            Unlike plastic-based protective materials, EcoForm inserts are biodegradable and made from agricultural waste.
          </p>
          <div className="grid grid-cols-3 gap-4 pt-4">
            {[
              { icon: Leaf, label: "Biodegradable", color: "text-primary" },
              { icon: Recycle, label: "Circular Economy", color: "text-teal" },
              { icon: TreePine, label: "Zero Waste", color: "text-sage" },
            ].map(({ icon: Icon, label, color }) => (
              <div key={label} className="text-center p-4 bg-background rounded-xl border border-primary/10 hover:border-primary/30 hover:shadow-md transition-all">
                <Icon className={`h-8 w-8 ${color} mx-auto mb-2`} />
                <span className="font-body text-sm font-medium text-foreground">{label}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Operations = () => (
  <section className="py-24 px-6">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-teal/10 text-teal font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Process</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">How It Works</h2>
      </div>
      
      <div className="grid md:grid-cols-4 gap-6">
        {[
          { step: "01", title: "Source", desc: "Olive pits collected from local olive oil producers free of charge", gradient: "from-primary/15 to-primary/5" },
          { step: "02", title: "Process", desc: "Pits are cleaned, dried, and ground into smaller particles", gradient: "from-teal/15 to-teal/5" },
          { step: "03", title: "Combine", desc: "Mixed with natural binding materials to create the composite", gradient: "from-secondary/15 to-secondary/5" },
          { step: "04", title: "Shape", desc: "Formed into protective packaging inserts with geometric structure", gradient: "from-sage/15 to-sage/5" },
        ].map((item) => (
          <div key={item.step} className={`bg-gradient-to-b ${item.gradient} p-6 rounded-2xl border border-primary/10 hover:shadow-lg hover:-translate-y-1 transition-all`}>
            <span className="font-display text-4xl font-bold text-secondary/40">{item.step}</span>
            <h3 className="font-display text-xl font-bold text-foreground mt-2 mb-3">{item.title}</h3>
            <p className="font-body text-sm text-muted-foreground leading-relaxed">{item.desc}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Sustainability = () => (
  <section id="sustainability" className="relative py-24 px-6 overflow-hidden">
    <div className="absolute inset-0">
      <img src={oliveGroveImg} alt="Olive grove in Cyprus" className="w-full h-full object-cover" loading="lazy" width={1920} height={800} />
      <div className="absolute inset-0 bg-gradient-to-br from-olive-dark/85 via-foreground/70 to-teal/40" />
    </div>
    <div className="relative z-10 container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-cream/20 text-cream font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4 backdrop-blur-sm">Impact</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-cream">Sustainability Impact</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-8">
        {[
          { title: "Environmental Impact", text: "Over 3 million olive trees are cultivated across Cyprus, producing abundant agricultural by-products each year. EcoForm repurposes this waste stream into biodegradable packaging, eliminating the need for new raw material extraction.", icon: Leaf },
          { title: "Ethical Sourcing", text: "Olive pits are collected from local olive oil producers who would otherwise discard them as waste. No additional harvesting, land use, or deforestation is required, supporting a local circular economy.", icon: Globe },
          { title: "Social Responsibility", text: "EcoForm Olive enables businesses to align their sustainability values with every stage of their product journey, allowing companies to present and ship their products in genuinely eco-friendly packaging.", icon: Users },
          { title: "Long-term Sustainability", text: "Water used during material formation is continuously reused, minimising resource consumption. With Cyprus producing significant quantities of olives each year, the supply of olive pit by-products remains abundant.", icon: TreePine },
        ].map((item) => (
          <div key={item.title} className="bg-cream/10 backdrop-blur-md border border-cream/20 p-8 rounded-2xl hover:bg-cream/15 transition-all group">
            <item.icon className="h-8 w-8 text-amber mb-4 group-hover:scale-110 transition-transform" />
            <h3 className="font-display text-xl font-bold text-cream mb-4">{item.title}</h3>
            <p className="font-body text-cream/85 leading-relaxed">{item.text}</p>
          </div>
        ))}
      </div>
    </div>
  </section>
);

const Financials = () => (
  <section id="financials" className="py-24 px-6 bg-gradient-to-br from-card to-accent/20">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-secondary/10 text-secondary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Numbers</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Financial Results</h2>
      </div>
      
      <div className="grid md:grid-cols-3 gap-6 mb-12">
        {[
          { label: "Units Sold", value: "500", icon: TrendingUp, color: "text-primary" },
          { label: "Revenue", value: "€400", icon: Sparkles, color: "text-secondary" },
          { label: "Gross Profit", value: "€275", icon: TrendingUp, color: "text-teal" },
        ].map(({ label, value, icon: Icon, color }) => (
          <div key={label} className="bg-background rounded-2xl p-8 text-center border border-primary/10 hover:shadow-lg transition-all">
            <Icon className={`h-8 w-8 ${color} mx-auto mb-3`} />
            <div className="font-display text-3xl font-bold text-foreground">{value}</div>
            <div className="font-body text-sm text-muted-foreground mt-1">{label}</div>
          </div>
        ))}
      </div>

      <div className="grid md:grid-cols-2 gap-12">
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Cost Structure per Unit</h3>
          <div className="bg-background rounded-2xl overflow-hidden border border-primary/10 shadow-sm">
            <table className="w-full font-body">
              <thead>
                <tr className="bg-gradient-to-r from-primary to-teal text-primary-foreground">
                  <th className="text-left p-4 font-semibold">Cost Category</th>
                  <th className="text-right p-4 font-semibold">Cost (€)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Olive pits (raw material)", "0.00"],
                  ["Processing & preparation", "0.05"],
                  ["Natural binding materials", "0.08"],
                  ["Manufacturing & shaping", "0.07"],
                  ["Packaging & logistics", "0.05"],
                  ["Total Production Cost", "0.25"],
                ].map(([cat, cost], i, arr) => (
                  <tr key={cat} className={`border-b last:border-0 ${i === arr.length - 1 ? "font-bold text-foreground bg-primary/5" : "text-muted-foreground"}`}>
                    <td className="p-4">{cat}</td>
                    <td className="p-4 text-right">{cost}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        
        <div>
          <h3 className="font-display text-2xl font-bold text-foreground mb-6">Financial Summary</h3>
          <div className="bg-background rounded-2xl overflow-hidden border border-primary/10 shadow-sm">
            <table className="w-full font-body">
              <thead>
                <tr className="bg-gradient-to-r from-secondary to-amber text-secondary-foreground">
                  <th className="text-left p-4 font-semibold">Item</th>
                  <th className="text-right p-4 font-semibold">Amount (€)</th>
                </tr>
              </thead>
              <tbody>
                {[
                  ["Selling Price", "0.80"],
                  ["Production Cost", "0.25"],
                  ["Gross Profit per Unit", "0.55"],
                ].map(([item, amt], i, arr) => (
                  <tr key={item} className={`border-b last:border-0 ${i === arr.length - 1 ? "font-bold text-foreground bg-secondary/5" : "text-muted-foreground"}`}>
                    <td className="p-4">{item}</td>
                    <td className="p-4 text-right">{amt}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  </section>
);

const Team = () => (
  <section id="team" className="py-24 px-6">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-primary/10 text-primary font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">People</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Our Team</h2>
      </div>
      
      <div className="mb-12">
        <img src={teamPhoto} alt="The EcoForm Olive team at the International School of Paphos" className="rounded-2xl shadow-2xl w-full max-w-4xl mx-auto object-cover ring-4 ring-primary/10" loading="lazy" />
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 gap-6">
        {[
          { name: "Alexandra Pala", role: "CEO", color: "from-primary/20 to-teal/10" },
          { name: "Ioanna Vasiliou", role: "CPO", color: "from-teal/20 to-sage/10" },
          { name: "Athina Michaelides", role: "Sustainability & Impact Officer", color: "from-sage/20 to-primary/10" },
          { name: "Sotiris Paphitis", role: "CFO", color: "from-secondary/20 to-amber/10" },
          { name: "Ekaterina Mazurenko", role: "COO", color: "from-amber/15 to-secondary/10" },
          { name: "George Constantinou", role: "CMO", color: "from-primary/15 to-secondary/10" },
        ].map(({ name, role, color }) => (
          <div key={name} className={`bg-gradient-to-br ${color} border border-primary/10 rounded-2xl p-6 text-center hover:shadow-lg hover:-translate-y-1 transition-all`}>
            <div className="w-14 h-14 rounded-full bg-primary/15 flex items-center justify-center mx-auto mb-4">
              <Users className="h-6 w-6 text-primary" />
            </div>
            <h3 className="font-display text-lg font-bold text-foreground">{name}</h3>
            <p className="font-body text-sm text-muted-foreground mt-1">{role}</p>
          </div>
        ))}
      </div>
      
      <div className="mt-12 bg-gradient-to-r from-primary/5 via-teal/5 to-secondary/5 border border-primary/10 rounded-2xl p-8 md:p-12 text-center max-w-3xl mx-auto">
        <p className="font-body text-muted-foreground leading-relaxed mb-4">
          Effective teamwork and communication were essential to the development of EcoForm Olive™. Each team member was assigned a specific role, allowing responsibilities to be clearly divided. Regular meetings were held to discuss progress, evaluate challenges, and coordinate tasks.
        </p>
        <p className="font-body text-sm text-muted-foreground">
          <strong className="text-foreground">Teacher:</strong> Dijana Caric · <strong className="text-foreground">Mentor:</strong> Savvas Karakoullis · <strong className="text-foreground">School:</strong> International School of Paphos
        </p>
      </div>
    </div>
  </section>
);

const Responsibility = () => (
  <section className="py-24 px-6 bg-gradient-to-br from-card to-primary/5">
    <div className="container max-w-6xl">
      <div className="text-center mb-16">
        <span className="inline-block bg-teal/10 text-teal font-body font-semibold text-sm px-4 py-1.5 rounded-full mb-4">Values</span>
        <h2 className="font-display text-4xl md:text-5xl font-bold text-foreground">Social, Ethical & Environmental Responsibility</h2>
      </div>
      
      <div className="grid md:grid-cols-2 gap-12 items-start">
        <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            Environmental responsibility is the core principle behind EcoForm Olive™. The company focuses on transforming olive pits, a common agricultural waste product in Cyprus, into biodegradable packaging material.
          </p>
          <p>
            By repurposing this waste material, EcoForm reduces the need for plastic-based protective packaging while also promoting the use of circular economy practices. This approach contributes to reducing environmental impact and supports more sustainable production methods.
          </p>
        </div>
        <div className="space-y-6 font-body text-muted-foreground leading-relaxed">
          <p>
            In addition to environmental benefits, the concept also highlights how local agricultural by-products can be used to create innovative business opportunities while supporting sustainability goals.
          </p>
          <p>
            EcoForm educates people and encourages them to think beyond just the product they are purchasing. We aim to raise awareness about the impact packaging has on our environment, prompting consumers to consider not only what they buy, but also how it is packaged.
          </p>
        </div>
      </div>
    </div>
  </section>
);

const Footer = () => (
  <footer id="contact" className="bg-gradient-to-br from-foreground to-olive-dark py-16 px-6">
    <div className="container max-w-6xl">
      <div className="grid md:grid-cols-3 gap-12 items-start">
        <div>
          <div className="flex items-center gap-3 mb-4">
            <img src={logoImg} alt="EcoForm Olive" className="h-10 w-10 rounded-full object-cover ring-2 ring-cream/30" />
            <span className="font-display text-xl font-bold text-cream">EcoForm Olive™</span>
          </div>
          <p className="font-body text-cream/70 text-sm leading-relaxed">
            Transforming agricultural waste into the future of sustainable packaging. A Junior Achievement Cyprus Company Programme project.
          </p>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-cream mb-4">Connect</h4>
          <div className="space-y-3">
            <a href="https://www.instagram.com/ecoform_olive" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2 font-body text-cream/70 hover:text-amber transition-colors text-sm">
              <Instagram className="h-4 w-4" /> @ecoform_olive
            </a>
            <a href="#" className="flex items-center gap-2 font-body text-cream/70 hover:text-amber transition-colors text-sm">
              <Globe className="h-4 w-4" /> EcoForm Olive Website
            </a>
          </div>
        </div>
        <div>
          <h4 className="font-display text-lg font-bold text-cream mb-4">Quick Links</h4>
          <div className="space-y-2 font-body text-sm">
            {["About", "Product", "Sustainability", "Financials", "Team"].map((link) => (
              <a key={link} href={`#${link.toLowerCase()}`} className="block text-cream/70 hover:text-amber transition-colors">{link}</a>
            ))}
          </div>
        </div>
      </div>
      <div className="border-t border-cream/20 mt-12 pt-8 text-center">
        <p className="font-body text-cream/50 text-sm">© 2025–2026 EcoForm Olive™. All rights reserved.</p>
      </div>
    </div>
  </footer>
);

const Index = () => (
  <main className="overflow-hidden">
    <Navbar />
    <Hero />
    <About />
    <Product />
    <Operations />
    <Sustainability />
    <Financials />
    <Team />
    <Responsibility />
    <Footer />
  </main>
);

export default Index;
