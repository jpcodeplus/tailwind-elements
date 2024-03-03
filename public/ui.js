class UIComponent {
    constructor() {
      this.eventHandlers = [];
    }
  
    addEvent(selector, eventType, handler) {
      const elements = document.querySelectorAll(selector);
      elements.forEach(element => {
        element.addEventListener(eventType, handler);
        this.eventHandlers.push({ element, eventType, handler });
      });
    }
  
    clearEvents() {
      this.eventHandlers.forEach(({ element, eventType, handler }) => {
        element.removeEventListener(eventType, handler);
      });
      this.eventHandlers = [];
    }
  }

class ResponsiveMenu extends UIComponent {
    configureMenu({ menuButtonSelector = '#menuButton', mobileMenuSelector = '#mobileMenu', menuOpenIconSelector = '#menuOpenIcon', menuCloseIconSelector = '#menuCloseIcon' } = {}) {
      super.addEvent(menuButtonSelector, 'click', () => {
        const menu = document.querySelector(mobileMenuSelector);
        
        const isMenuVisible = menu.classList.contains('flex');
        
        if (isMenuVisible) {
          menu.classList.remove('flex');
          menu.classList.add('hidden');
          document.querySelector(menuOpenIconSelector).classList.remove('hidden');
          document.querySelector(menuCloseIconSelector).classList.add('hidden');
          return;
        } 
          menu.classList.remove('hidden');
          menu.classList.add('flex');
          document.querySelector(menuOpenIconSelector).classList.add('hidden');
          document.querySelector(menuCloseIconSelector).classList.remove('hidden');
        
      });
    }
  }
  