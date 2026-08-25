// Toggle Submenus
function toggleSubmenu(id) {
  const menu = document.getElementById(id);
  const button = menu.previousElementSibling;
  const arrow = button ? button.querySelector('.arrow-icon') : null;

  if (menu.style.display === "block") {
    menu.style.display = "none";
    if (arrow) arrow.style.transform = "rotate(0deg)";
  } else {
    menu.style.display = "block";
    if (arrow) arrow.style.transform = "rotate(180deg)";
  }
}

// Display Info in Home Page Dynamic Viewer
function showInfo(title, description, docUrl) {
  const viewer = document.getElementById('dynamic-viewer');
  const viewerTitle = document.getElementById('viewer-title');
  const viewerDesc = document.getElementById('viewer-desc');
  const viewerLink = document.getElementById('viewer-link');

  viewerTitle.innerHTML = `<i class="fa-solid fa-circle-info"></i> ${title}`;
  viewerDesc.innerText = description;

  if (docUrl) {
    viewerLink.href = docUrl;
    viewerLink.style.display = 'inline-flex';
  } else {
    viewerLink.style.display = 'none';
  }

  viewer.style.display = 'block';
  viewer.scrollIntoView({ behavior: 'smooth', block: 'nearest' });
}

// Close Viewer
function closeViewer() {
  document.getElementById('dynamic-viewer').style.display = 'none';
}

// Scroll & Highlight The 3 Always Available Cards
function scrollToCard(cardId) {
  const card = document.getElementById(cardId);
  if (card) {
    card.scrollIntoView({ behavior: 'smooth', block: 'center' });
    card.classList.add('highlight-card');
    setTimeout(() => {
      card.classList.remove('highlight-card');
    }, 1500);
  }
}

// Search Filter
document.querySelector('.search-box input').addEventListener('keyup', function(e) {
  const searchTerm = e.target.value.toLowerCase();
  const buttons = document.querySelectorAll('.sidebar-menu .nav-btn, .sidebar-menu .submenu-btn, .sidebar-menu .nested-btn');

  buttons.forEach(btn => {
    const text = btn.textContent.toLowerCase();
    btn.style.display = text.includes(searchTerm) ? 'flex' : 'none';
  });
});