// Product Data
const products = [
  // Gele & Head Wraps
  {
    id: 1,
    name: "Royal Blue Aso Oke Gele",
    category: "gele",
    price: 45.0,
    image: "public/royal-blue-gele.jpg",
    description:
      "Premium aso oke gele in royal blue with gold threading. Pre-pleated for easy styling. Perfect for weddings and special occasions.",
  },
  {
    id: 2,
    name: "Burgundy Velvet Gele",
    category: "gele",
    price: 38.0,
    image: "public/burgundy-velvet-gele.jpg",
    description:
      "Luxurious velvet gele with subtle shimmer. Soft texture and rich color make this perfect for evening events.",
  },
  {
    id: 3,
    name: "Gold Damask Gele Set",
    category: "gele",
    price: 52.0,
    image: "public/gold-damask-gele.jpg",
    description:
      "Elegant damask gele with matching ipele (shoulder wrap). Features intricate gold patterns on cream base.",
  },
  {
    id: 4,
    name: "Ankara Print Head Wrap",
    category: "gele",
    price: 28.0,
    image: "public/ankara-head-wrap.jpg",
    description: "Vibrant ankara print head wrap. Versatile styling options for casual and formal looks.",
  },
  {
    id: 23,
    name: "Emerald Green Aso Oke Gele",
    category: "gele",
    price: 48.0,
    image: "public/emerald-green-gele.jpg",
    description: "Stunning emerald green aso oke with silver threading. Pre-styled for convenience.",
  },
  {
    id: 24,
    name: "Peach Organza Gele",
    category: "gele",
    price: 35.0,
    image: "public/peach-organza-gele.jpg",
    description: "Soft peach organza gele with delicate shimmer. Perfect for daytime events.",
  },
  {
    id: 25,
    name: "Purple Velvet Gele Set",
    category: "gele",
    price: 55.0,
    image: "public/purple-velvet-gele.jpg",
    description: "Luxurious purple velvet gele with matching ipele. Rich texture and royal appearance.",
  },
  {
    id: 26,
    name: "Turquoise Aso Oke Head Wrap",
    category: "gele",
    price: 42.0,
    image: "public/turquoise-head-wrap.jpg",
    description: "Vibrant turquoise aso oke with traditional patterns. Versatile styling options.",
  },
  {
    id: 27,
    name: "Champagne Gold Gele",
    category: "gele",
    price: 50.0,
    image: "public/champagne-gold-gele.jpg",
    description: "Elegant champagne gold gele with subtle sparkle. Perfect for weddings.",
  },
  {
    id: 28,
    name: "Fuchsia Pink Gele",
    category: "gele",
    price: 40.0,
    image: "public/fuchsia-pink-gele.jpg",
    description: "Bold fuchsia pink gele with modern design. Makes a stunning statement.",
  },
  {
    id: 29,
    name: "Navy Blue Damask Gele",
    category: "gele",
    price: 46.0,
    image: "public/navy-damask-gele.jpg",
    description: "Classic navy blue damask with intricate patterns. Timeless elegance.",
  },
  {
    id: 30,
    name: "Coral Orange Gele",
    category: "gele",
    price: 38.0,
    image: "public/coral-orange-gele.jpg",
    description: "Bright coral orange gele with gold accents. Perfect for celebrations.",
  },
  {
    id: 31,
    name: "Mint Green Organza Gele",
    category: "gele",
    price: 36.0,
    image: "public/mint-green-gele.jpg",
    description: "Fresh mint green organza gele. Light and airy for summer events.",
  },
  {
    id: 32,
    name: "Maroon Aso Oke Gele",
    category: "gele",
    price: 44.0,
    image: "public/maroon-gele.jpg",
    description: "Deep maroon aso oke with traditional weaving. Rich and sophisticated.",
  },
  {
    id: 33,
    name: "Silver Metallic Gele",
    category: "gele",
    price: 52.0,
    image: "public/silver-metallic-gele.jpg",
    description: "Stunning silver metallic gele with mirror finish. Show-stopping glamour.",
  },
  {
    id: 34,
    name: "Teal Blue Gele Set",
    category: "gele",
    price: 49.0,
    image: "public/teal-blue-gele.jpg",
    description: "Beautiful teal blue gele with matching accessories. Complete bridal look.",
  },

  // Jewelry
  {
    id: 5,
    name: "Coral Bead Necklace Set",
    category: "jewelry",
    price: 125.0,
    image: "public/coral-bead-necklace.jpg",
    description:
      "Traditional coral bead necklace with matching earrings and bracelet. Authentic Nigerian bridal jewelry.",
  },
  {
    id: 6,
    name: "Gold Plated Statement Earrings",
    category: "jewelry",
    price: 42.0,
    image: "public/gold-statement-earrings.jpg",
    description: "Bold gold-plated earrings with African-inspired geometric design. Lightweight and comfortable.",
  },
  {
    id: 7,
    name: "Beaded Collar Necklace",
    category: "jewelry",
    price: 68.0,
    image: "public/beaded-collar-necklace.jpg",
    description: "Handcrafted beaded collar necklace in traditional colors. Makes a stunning statement piece.",
  },
  {
    id: 8,
    name: "Cowrie Shell Bracelet Set",
    category: "jewelry",
    price: 35.0,
    image: "public/cowrie-shell-bracelet.jpg",
    description: "Set of three cowrie shell bracelets. Symbol of prosperity and feminine power in African culture.",
  },
  {
    id: 9,
    name: "Brass Cuff Bracelet",
    category: "jewelry",
    price: 48.0,
    image: "public/brass-cuff-bracelet.jpg",
    description: "Handcrafted brass cuff with traditional Adinkra symbols. Adjustable sizing.",
  },
  {
    id: 10,
    name: "Pearl & Gold Drop Earrings",
    category: "jewelry",
    price: 55.0,
    image: "public/pearl-gold-earrings.jpg",
    description: "Elegant pearl drop earrings with gold accents. Perfect for weddings and formal events.",
  },
  {
    id: 21,
    name: "Ankara Fabric Earrings",
    category: "jewelry",
    price: 18.0,
    image: "public/ankara-fabric-earrings.jpg",
    description: "Lightweight fabric earrings in ankara print. Bold and colorful statement piece.",
  },
  {
    id: 22,
    name: "Wooden Bead Necklace",
    category: "jewelry",
    price: 36.0,
    image: "public/wooden-bead-necklace.jpg",
    description: "Natural wooden bead necklace with traditional patterns. Eco-friendly and unique.",
  },
  {
    id: 35,
    name: "Red Coral Choker Necklace",
    category: "jewelry",
    price: 95.0,
    image: "public/red-coral-choker.jpg",
    description: "Traditional red coral choker. Authentic Nigerian bridal jewelry piece.",
  },
  {
    id: 36,
    name: "Gold Layered Chain Necklace",
    category: "jewelry",
    price: 58.0,
    image: "public/gold-layered-necklace.jpg",
    description: "Multi-layered gold chain necklace with African pendants. Modern elegance.",
  },
  {
    id: 37,
    name: "Turquoise Stone Earrings",
    category: "jewelry",
    price: 45.0,
    image: "public/turquoise-earrings.jpg",
    description: "Natural turquoise stone earrings in gold setting. Vibrant and eye-catching.",
  },
  {
    id: 38,
    name: "Beaded Hoop Earrings",
    category: "jewelry",
    price: 32.0,
    image: "public/beaded-hoop-earrings.jpg",
    description: "Colorful beaded hoop earrings. Handcrafted with traditional patterns.",
  },
  {
    id: 39,
    name: "Silver Anklet Set",
    category: "jewelry",
    price: 38.0,
    image: "public/silver-anklet-set.jpg",
    description: "Set of two silver anklets with bells. Traditional and musical.",
  },
  {
    id: 40,
    name: "Amber Bead Necklace",
    category: "jewelry",
    price: 78.0,
    image: "public/amber-bead-necklace.jpg",
    description: "Genuine amber bead necklace. Warm tones and natural beauty.",
  },
  {
    id: 41,
    name: "Gold Filigree Brooch",
    category: "jewelry",
    price: 52.0,
    image: "public/gold-filigree-brooch.jpg",
    description: "Intricate gold filigree brooch with traditional motifs. Elegant accessory.",
  },
  {
    id: 42,
    name: "Emerald Crystal Necklace",
    category: "jewelry",
    price: 65.0,
    image: "public/emerald-crystal-necklace.jpg",
    description: "Emerald crystal necklace with gold chain. Luxurious and regal.",
  },
  {
    id: 43,
    name: "Brass Spiral Earrings",
    category: "jewelry",
    price: 28.0,
    image: "public/brass-spiral-earrings.jpg",
    description: "Handcrafted brass spiral earrings. Unique African design.",
  },
  {
    id: 44,
    name: "Multi-Strand Coral Bracelet",
    category: "jewelry",
    price: 72.0,
    image: "public/coral-bracelet.jpg",
    description: "Multi-strand coral bracelet with gold clasp. Traditional elegance.",
  },
  {
    id: 45,
    name: "Silver Adinkra Ring",
    category: "jewelry",
    price: 42.0,
    image: "public/silver-adinkra-ring.jpg",
    description: "Sterling silver ring with Adinkra symbol. Meaningful and beautiful.",
  },
  {
    id: 46,
    name: "Beaded Tassel Earrings",
    category: "jewelry",
    price: 35.0,
    image: "public/beaded-tassel-earrings.jpg",
    description: "Long beaded tassel earrings in vibrant colors. Statement piece.",
  },
  {
    id: 47,
    name: "Gold Coin Necklace",
    category: "jewelry",
    price: 68.0,
    image: "public/gold-coin-necklace.jpg",
    description: "Gold coin necklace with African motifs. Symbol of prosperity.",
  },
  {
    id: 48,
    name: "Leather Cord Bracelet",
    category: "jewelry",
    price: 25.0,
    image: "public/leather-cord-bracelet.jpg",
    description: "Leather cord bracelet with brass beads. Casual and stylish.",
  },
  {
    id: 49,
    name: "Ruby Stone Ring",
    category: "jewelry",
    price: 85.0,
    image: "public/ruby-stone-ring.jpg",
    description: "Ruby stone ring in gold setting. Elegant and timeless.",
  },

  // Bags & Clutches
  {
    id: 11,
    name: "Ankara Print Tote Bag",
    category: "bags",
    price: 58.0,
    image: "public/ankara-tote-bag.jpg",
    description: "Spacious tote bag in vibrant ankara print. Features leather handles and interior pockets.",
  },
  {
    id: 12,
    name: "Beaded Evening Clutch",
    category: "bags",
    price: 72.0,
    image: "public/beaded-evening-clutch.jpg",
    description: "Handbeaded clutch in gold and black. Perfect for special occasions and evening events.",
  },
  {
    id: 13,
    name: "Leather & Ankara Crossbody",
    category: "bags",
    price: 85.0,
    image: "public/leather-ankara-crossbody.jpg",
    description: "Genuine leather crossbody bag with ankara print accents. Adjustable strap and multiple compartments.",
  },
  {
    id: 14,
    name: "Woven Straw Handbag",
    category: "bags",
    price: 45.0,
    image: "public/woven-straw-handbag.jpg",
    description: "Handwoven straw handbag with leather trim. Eco-friendly and stylish for everyday use.",
  },
  {
    id: 15,
    name: "Embroidered Clutch Purse",
    category: "bags",
    price: 38.0,
    image: "public/embroidered-clutch.jpg",
    description: "Elegant clutch with traditional embroidery. Compact design with chain strap option.",
  },
  {
    id: 50,
    name: "Ankara Print Shoulder Bag",
    category: "bags",
    price: 68.0,
    image: "public/ankara-shoulder-bag.jpg",
    description: "Medium shoulder bag in bold ankara print. Multiple compartments.",
  },
  {
    id: 51,
    name: "Beaded Box Clutch",
    category: "bags",
    price: 82.0,
    image: "public/beaded-box-clutch.jpg",
    description: "Handbeaded box clutch in traditional patterns. Perfect for weddings.",
  },
  {
    id: 52,
    name: "Leather Bucket Bag",
    category: "bags",
    price: 95.0,
    image: "public/leather-bucket-bag.jpg",
    description: "Genuine leather bucket bag with ankara lining. Spacious and stylish.",
  },
  {
    id: 53,
    name: "Woven Raffia Clutch",
    category: "bags",
    price: 42.0,
    image: "public/raffia-clutch.jpg",
    description: "Natural raffia clutch with leather trim. Eco-friendly chic.",
  },
  {
    id: 54,
    name: "Ankara Backpack",
    category: "bags",
    price: 78.0,
    image: "public/ankara-backpack.jpg",
    description: "Stylish ankara print backpack. Perfect for everyday use.",
  },
  {
    id: 55,
    name: "Sequin Evening Bag",
    category: "bags",
    price: 65.0,
    image: "public/sequin-evening-bag.jpg",
    description: "Glamorous sequin evening bag with chain strap. Party ready.",
  },
  {
    id: 56,
    name: "Leather Crossbody Purse",
    category: "bags",
    price: 72.0,
    image: "public/leather-crossbody-purse.jpg",
    description: "Compact leather crossbody with ankara accent. Versatile and practical.",
  },
  {
    id: 57,
    name: "Beaded Drawstring Bag",
    category: "bags",
    price: 55.0,
    image: "public/beaded-drawstring-bag.jpg",
    description: "Handbeaded drawstring bag. Unique and eye-catching design.",
  },
  {
    id: 58,
    name: "Canvas Tote with Ankara Trim",
    category: "bags",
    price: 48.0,
    image: "public/canvas-tote-ankara.jpg",
    description: "Durable canvas tote with ankara trim. Spacious and eco-friendly.",
  },
  {
    id: 59,
    name: "Metallic Clutch Purse",
    category: "bags",
    price: 58.0,
    image: "public/metallic-clutch.jpg",
    description: "Metallic finish clutch with geometric design. Modern glamour.",
  },
  {
    id: 60,
    name: "Ankara Laptop Bag",
    category: "bags",
    price: 88.0,
    image: "public/ankara-laptop-bag.jpg",
    description: "Professional laptop bag in ankara print. Padded protection with style.",
  },
  {
    id: 61,
    name: "Embroidered Shoulder Bag",
    category: "bags",
    price: 75.0,
    image: "public/embroidered-shoulder-bag.jpg",
    description: "Leather shoulder bag with traditional embroidery. Artisan crafted.",
  },

  // Waist Beads
  {
    id: 16,
    name: "Traditional Waist Beads - Red & Gold",
    category: "beads",
    price: 22.0,
    image: "public/red-gold-waist-beads.jpg",
    description: "Handstrung waist beads in red and gold. Symbol of femininity and body confidence.",
  },
  {
    id: 17,
    name: "Crystal Waist Beads Set",
    category: "beads",
    price: 28.0,
    image: "public/crystal-waist-beads.jpg",
    description: "Set of three crystal waist beads in complementary colors. Adjustable and comfortable.",
  },
  {
    id: 18,
    name: "Cowrie Shell Waist Beads",
    category: "beads",
    price: 32.0,
    image: "public/cowrie-waist-beads.jpg",
    description: "Waist beads adorned with cowrie shells. Traditional design with modern appeal.",
  },
  {
    id: 19,
    name: "Multi-Color Waist Beads",
    category: "beads",
    price: 25.0,
    image: "public/multicolor-waist-beads.jpg",
    description: "Vibrant multi-colored waist beads. Perfect for layering or wearing solo.",
  },
  {
    id: 20,
    name: "Black & Silver Waist Beads",
    category: "beads",
    price: 24.0,
    image: "public/black-silver-waist-beads.jpg",
    description: "Elegant black and silver waist beads. Sophisticated and versatile for any occasion.",
  },
  {
    id: 62,
    name: "Rainbow Waist Beads",
    category: "beads",
    price: 26.0,
    image: "public/rainbow-waist-beads.jpg",
    description: "Vibrant rainbow colored waist beads. Celebrate diversity and joy.",
  },
  {
    id: 63,
    name: "Gold & Amber Waist Beads",
    category: "beads",
    price: 35.0,
    image: "public/gold-amber-waist-beads.jpg",
    description: "Luxurious gold and amber waist beads. Warm and elegant.",
  },
  {
    id: 64,
    name: "Turquoise Waist Beads Set",
    category: "beads",
    price: 30.0,
    image: "public/turquoise-waist-beads-set.jpg",
    description: "Set of two turquoise waist beads. Calming and beautiful.",
  },
  {
    id: 65,
    name: "Purple & Gold Waist Beads",
    category: "beads",
    price: 28.0,
    image: "public/purple-gold-waist-beads.jpg",
    description: "Royal purple and gold waist beads. Regal and sophisticated.",
  },
  {
    id: 66,
    name: "Coral Pink Waist Beads",
    category: "beads",
    price: 24.0,
    image: "public/coral-pink-waist-beads.jpg",
    description: "Soft coral pink waist beads. Feminine and delicate.",
  },
  {
    id: 67,
    name: "Green & White Waist Beads",
    category: "beads",
    price: 22.0,
    image: "public/green-white-waist-beads.jpg",
    description: "Nigerian flag colors waist beads. Patriotic and proud.",
  },
  {
    id: 68,
    name: "Metallic Silver Waist Beads",
    category: "beads",
    price: 32.0,
    image: "public/metallic-silver-waist-beads.jpg",
    description: "Shimmering metallic silver waist beads. Modern and chic.",
  },
  {
    id: 69,
    name: "Earth Tone Waist Beads",
    category: "beads",
    price: 25.0,
    image: "public/earth-tone-waist-beads.jpg",
    description: "Natural earth tone waist beads. Grounding and organic.",
  },
  {
    id: 70,
    name: "Blue & Yellow Waist Beads",
    category: "beads",
    price: 23.0,
    image: "public/blue-yellow-waist-beads.jpg",
    description: "Bright blue and yellow waist beads. Cheerful and vibrant.",
  },
  {
    id: 71,
    name: "Rose Gold Waist Beads",
    category: "beads",
    price: 34.0,
    image: "public/rose-gold-waist-beads.jpg",
    description: "Elegant rose gold waist beads. Trendy and romantic.",
  },
  {
    id: 72,
    name: "Charm Waist Beads",
    category: "beads",
    price: 38.0,
    image: "public/charm-waist-beads.jpg",
    description: "Waist beads with African symbol charms. Meaningful and decorative.",
  },
]

const PRICE_FORMATTER = new Intl.NumberFormat("en-NG", {
  style: "currency",
  currency: "NGN",
  minimumFractionDigits: 2,
})

let stripe = null
let cardElement = null

function initializeStripe() {
  // Replace with your actual Stripe publishable key
  const stripePublishableKey = "pk_test_YOUR_KEY_HERE" // Client should replace this
  try {
    stripe = window.Stripe(stripePublishableKey)
    const elements = stripe.elements()
    cardElement = elements.create("card", {
      style: {
        base: {
          fontSize: "16px",
          color: "#2a2a2a",
          "::placeholder": {
            color: "#6b6b6b",
          },
        },
        invalid: {
          color: "#dc2626",
        },
      },
    })
    cardElement.mount("#card-element")

    // Handle real-time validation errors
    cardElement.on("change", (event) => {
      const displayError = document.getElementById("cardError")
      if (event.error) {
        displayError.textContent = event.error.message
      } else {
        displayError.textContent = ""
      }
    })
  } catch (error) {
    console.error("[v0] Stripe initialization error:", error)
    showToast("Payment system unavailable. Please try again later.", "error")
  }
}

// State Management
let cart = []
let currentCategory = "all"
let selectedProduct = null
let isSearchOpen = false

function showLoading() {
  document.getElementById("loadingOverlay").classList.add("active")
}

function hideLoading() {
  document.getElementById("loadingOverlay").classList.remove("active")
}

function showToast(message, type = "success") {
  const container = document.getElementById("toastContainer")
  const toast = document.createElement("div")
  toast.className = `toast toast-${type}`
  toast.innerHTML = `
        <svg width="20" height="20" viewBox="0 0 20 20" fill="currentColor">
            ${
              type === "success"
                ? '<path d="M10 0a10 10 0 100 20 10 10 0 000-20zm5 8l-6 6-3-3 1.5-1.5L9 11l4.5-4.5L15 8z"/>'
                : '<path d="M10 0a10 10 0 100 20 10 10 0 000-20zm1 14H9v-2h2v2zm0-4H9V6h2v4z"/>'
            }
        </svg>
        <span>${message}</span>
    `
  container.appendChild(toast)

  setTimeout(() => toast.classList.add("show"), 10)
  setTimeout(() => {
    toast.classList.remove("show")
    setTimeout(() => toast.remove(), 300)
  }, 3000)
}

function sanitizeInput(input) {
  const div = document.createElement("div")
  div.textContent = input
  return div.innerHTML
}

function validateEmail(email) {
  const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/
  return re.test(email)
}

function validateForm() {
  let isValid = true
  const fields = [
    { id: "email", validator: (val) => validateEmail(val), message: "Please enter a valid email address" },
    { id: "firstName", validator: (val) => val.trim().length > 0, message: "First name is required" },
    { id: "lastName", validator: (val) => val.trim().length > 0, message: "Last name is required" },
    { id: "address", validator: (val) => val.trim().length > 0, message: "Address is required" },
    { id: "city", validator: (val) => val.trim().length > 0, message: "City is required" },
    { id: "state", validator: (val) => val.trim().length > 0, message: "State is required" },
    { id: "zip", validator: (val) => val.trim().length > 0, message: "ZIP code is required" },
  ]

  fields.forEach((field) => {
    const input = document.getElementById(field.id)
    const error = document.getElementById(`${field.id}Error`)
    const value = input.value

    if (!field.validator(value)) {
      error.textContent = field.message
      input.classList.add("error")
      isValid = false
    } else {
      error.textContent = ""
      input.classList.remove("error")
    }
  })

  return isValid
}

// Initialize
document.addEventListener("DOMContentLoaded", () => {
  renderProducts()
  setupEventListeners()
  loadCartFromStorage()
  initializeStripe()
})

// Render Products
function renderProducts(category = "all", searchTerm = "") {
  const grid = document.getElementById("productsGrid")
  const loading = document.getElementById("productsLoading")
  const empty = document.getElementById("productsEmpty")

  loading.style.display = "flex"
  grid.style.display = "none"
  empty.style.display = "none"

  setTimeout(() => {
    let filteredProducts = category === "all" ? products : products.filter((p) => p.category === category)

    if (searchTerm) {
      filteredProducts = filteredProducts.filter(
        (p) =>
          p.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
          p.description.toLowerCase().includes(searchTerm.toLowerCase()),
      )
    }

    loading.style.display = "none"

    if (filteredProducts.length === 0) {
      empty.style.display = "flex"
      return
    }

    grid.style.display = "grid"
    grid.innerHTML = filteredProducts
      .map(
        (product) => `
            <div class="product-card" data-product-id="${product.id}" role="listitem" tabindex="0">
                <div class="product-image">
                    <img src="${product.image}" alt="${product.name}" loading="lazy">
                </div>
                <div class="product-info">
                    <div class="product-category">${getCategoryName(product.category)}</div>
                    <h3 class="product-name">${product.name}</h3>
                    <div class="product-price">${PRICE_FORMATTER.format(product.price)}</div>
                </div>
            </div>
        `,
      )
      .join("")

    document.querySelectorAll(".product-card").forEach((card) => {
      card.addEventListener("click", () => {
        const productId = Number.parseInt(card.dataset.productId)
        openProductModal(productId)
      })
      card.addEventListener("keypress", (e) => {
        if (e.key === "Enter" || e.key === " ") {
          e.preventDefault()
          const productId = Number.parseInt(card.dataset.productId)
          openProductModal(productId)
        }
      })
    })
  }, 300)
}

function getCategoryName(category) {
  const names = {
    gele: "Gele & Head Wraps",
    jewelry: "Jewelry",
    bags: "Bags & Clutches",
    beads: "Waist Beads",
  }
  return names[category] || category
}

// Setup Event Listeners
function setupEventListeners() {
  const mobileMenuToggle = document.getElementById("mobileMenuToggle")
  const mobileMenuOverlay = document.getElementById("mobileMenuOverlay")
  const mainNav = document.getElementById("mainNav")

  mobileMenuToggle?.addEventListener("click", () => {
    const isOpen = mainNav.classList.toggle("active")
    mobileMenuOverlay.classList.toggle("active")
    mobileMenuToggle.setAttribute("aria-expanded", isOpen)
    document.body.style.overflow = isOpen ? "hidden" : ""
  })

  mobileMenuOverlay?.addEventListener("click", () => {
    mainNav.classList.remove("active")
    mobileMenuOverlay.classList.remove("active")
    mobileMenuToggle.setAttribute("aria-expanded", "false")
    document.body.style.overflow = ""
  })

  const searchToggle = document.getElementById("searchToggle")
  const searchDropdown = document.getElementById("searchDropdown")
  const searchInput = document.getElementById("searchInput")

  searchToggle?.addEventListener("click", () => {
    isSearchOpen = !isSearchOpen
    searchDropdown.classList.toggle("active")
    if (isSearchOpen) {
      searchInput.focus()
    }
  })

  searchInput?.addEventListener("input", (e) => {
    const term = e.target.value.trim()
    if (term.length > 2) {
      searchProducts(term)
    } else {
      document.getElementById("searchResults").innerHTML = ""
    }
  })

  // Close search when clicking outside
  document.addEventListener("click", (e) => {
    if (!e.target.closest(".search-container")) {
      searchDropdown?.classList.remove("active")
      isSearchOpen = false
    }
  })

  // Category navigation
  document.querySelectorAll(".nav-link").forEach((link) => {
    link.addEventListener("click", (e) => {
      e.preventDefault()
      const category = link.dataset.category
      currentCategory = category

      document.querySelectorAll(".nav-link").forEach((l) => l.classList.remove("active"))
      link.classList.add("active")

      renderProducts(category)

      // Close mobile menu if open
      mainNav.classList.remove("active")
      mobileMenuOverlay.classList.remove("active")
      mobileMenuToggle.setAttribute("aria-expanded", "false")
      document.body.style.overflow = ""
    })

    link.addEventListener("keypress", (e) => {
      if (e.key === "Enter" || e.key === " ") {
        e.preventDefault()
        link.click()
      }
    })
  })

  // Mobile category select
  document.getElementById("mobile-category")?.addEventListener("change", (e) => {
    currentCategory = e.target.value
    renderProducts(currentCategory)
  })

  // Hero CTA
  document.querySelector(".hero-cta")?.addEventListener("click", () => {
    document.querySelector(".products-section").scrollIntoView({ behavior: "smooth" })
  })

  // Cart toggle
  const cartToggle = document.querySelector(".cart-toggle")
  cartToggle?.addEventListener("click", toggleCart)
  document.querySelector(".cart-close")?.addEventListener("click", toggleCart)

  // Modal close
  document.querySelector(".modal-close")?.addEventListener("click", closeProductModal)
  document.querySelector(".modal-overlay")?.addEventListener("click", closeProductModal)

  document.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      if (document.getElementById("productModal").classList.contains("active")) {
        closeProductModal()
      }
      if (document.getElementById("cartSidebar").classList.contains("active")) {
        toggleCart()
      }
    }
  })

  // Quantity controls
  document.querySelectorAll(".quantity-btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const action = btn.dataset.action
      const input = document.getElementById("productQuantity")
      const value = Number.parseInt(input.value)

      if (action === "increase" && value < 10) {
        input.value = value + 1
      } else if (action === "decrease" && value > 1) {
        input.value = value - 1
      }
    })
  })

  // Add to cart
  document.getElementById("addToCartBtn")?.addEventListener("click", addToCart)

  // Checkout button
  document.getElementById("checkoutBtn")?.addEventListener("click", goToCheckout)

  // Back to shop
  document.getElementById("backToShop")?.addEventListener("click", backToShop)

  document.getElementById("checkoutForm")?.addEventListener("submit", async (e) => {
    e.preventDefault()
    await placeOrder()
  })

  // Continue shopping
  document.getElementById("continueShopping")?.addEventListener("click", () => {
    document.getElementById("confirmationPage").classList.remove("active")
    cart = []
    saveCartToStorage()
    updateCartUI()
  })

  const formInputs = document.querySelectorAll("#checkoutForm input")
  formInputs.forEach((input) => {
    input.addEventListener("blur", () => {
      const errorId = `${input.id}Error`
      const errorElement = document.getElementById(errorId)
      if (errorElement) {
        if (input.value.trim() === "") {
          errorElement.textContent = "This field is required"
          input.classList.add("error")
        } else if (input.type === "email" && !validateEmail(input.value)) {
          errorElement.textContent = "Please enter a valid email address"
          input.classList.add("error")
        } else {
          errorElement.textContent = ""
          input.classList.remove("error")
        }
      }
    })
  })
}

function searchProducts(term) {
  const results = products.filter(
    (p) =>
      p.name.toLowerCase().includes(term.toLowerCase()) || p.description.toLowerCase().includes(term.toLowerCase()),
  )

  const resultsContainer = document.getElementById("searchResults")
  if (results.length === 0) {
    resultsContainer.innerHTML = '<div class="search-no-results">No products found</div>'
    return
  }

  resultsContainer.innerHTML = results
    .slice(0, 5)
    .map(
      (product) => `
        <div class="search-result-item" data-product-id="${product.id}">
            <img src="${product.image}" alt="${product.name}">
            <div class="search-result-info">
                <div class="search-result-name">${product.name}</div>
                <div class="search-result-price">${PRICE_FORMATTER.format(product.price)}</div>
            </div>
        </div>
    `,
    )
    .join("")

  // Add click listeners
  document.querySelectorAll(".search-result-item").forEach((item) => {
    item.addEventListener("click", () => {
      const productId = Number.parseInt(item.dataset.productId)
      openProductModal(productId)
      document.getElementById("searchDropdown").classList.remove("active")
      document.getElementById("searchInput").value = ""
      resultsContainer.innerHTML = ""
    })
  })
}

// Product Modal
function openProductModal(productId) {
  selectedProduct = products.find((p) => p.id === productId)
  if (!selectedProduct) return

  document.getElementById("modalProductImage").src = selectedProduct.image
  document.getElementById("modalProductImage").alt = selectedProduct.name
  document.getElementById("modalProductName").textContent = selectedProduct.name
  document.getElementById("modalProductPrice").textContent = PRICE_FORMATTER.format(selectedProduct.price)
  document.getElementById("modalProductDescription").textContent = selectedProduct.description
  document.getElementById("productQuantity").value = 1

  document.getElementById("productModal").classList.add("active")
  document.body.style.overflow = "hidden"
}

function closeProductModal() {
  document.getElementById("productModal").classList.remove("active")
  document.body.style.overflow = ""
  selectedProduct = null
}

// Cart Functions
function addToCart() {
  if (!selectedProduct) return

  const size = document.getElementById("productSize").value
  const quantity = Number.parseInt(document.getElementById("productQuantity").value)

  const existingItem = cart.find((item) => item.id === selectedProduct.id && item.size === size)

  if (existingItem) {
    existingItem.quantity += quantity
  } else {
    cart.push({
      ...selectedProduct,
      size,
      quantity,
    })
  }

  saveCartToStorage()
  updateCartUI()
  closeProductModal()
  toggleCart()

  showToast(`${selectedProduct.name} added to cart!`, "success")
}

function removeFromCart(index) {
  const item = cart[index]
  cart.splice(index, 1)
  saveCartToStorage()
  updateCartUI()

  showToast(`${item.name} removed from cart`, "success")
}

function updateCartUI() {
  const cartItems = document.getElementById("cartItems")
  const cartEmpty = document.getElementById("cartEmpty")
  const cartFooter = document.getElementById("cartFooter")
  const cartCount = document.querySelector(".cart-count")

  const totalItems = cart.reduce((sum, item) => sum + item.quantity, 0)
  cartCount.textContent = totalItems

  if (cart.length === 0) {
    cartEmpty.style.display = "flex"
    cartFooter.style.display = "none"
    cartItems.innerHTML = ""
    return
  }

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
                    <div class="cart-item-price">${PRICE_FORMATTER.format(item.price * item.quantity)}</div>
                    <button class="cart-item-remove" onclick="removeFromCart(${index})" aria-label="Remove ${item.name} from cart">Remove</button>
                </div>
            </div>
        </div>
    `,
    )
    .join("")

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  document.getElementById("cartSubtotal").textContent = PRICE_FORMATTER.format(subtotal)
}

function toggleCart() {
  const sidebar = document.getElementById("cartSidebar")
  const isActive = sidebar.classList.toggle("active")
  document.querySelector(".cart-toggle")?.setAttribute("aria-expanded", isActive)
}

// Checkout Functions
function goToCheckout() {
  if (cart.length === 0) {
    showToast("Your cart is empty", "error")
    return
  }

  document.getElementById("checkoutPage").classList.add("active")
  document.getElementById("cartSidebar").classList.remove("active")
  updateOrderSummary()
  window.scrollTo(0, 0)
}

function backToShop() {
  document.getElementById("checkoutPage").classList.remove("active")
}

function updateOrderSummary() {
  const summaryItems = document.getElementById("summaryItems")

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
            <div class="summary-item-price">${PRICE_FORMATTER.format(item.price * item.quantity)}</div>
        </div>
    `,
    )
    .join("")

  const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
  const shipping = 2500.0 // ₦2,500 flat rate shipping
  const tax = subtotal * 0.075 // 7.5% VAT in Nigeria
  const total = subtotal + shipping + tax

  document.getElementById("summarySubtotal").textContent = PRICE_FORMATTER.format(subtotal)
  document.getElementById("summaryShipping").textContent = PRICE_FORMATTER.format(shipping)
  document.getElementById("summaryTax").textContent = PRICE_FORMATTER.format(tax)
  document.getElementById("summaryTotal").textContent = PRICE_FORMATTER.format(total)
}

async function placeOrder() {
  // Validate form
  if (!validateForm()) {
    showToast("Please fill in all required fields correctly", "error")
    return
  }

  // Show loading state
  const submitButton = document.getElementById("placeOrderBtn")
  const buttonText = document.getElementById("buttonText")
  const buttonSpinner = document.getElementById("buttonSpinner")

  submitButton.disabled = true
  buttonText.style.display = "none"
  buttonSpinner.style.display = "inline-block"

  try {
    // Create payment intent (in production, this would be a server call)
    const subtotal = cart.reduce((sum, item) => sum + item.price * item.quantity, 0)
    const shipping = 2500.0
    const tax = subtotal * 0.075
    const total = subtotal + shipping + tax

    // In production, you would call your server to create a payment intent
    // const response = await fetch('/create-payment-intent', {
    //   method: 'POST',
    //   headers: { 'Content-Type': 'application/json' },
    //   body: JSON.stringify({ amount: total * 100 }) // Amount in kobo
    // });
    // const { clientSecret } = await response.json();

    // For demo purposes, simulate payment processing
    await new Promise((resolve) => setTimeout(resolve, 2000))

    // Confirm payment with Stripe (in production)
    // const { error, paymentIntent } = await stripe.confirmCardPayment(clientSecret, {
    //   payment_method: {
    //     card: cardElement,
    //     billing_details: {
    //       name: `${document.getElementById('firstName').value} ${document.getElementById('lastName').value}`,
    //       email: document.getElementById('email').value,
    //       address: {
    //         line1: document.getElementById('address').value,
    //         city: document.getElementById('city').value,
    //         state: document.getElementById('state').value,
    //         postal_code: document.getElementById('zip').value,
    //       }
    //     }
    //   }
    // });

    // if (error) {
    //   throw new Error(error.message);
    // }

    // Generate order number
    const orderNumber = "ADR-" + Math.random().toString(36).substr(2, 9).toUpperCase()
    const email = sanitizeInput(document.getElementById("email").value)

    // Show confirmation
    document.getElementById("orderNumber").textContent = orderNumber
    document.getElementById("orderEmail").textContent = email
    document.getElementById("orderTotal").textContent = PRICE_FORMATTER.format(total)

    document.getElementById("checkoutPage").classList.remove("active")
    document.getElementById("confirmationPage").classList.add("active")

    // Reset form and cart
    document.getElementById("checkoutForm").reset()
    cart = []
    saveCartToStorage()
    updateCartUI()

    showToast("Order placed successfully!", "success")
  } catch (error) {
    console.error("[v0] Payment error:", error)
    showToast(error.message || "Payment failed. Please try again.", "error")
  } finally {
    submitButton.disabled = false
    buttonText.style.display = "inline"
    buttonSpinner.style.display = "none"
  }
}

// Local Storage
function saveCartToStorage() {
  try {
    localStorage.setItem("adire_cart", JSON.stringify(cart))
  } catch (error) {
    console.error("[v0] Error saving cart:", error)
  }
}

function loadCartFromStorage() {
  try {
    const saved = localStorage.getItem("adire_cart")
    if (saved) {
      cart = JSON.parse(saved)
      updateCartUI()
    }
  } catch (error) {
    console.error("[v0] Error loading cart:", error)
    cart = []
  }
}

// Make removeFromCart available globally
window.removeFromCart = removeFromCart
