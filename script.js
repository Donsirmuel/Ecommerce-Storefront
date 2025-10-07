// Product Categories Configuration
const categories = {
  womenswear: {
    name: "Womenswear",
    subcategories: ["kaftans", "co-ords", "tailoring", "bridal"],
  },
  accessories: {
    name: "Accessories",
    subcategories: ["gele", "bags", "jewelry", "headwraps"],
  },
}

// Product Data (curated womenswear and accessories)
const products = [
  {
    id: 1,
    name: "Linen Slip Dress",
    category: "womenswear",
    subcategory: "dresses",
    tags: ["linen", "summer", "minimal"],
    priceRange: "signature",
    material: "linen",
    season: ["all"],
    price: 120000,
    image: "public/elegant-linen-shirt-on-hanger.jpg",
    description: "A slip silhouette in breathable linen — cut for relaxed refinement and effortless wear.",
  },
  {
    id: 2,
    name: "Tailored Wide-leg Trousers",
    category: "womenswear",
    subcategory: "trousers",
    tags: ["tailoring", "evening"],
    priceRange: "signature",
    material: "wool blend",
    season: ["all"],
    price: 98000,
    image: "public/elegant-wide-leg-trousers.jpg",
    description: "High-waisted palazzo with clean lines and precise pleating for elevated silhouettes.",
  },
  {
    id: 3,
    name: "Silk Story Scarf",
    category: "accessories",
    subcategory: "scarves",
    tags: ["silk", "accessory"],
    priceRange: "accessible",
    material: "silk",
    season: ["all"],
    price: 32000,
    image: "public/elegant-silk-scarf.png",
    description: "Hand-rolled silk scarf — versatile as a neck tie, headscarf, or belt.",
  },
  {
    id: 4,
    name: "Embellished Evening Gown",
    category: "womenswear",
    subcategory: "gowns",
    tags: ["evening", "embellished"],
    priceRange: "couture",
    material: "silk blend",
    season: ["all"],
    price: 285000,
    image: "public/luxury-linen-throw-blanket.jpg",
    description: "A couture evening gown with subtle embellishment and a fluid trained hem.",
  },
  {
    id: 5,
    name: "Leather Crossbody Bag",
    category: "accessories",
    subcategory: "bags",
    tags: ["leather", "everyday"],
    priceRange: "signature",
    material: "leather",
    season: ["all"],
    price: 76000,
    image: "public/minimalist-leather-crossbody-bag.jpg",
    description: "A compact crossbody in soft leather with refined hardware and practical pockets.",
  },
  {
    id: 6,
    name: "Canvas Tote",
    category: "accessories",
    subcategory: "bags",
    tags: ["canvas", "market"],
    priceRange: "accessible",
    material: "canvas",
    season: ["all"],
    price: 36000,
    image: "public/minimalist-canvas-tote-bag.jpg",
    description: "A roomy canvas tote with structured base and leather handles for everyday utility.",
  },
  {
    id: 7,
    name: "Gold Hoop Earrings",
    category: "accessories",
    subcategory: "jewelry",
    tags: ["gold", "statement"],
    priceRange: "accessible",
    material: "gold-plated",
    season: ["all"],
    price: 22000,
    image: "public/elegant-gold-hoop-earrings.jpg",
    description: "Classic gold hoops with a polished finish — your everyday go-to.",
  },
  {
    id: 8,
    name: "Cashmere Beanie",
    category: "accessories",
    subcategory: "knitwear",
    tags: ["cashmere", "cozy"],
    priceRange: "signature",
    material: "cashmere",
    season: ["winter"],
    price: 48000,
    image: "public/luxury-cashmere-beanie.jpg",
    description: "Sumptuously soft cashmere beanie for colder seasons — elevated basics.",
  },
  {
    id: 9,
    name: "Ceramic Accent Belt",
    category: "accessories",
    subcategory: "belts",
    tags: ["belt", "statement"],
    priceRange: "accessible",
    material: "ceramic",
    season: ["all"],
    price: 30000,
    image: "public/modern-ceramic-vase-set.jpg",
    description: "An artisanal ceramic-accent belt to cinch dresses and blazers with sculptural flair.",
  },
  {
    id: 10,
    name: "Linen Throw Wrap",
    category: "womenswear",
    subcategory: "wraps",
    tags: ["linen", "layer"],
    priceRange: "accessible",
    material: "linen",
    season: ["all"],
    price: 42000,
    image: "public/luxury-linen-throw-blanket.jpg",
    description: "A lightweight linen wrap — perfect for travel and layering.",
  },
  {
    id: 11,
    name: "Merino Knit",
    category: "womenswear",
    subcategory: "knitwear",
    tags: ["merino", "layer"],
    priceRange: "signature",
    material: "merino wool",
    season: ["fall", "winter"],
    price: 98000,
    image: "public/luxury-merino-sweater.png",
    description: "A refined merino sweater with a relaxed fit and durable finish.",
  },
  {
    id: 12,
    name: "Scented Candle Set",
    category: "accessories",
    subcategory: "home",
    tags: ["scent", "home"],
    priceRange: "accessible",
    material: "wax",
    season: ["all"],
    price: 18000,
    image: "public/luxury-scented-candle-set.jpg",
    description: "A trio of scented candles — a finishing touch for any dressing room or home.",
  },
]

// State
let currentCategory = "all"
let currentSubcategory = "all"
let currentFilters = {
  priceRange: "all",
  material: "all",
  season: "all",
}
let searchQuery = ""
let sortMode = "default"
let selectedProduct = null
let cart = []
let isMobileNavOpen = false

const priceRangeLabels = {
  accessible: "Accessible (₦35k - ₦60k)",
  signature: "Signature (₦60k - ₦120k)",
  couture: "Couture (₦120k+)",
}

const PRICE_FORMATTER = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  maximumFractionDigits: 0,
})

function formatCurrency(amount) {
  return PRICE_FORMATTER.format(amount)
}

function formatPriceRange(range) {
  return priceRangeLabels[range] || ""
}

function isMobileViewport() {
  return window.matchMedia("(max-width: 768px)").matches
}

function matchesSearch(product, query) {
  if (!query) return true
  const needle = query.toLowerCase()
  const haystack = `${product.name} ${product.description} ${product.tags.join(" ")}`.toLowerCase()
  return haystack.includes(needle)
}

function matchesCategory(product) {
  if (currentCategory !== "all" && product.category !== currentCategory) return false
  if (currentSubcategory !== "all" && product.subcategory !== currentSubcategory) return false
  return true
}

function matchesFilters(product) {
  if (currentFilters.priceRange !== "all" && product.priceRange !== currentFilters.priceRange) return false
  if (currentFilters.material !== "all" && product.material !== currentFilters.material) return false
  if (currentFilters.season !== "all" && !product.season.includes(currentFilters.season)) return false
  return true
}

function getFilteredProducts() {
  return products.filter((product) => matchesCategory(product) && matchesFilters(product) && matchesSearch(product, searchQuery))
}

function sortProducts(list) {
  const sorted = [...list]

  switch (sortMode) {
    case "price-low":
      sorted.sort((a, b) => a.price - b.price)
      break
    case "price-high":
      sorted.sort((a, b) => b.price - a.price)
      break
    case "name-az":
      sorted.sort((a, b) => a.name.localeCompare(b.name))
      break
    case "name-za":
      sorted.sort((a, b) => b.name.localeCompare(a.name))
      break
    case "newest":
      sorted.sort((a, b) => b.id - a.id)
      break
    default:
      sorted.sort((a, b) => {
        if (a.category !== b.category) {
          return a.category.localeCompare(b.category)
        }
        return a.name.localeCompare(b.name)
      })
  }

  return sorted
}

function buildProductCard(product) {
  const categoryConfig = categories[product.category]
  const categoryLabel = categoryConfig ? categoryConfig.name : product.category
  const subcategoryLabel = product.subcategory.charAt(0).toUpperCase() + product.subcategory.slice(1)
  const tagMarkup = product.tags
    .slice(0, 2)
    .map((tag) => `<span class="tag">${tag}</span>`)
    .join("")

  return `
  <div class="product-card" data-product-id="${product.id}" role="button" tabindex="0" aria-label="Open ${product.name} details">
      <div class="product-image">
        <img src="${product.image}" loading="lazy" alt="${product.imageAlt || product.name}">
        <div class="product-tags">${tagMarkup}</div>
      </div>
      <div class="product-info">
        <div class="product-category">${categoryLabel} • ${subcategoryLabel}</div>
        <h3 class="product-name">${product.name}</h3>
        <div class="product-price">${formatCurrency(product.price)} <span class="price-range">${formatPriceRange(product.priceRange)}</span></div>
        <div class="product-material">${product.material}</div>
        <div class="card-actions">
          <button class="btn btn-outline view-details" data-id="${product.id}" aria-label="View details for ${product.name}">View</button>
          <button class="btn btn-primary btn-quick" data-id="${product.id}" aria-label="Quick add ${product.name} to cart">Add</button>
        </div>
      </div>
    </div>
  `
}

function updateResultsCount(count) {
  const resultsCount = document.getElementById("resultsCount")
  if (!resultsCount) return

  if (count === 0) {
    resultsCount.textContent = "No products match your filters yet."
    return
  }

  const currentCategoryConfig = categories[currentCategory]
  const categoryDescriptor =
    currentCategory === "all"
      ? "Shindara looks"
      : `${currentCategoryConfig ? currentCategoryConfig.name : ""} stories`
  resultsCount.textContent = `Showing ${count} ${categoryDescriptor}`
}

function renderProducts() {
  const grid = document.getElementById("productsGrid")
  if (!grid) return

  const filtered = sortProducts(getFilteredProducts())
  updateResultsCount(filtered.length)

  if (filtered.length === 0) {
    grid.innerHTML = `
      <div class="no-products">
        <h3>No products found</h3>
        <p>Try removing filters or exploring a different category to discover more pieces.</p>
      </div>
    `
    return
  }

  grid.innerHTML = filtered.map((product) => buildProductCard(product)).join("")
  attachProductCardListeners()
}

function attachProductCardListeners() {
  document.querySelectorAll(".product-card").forEach((card) => {
    // open details when the card is double-clicked or via keyboard on the card itself
    card.addEventListener("dblclick", () => {
      const productId = Number.parseInt(card.dataset.productId, 10)
      openProductModal(productId)
    })
    card.addEventListener("keydown", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        const productId = Number.parseInt(card.dataset.productId, 10)
        openProductModal(productId)
      }
    })
  })

  // button-level handlers (view and quick add)
  document.querySelectorAll('.view-details').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = Number.parseInt(btn.dataset.id, 10)
      openProductModal(id)
    })
  })

  document.querySelectorAll('.btn-quick').forEach((btn) => {
    btn.addEventListener('click', (e) => {
      e.stopPropagation()
      const id = Number.parseInt(btn.dataset.id, 10)
      addToCartQuick(id)
    })
  })
}

// Quick-add function: add 1 item with default size and show toast
function addToCartQuick(productId) {
  const product = products.find((p) => p.id === productId)
  if (!product) return

  const size = 'Medium'
  const existing = cart.find((c) => c.id === productId && c.size === size)
  if (existing) {
    existing.quantity += 1
  } else {
    cart.push({ ...product, size, quantity: 1 })
  }

  saveCartToStorage()
  updateCartUI()
  showToast(`${product.name} added to cart`)
}

// Toast notification
function showToast(message) {
  let toast = document.getElementById('siteToast')
  if (!toast) {
    toast = document.createElement('div')
    toast.id = 'siteToast'
    toast.className = 'site-toast'
    document.body.appendChild(toast)
  }
  toast.textContent = message
  toast.classList.add('visible')
  setTimeout(() => toast.classList.remove('visible'), 2200)
}

function syncCategoryControls() {
  document.querySelectorAll(".nav-link[data-category]").forEach((link) => {
    const isActive = link.dataset.category === currentCategory
    link.classList.toggle("active", isActive)
  })

  const mobileCategorySelect = document.getElementById("mobile-category")
  if (mobileCategorySelect) {
    mobileCategorySelect.value = currentCategory
  }
}

function updateSubcategoryFilter() {
  const subcategoryFilter = document.getElementById("subcategoryFilter")
  if (!subcategoryFilter) return

  if (currentCategory === "all") {
    subcategoryFilter.innerHTML = '<option value="all">All Subcategories</option>'
    subcategoryFilter.disabled = true
    currentSubcategory = "all"
    return
  }

  const categoryConfig = categories[currentCategory]
  const subcategories = categoryConfig ? categoryConfig.subcategories : []
  subcategoryFilter.disabled = false
  const categoryName = categoryConfig ? categoryConfig.name : ""
  subcategoryFilter.innerHTML = [
    `<option value="all">All ${categoryName}</option>`,
    ...subcategories.map(
      (sub) => `<option value="${sub}">${sub.charAt(0).toUpperCase() + sub.slice(1)}</option>`
    ),
  ].join("")

  if (!subcategories.includes(currentSubcategory)) {
    currentSubcategory = "all"
  }

  subcategoryFilter.value = currentSubcategory
}

function hydrateFilterControls() {
  const searchInputEl = document.getElementById("searchInput")
  if (searchInputEl) {
    searchInputEl.value = searchQuery
  }

  const priceFilterEl = document.getElementById("priceFilter")
  if (priceFilterEl) {
    priceFilterEl.value = currentFilters.priceRange
  }

  const materialFilterEl = document.getElementById("materialFilter")
  if (materialFilterEl) {
    materialFilterEl.value = currentFilters.material
  }

  const seasonFilterEl = document.getElementById("seasonFilter")
  if (seasonFilterEl) {
    seasonFilterEl.value = currentFilters.season
  }

  const sortSelectEl = document.getElementById("sortSelect")
  if (sortSelectEl) {
    sortSelectEl.value = sortMode
  }

  const subcategoryFilterEl = document.getElementById("subcategoryFilter")
  if (subcategoryFilterEl) {
    subcategoryFilterEl.value = currentSubcategory
  }

  syncCategoryControls()
}

function clearAllFilters() {
  currentCategory = "all"
  currentSubcategory = "all"
  currentFilters = {
    priceRange: "all",
    material: "all",
    season: "all",
  }
  searchQuery = ""
  sortMode = "default"

  syncCategoryControls()
  updateSubcategoryFilter()
  hydrateFilterControls()
  renderProducts()
  collapseFiltersOnMobile()
  closeMobileNav()
}

function applySorting(sortBy) {
  sortMode = sortBy
  renderProducts()
}

function setFiltersCollapsed(collapsed) {
  const panel = document.getElementById("filtersPanel")
  const toggle = document.querySelector(".filter-toggle")
  if (!panel || !toggle) return

  const shouldCollapse = isMobileViewport() ? collapsed : false
  panel.setAttribute("data-collapsed", shouldCollapse ? "true" : "false")
  panel.setAttribute("aria-hidden", shouldCollapse ? "true" : "false")
  toggle.setAttribute("aria-expanded", shouldCollapse ? "false" : "true")
}

function collapseFiltersOnMobile() {
  if (isMobileViewport()) {
    setFiltersCollapsed(true)
  }
}

function initializeFiltersPanel() {
  const panel = document.getElementById("filtersPanel")
  const toggle = document.querySelector(".filter-toggle")
  if (!panel || !toggle) return

  toggle.addEventListener("click", () => {
    if (!isMobileViewport()) return
    const collapsed = panel.getAttribute("data-collapsed") !== "false"
    setFiltersCollapsed(!collapsed)
  })

  const syncWithViewport = () => {
    if (isMobileViewport()) {
      setFiltersCollapsed(true)
    } else {
      setFiltersCollapsed(false)
    }
  }

  let resizeTimeout
  window.addEventListener("resize", () => {
    clearTimeout(resizeTimeout)
    resizeTimeout = setTimeout(syncWithViewport, 120)
  })

  syncWithViewport()
}

function setMobileNavOpen(open) {
  document.body.classList.toggle("nav-open", open)
  const toggle = document.querySelector(".mobile-menu-toggle")
  if (toggle) {
    toggle.setAttribute("aria-expanded", open ? "true" : "false")
  }
  isMobileNavOpen = open
}

function toggleMobileNav() {
  setMobileNavOpen(!isMobileNavOpen)
}

function closeMobileNav() {
  setMobileNavOpen(false)
}

function setupEventListeners() {
  const menuToggle = document.querySelector(".mobile-menu-toggle")
  if (menuToggle) {
    menuToggle.addEventListener("click", (event) => {
      event.preventDefault()
      toggleMobileNav()
    })
  }

  document.querySelectorAll(".nav-link[data-category]").forEach((link) => {
    link.addEventListener("click", (event) => {
      event.preventDefault()
      const { category } = link.dataset
      if (!category) return

      currentCategory = category
      currentSubcategory = "all"
      syncCategoryControls()
      updateSubcategoryFilter()
      hydrateFilterControls()
      renderProducts()
      collapseFiltersOnMobile()
      closeMobileNav()
    })
  })

  const mobileCategorySelect = document.getElementById("mobile-category")
  if (mobileCategorySelect) {
    mobileCategorySelect.addEventListener("change", (event) => {
      currentCategory = event.target.value
      currentSubcategory = "all"
      syncCategoryControls()
      updateSubcategoryFilter()
      hydrateFilterControls()
      renderProducts()
      collapseFiltersOnMobile()
    })
  }

  const searchInputEl = document.getElementById("searchInput")
  if (searchInputEl) {
    searchInputEl.addEventListener("input", (event) => {
      searchQuery = event.target.value.trim()
      renderProducts()
    })
  }

  const subcategoryFilterEl = document.getElementById("subcategoryFilter")
  if (subcategoryFilterEl) {
    subcategoryFilterEl.addEventListener("change", (event) => {
      currentSubcategory = event.target.value
      renderProducts()
      collapseFiltersOnMobile()
    })
  }

  const priceFilterEl = document.getElementById("priceFilter")
  if (priceFilterEl) {
    priceFilterEl.addEventListener("change", (event) => {
      currentFilters.priceRange = event.target.value
      renderProducts()
      collapseFiltersOnMobile()
    })
  }

  const materialFilterEl = document.getElementById("materialFilter")
  if (materialFilterEl) {
    materialFilterEl.addEventListener("change", (event) => {
      currentFilters.material = event.target.value
      renderProducts()
      collapseFiltersOnMobile()
    })
  }

  const seasonFilterEl = document.getElementById("seasonFilter")
  if (seasonFilterEl) {
    seasonFilterEl.addEventListener("change", (event) => {
      currentFilters.season = event.target.value
      renderProducts()
      collapseFiltersOnMobile()
    })
  }

  const sortSelectEl = document.getElementById("sortSelect")
  if (sortSelectEl) {
    sortSelectEl.addEventListener("change", (event) => {
      applySorting(event.target.value)
      collapseFiltersOnMobile()
    })
  }

  const heroCta = document.querySelector(".hero-cta")
  if (heroCta) {
    heroCta.addEventListener("click", () => {
      const productsSection = document.querySelector(".products-section")
      if (productsSection) {
        productsSection.scrollIntoView({ behavior: "smooth" })
      }
    })
  }

  const cartToggle = document.querySelector(".cart-toggle")
  if (cartToggle) {
    cartToggle.addEventListener("click", toggleCart)
  }

  const cartClose = document.querySelector(".cart-close")
  if (cartClose) {
    cartClose.addEventListener("click", toggleCart)
  }

  const modalClose = document.querySelector(".modal-close")
  if (modalClose) {
    modalClose.addEventListener("click", closeProductModal)
  }

  const modalOverlay = document.querySelector(".modal-overlay")
  if (modalOverlay) {
    modalOverlay.addEventListener("click", closeProductModal)
  }

  document.addEventListener("keyup", (event) => {
    if (event.key === "Escape") {
      closeProductModal()
      closeMobileNav()
    }
  })

  document.querySelectorAll(".quantity-btn").forEach((button) => {
    button.addEventListener("click", () => {
      const action = button.dataset.action
      const quantityInput = document.getElementById("productQuantity")
      if (!quantityInput) return

      const currentValue = Number.parseInt(quantityInput.value, 10) || 1
      if (action === "increase" && currentValue < 10) {
        quantityInput.value = currentValue + 1
      } else if (action === "decrease" && currentValue > 1) {
        quantityInput.value = currentValue - 1
      }
    })
  })

  const addToCartBtn = document.getElementById("addToCartBtn")
  if (addToCartBtn) {
    addToCartBtn.addEventListener("click", addToCart)
  }

  const checkoutBtn = document.getElementById("checkoutBtn")
  if (checkoutBtn) {
    checkoutBtn.addEventListener("click", goToCheckout)
  }

  const backToShopBtn = document.getElementById("backToShop")
  if (backToShopBtn) {
    backToShopBtn.addEventListener("click", backToShop)
  }

  const placeOrderBtn = document.getElementById("placeOrderBtn")
  if (placeOrderBtn) {
    placeOrderBtn.addEventListener("click", placeOrder)
  }

  const continueShoppingBtn = document.getElementById("continueShopping")
  if (continueShoppingBtn) {
    continueShoppingBtn.addEventListener("click", () => {
      const confirmationPage = document.getElementById("confirmationPage")
      if (confirmationPage) {
        confirmationPage.classList.remove("active")
      }
      cart = []
      saveCartToStorage()
      updateCartUI()
      updateOrderSummary()
    })
  }

  const newsletterForm = document.querySelector(".newsletter-form")
  if (newsletterForm) {
    newsletterForm.addEventListener("submit", (event) => {
      event.preventDefault()
      const emailInput = document.getElementById("newsletterEmail")
      if (!emailInput || !emailInput.value) return

      const submitButton = newsletterForm.querySelector("button")
      const originalText = submitButton ? submitButton.textContent : null

      if (submitButton) {
        submitButton.textContent = "Thanks — you're in"
        submitButton.disabled = true
      }

      emailInput.value = ""

      setTimeout(() => {
        if (submitButton && originalText) {
          submitButton.textContent = originalText
          submitButton.disabled = false
        }
      }, 2400)
    })
  }

  const cardNumberInput = document.getElementById("cardNumber")
  if (cardNumberInput) {
    cardNumberInput.addEventListener("input", (event) => {
      const rawValue = event.target.value.replace(/\s/g, "")
      const grouped = rawValue.match(/.{1,4}/g)
      event.target.value = grouped ? grouped.join(" ") : rawValue
    })
  }

  const expiryInput = document.getElementById("expiry")
  if (expiryInput) {
    expiryInput.addEventListener("input", (event) => {
      let value = event.target.value.replace(/\D/g, "")
      if (value.length >= 3) {
        value = `${value.slice(0, 2)} / ${value.slice(2, 4)}`
      }
      event.target.value = value
    })
  }

  window.addEventListener("resize", () => {
    if (!isMobileViewport()) {
      closeMobileNav()
    }
  })
}

// Product Modal
function openProductModal(productId) {
  selectedProduct = products.find((product) => product.id === productId) || null
  if (!selectedProduct) return

  const modal = document.getElementById("productModal")
  if (!modal) return

  const modalImage = document.getElementById("modalProductImage")
  const modalName = document.getElementById("modalProductName")
  const modalPrice = document.getElementById("modalProductPrice")
  const modalDescription = document.getElementById("modalProductDescription")
  const quantityInput = document.getElementById("productQuantity")

  if (modalImage) modalImage.src = selectedProduct.image
  if (modalImage) modalImage.alt = selectedProduct.name
  if (modalName) modalName.textContent = selectedProduct.name
  if (modalPrice) modalPrice.textContent = formatCurrency(selectedProduct.price)
  if (modalDescription) modalDescription.textContent = selectedProduct.description
  if (quantityInput) quantityInput.value = 1

  modal.classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProductModal() {
  const modal = document.getElementById("productModal")
  if (!modal) return

  modal.classList.remove("active")
  document.body.style.overflow = ""
  selectedProduct = null
}

// Cart
function addToCart() {
  if (!selectedProduct) return

  const sizeSelect = document.getElementById("productSize")
  const quantityInput = document.getElementById("productQuantity")
  const size = sizeSelect ? sizeSelect.value : "Medium"
  const quantity = Number.parseInt(quantityInput ? quantityInput.value || "1" : "1", 10)

  const existingItem = cart.find((item) => item.id === selectedProduct.id && item.size === size)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({ ...selectedProduct, size, quantity })
  }

  saveCartToStorage()
  updateCartUI()
  closeProductModal()
  toggleCart()
}

function removeFromCart(index) {
  cart.splice(index, 1)
  saveCartToStorage()
  updateCartUI()
  updateOrderSummary()
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems")
  const cartEmpty = document.getElementById("cartEmpty")
  const cartFooter = document.getElementById("cartFooter")
  const cartCount = document.querySelector(".cart-count")

  if (!cartItems || !cartEmpty || !cartFooter || !cartCount) return

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  if (cart.length === 0) {
    cartEmpty.style.display = "flex"
    cartFooter.style.display = "none"
    cartItems.innerHTML = ""
  } else {
    cartEmpty.style.display = "none"
    cartFooter.style.display = "block"

    cartItems.innerHTML = cart
      .map(
        (item, index) => `
          <div class="cart-item">
            <div class="cart-item-image">
              <img src="${item.image}" alt="${item.name}">
            </div>
            <div class="cart-item-details">
              <div class="cart-item-name">${item.name}</div>
              <div class="cart-item-meta">Size: ${item.size} • Qty: ${item.quantity}</div>
              <div class="cart-item-footer">
                <div class="cart-item-price">${formatCurrency(item.price * item.quantity)}</div>
                <button class="cart-item-remove" onclick="removeFromCart(${index})">Remove</button>
              </div>
            </div>
          </div>
        `
      )
      .join("")
  }

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const cartSubtotal = document.getElementById("cartSubtotal")
  if (cartSubtotal) {
    cartSubtotal.textContent = formatCurrency(subtotal)
  }
}

function toggleCart() {
  const cartSidebar = document.getElementById("cartSidebar")
  if (cartSidebar) {
    cartSidebar.classList.toggle("active")
  }
}

// Checkout
function goToCheckout() {
  if (cart.length === 0) return

  const checkoutPage = document.getElementById("checkoutPage")
  if (checkoutPage) {
    checkoutPage.classList.add("active")
  }
  const cartSidebar = document.getElementById("cartSidebar")
  if (cartSidebar) {
    cartSidebar.classList.remove("active")
  }
  updateOrderSummary()
  window.scrollTo({ top: 0, behavior: "smooth" })
}

function backToShop() {
  const checkoutPage = document.getElementById("checkoutPage")
  if (checkoutPage) {
    checkoutPage.classList.remove("active")
  }
}

function updateOrderSummary() {
  const summaryItems = document.getElementById("summaryItems")
  if (!summaryItems) return

  if (cart.length === 0) {
    summaryItems.innerHTML = ""
    const summarySubtotal = document.getElementById("summarySubtotal")
    if (summarySubtotal) summarySubtotal.textContent = formatCurrency(0)
    const summaryShipping = document.getElementById("summaryShipping")
    if (summaryShipping) summaryShipping.textContent = formatCurrency(0)
    const summaryTax = document.getElementById("summaryTax")
    if (summaryTax) summaryTax.textContent = formatCurrency(0)
    const summaryTotal = document.getElementById("summaryTotal")
    if (summaryTotal) summaryTotal.textContent = formatCurrency(0)
    return
  }

  summaryItems.innerHTML = cart
    .map(
      (item) => `
        <div class="summary-item">
          <div class="summary-item-image">
            <img src="${item.image}" alt="${item.name}">
          </div>
          <div class="summary-item-details">
            <div class="summary-item-name">${item.name}</div>
            <div class="summary-item-meta">Size: ${item.size} • Qty: ${item.quantity}</div>
          </div>
          <div class="summary-item-price">${formatCurrency(item.price * item.quantity)}</div>
        </div>
      `
    )
    .join("")

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 6500 : 0
  const tax = subtotal * 0.075
  const total = subtotal + shipping + tax

  const summarySubtotal = document.getElementById("summarySubtotal")
  if (summarySubtotal) summarySubtotal.textContent = formatCurrency(subtotal)
  const summaryShipping = document.getElementById("summaryShipping")
  if (summaryShipping) summaryShipping.textContent = formatCurrency(shipping)
  const summaryTax = document.getElementById("summaryTax")
  if (summaryTax) summaryTax.textContent = formatCurrency(tax)
  const summaryTotal = document.getElementById("summaryTotal")
  if (summaryTotal) summaryTotal.textContent = formatCurrency(total)
}

function placeOrder() {
  const requiredFields = [
    "email",
    "firstName",
    "lastName",
    "address",
    "city",
    "state",
    "zip",
    "cardNumber",
    "expiry",
    "cvc",
  ]

  const missingField = requiredFields.find((id) => {
    const field = document.getElementById(id)
    return !field || !field.value
  })
  if (missingField) {
    alert("Please fill in all required fields")
    return
  }

  const orderNumber = `SH-${Math.random().toString(36).slice(2, 8).toUpperCase()}`
  const email = document.getElementById("email").value
  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = cart.length > 0 ? 6500 : 0
  const tax = subtotal * 0.075
  const total = subtotal + shipping + tax

  const orderNumberEl = document.getElementById("orderNumber")
  if (orderNumberEl) orderNumberEl.textContent = orderNumber
  const orderEmailEl = document.getElementById("orderEmail")
  if (orderEmailEl) orderEmailEl.textContent = email
  const orderTotalEl = document.getElementById("orderTotal")
  if (orderTotalEl) orderTotalEl.textContent = formatCurrency(total)

  const checkoutPage = document.getElementById("checkoutPage")
  if (checkoutPage) checkoutPage.classList.remove("active")
  const confirmationPage = document.getElementById("confirmationPage")
  if (confirmationPage) confirmationPage.classList.add("active")

  cart = []
  saveCartToStorage()
  updateCartUI()
  updateOrderSummary()

  document.querySelectorAll("input").forEach((input) => {
    if (input.type !== "button" && input.type !== "submit") {
      input.value = ""
    }
  })
}

// Persistence
function saveCartToStorage() {
  localStorage.setItem("boutique_cart", JSON.stringify(cart))
}

function loadCartFromStorage() {
  try {
  const saved = localStorage.getItem("boutique_cart")
    if (!saved) return
    cart = JSON.parse(saved) || []
    updateCartUI()
    updateOrderSummary()
  } catch (error) {
    console.error("Failed to load cart from storage", error)
  }
}

// Init
document.addEventListener("DOMContentLoaded", () => {
  const defaultCategory = document.body.getAttribute("data-default-category")
  if (defaultCategory && (defaultCategory === "all" || categories[defaultCategory])) {
    currentCategory = defaultCategory
  }

  // Dynamic footer year
  const yearSpan = document.getElementById("footerYear")
  if (yearSpan) {
    yearSpan.textContent = new Date().getFullYear()
  }

  loadCartFromStorage()
  updateSubcategoryFilter()
  hydrateFilterControls()
  renderProducts()
  setupEventListeners()
  initializeFiltersPanel()
})

// Expose globals for inline handlers
window.clearAllFilters = clearAllFilters
window.removeFromCart = removeFromCart
