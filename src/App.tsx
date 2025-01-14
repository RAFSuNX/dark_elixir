import React from 'react';
import { Smartphone, Github, MessageCircle, Instagram, Youtube, ExternalLink, Download, Zap, Palette } from 'lucide-react';
import romsData from './data/roms.json';
import teamData from './data/team.json';
import featuresData from './data/features.json';
import devicesData from './data/devices.json';

export default function App() {
  const getSocialIcon = (socialType: string) => {
    const icons = {
      github: Github,
      telegram: MessageCircle,
      instagram: Instagram,
      youtube: Youtube,
      discord: ExternalLink
    };
    return icons[socialType as keyof typeof icons];
  };

  return (
    <div className="min-h-screen bg-neutral-900">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6 border-b border-primary-700/20">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-display font-bold text-accent-500">
            Dark Elixir
          </a>
          <div className="hidden md:flex gap-8 font-display text-sm tracking-wide">
            {['Home', 'About', 'Team', 'Contact', 'Download', 'Donate'].map((item) => (
              <a key={item} href={`#${item.toLowerCase()}`} className="text-neutral-300 hover:text-accent-500 transition-colors duration-300">
                {item}
              </a>
            ))}
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="container mx-auto px-4 py-32 text-center relative">
        <div className="absolute inset-0 bg-gradient-to-b from-primary-900/20 via-transparent to-transparent" />
        <h1 className="text-6xl md:text-7xl font-display font-bold mb-8 leading-tight bg-gradient-to-r from-accent-500 via-highlight-500 to-accent-500 bg-clip-text text-transparent animate-text-shimmer">
          The Future of Android
        </h1>
        <p className="text-neutral-300 text-lg mb-12 max-w-2xl mx-auto font-body">
          Dark Elixir redefines mobile experience with cutting-edge performance and stunning customization.
        </p>
        <div className="flex gap-4 justify-center">
          <button className="bg-neutral-900 border-2 border-accent-500 px-8 py-3 rounded-lg font-display text-accent-500 hover:bg-accent-500 hover:text-neutral-900 transition-all duration-300 flex items-center gap-2">
            <Download className="w-5 h-5" /> Download Now
          </button>
          <button className="bg-neutral-900 border-2 border-highlight-500 px-8 py-3 rounded-lg font-display text-highlight-500 hover:bg-highlight-500 hover:text-neutral-900 transition-all duration-300">
            Learn More
          </button>
        </div>
      </section>

      {/* Features Section */}
      <section id="about" className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-display font-bold text-center mb-16 cyber-glitch">Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-16">
          {featuresData.features.map((feature, index) => (
            <div key={index} className="group">
              <div className="cyber-border">
                <div className="bg-neutral-800/50 rounded-lg p-6 backdrop-blur-sm relative z-10">
                  <img 
                    src={feature.image}
                    alt={feature.title}
                    className="w-full h-48 object-cover rounded-lg mb-6"
                  />
                  <h3 className="text-2xl font-display font-bold mb-4 text-accent-500">
                    {feature.title}
                  </h3>
                  <p className="text-neutral-300 mb-6">{feature.description}</p>
                  <a 
                    href={feature.link}
                    className="inline-flex items-center text-highlight-500 hover:text-highlight-400 transition-colors font-display"
                  >
                    Explore <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Devices Section */}
      <section id="devices" className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-display font-bold text-center mb-16 cyber-glitch">Supported Devices</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {devicesData.devices.map((device, index) => (
            <div key={index} className="group">
              <div className="cyber-border">
                <div className="bg-neutral-800/50 rounded-lg p-6 backdrop-blur-sm relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <Smartphone className="w-8 h-8 text-accent-500" />
                    <div>
                      <h3 className="text-xl font-bold font-display text-neutral-50">{device.name}</h3>
                      <div className="text-highlight-500 text-sm font-display">{device.codename}</div>
                    </div>
                  </div>
                  <div className="space-y-2 text-neutral-300">
                    <p>Maintainer: {device.maintainer}</p>
                    <p>Status: <span className="text-accent-500">{device.status}</span></p>
                  </div>
                  <a 
                    href={device.telegram}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-flex items-center text-highlight-500 hover:text-highlight-400 transition-colors"
                  >
                    <MessageCircle className="w-5 h-5 mr-2" />
                    Support Group
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* ROMs Section */}
      <section id="roms" className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-display font-bold text-center mb-16 bg-gradient-to-r from-accent-500 to-highlight-500 bg-clip-text text-transparent">
          Updates & Releases
        </h2>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-px bg-primary-700/20 transform -translate-x-1/2" />
          
          <div className="space-y-24">
            {romsData.roms.map((rom, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pr-8'} lg:w-1/2`}>
                <div className="cyber-border">
                  <div className="bg-neutral-800/50 rounded-lg p-6 backdrop-blur-sm relative z-10">
                    <div className="text-accent-500 text-sm mb-2 font-display">{rom.date}</div>
                    <h3 className="text-xl font-bold mb-2 font-display text-neutral-50">{rom.title}</h3>
                    <p className="text-neutral-300 mb-4">{rom.description}</p>
                    <a href="#" className="text-highlight-500 hover:text-highlight-400 transition-colors inline-flex items-center font-display text-sm">
                      Channel <ExternalLink className="w-4 h-4 ml-2" />
                    </a>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section id="team" className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-display font-bold text-center mb-4 cyber-glitch">Our Team</h2>
        <p className="text-neutral-300 text-center mb-16 max-w-3xl mx-auto">
          Elite developers pushing the boundaries of Android customization
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {teamData.team.map((member, index) => (
            <div key={index} className="group">
              <div className="cyber-border">
                <div className="bg-neutral-800/50 rounded-lg p-6 backdrop-blur-sm relative z-10">
                  <div className="flex items-center gap-4 mb-4">
                    <div className="w-16 h-16 rounded-full overflow-hidden cyber-border">
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
                  <p className="text-neutral-300 mb-4">{member.description}</p>
                  <div className="flex gap-3">
                    {Object.entries(member.socials).map(([platform, url]) => {
                      const Icon = getSocialIcon(platform);
                      return (
                        <a 
                          key={platform} 
                          href={url}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="text-neutral-400 hover:text-highlight-500 transition-colors"
                        >
                          <Icon className="w-5 h-5" />
                        </a>
                      );
                    })}
                  </div>
                </div>
              </div>
            </div>
          ))}
          
          {/* Hiring Card */}
          <div className="group">
            <div className="cyber-border">
              <div className="bg-neutral-800/50 rounded-lg p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center h-full relative z-10">
                <h3 className="text-xl font-bold font-display mb-4 text-neutral-50">We are hiring!</h3>
                <a href="#" className="text-accent-500 hover:text-accent-400 transition-colors inline-flex items-center font-display">
                  See all positions <ExternalLink className="w-4 h-4 ml-2" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section id="donate" className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-display font-bold text-center mb-32 bg-gradient-to-r from-accent-500 to-highlight-500 bg-clip-text text-transparent">
          Support Our Vision
        </h2>

        <div className="cyber-border">
          <div className="bg-neutral-800/30 rounded-2xl p-12 relative z-10">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
              <div>
                <h3 className="text-2xl font-bold font-display mb-4 text-accent-500">Server Donation</h3>
                <p className="text-neutral-300 mb-8">
                  Support our development by contributing to our server infrastructure. Your donation helps
                  us maintain fast compilation times and reliable testing environments.
                </p>
                <div className="space-y-4 font-display">
                  <div className="flex items-center gap-2 text-neutral-300">
                    <span className="text-highlight-500">✓</span> 32 core node
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <span className="text-highlight-500">✓</span> 1Tb storage
                  </div>
                  <div className="flex items-center gap-2 text-neutral-300">
                    <span className="text-highlight-500">✓</span> 32GB ram
                  </div>
                </div>
              </div>
              <div className="bg-neutral-900/50 rounded-xl p-8 flex flex-col justify-center items-center border border-accent-500/20">
                <div className="text-center mb-8">
                  <div className="text-sm mb-2 font-display text-neutral-300">One-time contribution</div>
                  <div className="text-5xl font-bold font-display text-accent-500">$5</div>
                  <div className="text-sm text-neutral-300 font-display">USD</div>
                </div>
                <button className="bg-accent-500/10 border-2 border-accent-500 text-accent-500 hover:bg-accent-500 hover:text-neutral-900 font-display py-3 px-8 rounded-lg transition-all duration-300 w-full">
                  Contact us
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-primary-700/20">
        <div className="mb-4 font-display">
          <a href="#" className="text-accent-500 hover:text-accent-400 transition-colors duration-300">
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