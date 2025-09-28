// Єдина константа з усіма ключами
const FIELDS = [
  "Name",                  // [0]
  "Kostenträger-Nr.",      // [1]
  "Kostenträger - Name / Ort", // [2]
  "Von Objekt / Ort",      // [3]
  "Nach Objekt / Ort",     // [4]
  "Zusatzfeld",            // [5]
  "Tarif",                 // [6]
  "Statistik",             // [7]
  "Zusatztext für Rechnung"// [8]
];

const categories = {
  "SCHMIEDER KLINIK": {
    icon: "fa-hospital",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "3491",
      [FIELDS[2]]: "SCHMIEDER KLINIK",
      [FIELDS[3]]: "SCHM. GAILINGEN",
      [FIELDS[4]]: "SCHM. ALLENSBACH / MRT",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "",
      [FIELDS[7]]: "",
      [FIELDS[8]]: ""
    },
    subOptions: [
      { label: "3 - Tragestuhl", [FIELDS[6]]: "9211", icon: "" },
      { label: "4 - gehfähig", [FIELDS[6]]: "9111", icon: "fa-person-walking" },
      { label: "5 - Rollstuhl", [FIELDS[6]]: "9711", icon: "fa-wheelchair-move" }
    ]
  },
  "PRIVAT": {
    icon: "fa-user",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "1",
      [FIELDS[2]]: "PRIVAT",
      [FIELDS[3]]: "WHG",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "6600",
      [FIELDS[7]]: "",
      [FIELDS[8]]: ""
    }
  },
  "Hilfeleistung bzw. Tragehilfen/privat": {
    icon: "fa-hands-helping",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "1",
      [FIELDS[2]]: "Hilfeleistung bzw. Tragehilfen/privat",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "WHG",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "2800",   // Tarif
      [FIELDS[7]]: "93",     // Statistik
      [FIELDS[8]]: "HOCH HELFEN"
    }
  },
  "HAUSNOTRUF": {
    icon: "fa-phone-volume",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "8",
      [FIELDS[2]]: "HAUSNOTRUF",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "WHG",
      [FIELDS[5]]: "8",     // Zusatzfeld
      [FIELDS[6]]: "8609",  // Tarif
      [FIELDS[7]]: "89",    // Statistik
      [FIELDS[8]]: "HNR NR._ _ _ _ _"
    }
  },
  "ZFP Reichenau": {
    icon: "fa-clinic-medical",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "2775",
      [FIELDS[2]]: "ZFP Reichenau",
      [FIELDS[3]]: "ZFP ST. 92",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "9301",  // Tarif
      [FIELDS[7]]: "",
      [FIELDS[8]]: ""
    }
  },
  "LEERFAHRT": {
    icon: "fa-car-side",
    data: {
      [FIELDS[0]]: "DIENSTFAHRT",
      [FIELDS[1]]: "9",
      [FIELDS[2]]: "LEERFAHRT",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "4202 / 4203 / 4205 / 4206",
      [FIELDS[5]]: "7",     // Zusatzfeld
      [FIELDS[6]]: "Kein",  // Tarif
      [FIELDS[7]]: "91",    // Statistik
      [FIELDS[8]]: ""
    }
  },
  "FEHLFAHRT": {
    icon: "fa-exclamation-triangle",
    data: {
      [FIELDS[0]]: "FEHLFAHRT",
      [FIELDS[1]]: "9",
      [FIELDS[2]]: "LEERFAHRT",
      [FIELDS[3]]: "4204",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "6",     // Zusatzfeld
      [FIELDS[6]]: "Kein",  // Tarif
      [FIELDS[7]]: "81",    // Statistik
      [FIELDS[8]]: ""
    }
  },
  "KRANKENHAUS": {
    icon: "fa-hospital-user",
    data: Object.fromEntries(FIELDS.map(f => [f, ""])),
    subOptions: [
      { label: "KH - KONSTANZ",
        [FIELDS[2]]: "KH - KONSTANZ",
        [FIELDS[3]]: "ZNA MED KONSTANZ", 
        [FIELDS[4]]: "ZNA MED SINGEN",
        [FIELDS[7]]: "21",      // Statistik
        [FIELDS[1]]: "1203",
        [FIELDS[6]]: "9101",    // Tarif
        icon: "fa-hospital" },
      { label: "DR. ZWICKER", 
        [FIELDS[2]]: "KH - KN",
        [FIELDS[3]]: "PO3",
        [FIELDS[4]]: "ZWICKER", 
        [FIELDS[7]]: "23 / 24", // Statistik
        [FIELDS[1]]: "1203",
        [FIELDS[6]]: "9101",    // Tarif
        icon: "fa-user-doctor" },
      { label: "KH - SINGEN", 
        [FIELDS[2]]: "KH - SINGEN",
        [FIELDS[3]]: "ZNA MED SINGEN", 
        [FIELDS[4]]: "ZNA MED KONSTANZ",
        [FIELDS[7]]: "21",      // Statistik
        [FIELDS[1]]: "3214",
        [FIELDS[6]]: "9201",    // Tarif
        icon: "fa-hospital" },
      { label: "KH - STOCKACH", 
        [FIELDS[2]]: "KH - STOCKACH",
        [FIELDS[3]]: "ZNA MED STOCKACH",
        [FIELDS[4]]: "ZNA MED KONSTANZ", 
        [FIELDS[7]]: "21",      // Statistik
        [FIELDS[1]]: "3151",
        [FIELDS[6]]: "9301",    // Tarif
        icon: "fa-hospital" }
    ]
  },
  "HEGAU JUGENDWERK": {
    icon: "fa-user-md",
    data: {
      [FIELDS[0]]: "",
      [FIELDS[1]]: "3472",
      [FIELDS[2]]: "",
      [FIELDS[3]]: "",
      [FIELDS[4]]: "",
      [FIELDS[5]]: "",
      [FIELDS[6]]: "9201",  // Tarif
      [FIELDS[7]]: "",
      [FIELDS[8]]: ""
    }
  },
   "Tarife für Rollstuhlfahrten": {
    icon: "fa-notes-medical",
    data: Object.fromEntries(FIELDS.map(f => [f, ""])),
    subOptions: [
      { label: "DAK", [FIELDS[2]]: "DAK", [FIELDS[1]]: "600",  [FIELDS[6]]: "7611", icon: "fa-wheelchair" },
      { label: "TK",  [FIELDS[2]]: "TK",  [FIELDS[1]]: "163",  [FIELDS[6]]: "7611", icon: "fa-wheelchair" },
      { label: "BEK", [FIELDS[2]]: "BEK", [FIELDS[1]]: "748",  [FIELDS[6]]: "7611", icon: "fa-wheelchair" },
      { label: "KKH", [FIELDS[2]]: "KKH", [FIELDS[1]]: "590",  [FIELDS[6]]: "7611", icon: "fa-wheelchair" },
      { label: "hkk", [FIELDS[2]]: "hkk", [FIELDS[1]]: "1602", [FIELDS[6]]: "7611", icon: "fa-wheelchair" },
      { label: "HEK", [FIELDS[2]]: "HEK", [FIELDS[1]]: "175",  [FIELDS[6]]: "7611", icon: "fa-wheelchair" },
      { label: "IKK", [FIELDS[2]]: "IKK", [FIELDS[1]]: "1770", [FIELDS[6]]: "7621", icon: "fa-wheelchair" }
    ]
  }
};
  
// DOM елементи
const resetBtn = document.getElementById("reset-button");
const menuContainer = document.getElementById("menu-buttons");
const subOptions = document.getElementById("sub-options");
const output = document.getElementById("output");
const resetContainer = document.getElementById("reset-container");

// Функція створення кнопок
function createButton(text, iconClass, onClick, extraClass = "") {
  const btn = document.createElement("button");
  btn.className = `icon-button ${extraClass}`.trim();
  btn.innerHTML = iconClass ? `<i class="fas ${iconClass}"></i> ${text}` : text;
  if (onClick) btn.addEventListener("click", onClick);
  return btn;
}

// Очищення контейнерів
function clearContainers() {
  menuContainer.textContent = "";
  subOptions.textContent = "";
  output.textContent = "";
}

// Рендер категорії
function renderView(name) {
  clearContainers();
  const category = categories[name];

  menuContainer.appendChild(
    createButton(name, category.icon, null, "selected")
  );

  resetContainer.style.display = "block";

  if (category.subOptions) {
    category.subOptions.forEach(opt => {
      subOptions.appendChild(
        createButton(opt.label, opt.icon || null, () => renderSubSelection(opt, category.data))
      );
    });
  } else {
    renderTable(category.data);
  }
}

// Рендер підкатегорії
function renderSubSelection(option, baseData) {
  subOptions.textContent = "";
  subOptions.appendChild(createButton(option.label, option.icon || null, null, "sub-selected"));
  renderTable({ ...baseData, ...option });
}

// Рендер таблиці
function renderTable(entry) {
  output.innerHTML = `<div class="vertical-table">${
    FIELDS
      .filter(f => entry[f] && String(entry[f]).trim() !== "")
      .map(f => {
        let extraClass = "";
        if (f === FIELDS[1] || f === FIELDS[6]) {
          extraClass = "highlight";   // підсвічуємо Kostenträger-Nr. і Tarif
        }
        if (f === FIELDS[5] || f === FIELDS[7]) {
          extraClass = "gros";        // підсвічуємо Zusatzfeld і Statistik
        }
        return `<div class="row">
                  <div class="label">${f}</div>
                  <div class="value ${extraClass}">${entry[f]}</div>
                </div>`;
      }).join("")
  }</div>`;
}

// Скидання вибору
function resetView() {
  clearContainers();
  resetContainer.style.display = "none";

  const categoryNames = Object.keys(categories);
  if (categoryNames.length > 0) {
    const firstName = categoryNames[0];
    menuContainer.appendChild(
      createButton(firstName, categories[firstName].icon, () => renderView(firstName))
    );
  }
  categoryNames.slice(1).forEach(name => {
    menuContainer.appendChild(
      createButton(name, categories[name].icon, () => renderView(name))
    );
  });
}

// Події
resetBtn.addEventListener("click", resetView);

// Ініціалізація
resetView();

// Реєстрація Service Worker і повідомлення про оновлення
if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
  navigator.serviceWorker.addEventListener('message', event => {
    if (event.data && event.data.type === 'NEW_VERSION_AVAILABLE') {
      if (confirm('Доступна нова версія — оновити?')) {
        window.location.reload();
      }
    }
  });
}