(function(){
  const KEY='theme'; const root=document.documentElement;
  const saved = localStorage.getItem(KEY);
  if(saved){ root.classList.toggle('dark', saved==='dark'); } else { root.classList.add('dark'); }
  window.__toggleTheme = function(){
    const now = root.classList.toggle('dark');
    localStorage.setItem(KEY, now ? 'dark' : 'light');
  };
})();
