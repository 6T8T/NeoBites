const menuItems = [
  
  {
    name: "Plasma Rolls",
    description: "Infused with electric spice and a holographic sesame glaze, these rolls are perfect for the bold palate.",
    image: "https://images.pexels.com/photos/271715/pexels-photo-271715.jpeg?auto=compress&cs=tinysrgb&h=750&w=1260",
    calories: 420,
      protein: "12G",
      fat: "20G",
      carbs: "40G",
      allergens: "CONTAINS : Seasame, Soy, and Wheat",
      pregnancySafe: true
  },

  {
    name: "Nova Curry",
    description: "A rich galactic blend of spice, starlight rice, and chroma greens.",
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    calories: 530,
    protein: "14G",
    fat: "18G",
    carbs: "55G",
    allergens: "CONTAINS : Seasame, Soy, and Wheat",
    pregnancySafe: true
  },


  {
    name: "Cyber Tacos",
    description: "Tri-shell tacos with neon aioli and programmable protein.",
    image: "https://images.pexels.com/photos/461198/pexels-photo-461198.jpeg",
    calories: 470,
    protein: "16G",
    fat: "22G",
    carbs: "38G",
    allergens: "CONTAINS : Soy, Wheat, and Dairy",
    pregnancySafe: false
  },


  {
    name: "Quantum Shake",
    description: "Vanilla, quantum fruit extract, and glow dust swirl.",
    image: "https://images.pexels.com/photos/6413385/pexels-photo-6413385.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750",
    calories: 390,
    protein: "8G",
    fat: "15G",
    carbs: "50G",
    allergens: "CONTAINS : Dairy",
    pregnancySafe: true
  }

  
  // ... other items
];

// ensure this is defined after the array
function generateMenu() {
  const menu = document.getElementById("menu");
  menu.innerHTML = "";

  menuItems.forEach((item, index) => {
    const div = document.createElement("div");
    div.className = "item"; // keep just "item", no background image class
    div.innerHTML = `
      <h3>${item.name}</h3>
      <p>${item.description}</p>
    `;
    div.onclick = () => showDetails(index);
    menu.appendChild(div);
  });
}

