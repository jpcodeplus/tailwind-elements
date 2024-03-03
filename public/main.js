  // USE
  
  const menu = new ResponsiveMenu();
  menu.configureMenu(); // Standardkonfiguration

  // Mit angepassten Selektoren
  menu.configureMenu({
      menuButtonSelector: '.customMenuButton',
      mobileMenuSelector: '.customMobileMenu',
      menuOpenIconSelector: '.customMenuOpenIcon',
      menuCloseIconSelector: '.customMenuCloseIcon'
  });