const butInstall = document.getElementById('buttonInstall');

function beforeInstallPrompt(event) {
  event.preventDefault();
  window.deferredPrompt = event;
  butInstall.classList.remove('hidden');
}

function buttonClick() {
  if(!window.deferredPrompt) return;
  window.deferredPrompt.prompt();
  window.deferredPrompt = null;
  butInstall.classList.add('hidden');
}

function appInstalled() {
  window.deferredPrompt = null;
}

window.addEventListener('beforeinstallprompt', beforeInstallPrompt);
butInstall.addEventListener('click', buttonClick);
window.addEventListener('appinstalled', appInstalled);