function onDark() {
  el.innerHTML =
    '<div title="Change to Light Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgb(46, 170, 220); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(12px) translateY(0px);"></div></div></div></div>';
  document.body.classList.add('dark');
  __console.environment.ThemeStore.setState({ mode: 'dark' });
}
function onLight() {
  el.innerHTML =
    '<div title="Change to Dark Mode" style="margin-left: auto; margin-right: 14px; min-width: 0px;"><div role="button" tabindex="0" style="user-select: none; transition: background 120ms ease-in 0s; cursor: pointer; border-radius: 44px;"><div style="display: flex; flex-shrink: 0; height: 14px; width: 26px; border-radius: 44px; padding: 2px; box-sizing: content-box; background: rgba(135, 131, 120, 0.3); transition: background 200ms ease 0s, box-shadow 200ms ease 0s;"><div style="width: 14px; height: 14px; border-radius: 44px; background: white; transition: transform 200ms ease-out 0s, background 200ms ease-out 0s; transform: translateX(0px) translateY(0px);"></div></div></div></div>';
  document.body.classList.remove('dark');
  __console.environment.ThemeStore.setState({ mode: 'light' });
}
function toggle() {
  if (document.body.classList.contains('dark')) {
    onLight();
  } else {
    onDark();
  }
}
function addDarkModeButton(device) {
  const nav =
    device === 'web'
      ? document.querySelector('.notion-topbar').firstChild
      : document.querySelector('.notion-topbar-mobile');
  el.className = 'toggle-mode';
  el.addEventListener('click', toggle);
  nav.appendChild(el);
  onLight();
}

module.exports = {
  onDark,
  onLight,
  toggle,
  addDarkModeButton,
};
