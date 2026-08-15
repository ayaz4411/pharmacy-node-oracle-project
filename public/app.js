const pageTitle = document.getElementById("page-title");
const pageDescription = document.getElementById("page-description");
const pageContent = document.getElementById("page-content");

const descriptions = {
  home: "Pharmacy management dashboard",
  analysis: "Government pricing analysis",
  submissions: "Government pricing submissions",
  data: "Government pricing data",
  administration: "Government pricing administration",
  "mapping-sets": "Master data mapping sets",
  "advanced-membership": "Advanced membership management",
  products: "Product master data",
  "trading-partners": "Trading partner master data",
  "administration-revenue": "Revenue manager administration",
  contracts: "Revenue contracts",
  "submissions-revenue": "Revenue submissions",
  settlements: "Revenue settlements"
};

document.querySelectorAll(".parent").forEach(button => {
  button.addEventListener("click", () => {
    button.parentElement.classList.toggle("open");
    const arrow = button.querySelector(".arrow");
    if (arrow) {
      arrow.textContent = button.parentElement.classList.contains("open") ? "⌄" : "›";
    }
  });
});

document.querySelectorAll("[data-page]").forEach(button => {
  button.addEventListener("click", () => {
    const page = button.dataset.page;

    document.querySelectorAll(".nav-item").forEach(item => {
      item.classList.remove("active");
    });

    if (page === "home") {
      button.classList.add("active");
    }

    pageTitle.textContent = button.textContent.trim();
    pageDescription.textContent = descriptions[page] || "";

    if (page !== "home") {
      pageContent.innerHTML = `
        <div class="panel">
          <h2>${button.textContent.trim()}</h2>
          <p>This module is ready for implementation.</p>
        </div>
      `;
    }
  });
});

document.getElementById("db-test").addEventListener("click", async () => {
  const output = document.getElementById("db-result");
  output.textContent = "Testing Oracle connection...";

  try {
    const response = await fetch("/api/health");
    const data = await response.json();
    output.textContent = JSON.stringify(data, null, 2);
  } catch (error) {
    output.textContent = `Request failed: ${error.message}`;
  }
});