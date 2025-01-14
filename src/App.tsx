import React from 'react';
import { Smartphone, Github, MessageCircle, Instagram, Youtube, ExternalLink, Download, Zap, Palette, Rocket } from 'lucide-react';
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

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Navigation */}
      <nav className="fixed top-0 left-0 right-0 z-50 bg-neutral-900 border-b border-neutral-800">
        <div className="container mx-auto px-4 py-6">
          <div className="flex justify-between items-center">
            <a href="#" className="text-2xl font-display font-bold text-accent-500">
              Dark Elixir
            </a>
            <div className="hidden md:flex gap-8 font-display text-sm tracking-wide">
              {['Home', 'About', 'Devices', 'Updates', 'Team', 'Donate'].map((item) => (
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
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 pt-32 pb-24 mt-16">
        <div className="max-w-4xl mx-auto text-center">
          <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight text-accent-500">
            The Future of Android
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
      <section id="about" className="container mx-auto px-4 py-24">
        <h2 className="section-title">Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {featuresData.features.map((feature, index) => {
            const Icon = icons[feature.icon as keyof typeof icons];
            return (
              <div key={index} className="h-full">
                <div className="card">
                  <Icon className="w-12 h-12 text-accent-500 mb-6" />
                  <h3 className="text-2xl font-display font-bold mb-4 text-accent-500">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300">{feature.description}</p>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-24">
        <h2 className="section-title">Our Team</h2>
        <p className="text-neutral-300 text-center mb-16 max-w-3xl mx-auto">
          Elite developers pushing the boundaries of Android customization
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.team.map((member, index) => (
            <div key={index} className="h-full">
              <div className="card">
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
            <div className="card flex flex-col items-center justify-center text-center">
              <h3 className="text-xl font-bold font-display mb-4 text-neutral-50">We are hiring!</h3>
              <a href="#contact" className="text-accent-500 hover:text-accent-400 transition-colors inline-flex items-center font-display">
                Join our team <ExternalLink className="w-4 h-4 ml-2" />
              </a>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-neutral-800">
        <div className="mb-4 font-display">
          <a href="#" className="text-accent-500 hover:text-accent-400 transition-colors">
            Dark Elixir
          </a>
          <span className="text-neutral-600 mx-2">|</span>
          <span className="text-neutral-400">Crafting the future of Android</span>
        </div>
        <div className="text-neutral-500 font-body">© Dark Elixir 2024. All rights reserved.</div>
      </footer>
    </div>
  );
}