import React, { useState, useEffect } from 'react';
import { Terminal, GitBranch, GitMerge, Cloud, ShieldAlert, Trophy, ArrowRight, ArrowLeft, GitCommit, GitPullRequest } from 'lucide-react';

export default function App() {
  const [currentSlide, setCurrentSlide] = useState(0);

  // Navegación con teclado
  useEffect(() => {
    const handleKeyDown = (e) => {
      if (e.key === 'ArrowRight') nextSlide();
      if (e.key === 'ArrowLeft') prevSlide();
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [currentSlide]);

  const nextSlide = () => setCurrentSlide((prev) => Math.min(prev + 1, slides.length - 1));
  const prevSlide = () => setCurrentSlide((prev) => Math.max(prev - 1, 0));

  const slides = [
    // DIAPOSITIVA 1: Portada
    {
      id: 'portada',
      content: (
        <div className="flex flex-col items-center justify-center h-full space-y-12 animate-fade-in text-center">
          <div className="relative group cursor-pointer">
            <div className="absolute -inset-1 bg-gradient-to-r from-purple-600 to-blue-600 rounded-lg blur opacity-25 group-hover:opacity-75 transition duration-1000 group-hover:duration-200"></div>
            <h1 className="relative text-8xl md:text-9xl font-black text-transparent bg-clip-text bg-gradient-to-br from-yellow-400 via-yellow-500 to-orange-500 font-mono drop-shadow-[0_5px_5px_rgba(0,0,0,0.8)] tracking-tighter">
              &lt;GIT/&gt;
            </h1>
          </div>
          
          <div className="space-y-4">
            <h2 className="text-3xl md:text-4xl font-bold text-white tracking-widest uppercase">
              Taller de Supervivencia Colaborativa
            </h2>
            <p className="text-xl text-slate-400 max-w-2xl mx-auto font-light">
              De la Piscina al caos de los proyectos en grupo (y cómo evitarlo).
            </p>
          </div>

          <div className="flex flex-wrap justify-center gap-6 text-sm text-slate-500 pt-12 border-t border-slate-800 w-3/4">
            <span>42 MÁLAGA</span>
            <span>•</span>
            <span>Fundación Telefónica</span>
            <span>•</span>
            <span>Ayuntamiento de Málaga</span>
            <span>•</span>
            <span>Junta de Andalucía</span>
          </div>
        </div>
      )
    },

    // DIAPOSITIVA 2: Git vs GitHub
    {
      id: 'conceptos',
      content: (
        <div className="flex flex-col h-full animate-fade-in px-8">
          <h2 className="text-5xl font-mono font-bold text-yellow-400 mb-12 flex items-center gap-4">
            <Terminal size={48} className="text-slate-100" />
            Git vs GitHub
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 h-full">
            {/* Git Card */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-blue-500 transition-colors">
              <div className="w-16 h-16 bg-blue-500/20 rounded-xl flex items-center justify-center mb-6">
                <Terminal size={32} className="text-blue-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">Git</h3>
              <p className="text-blue-400 font-mono mb-4 bg-slate-900 p-2 rounded inline-block">&gt; Local</p>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  La <strong>Máquina del Tiempo</strong> de tu ordenador.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  Lleva el registro exacto de cada coma que cambias.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-green-500 mt-1">✓</span>
                  Donde ocurre el "trabajo duro" mediante la terminal.
                </li>
              </ul>
            </div>

            {/* GitHub Card */}
            <div className="bg-slate-800/50 p-8 rounded-2xl border border-slate-700 hover:border-purple-500 transition-colors">
              <div className="w-16 h-16 bg-purple-500/20 rounded-xl flex items-center justify-center mb-6">
                <Cloud size={32} className="text-purple-400" />
              </div>
              <h3 className="text-3xl font-bold text-white mb-4">GitHub / Gitea</h3>
              <p className="text-purple-400 font-mono mb-4 bg-slate-900 p-2 rounded inline-block">&gt; Nube</p>
              <ul className="space-y-4 text-slate-300 text-lg">
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">★</span>
                  El <strong>Escaparate</strong> en la web.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">★</span>
                  Interfaz visual para guardar copias de seguridad de Git.
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-yellow-500 mt-1">★</span>
                  Perfecto para debatir código (Pull Requests) y colaborar.
                </li>
              </ul>
            </div>
          </div>
        </div>
      )
    },

    // DIAPOSITIVA 3: Ramas
    {
      id: 'ramas',
      content: (
        <div className="flex flex-col h-full animate-fade-in px-8">
          <h2 className="text-5xl font-mono font-bold text-yellow-400 mb-8 flex items-center gap-4">
            &lt;RAMAS/&gt;
          </h2>
          
          <div className="bg-slate-900 border border-slate-700 rounded-xl p-8 mb-8 flex items-center gap-6">
            <ShieldAlert size={48} className="text-red-500 flex-shrink-0" />
            <div>
              <h3 className="text-2xl font-bold text-white mb-2">El Problema de push_swap</h3>
              <p className="text-slate-400">Si los 3 del grupo editáis el <code className="text-green-400 bg-slate-800 px-2 py-1 rounded">main.c</code> y hacéis <code className="text-red-400">push</code> a la vez... el caos (y los conflictos) está asegurado.</p>
            </div>
          </div>

          <div className="flex-grow flex flex-col md:flex-row gap-8">
            <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border-l-4 border-blue-500 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-blue-400 mb-4 font-mono flex items-center gap-2">
                <GitBranch size={24}/> main
              </h3>
              <p className="text-slate-300 mb-4">La versión <strong>SAGRADA</strong>. Aquí no se programa, aquí solo llega el código que funciona perfecto y está listo para la Moulinette.</p>
              <div className="absolute right-0 bottom-0 opacity-10">
                <GitCommit size={120} />
              </div>
            </div>

            <div className="flex items-center justify-center">
              <GitPullRequest size={48} className="text-slate-500 animate-pulse" />
            </div>

            <div className="flex-1 bg-slate-800/50 p-6 rounded-xl border-l-4 border-green-500 relative overflow-hidden">
              <h3 className="text-2xl font-bold text-green-400 mb-4 font-mono flex items-center gap-2">
                <GitBranch size={24}/> feature/*
              </h3>
              <p className="text-slate-300 mb-4">Tus <strong>Universos Paralelos</strong>. Aquí haces pruebas, rompes todo, lo arreglas y cuando está perfecto... lo unes a <code className="text-blue-400">main</code>.</p>
              <div className="absolute right-0 bottom-0 opacity-10">
                <GitMerge size={120} />
              </div>
            </div>
          </div>
        </div>
      )
    },

    // DIAPOSITIVA 4: Comandos
    {
      id: 'comandos',
      content: (
        <div className="flex flex-col h-full animate-fade-in px-8">
          <h2 className="text-5xl font-mono font-bold text-yellow-400 mb-12">
            &lt;COMANDOS DE GIT/&gt;
          </h2>
          
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Básico */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-slate-300">Básico</h3>
                <span className="text-xs bg-slate-700 text-slate-300 px-2 py-1 rounded">Modo Supervivencia</span>
              </div>
              <p className="font-mono text-green-400 bg-black/50 p-4 rounded-lg text-lg">
                init, add, commit, push, pull
              </p>
            </div>

            {/* Intermedio (FOCUS) */}
            <div className="bg-blue-900/40 p-6 rounded-xl border border-blue-500 shadow-[0_0_15px_rgba(59,130,246,0.3)] transform scale-105 transition-transform">
              <div className="flex items-center justify-between mb-4">
                <h3 className="text-2xl font-bold text-blue-400">Intermedio (Objetivo CTF)</h3>
                <span className="text-xs bg-blue-600 text-white px-2 py-1 rounded animate-pulse">¡HOY!</span>
              </div>
              <p className="font-mono text-blue-300 bg-black/60 p-4 rounded-lg text-lg">
                branch, checkout, switch, merge, stash
              </p>
            </div>

            {/* Avanzado */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-purple-400 mb-4">Avanzado</h3>
              <p className="font-mono text-purple-300 bg-black/50 p-4 rounded-lg text-lg">
                rebase, revert, cherry-pick, blame
              </p>
            </div>

            {/* Experto */}
            <div className="bg-slate-800/80 p-6 rounded-xl border border-slate-700">
              <h3 className="text-2xl font-bold text-red-400 mb-4">Experto (Magia Oscura)</h3>
              <p className="font-mono text-red-300 bg-black/50 p-4 rounded-lg text-lg">
                commit --amend, reflog, hooks, fsck
              </p>
            </div>
          </div>
        </div>
      )
    },

    // DIAPOSITIVA 5: A Trabajar (CTF)
    {
      id: 'ctf',
      content: (
        <div className="flex flex-col items-center justify-center h-full animate-fade-in px-8">
          <Trophy size={80} className="text-yellow-400 mb-8 animate-bounce" />
          
          <h2 className="text-6xl font-mono font-black text-white mb-6 text-center">
            &lt;A TRABAJAR/&gt;
          </h2>
          
          <p className="text-2xl text-slate-400 mb-12 text-center max-w-3xl">
            Se acabó la teoría. Es hora de mancharse las manos en la terminal resolviendo un CTF (Capture The Flag).
          </p>

          <div className="w-full max-w-2xl bg-black rounded-lg border border-slate-700 shadow-2xl overflow-hidden">
            {/* Terminal Header */}
            <div className="bg-slate-800 px-4 py-2 flex items-center gap-2 border-b border-slate-700">
              <div className="w-3 h-3 rounded-full bg-red-500"></div>
              <div className="w-3 h-3 rounded-full bg-yellow-500"></div>
              <div className="w-3 h-3 rounded-full bg-green-500"></div>
              <span className="ml-4 text-xs text-slate-400 font-mono">sensei@42malaga: ~/ctf-git</span>
            </div>
            {/* Terminal Body */}
            <div className="p-6 font-mono text-lg space-y-3">
              <p className="text-green-400"><span className="text-purple-400">➜</span>  <span className="text-blue-400">~</span> ./start_ctf.sh</p>
              <p className="text-slate-300 animate-pulse">Iniciando simulador de repositorios...</p>
              <p className="text-yellow-400 mt-4">⚠️ Misión: Supera los 3 niveles usando comandos Git.</p>
              <p className="text-yellow-400">🏁 Cada nivel completado te dará una Flag (bandera).</p>
              <p className="text-green-400 mt-4 font-bold">&gt; Nivel 1: Universos Paralelos [CARGADO]</p>
              <p className="text-slate-500 mt-8">Presiona INTRO para empezar...</p>
            </div>
          </div>
        </div>
      )
    }
  ];

  return (
    <div className="min-h-screen bg-slate-950 text-slate-100 font-sans flex flex-col selection:bg-yellow-500/30">
      {/* Barra de Progreso Superior */}
      <div className="h-1 bg-slate-800 w-full">
        <div 
          className="h-full bg-gradient-to-r from-yellow-400 to-yellow-600 transition-all duration-500 ease-out"
          style={{ width: `${((currentSlide + 1) / slides.length) * 100}%` }}
        ></div>
      </div>

      {/* Contenedor Principal (Diapositiva) */}
      <main className="flex-grow flex items-center justify-center p-4 md:p-12 overflow-hidden relative">
        <div className="w-full max-w-6xl h-[80vh] flex flex-col justify-center">
          {slides[currentSlide].content}
        </div>
      </main>

      {/* Controles Inferiores */}
      <footer className="bg-slate-900 border-t border-slate-800 px-6 py-4 flex items-center justify-between">
        <div className="text-slate-500 font-mono text-sm hidden md:block">
          Usa las flechas &lt; / &gt; para navegar
        </div>
        
        <div className="flex items-center gap-4 mx-auto md:mx-0">
          <button 
            onClick={prevSlide}
            disabled={currentSlide === 0}
            className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ArrowLeft size={24} />
          </button>
          
          <div className="font-mono text-yellow-500 font-bold w-16 text-center">
            {currentSlide + 1} / {slides.length}
          </div>

          <button 
            onClick={nextSlide}
            disabled={currentSlide === slides.length - 1}
            className="p-3 rounded-full bg-slate-800 text-slate-300 hover:bg-slate-700 hover:text-white disabled:opacity-50 disabled:cursor-not-allowed transition-all"
          >
            <ArrowRight size={24} />
          </button>
        </div>
      </footer>
    </div>
  );
}