
import React from 'react';
import { CV_DATA } from './constants.tsx';
import { AIChat } from './components/AIChat';
import { Radar, RadarChart, PolarGrid, PolarAngleAxis, ResponsiveContainer } from 'recharts';

const App: React.FC = () => {
  const radarData = [
    { subject: 'IA/GIO', A: 95 },
    { subject: 'SQL/Data', A: 90 },
    { subject: 'Marketing', A: 85 },
    { subject: 'UX/UI', A: 80 },
    { subject: 'Maths', A: 90 },
    { subject: 'Automation', A: 88 },
  ];

  return (
    <div className="min-h-screen selection:bg-blue-500/30">
      {/* Background Decorative elements */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none -z-10">
        <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-blue-600/10 rounded-full blur-[120px]" />
        <div className="absolute bottom-0 left-0 w-[500px] h-[500px] bg-purple-600/10 rounded-full blur-[120px]" />
      </div>

      <nav className="fixed top-0 left-0 right-0 z-40 glass px-6 py-4 flex justify-between items-center border-b border-white/5">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 bg-gradient-to-tr from-blue-600 to-purple-600 rounded-lg flex items-center justify-center font-bold text-lg">T</div>
          <span className="font-bold tracking-tight text-xl hidden sm:block">Tokré</span>
        </div>
        <div className="flex gap-8 text-sm font-medium text-gray-400">
          <a href="#about" className="hover:text-white transition-colors">Profil</a>
          <a href="#exp" className="hover:text-white transition-colors">Expériences</a>
          <a href="#skills" className="hover:text-white transition-colors">Compétences</a>
          <a href="#interests" className="hover:text-white transition-colors">Hobbies</a>
        </div>
      </nav>

      <main className="max-w-6xl mx-auto px-6 pt-32 pb-24 space-y-32">
        {/* Hero Section */}
        <section id="about" className="relative">
          <div className="max-w-3xl">
            <div className="inline-block px-3 py-1 bg-blue-600/20 text-blue-400 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Stratège IA & Analyste Data
            </div>
            <h1 className="text-6xl md:text-8xl font-extrabold tracking-tighter mb-8 leading-[0.9]">
              THÉOPHILE <br /> 
              <span className="text-gradient">TOKRÉ</span>
            </h1>
            <p className="text-lg md:text-xl text-gray-400 leading-relaxed max-w-2xl">
              {CV_DATA.profile}
            </p>
            <div className="flex gap-4 mt-10">
              <a href="#exp" className="bg-white text-black px-8 py-4 rounded-xl font-bold hover:bg-gray-200 transition-all flex items-center gap-2">
                Voir mon parcours
                <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
              </a>
              <a href="mailto:hello@theophile.ai" className="px-8 py-4 glass rounded-xl font-bold hover:bg-white/10 transition-all">
                Me contacter
              </a>
            </div>
          </div>
        </section>

        {/* Experience Section */}
        <section id="exp">
          <div className="flex items-center gap-4 mb-12">
            <h2 className="text-3xl font-bold">Expériences Professionnelles</h2>
            <div className="flex-1 h-px bg-white/10" />
          </div>
          <div className="space-y-8">
            {CV_DATA.experiences.map((exp, i) => (
              <div key={i} className="group relative glass rounded-3xl p-8 hover:bg-white/5 transition-all border-white/5 hover:border-blue-500/30">
                <div className="flex flex-col md:flex-row justify-between mb-6 gap-4">
                  <div>
                    <h3 className="text-2xl font-bold mb-1">{exp.role}</h3>
                    <div className="flex items-center gap-2 text-blue-400 font-medium">
                      <span>{exp.company}</span>
                      <span className="text-gray-600">•</span>
                      <span className="text-gray-400 text-sm">{exp.type}</span>
                    </div>
                  </div>
                  <div className="px-4 py-2 bg-white/5 rounded-xl border border-white/10 self-start text-sm mono">
                    {exp.period}
                  </div>
                </div>
                <ul className="grid md:grid-cols-2 gap-4">
                  {exp.description.map((item, idx) => (
                    <li key={idx} className="flex gap-3 text-gray-400 text-sm">
                      <div className="mt-1.5 w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </section>

        {/* Skills & Stats Section */}
        <section id="skills" className="grid md:grid-cols-2 gap-12 items-center">
          <div>
            <div className="inline-block px-3 py-1 bg-purple-600/20 text-purple-400 rounded-full text-xs font-bold mb-6 tracking-widest uppercase">
              Compétences
            </div>
            <h2 className="text-4xl font-bold mb-8">Maîtrise Technique</h2>
            <div className="grid grid-cols-2 gap-6">
              {CV_DATA.skills.map((cat, i) => (
                <div key={i} className="space-y-3">
                  <h4 className="text-blue-400 text-xs font-bold uppercase tracking-widest">{cat.title}</h4>
                  <div className="flex flex-wrap gap-2">
                    {cat.skills.map((skill, si) => (
                      <span key={si} className="text-xs px-2 py-1 bg-white/5 border border-white/10 rounded-md text-gray-300">
                        {skill}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className="h-[400px] glass rounded-3xl p-6 flex flex-col items-center">
            <h3 className="text-center text-sm font-medium text-gray-400 mb-4 uppercase tracking-tighter">Profil d'Ingénierie</h3>
            <ResponsiveContainer width="100%" height="100%">
              <RadarChart cx="50%" cy="50%" outerRadius="80%" data={radarData}>
                <PolarGrid stroke="rgba(255,255,255,0.1)" />
                <PolarAngleAxis dataKey="subject" tick={{ fill: '#9ca3af', fontSize: 10 }} />
                <Radar
                  name="Tokré"
                  dataKey="A"
                  stroke="#3b82f6"
                  fill="#3b82f6"
                  fillOpacity={0.5}
                />
              </RadarChart>
            </ResponsiveContainer>
          </div>
        </section>

        {/* Interests & Education Bento */}
        <section id="interests">
          <div className="grid md:grid-cols-3 gap-6">
            <div className="md:col-span-2 glass rounded-3xl p-8">
              <h2 className="text-2xl font-bold mb-8">Formations & Certifications</h2>
              <div className="space-y-6">
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">🎓</div>
                  <div>
                    <h4 className="font-bold">Master Management & Marketing Digital</h4>
                    <p className="text-sm text-gray-400">EIMP (2024 - 2026)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">🎨</div>
                  <div>
                    <h4 className="font-bold">Concepteur UX & Designer Graphique</h4>
                    <p className="text-sm text-gray-400">Autograf Paris (2020 - 2023)</p>
                  </div>
                </div>
                <div className="flex gap-4">
                  <div className="w-12 h-12 glass rounded-xl flex items-center justify-center shrink-0">📐</div>
                  <div>
                    <h4 className="font-bold">Licence Mathématiques & Informatique</h4>
                    <p className="text-sm text-gray-400">Paris Saclay (2017 - 2020)</p>
                  </div>
                </div>
              </div>
            </div>
            
            <div className="space-y-6">
              {CV_DATA.interests.slice(0, 2).map((interest, i) => (
                <div key={i} className="glass rounded-3xl p-6 hover:bg-blue-600/10 transition-colors cursor-default">
                  <div className="text-3xl mb-4">{interest.icon}</div>
                  <h4 className="font-bold mb-2">{interest.title}</h4>
                  <p className="text-sm text-gray-400 leading-snug">{interest.description}</p>
                </div>
              ))}
            </div>

            <div className="glass rounded-3xl p-6 bg-gradient-to-br from-blue-600/20 to-transparent">
              <div className="text-3xl mb-4">⚔️</div>
              <h4 className="font-bold mb-2">Warhammer 40k</h4>
              <p className="text-sm text-gray-400">Analyse de systèmes complexes et stratégie.</p>
            </div>
            <div className="glass rounded-3xl p-6">
              <div className="text-3xl mb-4">🌍</div>
              <h4 className="font-bold mb-2">Exploration</h4>
              <p className="text-sm text-gray-400">Europe, Afrique, Amérique.</p>
            </div>
            <div className="glass rounded-3xl p-6 border-blue-500/30">
              <div className="text-3xl mb-4">📻</div>
              <h4 className="font-bold mb-2">Veille Tech</h4>
              <p className="text-sm text-gray-400">Podcasts & Livres audio sur la stratégie.</p>
            </div>
          </div>
        </section>

        {/* Footer */}
        <footer className="border-t border-white/10 pt-12 text-center text-gray-500 text-sm">
          <p>© {new Date().getFullYear()} Théophile Tokré. Powered by Gemini Flash.</p>
          <div className="flex justify-center gap-6 mt-4">
             <span className="hover:text-white transition-colors cursor-pointer">LinkedIn</span>
             <span className="hover:text-white transition-colors cursor-pointer">GitHub</span>
             <span className="hover:text-white transition-colors cursor-pointer">Portfolio 3D</span>
          </div>
        </footer>
      </main>

      <AIChat />
    </div>
  );
};

export default App;
