import React, { useState } from 'react';
import { Smartphone, Github, MessageCircle, Instagram, Youtube, ExternalLink, Download, Zap, Palette, Rocket, Check, Menu, X } from 'lucide-react';
import romsData from './data/roms.json';
import teamData from './data/team.json';
import featuresData from './data/features.json';
import devicesData from './data/devices.json';
import config from './data/config.json';

const icons = {
  Zap,
  Rocket,
  Palette,
  Smartphone,
  Download
} as const;

export default function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const getSocialIcon = (socialType: string) => {
    const socialIcons = {
      github: Github,
      telegram: MessageCircle,
      instagram: Instagram,
      youtube: Youtube,
      discord: ExternalLink
    };
    return socialIcons[socialType as keyof typeof socialIcons];
  };

  const navItems = ['Home', 'Features', 'Devices', 'ROMs', 'Team', 'Donate'];

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900/90 backdrop-blur-sm border-b border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-display font-bold text-accent-500">
              Dark Elixir
            </a>

            {/* Mobile Menu Button */}
            <button 
              className="md:hidden text-neutral-400 hover:text-accent-500"
              onClick={() => setIsMenuOpen(!isMenuOpen)}
            >
              {isMenuOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>

            {/* Desktop Navigation */}
            <div className="hidden md:flex gap-8 font-display text-sm tracking-wide">
              {navItems.map((item) => (
                <a 
                  key={item} 
                  href={`#${item.toLowerCase()}`} 
                  className="text-neutral-400 hover:text-accent-500 transition-colors"
                >
                  {item}
                </a>
              ))}
            </div>
          </div>

          {/* Mobile Navigation */}
          {isMenuOpen && (
            <div className="md:hidden mt-4 py-4 border-t border-neutral-800">
              <div className="flex flex-col gap-4">
                {navItems.map((item) => (
                  <a 
                    key={item} 
                    href={`#${item.toLowerCase()}`} 
                    className="text-neutral-400 hover:text-accent-500 transition-colors"
                    onClick={() => setIsMenuOpen(false)}
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
          )}
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-24 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight">
            <span className="bg-gradient-to-r from-accent-500 via-accent-400 to-highlight-500 text-transparent bg-clip-text">
              The Future of Android
            </span>
          </h1>
          <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto font-body">
            Dark Elixir redefines mobile experience with cutting-edge performance and stunning customization.
          </p>
          <a 
            href={config.download.primary.url}
            className="inline-flex items-center gap-2 bg-accent-500 px-8 py-3 rounded-lg font-display text-neutral-900 hover:bg-accent-400 transition-colors"
          >
            <Download className="w-5 h-5" /> {config.download.primary.text}
          </a>
        </div>
      </section>

      {/* Features Section */}
      <section id="features" className="container mx-auto px-4 py-24">
        <h2 className="section-title">Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuresData.features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];
            return (
              <div key={index} className="h-full">
                <a href={feature.link} className="block h-full">
                  <div className="card hover:border-accent-500 transition-colors group">
                    <Icon className="w-12 h-12 text-accent-500 mb-6 group-hover:scale-110 transition-transform" />
                    <h3 className="text-2xl font-display font-bold mb-4 text-accent-500">
                      {feature.title}
                    </h3>
                    <p className="text-neutral-300">{feature.description}</p>
                  </div>
                </a>
              </div>
            );
          })}
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="container mx-auto px-4 py-24 bg-neutral-800/20">
        <h2 className="section-title">Supported Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devicesData.devices.map((device, index) => (
            <div key={index} className="card hover:border-accent-500 transition-colors">
              <div className="flex items-center gap-4 mb-4">
                <Smartphone className="w-8 h-8 text-accent-500" />
                <div>
                  <h3 className="text-xl font-bold">{device.name}</h3>
                  <p className="text-neutral-400 text-sm">Codename: {device.codename}</p>
                </div>
              </div>
              <p className="text-neutral-400 mb-6">Maintainer: {device.maintainer}</p>
              <div className="mt-auto">
                <a 
                  href={device.telegram}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 text-accent-500 hover:text-accent-400"
                >
                  <MessageCircle className="w-4 h-4" />
                  Join Telegram Group
                </a>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROMs Section */}
      <section id="roms" className="container mx-auto px-4 py-24">
        <h2 className="section-title">Available ROMs</h2>
        <div className="max-w-4xl mx-auto">
          {romsData.roms.map((rom, index) => (
            <div 
              key={index} 
              className={`relative pl-8 pb-12 last:pb-0 ${
                index !== romsData.roms.length - 1 ? 'before:content-[""] before:absolute before:left-3 before:top-8 before:w-px before:h-full before:bg-accent-500/20' : ''
              }`}
            >
              <div className="relative">
                {/* Connection dot */}
                <div className="absolute left-[-1.85rem] top-3 w-4 h-4 rounded-full bg-neutral-900 border-2 border-accent-500" />
                
                {/* ROM Card */}
                <div className="card hover:border-accent-500 transition-colors">
                  <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                    <div>
                      <h3 className="text-xl font-bold mb-2">{rom.title}</h3>
                      <p className="text-accent-500 text-sm mb-4">{rom.date}</p>
                      <p className="text-neutral-300">{rom.description}</p>
                    </div>
                    <div className="flex-shrink-0">
                      <a 
                        href={config.download.primary.url}
                        className="inline-flex items-center gap-2 bg-accent-500/10 text-accent-500 px-4 py-2 rounded-lg hover:bg-accent-500/20 transition-colors"
                      >
                        <Download className="w-4 h-4" />
                        Download
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-24 bg-neutral-800/20">
        <h2 className="section-title">Our Team</h2>
        <p className="text-neutral-300 text-center mb-16 max-w-3xl mx-auto">
          Elite developers pushing the boundaries of Android customization
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.team.map((member, index) => (
            <div key={index} className="h-full">
              <div className="card hover:border-accent-500 transition-colors">
                <div className="flex items-center gap-4 mb-6">
                  <div className="w-16 h-16 rounded-full overflow-hidden border border-neutral-700 shrink-0">
                    <img 
                      src={member.photo} 
                      alt={member.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <div>
                    <h3 className="text-xl font-bold font-display text-neutral-50">{member.name}</h3>
                    <div className="text-accent-500 text-sm font-display">{member.role}</div>
                  </div>
                </div>
                <p className="text-neutral-300 mb-6 flex-grow">{member.description}</p>
                <div className="flex gap-3">
                  {Object.entries(member.socials).map(([platform, url]) => {
                    const Icon = getSocialIcon(platform);
                    return (
                      <a 
                        key={platform} 
                        href={url}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-neutral-400 hover:text-accent-500 transition-colors"
                      >
                        <Icon className="w-5 h-5" />
                      </a>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}
          
          {/* Hiring Card */}
          <div className="h-full">
            <div className="card flex flex-col items-center justify-center text-center hover:border-accent-500 transition-colors">
              <h3 className="text-xl font-bold font-display mb-4 text-neutral-50">We are hiring!</h3>
              <a href="#contact" className="text-accent-500 hover:text-accent-400 transition-colors inline-flex items-center font-display">
                Join our team <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="container mx-auto px-4 py-24">
        <div className="max-w-6xl mx-auto">
          <h2 className="text-4xl md:text-5xl text-center font-bold mb-16">
            <span className="bg-gradient-to-r from-blue-500 via-cyan-400 to-emerald-400 text-transparent bg-clip-text">
              Support the minds for their Hardwork
            </span>
          </h2>
          
          <div className="cyber-border p-8 bg-neutral-900/50 backdrop-blur">
            <div className="grid md:grid-cols-2 gap-8">
              <div>
                <h3 className="text-2xl font-bold mb-4">Server Donation</h3>
                <p className="text-neutral-400 mb-6">
                  Donating a server to developers working on custom ROMs can make a big difference. Custom 
                  ROM development needs powerful resources for compiling and testing code. By providing a 
                  server, you help speed up development, improve the quality of the ROMs, and enable more 
                  innovative features. This support not only benefits developers by boosting their efficiency 
                  but also contributes to the broader tech community by advancing open-source projects and 
                  enhancing user experiences.
                </p>
                
                <div className="space-y-3">
                  <h4 className="text-lg font-semibold text-accent-500 mb-2">What's included</h4>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent-500" />
                    <span className="text-neutral-300">32 core node</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent-500" />
                    <span className="text-neutral-300">32GB ram</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <Check className="w-5 h-5 text-accent-500" />
                    <span className="text-neutral-300">1Tb storage</span>
                  </div>
                </div>
              </div>
              
              <div className="bg-neutral-800 p-8 rounded-lg flex flex-col justify-center">
                <div className="text-center mb-8">
                  <p className="text-neutral-400 mb-4">Pay once, own it forever</p>
                  <div className="text-5xl font-bold mb-2">
                    <span className="text-white">$5</span>
                    <span className="text-sm text-neutral-400 ml-1">USD</span>
                  </div>
                </div>
                
                <a 
                  href="#contact"
                  className="bg-accent-500 text-neutral-900 py-3 px-6 rounded-lg text-center font-semibold hover:bg-accent-400 transition-colors"
                >
                  Contact us
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-neutral-800 mt-24">
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            <div>
              <h3 className="text-2xl font-display font-bold text-accent-500 mb-4">Dark Elixir</h3>
              <p className="text-neutral-400">Crafting the future of Android customization</p>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Quick Links</h4>
              <div className="space-y-2">
                {navItems.map((item) => (
                  <a 
                    key={item}
                    href={`#${item.toLowerCase()}`}
                    className="block text-neutral-400 hover:text-accent-500 transition-colors"
                  >
                    {item}
                  </a>
                ))}
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Community</h4>
              <div className="space-y-2">
                <a href="#" className="block text-neutral-400 hover:text-accent-500 transition-colors">
                  Telegram Group
                </a>
                <a href="#" className="block text-neutral-400 hover:text-accent-500 transition-colors">
                  GitHub
                </a>
                <a href="#" className="block text-neutral-400 hover:text-accent-500 transition-colors">
                  Discord Server
                </a>
              </div>
            </div>
            
            <div>
              <h4 className="text-lg font-semibold mb-4">Legal</h4>
              <div className="space-y-2">
                <a href="#" className="block text-neutral-400 hover:text-accent-500 transition-colors">
                  Privacy Policy
                </a>
                <a href="#" className="block text-neutral-400 hover:text-accent-500 transition-colors">
                  Terms of Service
                </a>
              </div>
            </div>
          </div>
          
          <div className="border-t border-neutral-800 mt-12 pt-8 text-center text-neutral-400">
            <p>© {new Date().getFullYear()} Dark Elixir. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}