const butInstall = document.getElementById('buttonInstall');
// let deferredPrompt;

window.addEventListener('beforeinstallprompt', (event) => {
  event.preventDefault();
  // deferredPrompt = event;
  butInstall.style.visibility = 'visible';
  butInstall.textContent = 'Install'
});

butInstall.addEventListener('click', async () => {
  butInstall.setAttribute('disabled', true);
  butInstall.textContent = 'Installed';
});

window.addEventListener('appinstalled', (event) => {
  console.log('J.A.T.E. was installed successfully.', event);
});