// Theme toggle: apply theme, toggle on button click, persist to localStorage
(function(){
  const STORAGE_KEY = 'site-theme'; // values: 'dark' or 'light'
  const CLASS = 'dark-mode';
  const toggleId = 'theme-toggle';

  function applyTheme(theme){
    const root = document.documentElement;
    if(theme === 'dark'){
      root.classList.add(CLASS);
      const btn = document.getElementById(toggleId);
      if(btn){ btn.textContent = '☀️'; btn.setAttribute('aria-pressed','true'); }
    } else {
      root.classList.remove(CLASS);
      const btn = document.getElementById(toggleId);
      if(btn){ btn.textContent = '🌙'; btn.setAttribute('aria-pressed','false'); }
    }
  }

  function detectInitial(){
    const saved = localStorage.getItem(STORAGE_KEY);
    if(saved === 'dark' || saved === 'light') return saved;
    if(window.matchMedia && window.matchMedia('(prefers-color-scheme: dark)').matches) return 'dark';
    return 'light';
  }

  // apply initial theme now (called again by inline script in head, but run here to sync button state)
  applyTheme(detectInitial());

  // attach handler
  document.addEventListener('DOMContentLoaded', function(){
    const btn = document.getElementById(toggleId);
    if(!btn) return;
    btn.addEventListener('click', function(e){
      const now = document.documentElement.classList.contains(CLASS) ? 'dark' : 'light';
      const next = now === 'dark' ? 'light' : 'dark';
      applyTheme(next);
      try{ localStorage.setItem(STORAGE_KEY, next); }catch(err){}
    });
  });

  // if system preference changes and user hasn't explicitly set a preference, follow it
  if(window.matchMedia){
    window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', function(e){
      if(!localStorage.getItem(STORAGE_KEY)){
        applyTheme(e.matches ? 'dark' : 'light');
      }
    });
  }
})();
