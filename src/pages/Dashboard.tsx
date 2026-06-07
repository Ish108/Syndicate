import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Settings, History, PlusCircle, LayoutTemplate, 
  UploadCloud, Wand2, Copy, RefreshCw, Edit3, CheckCircle2, ChevronRight
} from 'lucide-react';
import { Button } from '../components/ui/Button';
import { GlassCard } from '../components/ui/GlassCard';
import { Tabs } from '../components/ui/Tabs';

type OutputPlatform = 'youtube' | 'shorts' | 'ig' | 'x' | 'linkedin';

export const Dashboard: React.FC = () => {
  const [isGenerating, setIsGenerating] = useState(false);
  const [isDone, setIsDone] = useState(false);
  const [activeTab, setActiveTab] = useState<string>('youtube');
  const [loadingText, setLoadingText] = useState('Initializing Context Engine...');

  const platforms = [
    { id: 'youtube', label: 'YouTube Long-Form' },
    { id: 'shorts', label: 'Short-Form Script' },
    { id: 'ig', label: 'IG Reel' },
    { id: 'x', label: 'X Thread' },
    { id: 'linkedin', label: 'LinkedIn Post' },
  ];

  const handleGenerate = () => {
    setIsGenerating(true);
    setIsDone(false);
    
    // Simulate generation process
    setTimeout(() => setLoadingText('Extracting Viral Angles...'), 1500);
    setTimeout(() => setLoadingText('Calibrating Brand Voice...'), 3000);
    setTimeout(() => setLoadingText('Formatting for Platforms...'), 4500);
    
    setTimeout(() => {
      setIsGenerating(false);
      setIsDone(true);
    }, 6000);
  };

  return (
    <div className="min-h-screen flex bg-syndicate-bg text-syndicate-text-primary relative overflow-hidden">
      
      {/* Background ambient gradient specifically for dashboard to maintain the theme */}
      <div className="fixed top-[-20%] left-[-10%] w-[50%] h-[50%] bg-syndicate-accent-navy/10 rounded-full blur-[120px] pointer-events-none mix-blend-screen" />

      {/* Sidebar */}
      <aside className="w-64 border-r border-syndicate-border bg-black/50 backdrop-blur-md hidden md:flex flex-col p-6 z-20">
        <div className="flex items-center space-x-2 mb-12">
          <div className="w-8 h-8 rounded-lg bg-gradient-to-br from-syndicate-accent-navy to-syndicate-accent-emerald flex items-center justify-center shadow-[0_0_15px_rgba(16,185,129,0.3)]">
            <Wand2 className="w-4 h-4 text-white" />
          </div>
          <span className="font-bold tracking-tight">SYNDICATE</span>
        </div>

        <nav className="space-y-2 flex-1">
          <Button variant="ghost" className="w-full justify-start !text-white bg-white/5">
            <PlusCircle className="w-4 h-4 mr-3" /> New Generation
          </Button>
          <Button variant="ghost" className="w-full justify-start text-syndicate-text-secondary">
            <History className="w-4 h-4 mr-3" /> Archive
          </Button>
          <Button variant="ghost" className="w-full justify-start text-syndicate-text-secondary">
            <LayoutTemplate className="w-4 h-4 mr-3" /> Brand Voices
          </Button>
        </nav>

        <div className="mt-auto">
          <Button variant="ghost" className="w-full justify-start text-syndicate-text-secondary">
            <Settings className="w-4 h-4 mr-3" /> Settings
          </Button>
        </div>
      </aside>

      {/* Main Stage */}
      <main className="flex-1 flex flex-col h-screen overflow-y-auto relative z-10 p-6 lg:p-10">
        <div className="max-w-6xl mx-auto w-full space-y-8">
          
          <header>
            <h1 className="text-3xl font-bold mb-2">New Generation</h1>
            <p className="text-syndicate-text-secondary">Configure your inputs and let the machine work.</p>
          </header>

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8">
            
            {/* Input Flow (Left Pane) */}
            <div className="lg:col-span-5 space-y-6">
              
              {/* Module 1: Context */}
              <GlassCard className="p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-syndicate-text-secondary mb-4 flex items-center">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] mr-2 text-white">1</span>
                  Context Engine
                </h2>
                <div className="space-y-4">
                  <div>
                    <label className="text-xs text-syndicate-text-secondary mb-1 block">Business Name / Niche</label>
                    <input type="text" className="w-full bg-black/40 border border-syndicate-border rounded-lg p-2.5 text-sm focus:outline-none focus:border-syndicate-accent-emerald transition-colors" placeholder="e.g. SaaS Startup, AI Tool..." defaultValue="Syndicate AI" />
                  </div>
                  <div>
                    <label className="text-xs text-syndicate-text-secondary mb-1 block">Target Audience</label>
                    <input type="text" className="w-full bg-black/40 border border-syndicate-border rounded-lg p-2.5 text-sm focus:outline-none focus:border-syndicate-accent-emerald transition-colors" placeholder="e.g. Founders, Marketers..." defaultValue="Content Creators & Marketers" />
                  </div>
                </div>
              </GlassCard>

              {/* Module 2: Source Injection */}
              <GlassCard className="p-5">
                <h2 className="text-sm font-bold uppercase tracking-wider text-syndicate-text-secondary mb-4 flex items-center">
                  <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] mr-2 text-white">2</span>
                  Source Injection
                </h2>
                <div className="border-2 border-dashed border-syndicate-border hover:border-syndicate-accent-emerald/50 transition-colors rounded-xl p-8 text-center bg-black/20 cursor-pointer group">
                  <UploadCloud className="w-8 h-8 text-syndicate-text-secondary group-hover:text-syndicate-accent-emerald mx-auto mb-3 transition-colors" />
                  <p className="text-sm font-medium mb-1">Drop PDF, transcript, or paste URL</p>
                  <p className="text-xs text-syndicate-text-secondary">Max file size 50MB</p>
                </div>
              </GlassCard>

              {/* Module 3: Voice Calibration */}
              <GlassCard className="p-5">
                <div className="flex justify-between items-center mb-4">
                  <h2 className="text-sm font-bold uppercase tracking-wider text-syndicate-text-secondary flex items-center">
                    <span className="w-5 h-5 rounded-full bg-white/10 flex items-center justify-center text-[10px] mr-2 text-white">3</span>
                    Voice Calibration
                  </h2>
                  <span className="text-xs text-syndicate-accent-emerald bg-syndicate-accent-emerald/10 px-2 py-1 rounded-full">Optional</span>
                </div>
                <textarea 
                  className="w-full bg-black/40 border border-syndicate-border rounded-lg p-3 text-sm focus:outline-none focus:border-syndicate-accent-emerald transition-colors h-24 resize-none" 
                  placeholder="Paste reference content to mimic tone, vocabulary, and rhythm..."
                />
              </GlassCard>

              {/* Generate Action */}
              <Button 
                variant="primary" 
                className="w-full h-14 text-lg" 
                onClick={handleGenerate}
                disabled={isGenerating}
              >
                {isGenerating ? (
                  <span className="flex items-center">
                    <RefreshCw className="w-5 h-5 mr-2 animate-spin" />
                    Generating...
                  </span>
                ) : (
                  <span className="flex items-center">
                    <Sparkles className="w-5 h-5 mr-2" />
                    Commence Generation
                  </span>
                )}
              </Button>
            </div>

            {/* Output Interface (Right Pane) */}
            <div className="lg:col-span-7 h-full min-h-[600px]">
              
              <AnimatePresence mode="wait">
                
                {/* Empty State */}
                {!isGenerating && !isDone && (
                  <motion.div 
                    key="empty"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="h-full border border-syndicate-border border-dashed rounded-3xl flex flex-col items-center justify-center text-syndicate-text-secondary bg-syndicate-surface/30"
                  >
                    <LayoutTemplate className="w-12 h-12 mb-4 opacity-50" />
                    <p>Awaiting source materials to begin.</p>
                  </motion.div>
                )}

                {/* Loading State */}
                {isGenerating && (
                  <motion.div 
                    key="loading"
                    initial={{ opacity: 0, scale: 0.95 }}
                    animate={{ opacity: 1, scale: 1 }}
                    exit={{ opacity: 0, scale: 0.95 }}
                    className="h-full rounded-3xl flex flex-col items-center justify-center relative overflow-hidden"
                  >
                    <div className="absolute inset-0 bg-syndicate-surface backdrop-blur-xl border border-syndicate-accent-emerald/30 rounded-3xl" />
                    
                    {/* Sweep animation overlay */}
                    <motion.div 
                      className="absolute inset-0 bg-gradient-to-b from-transparent via-syndicate-accent-emerald/10 to-transparent"
                      animate={{ y: ['-100%', '200%'] }}
                      transition={{ duration: 2, repeat: Infinity, ease: "linear" }}
                    />

                    <div className="relative z-10 flex flex-col items-center">
                      <div className="w-16 h-16 border-t-2 border-r-2 border-syndicate-accent-emerald rounded-full animate-spin mb-6" />
                      <p className="font-mono text-syndicate-accent-emerald text-sm tracking-widest uppercase">
                        {loadingText}
                      </p>
                    </div>
                  </motion.div>
                )}

                {/* Done State */}
                {isDone && (
                  <motion.div 
                    key="done"
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="h-full flex flex-col"
                  >
                    <Tabs 
                      tabs={platforms} 
                      activeTab={activeTab} 
                      onChange={setActiveTab} 
                      className="mb-4"
                    />
                    
                    <GlassCard className="flex-1 flex flex-col p-0 overflow-hidden relative group">
                      
                      {/* Action Bar */}
                      <div className="bg-black/40 border-b border-syndicate-border px-4 py-3 flex justify-between items-center">
                        <div className="flex items-center space-x-2">
                          <CheckCircle2 className="w-4 h-4 text-syndicate-accent-emerald" />
                          <span className="text-xs font-mono text-syndicate-text-secondary">SYS.OK_200</span>
                        </div>
                        <div className="flex space-x-2">
                          <Button variant="ghost" size="sm" className="h-8 px-3 text-xs"><Edit3 className="w-3 h-3 mr-1" /> Edit</Button>
                          <Button variant="ghost" size="sm" className="h-8 px-3 text-xs"><RefreshCw className="w-3 h-3 mr-1" /> Re-roll</Button>
                          <Button variant="secondary" size="sm" className="h-8 px-3 text-xs"><Copy className="w-3 h-3 mr-1" /> Copy</Button>
                        </div>
                      </div>

                      {/* Content Area */}
                      <div className="p-6 overflow-y-auto flex-1 font-serif text-lg leading-relaxed text-neutral-300">
                        {activeTab === 'youtube' && (
                          <div className="space-y-4">
                            <p className="font-bold text-white text-xl border-b border-syndicate-border pb-2 mb-4">THE HOOK (0:00 - 0:30)</p>
                            <p>Are you spending 40 hours a week creating content that gets zero traction? Stop.</p>
                            <p>[Visual: B-roll of frustrated creator holding their head, fast cut to a rising stock chart graph overlaid on a glowing neon screen]</p>
                            <p>Because the biggest creators aren't making more content. They are syndicating the content they already have using a psychological framework that forces the algorithm to pay attention.</p>
                            
                            <p className="font-bold text-white text-xl border-b border-syndicate-border pb-2 mt-8 mb-4">THE INTRO (0:30 - 1:30)</p>
                            <p>I used to be exactly where you are...</p>
                          </div>
                        )}

                        {activeTab === 'linkedin' && (
                          <div className="space-y-4">
                            <p>I used to think creating net-new content every day was the only way to win on LinkedIn.</p>
                            <br/>
                            <p>I was wrong.</p>
                            <br/>
                            <p>I spent 14 hours a week writing. It led to burnout, repetitive posts, and flatlining reach.</p>
                            <p>Then I built the Repurposing Engine.</p>
                            <br/>
                            <p>Here are the 3 non-negotiable rules for syndicating content without looking like a bot:</p>
                            <br/>
                            <ul className="list-disc pl-5 space-y-2">
                              <li><strong>Rule 1:</strong> The 80/20 Hook Ratio.</li>
                              <li><strong>Rule 2:</strong> Format native to the platform.</li>
                              <li><strong>Rule 3:</strong> Repackage, don't just repost.</li>
                            </ul>
                            <br/>
                            <p>What is your biggest bottleneck when it comes to content?</p>
                          </div>
                        )}

                        {activeTab !== 'youtube' && activeTab !== 'linkedin' && (
                          <div className="space-y-4">
                            <p>Content for {platforms.find(p => p.id === activeTab)?.label} generated successfully.</p>
                            <p className="text-syndicate-text-secondary italic">Select YouTube or LinkedIn tab to see full mockup content.</p>
                          </div>
                        )}
                      </div>
                    </GlassCard>
                  </motion.div>
                )}
              </AnimatePresence>

            </div>
          </div>
        </div>
      </main>
    </div>
  );
};
