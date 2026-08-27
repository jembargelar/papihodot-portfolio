import React, { useState, useEffect } from 'react';
import { useLanguage } from '../context/LanguageContext';

export default function Portfolio() {
  const { lang, t } = useLanguage();
  const [projectsData, setProjectsData] = useState([]);
  const [activeCategory, setActiveCategory] = useState("All");
  const [selectedImage, setSelectedImage] = useState(null);

  useEffect(() => {
    fetch('/projects.json')
      .then((res) => res.json())
      .then((data) => setProjectsData(data.projects || []))
      .catch((err) => console.error("Error loading projects:", err));
  }, []);

  const categories = [
    { name: "All", label: t('portfolio.all') },
    { name: "Graphic Design", label: t('portfolio.design') },
    { name: "Photography", label: t('portfolio.photo') },
    { name: "Videography", label: t('portfolio.video') },
    { name: "Content", label: t('portfolio.content') }
  ];

  const filteredProjects = activeCategory === "All" 
    ? projectsData 
    : projectsData.filter(item => item.category.toLowerCase() === activeCategory.toLowerCase() || (activeCategory === "Content" && item.category === "Content"));

  return (
    <section id="portfolio" className="py-24 px-6 bg-[#0B0F19] border-t border-gray-800/50 scroll-mt-20">
      <div className="max-w-6xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-3xl font-extrabold text-white mb-3">{t('portfolio.title')}</h2>
          <p className="text-gray-400 text-sm">{t('portfolio.subtitle')}</p>
        </div>

        <div className="flex flex-wrap items-center justify-center gap-2 mb-12">
          {categories.map((cat) => (
            <button
              key={cat.name}
              onClick={() => setActiveCategory(cat.name)}
              className={`px-5 py-2 rounded-lg text-xs md:text-sm font-medium transition ${
                activeCategory === cat.name 
                  ? 'bg-cyan-500 text-gray-950 font-bold shadow-md shadow-cyan-500/20' 
                  : 'bg-gray-900 text-gray-400 hover:text-white border border-gray-800'
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProjects.map((project) => {
            const title = lang === 'en' ? project.title_en : project.title_id;
            const desc = lang === 'en' ? project.desc_en : project.desc_id;
            const toolsList = typeof project.tools === 'string' ? project.tools.split(',').map(s => s.trim()) : project.tools;

            return (
              <div 
                key={project.id}
                onClick={() => setSelectedImage({ ...project, title, desc, tools: toolsList })}
                className="bg-gray-900/60 border border-gray-800 rounded-2xl overflow-hidden group cursor-pointer hover:border-cyan-500/50 transition flex flex-col"
              >
                <div className="h-48 overflow-hidden relative bg-black/40">
                  <img 
                    src={project.image} 
                    alt={title}
                    onError={(e) => { e.target.src = "https://images.unsplash.com/photo-1618005182384-a83a8bd57fbe?q=80&w=800&auto=format&fit=crop"; }}
                    className="w-full h-full object-cover group-hover:scale-105 transition duration-500" 
                  />
                  <span className="absolute top-3 right-3 px-3 py-1 rounded-full text-[10px] font-semibold bg-gray-950/80 text-cyan-400 backdrop-blur-md">
                    {project.category}
                  </span>
                </div>
                <div className="p-6 flex flex-col flex-grow">
                  <div className="text-xs text-gray-500 mb-1 font-mono">{project.year}</div>
                  <h3 className="text-lg font-bold text-white mb-2 group-hover:text-cyan-400 transition">{title}</h3>
                  <p className="text-gray-400 text-xs leading-relaxed mb-4 flex-grow">{desc}</p>
                  <div className="flex flex-wrap gap-1.5 pt-2 border-t border-gray-800">
                    {toolsList.map((tool, idx) => (
                      <span key={idx} className="px-2 py-0.5 bg-gray-800 text-gray-300 rounded text-[10px] font-mono">
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>

      {selectedImage && (
        <div className="fixed inset-0 z-50 bg-black/90 backdrop-blur-md flex items-center justify-center p-4">
          <div className="bg-gray-900 border border-gray-800 rounded-2xl max-w-2xl w-full overflow-hidden relative shadow-2xl">
            <button 
              onClick={() => setSelectedImage(null)}
              className="absolute top-4 right-4 z-10 w-8 h-8 rounded-full bg-gray-800 hover:bg-gray-700 text-white flex items-center justify-center font-bold"
            >
              ✕
            </button>
            <div className="h-64 sm:h-80 overflow-hidden bg-black flex items-center justify-center">
              <img src={selectedImage.image} alt={selectedImage.title} className="w-full h-full object-contain" />
            </div>
            <div className="p-6">
              <span className="text-xs text-cyan-400 font-mono font-semibold">{selectedImage.category} • {selectedImage.year}</span>
              <h3 className="text-2xl font-bold text-white mt-1 mb-3">{selectedImage.title}</h3>
              <p className="text-gray-300 text-sm mb-6">{selectedImage.desc}</p>
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-medium">{t('portfolio.tools')}</span>
                {selectedImage.tools.map((tName, i) => (
                  <span key={i} className="px-2.5 py-1 bg-gray-800 text-cyan-300 rounded text-xs font-mono">{tName}</span>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
