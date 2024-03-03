<header class="sticky top-0 z-40 bg-white shadow-xl md:shadow">
  <section class="section-wrap">
    <div class="flex min-h-16 flex-col items-center justify-between md:flex-row">
      <div class="flex w-full flex-shrink-0 items-center justify-between py-1 md:w-auto md:py-0">
        <a href="/" class="inline-flex gap-1 text-xl font-medium text-gray-900"> CPM<span class="font-light">Template</span> </a>

        <!-- Mobile menu button -->
        <button type="button" class="text-primary-400 hover:text-primary-600 my-2 inline-flex h-12 w-12 items-center justify-center self-center rounded-full bg-transparent bg-white shadow md:hidden" id="menuButton">
          <span class="sr-only">Menü öffnen</span>
          <!-- Burger-Icon -->
          <svg class="block h-6 w-6" id="menuOpenIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16m-7 6h7"></path>
          </svg>
          <!-- Kreuz-Icon -->
          <svg class="hidden h-6 w-6" id="menuCloseIcon" fill="none" viewBox="0 0 24 24" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M6 18L18 6M6 6l12 12"></path>
          </svg>
        </button>
      </div>
      <nav id="mobileMenu" class="hidden mb-4 md:flex max-h-screen w-full flex-col overflow-scroll md:m-0 md:w-auto md:flex-row">
        <!-- Navigation Links -->
        <a href="/doc" class="w-full rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 md:w-auto">Dokumentation</a>
        <a href="/elements" class="w-full rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 md:w-auto">Elemente</a>
        <a href="/components" class="w-full rounded-md px-3 py-3 text-sm font-medium text-gray-700 hover:bg-gray-100 hover:text-gray-900 md:w-auto">Komponenten</a>
      </nav>
    </div>
  </section>
</header>