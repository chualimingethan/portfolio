const storageKey = 'portfolio-theme';

function getPreferredTheme() {
  const savedTheme = localStorage.getItem(storageKey);
  if (savedTheme === 'dark' || savedTheme === 'light') {
    return savedTheme;
  }

  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
}

function applyTheme(theme) {
  document.body.dataset.theme = theme;
  localStorage.setItem(storageKey, theme);

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.textContent = theme === 'dark' ? 'Light mode' : 'Dark mode';
    button.setAttribute('aria-pressed', String(theme === 'dark'));
  });
}

document.addEventListener('DOMContentLoaded', () => {
  applyTheme(getPreferredTheme());

  document.querySelectorAll('[data-theme-toggle]').forEach((button) => {
    button.addEventListener('click', () => {
      const nextTheme = document.body.dataset.theme === 'dark' ? 'light' : 'dark';
      applyTheme(nextTheme);
    });
  });
});