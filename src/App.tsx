import React from 'react';
import { Smartphone, Github, MessageCircle, Instagram, Youtube, ExternalLink } from 'lucide-react';

function App() {
  return (
    <div className="min-h-screen bg-black text-white">
      {/* Navigation */}
      <nav className="container mx-auto px-4 py-6">
        <div className="flex justify-between items-center">
          <a href="#" className="text-2xl font-bold bg-gradient-to-r from-blue-400 to-purple-500 bg-clip-text text-transparent">
            Dark Elixir
          </a>
          <div className="flex gap-8">
            <a href="#" className="hover:text-purple-400 transition-colors">Home</a>
            <a href="#" className="hover:text-purple-400 transition-colors">About</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Team</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Contact</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Download</a>
            <a href="#" className="hover:text-purple-400 transition-colors">Donate</a>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section className="container mx-auto px-4 py-32 text-center">
        <h1 className="text-5xl font-bold mb-8 max-w-4xl mx-auto leading-tight">
          Introducing Dark Elixir: our cutting-edge Android project that redefines mobile experience
        </h1>
        <p className="text-gray-400 text-lg mb-8 max-w-3xl mx-auto">
          Crafted for those who demand more, Dark Elixir delivers enhanced performance, superior customization, 
          and a stunning interface that puts you in control.
        </p>
      </section>

      {/* Features Section */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-blue-500 mb-16">Features</h2>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
          <div>
            <h3 className="text-6xl font-bold mb-8">Stock Experience</h3>
            <p className="text-gray-400 text-lg mb-8">
              The purest version of Android is colloquially known as AOSP, which references the Android Open Source Project. 
              We have researched the users' target stock experience with a little UI enhancement instead of fully customised 
              experience as we implemented every small detail of stock pixel that make your experience enjoyable with a dark 
              elixir touch.
            </p>
            <button className="group flex items-center text-blue-400 hover:text-blue-300 transition-colors">
              <span className="mr-2 font-semibold">SEE MORE</span>
              <span className="transform group-hover:translate-x-1 transition-transform">→</span>
            </button>
          </div>
          <div className="relative">
            <div className="relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1678911820864-e2c567c655d7?auto=format&fit=crop&q=80&w=600&h=600"
                alt="Phone mockup"
                className="w-full h-auto"
              />
              <div className="absolute inset-0 flex items-center justify-center">
                <Smartphone className="w-32 h-32 text-purple-400" />
              </div>
            </div>
            <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[120%] h-[120%] bg-purple-500/20 blur-3xl rounded-full -z-10" />
            <div className="absolute -top-8 right-8 w-12 h-12 bg-purple-500/20 rounded-lg animate-float" />
            <div className="absolute top-1/4 -left-8 w-8 h-8 bg-blue-500/20 rounded-lg animate-float-delay" />
            <div className="absolute bottom-1/4 -right-4 w-10 h-10 bg-pink-500/20 rounded-lg animate-float" />
          </div>
        </div>
      </section>

      {/* Updates & Releases */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-blue-500 mb-4 text-center">Updates & Releases</h2>
        <p className="text-gray-400 text-center mb-16">
          Explore the evolution of our product, from the initial launch to the latest enhancements.
        </p>
        
        <div className="relative">
          <div className="absolute left-1/2 h-full w-px bg-gray-800 transform -translate-x-1/2" />
          
          <div className="space-y-24">
            {[
              {
                title: "Project Matrixx",
                date: "EVERY MONTH OF 2024",
                description: "A sleek and intuitive custom ROM, seamlessly built upon crDroid. Unlock enhanced performance, streamlined customization, and a user-friendly interface for a seamlessly tailored experience."
              },
              {
                title: "TenX OS",
                date: "EVERY MONTH OF 2024",
                description: "Version 3.1.0 propels you into the cosmos with faster processing speeds, enhanced customization options, and new cosmic-themed visual elements. Experience the power of the stars at your fingertips."
              },
              {
                title: "EuclidOS",
                date: "EVERY MONTH OF 2024",
                description: "Discover EuclidOS: a feature-rich, visually stunning custom firmware built on the Android Open Source Project."
              },
              {
                title: "DroidX-UI",
                date: "EVERY MONTH OF 2024",
                description: "Unleash the true potential of your phone! Our custom ROM delivers lightning-fast performance. Apps launch instantly, games run smoother, and everyday tasks feel effortless. Say goodbye to lag and hello to a truly responsive experience that maximizes what your phone can do."
              }
            ].map((release, index) => (
              <div key={index} className={`relative ${index % 2 === 0 ? 'lg:ml-auto lg:pl-8' : 'lg:mr-auto lg:pr-8'} lg:w-1/2`}>
                <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
                  <div className="text-blue-400 text-sm mb-2">{release.date}</div>
                  <h3 className="text-xl font-bold mb-2">{release.title}</h3>
                  <p className="text-gray-400 mb-4">{release.description}</p>
                  <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
                    Channel <ExternalLink className="w-4 h-4 ml-2" />
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold text-blue-500 mb-4 text-center">Our Team</h2>
        <p className="text-gray-400 text-center mb-16 max-w-3xl mx-auto">
          Our team is a passionate group of tech innovators, working together to create cutting-edge,
          user-focused solutions. With diverse expertise and a shared vision, we strive for excellence in
          every project, driving the future of technology forward.
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            {
              name: "Arijit Saha",
              role: "FOUNDER / CEO",
              description: "Owner of dark Elixir and Developer of whyred and many more devices.",
              socials: ["github", "telegram"]
            },
            {
              name: "Guri~",
              role: "DEVELOPER",
              description: "Whyred Developer",
              socials: ["github", "telegram"]
            },
            {
              name: "Ultron",
              role: "TESTER",
              description: "Whyred Rom Tester and gamer",
              socials: ["telegram", "discord"]
            },
            {
              name: "Ashish Technical services",
              role: "YOUTUBER",
              description: "A Youtuber",
              socials: ["instagram", "youtube", "telegram"]
            }
          ].map((member, index) => (
            <div key={index} className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm">
              <div className="mb-4">
                <h3 className="text-xl font-bold">{member.name}</h3>
                <div className="text-purple-400 text-sm">{member.role}</div>
              </div>
              <p className="text-gray-400 mb-4">{member.description}</p>
              <div className="flex gap-3">
                {member.socials.map((social, idx) => {
                  const Icon = {
                    github: Github,
                    telegram: MessageCircle,
                    instagram: Instagram,
                    youtube: Youtube,
                    discord: ExternalLink
                  }[social];
                  return (
                    <a key={idx} href="#" className="text-gray-400 hover:text-purple-400 transition-colors">
                      <Icon className="w-5 h-5" />
                    </a>
                  );
                })}
              </div>
            </div>
          ))}
          
          {/* Hiring Card */}
          <div className="bg-gray-900/50 rounded-lg p-6 backdrop-blur-sm flex flex-col items-center justify-center text-center">
            <h3 className="text-xl font-bold mb-4">We are hiring!</h3>
            <a href="#" className="text-blue-400 hover:text-blue-300 inline-flex items-center">
              See all opening positions <ExternalLink className="w-4 h-4 ml-2" />
            </a>
          </div>
        </div>
      </section>

      {/* Donation Section */}
      <section className="container mx-auto px-4 py-32">
        <h2 className="text-4xl font-bold bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent text-center mb-32">
          Support the minds for their Hardwork
        </h2>

        <div className="bg-gray-900/30 rounded-2xl p-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            <div>
              <h3 className="text-2xl font-bold mb-4">Server Donation</h3>
              <p className="text-gray-400 mb-8">
                Donating a server to developers working on custom ROMs can make a big difference. Custom
                ROM development needs powerful resources for compiling and testing code. By providing a
                server, you help speed up development, improve the quality of the ROMs, and enable more
                innovative features. This support not only benefits developers by boosting their efficiency but also
                contributes to the broader tech community by advancing open-source projects and enhancing
                user experiences.
              </p>
              <div className="space-y-4">
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-blue-400">✓</span> 32 core node
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-blue-400">✓</span> 1Tb storage
                </div>
                <div className="flex items-center gap-2 text-gray-400">
                  <span className="text-blue-400">✓</span> 32GB ram
                </div>
              </div>
            </div>
            <div className="bg-gray-900 rounded-xl p-8 flex flex-col justify-center items-center">
              <div className="text-center mb-8">
                <div className="text-sm mb-2">Pay once, own it forever</div>
                <div className="text-5xl font-bold mb-1">$5</div>
                <div className="text-sm text-gray-400">USD</div>
              </div>
              <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold py-3 px-8 rounded-lg transition-colors w-full">
                Contact us
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="container mx-auto px-4 py-8 text-center border-t border-gray-800">
        <div className="mb-4">
          <a href="#" className="text-purple-400 hover:text-purple-300">Dark Elixir</a>
          <span className="text-gray-600 mx-2">|</span>
          <span className="text-gray-400">We're part of the Dark Elixir family.</span>
        </div>
        <div className="text-gray-600">© Dark Elixir 2024. All rights reserved.</div>
      </footer>
    </div>
  );
}

export default App;