// ==========================================
// BANCO DE DADOS LOCAL (Pré-cadastrados)
// ==========================================
const menuData = [
    // Entradas
    { id: 1, name: "Torresmo de Rolo", price: 49.90, category: "Entradas" },
    { id: 2, name: "Torresmo Pururuca (cubinhos)", price: 49.90, category: "Entradas" },
    { id: 3, name: "Brusqueta", price: 39.90, category: "Entradas" },
    { id: 4, name: "Polenta Ouro da Casa", price: 49.90, category: "Entradas" },
    { id: 5, name: "Fritas", price: 39.50, category: "Entradas" },
    { id: 51, name: "Espeto de Queijo", price: 34.90, category: "Entradas" },

    // Especialidades (Carnes)
    { id: 6, name: "Picanha Premium (Indiv)", price: 129.90, category: "Especialidades" },
    { id: 7, name: "Picanha Premium (Dupla)", price: 249.90, category: "Especialidades" },
    { id: 8, name: "Bife Ancho (Indiv)", price: 109.90, category: "Especialidades" },
    { id: 9, name: "Bife Ancho (Dupla)", price: 219.90, category: "Especialidades" },
    { id: 10, name: "Bife de Chorizo (Indiv)", price: 109.90, category: "Especialidades" },
    { id: 11, name: "Bife de Chorizo (Dupla)", price: 219.90, category: "Especialidades" },
    { id: 12, name: "Chuleta T-Bone (Indiv)", price: 119.90, category: "Especialidades" },
    { id: 13, name: "Chuleta T-Bone (Dupla)", price: 219.90, category: "Especialidades" },
    { id: 14, name: "Maminha (Indiv)", price: 104.90, category: "Especialidades" },
    { id: 15, name: "Maminha (Dupla)", price: 209.90, category: "Especialidades" },
    { id: 16, name: "Fraldinha (Indiv)", price: 104.90, category: "Especialidades" },
    { id: 17, name: "Fraldinha (Dupla)", price: 209.90, category: "Especialidades" },
    { id: 18, name: "Carré de Cordeiro", price: 249.90, category: "Especialidades" },
    { id: 19, name: "Salmão (Indiv)", price: 104.90, category: "Especialidades" },
    { id: 20, name: "Salmão (Dupla)", price: 209.80, category: "Especialidades" },
    { id: 21, name: "Frango Grelhado (Indiv)", price: 94.90, category: "Especialidades" },
    { id: 22, name: "Frango Grelhado (Dupla)", price: 189.80, category: "Especialidades" },

    // Linguiças
    { id: 23, name: "Calabresa Tradicional", price: 99.90, category: "Linguiças" },
    { id: 24, name: "Calabresa Apimentada", price: 99.90, category: "Linguiças" },
    { id: 25, name: "Calabresa com Provolone", price: 99.90, category: "Linguiças" },
    { id: 26, name: "Calabresa c/ Queijo Coalho", price: 99.90, category: "Linguiças" },

    // Executivo e Outros
    { id: 27, name: "Promoção Executiva", price: 64.90, category: "Executivo" },
    { id: 28, name: "Acesso Buffet (Avulso)", price: 64.90, category: "Executivo" },
    { id: 52, name: "Salada Completa", price: 54.90, category: "Executivo" },
    { id: 46, name: "Embalagem para Viagem", price: 4.99, category: "Executivo" },

    // Sobremesas
    { id: 29, name: "Pudim Leite Condensado", price: 29.90, category: "Sobremesas" },
    { id: 30, name: "Petit Gateau", price: 34.90, category: "Sobremesas" },
    { id: 31, name: "Fatia de Abacaxi", price: 19.90, category: "Sobremesas" },
    { id: 47, name: "Café Expresso", price: 9.00, category: "Sobremesas" },

    // Bebidas
    { id: 32, name: "Refrigerante Lata 350ml", price: 14.00, category: "Bebidas" },
    { id: 33, name: "Água / Tônica", price: 14.00, category: "Bebidas" },
    { id: 34, name: "Suco Natural", price: 14.00, category: "Bebidas" },
    { id: 35, name: "Suco Misto", price: 15.00, category: "Bebidas" },
    { id: 36, name: "Jarra de Suco", price: 35.00, category: "Bebidas" },
    { id: 37, name: "Jarra Mista", price: 37.90, category: "Bebidas" },
    { id: 38, name: "Cerveja Clássica 600ml", price: 22.90, category: "Bebidas" },
    { id: 39, name: "Cerveja de Trigo Alemã", price: 35.00, category: "Bebidas" },
    { id: 40, name: "Long Neck Clássica", price: 12.50, category: "Bebidas" },
    { id: 41, name: "Long Neck Premium", price: 14.90, category: "Bebidas" },
    { id: 42, name: "Caipirinha Especial", price: 37.90, category: "Bebidas" },
    { id: 43, name: "Cachaça de Alambique", price: 8.00, category: "Bebidas" },
    { id: 44, name: "Cachaça Weber Haus", price: 22.90, category: "Bebidas" },
    { id: 45, name: "Cachaça (Boazinha ou Salinas)", price: 15.50, category: "Bebidas" },
    { id: 49, name: "Cachaça (Seleta)", price: 19.50, category: "Bebidas" },
    { id: 50, name: "Cachaça (Espírito de Minas)", price: 24.50, category: "Bebidas" },
    { id: 48, name: "Madalena", price: 39.50, category: "Bebidas" },
];

// ==========================================
// ESTADO DA APLICAÇÃO
// ==========================================
let currentCategory = "Entradas";
let ticketItems = []; // { id, name, price, qty }


// ==========================================
// ELEMENTOS DO DOM
// ==========================================
const categoryFiltersEl = document.getElementById("category-filters");
const itemsGridEl = document.getElementById("items-grid");
const ticketItemsEl = document.getElementById("ticket-items");
const subtotalEl = document.getElementById("subtotal");
const totalPriceEl = document.getElementById("total-price");
const taxSelect = document.getElementById("tax-select");
const couvertInput = document.getElementById("couvert-input");
const splitInput = document.getElementById("split-input");
const splitResultEl = document.getElementById("split-result");


// ==========================================
// INICIALIZAÇÃO
// ==========================================
function init() {
    renderCategoryFilters();
    renderItems(currentCategory);
    setupEventListeners();
    updateTicket();
}

// ==========================================
// RENDERIZAÇÃO DA INTERFACE
// ==========================================
function renderCategoryFilters() {
    const categories = [...new Set(menuData.map(item => item.category))];
    categoryFiltersEl.innerHTML = "";

    categories.forEach(category => {
        const btn = document.createElement("button");
        btn.className = `btn-category ${category === currentCategory ? "active" : ""}`;
        btn.textContent = category;
        btn.onclick = () => {
            currentCategory = category;
            renderCategoryFilters();
            renderItems(category);
        };
        categoryFiltersEl.appendChild(btn);
    });
}

function renderItems(category) {
    itemsGridEl.innerHTML = "";
    const items = menuData.filter(item => item.category === category);

    items.forEach(item => {
        const btn = document.createElement("button");
        btn.className = "btn-item";
        btn.innerHTML = `
            <span>${item.name}</span>
            <span class="item-price">${formatCurrency(item.price)}</span>
        `;
        btn.onclick = () => addItemToTicket(item);
        itemsGridEl.appendChild(btn);
    });
}

// ==========================================
// LÓGICA DO CARRINHO (CONTA)
// ==========================================
function addItemToTicket(item) {
    const existingItem = ticketItems.find(i => i.id === item.id);
    if (existingItem) {
        existingItem.qty += 1;
    } else {
        ticketItems.push({ ...item, qty: 1 });
    }
    updateTicket();
}

function removeItemFromTicket(itemId) {
    const index = ticketItems.findIndex(i => i.id === itemId);
    if (index > -1) {
        if (ticketItems[index].qty > 1) {
            ticketItems[index].qty -= 1;
        } else {
            ticketItems.splice(index, 1);
        }
    }
    updateTicket();
}

function formatCurrency(value) {
    return value.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}

function updateTicket() {
    // 1. Renderizar Lista de Itens
    ticketItemsEl.innerHTML = "";
    let subtotal = 0;

    ticketItems.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;

        const div = document.createElement("div");
        div.className = "ticket-item";
        div.innerHTML = `
            <div class="ticket-item-details">
                <span class="ticket-item-name">${item.qty}x ${item.name}</span>
                <span class="ticket-item-price">${formatCurrency(itemTotal)}</span>
            </div>
            <div class="ticket-item-actions">
                <button class="btn-remove" onclick="removeItemFromTicket(${item.id})">-</button>
            </div>
        `;
        ticketItemsEl.appendChild(div);
    });

    // 2. Cálculos
    const taxRate = parseFloat(taxSelect.value) / 100;
    const taxAmount = subtotal * taxRate;
    const couvert = parseFloat(couvertInput.value) || 0;
    const total = subtotal + taxAmount + couvert;
    const splitCount = parseInt(splitInput.value) || 1;
    const perPerson = total / splitCount;

    // 3. Atualizar Valores na Tela
    subtotalEl.textContent = formatCurrency(subtotal);
    totalPriceEl.textContent = formatCurrency(total);
    splitResultEl.textContent = `${formatCurrency(perPerson)} por pessoa`;
}

// ==========================================
// EVENTOS E INTEGRAÇÕES
// ==========================================
function setupEventListeners() {
    taxSelect.addEventListener("change", updateTicket);
    couvertInput.addEventListener("input", updateTicket);
    splitInput.addEventListener("input", updateTicket);

    document.getElementById("btn-minus-person").onclick = () => {
        if (splitInput.value > 1) {
            splitInput.value = parseInt(splitInput.value) - 1;
            updateTicket();
        }
    };

    document.getElementById("btn-plus-person").onclick = () => {
        splitInput.value = parseInt(splitInput.value) + 1;
        updateTicket();
    };



    document.getElementById("btn-custom-item").addEventListener("click", () => {
        const name = prompt("Nome do Item Avulso:");
        if (!name) return;

        const priceStr = prompt("Valor em reais (ex: 15.50 ou 15,50):");
        if (!priceStr) return;

        const price = parseFloat(priceStr.replace(',', '.'));
        if (isNaN(price) || price < 0) {
            alert("Valor inválido!");
            return;
        }

        const customItem = {
            id: Date.now(),
            name: "AVULSO: " + name,
            price: price,
            category: "Diversos"
        };
        addItemToTicket(customItem);
    });

    document.getElementById("btn-clear").addEventListener("click", () => {
        if (confirm("Tem certeza que deseja limpar a conta atual?")) {
            ticketItems = [];
            couvertInput.value = "0.00";
            splitInput.value = "1";
            taxSelect.value = "10";
            document.getElementById("table-number").value = "1";
            updateTicket();
        }
    });

    document.getElementById("btn-print").addEventListener("click", handlePrintReceipt);
}

// ==========================================
// IMPRESSÃO (80mm)
// ==========================================
function handlePrintReceipt() {
    if (ticketItems.length === 0) {
        alert("A conta está vazia!");
        return;
    }

    const printArea = document.getElementById("print-area");
    const tableNumber = document.getElementById("table-number").value;

    let subtotal = 0;
    let itemsHTML = "";

    ticketItems.forEach(item => {
        const itemTotal = item.price * item.qty;
        subtotal += itemTotal;
        itemsHTML += `
            <tr>
                <td class="td-qty">${item.qty}x</td>
                <td class="td-item">${item.name}</td>
                <td class="td-price">${itemTotal.toFixed(2)}</td>
            </tr>
        `;
    });

    const taxRate = parseFloat(taxSelect.value) / 100;
    const taxAmount = subtotal * taxRate;
    const couvert = parseFloat(couvertInput.value) || 0;
    const total = subtotal + taxAmount + couvert;
    const splitCount = parseInt(splitInput.value) || 1;
    const perPerson = total / splitCount;

    const dataHora = new Date().toLocaleString("pt-BR");

    printArea.innerHTML = `
        <div class="receipt-header">
            <h2>ADEGA DO DINO</h2>
            <div>Rua Jundiaí, 254 - Baeta Neves</div>
            <div>CNPJ: 04.538.160/0001-40</div>
        </div>
        
        <div class="receipt-info">
            <div>Data/Hora: ${dataHora}</div>
            <div>Mesa/Comanda: <b>${tableNumber}</b></div>
        </div>

        <table class="receipt-table">
            <thead>
                <tr>
                    <th class="td-qty">Qtd</th>
                    <th class="td-item">Item</th>
                    <th class="td-price">Valor(R$)</th>
                </tr>
            </thead>
            <tbody>
                ${itemsHTML}
            </tbody>
        </table>

        <div class="receipt-totals">
            <div class="receipt-line">
                <span>Subtotal:</span>
                <span>${subtotal.toFixed(2)}</span>
            </div>
            ${taxAmount > 0 ? `
            <div class="receipt-line">
                <span>Taxa de Serviço (${taxSelect.value}%):</span>
                <span>${taxAmount.toFixed(2)}</span>
            </div>` : ""}
            ${couvert > 0 ? `
            <div class="receipt-line">
                <span>Couvert:</span>
                <span>${couvert.toFixed(2)}</span>
            </div>` : ""}
            
            <div class="receipt-line receipt-total-big">
                <span>TOTAL:</span>
                <span>R$ ${total.toFixed(2)}</span>
            </div>
            
          
            ${splitCount > 1 ? `
            <div class="receipt-line">
                <span>Dividido por:</span>
                <span>${splitCount} pessoas</span>
            </div>
            <div class="receipt-line">
                <span>Valor p/ pessoa:</span>
                <span>R$ ${perPerson.toFixed(2)}</span>
            </div>` : ""}
        </div>

        <div class="receipt-footer">
            <p>Obrigado pela preferência!</p>
            <p>Volte sempre à Adega do Dino</p>
            <br>
            <p>-- Sistema Não Fiscal --</p>
        </div>
    `;

    // Persistência no LocalStorage (Relatório do Dia)
    let dailyReport = JSON.parse(localStorage.getItem('adegaDailyReport')) || [];
    dailyReport.push({
        time: dataHora,
        table: tableNumber,
        total: total,
        tax: taxAmount,
        real: total - taxAmount
    });
    localStorage.setItem('adegaDailyReport', JSON.stringify(dailyReport));

    // Aciona a impressão do navegador (que exibirá a tela de print já formatada graças ao CSS)
    window.print();
}

// ==========================================
// RELATÓRIO DO DIA
// ==========================================
function setupReportModal() {
    const reportModal = document.getElementById("report-modal");

    document.getElementById("btn-report").addEventListener("click", () => {
        renderDailyReport();
        reportModal.classList.remove("hidden");
    });

    document.getElementById("btn-close-report").addEventListener("click", () => {
        reportModal.classList.add("hidden");
    });

    document.getElementById("btn-clear-report").addEventListener("click", () => {
        if (confirm("ATENÇÃO: Tem certeza que deseja zerar o caixa do dia? Todos os registros salvos serão apagados!")) {
            localStorage.removeItem('adegaDailyReport');
            renderDailyReport();
            alert("Caixa zerado com sucesso!");
            reportModal.classList.add("hidden");
        }
    });

    document.getElementById("btn-print-report").addEventListener("click", () => {
        printDailyReport();
    });
}

function printDailyReport() {
    const dailyReport = JSON.parse(localStorage.getItem('adegaDailyReport')) || [];
    if (dailyReport.length === 0) {
        alert("Não há dados no relatório de hoje para imprimir.");
        return;
    }

    const printArea = document.getElementById("print-area");
    let totalSales = 0;
    let totalTax = 0;
    let totalReal = 0;
    let itemsHTML = "";

    dailyReport.forEach(report => {
        totalSales += report.total || 0;
        const tax = report.tax || 0;
        const real = report.real || report.total || 0;
        totalTax += tax;
        totalReal += real;

        // Extrai apenas a hora se a string tiver formato "dd/mm/aaaa, hh:mm:ss"
        let timeStr = report.time;
        if (timeStr.includes(",")) {
            timeStr = timeStr.split(",")[1].trim();
        }

        itemsHTML += `
            <div style="border-bottom: 1px dashed #000; padding-bottom: 5px; margin-bottom: 5px;">
                <div style="display:flex; justify-content:space-between; font-size: 14px;">
                    <span>Mesa ${report.table} <small>(${timeStr})</small></span>
                    <b>${(report.total || 0).toFixed(2)}</b>
                </div>
                <div style="display:flex; justify-content:space-between; font-size: 12px;">
                    <span>Real: ${real.toFixed(2)}</span>
                    <span>Taxa: ${tax.toFixed(2)}</span>
                </div>
            </div>
        `;
    });

    const dataHora = new Date().toLocaleString("pt-BR");

    printArea.innerHTML = `
        <div class="receipt-header">
            <h2>ADEGA DO DINO</h2>
            <div>Relatório de Vendas (Caixa)</div>
            <div>Data de Fechamento:</div>
            <div>${dataHora}</div>
            <br>
        </div>
        
        <div class="receipt-info">
            <div>Total de Contas: <b>${dailyReport.length}</b></div>
        </div>
        
        <br>
        <div style="text-align: center; border-bottom: 1px solid #000; margin-bottom: 10px;">
            <b>REGISTROS</b>
        </div>
        
        <div style="margin-bottom: 15px;">
            ${itemsHTML}
        </div>

        <div class="receipt-totals">
            <div class="receipt-line">
                <span>Faturamento Real:</span>
                <span>R$ ${totalReal.toFixed(2)}</span>
            </div>
            <div class="receipt-line">
                <span>Taxa de Serviço:</span>
                <span>R$ ${totalTax.toFixed(2)}</span>
            </div>
            <div class="receipt-line receipt-total-big">
                <span>TOTAL DO DIA:</span>
                <span>R$ ${totalSales.toFixed(2)}</span>
            </div>
        </div>

        <div class="receipt-footer">
            <p>-- Fechamento de Caixa --</p>
            <p>-- Sistema Não Fiscal --</p>
        </div>
    `;

    window.print();
}

function renderDailyReport() {
    const dailyReport = JSON.parse(localStorage.getItem('adegaDailyReport')) || [];
    let totalSales = 0;
    let totalTax = 0;
    let totalReal = 0;

    const reportListEl = document.getElementById("report-list");
    reportListEl.innerHTML = "";

    // Mostra do mais recente para o mais antigo
    [...dailyReport].reverse().forEach((report, index) => {
        const originalIndex = dailyReport.length - 1 - index;
        totalSales += report.total || 0;
        const tax = report.tax || 0;
        const real = report.real || report.total || 0; // fallback

        totalTax += tax;
        totalReal += real;

        const div = document.createElement("div");
        div.className = "report-item";
        div.style.flexDirection = "column";
        div.style.gap = "5px";
        div.innerHTML = `
            <div style="display:flex; justify-content:space-between;">
                <span>Mesa/Comanda: <b>${report.table}</b> <small style="color:#666">(${report.time})</small></span>
                <span><b>${formatCurrency(report.total || 0)}</b></span>
            </div>
            <div style="display:flex; justify-content:space-between; font-size: 14px; color: #555;">
                <span>Real: ${formatCurrency(real)}</span>
                <span>Taxa: ${formatCurrency(tax)}</span>
            </div>
            <div style="display:flex; justify-content:flex-end; gap: 8px; margin-top: 8px;">
                ${tax > 0 ? `<button onclick="removeTaxFromReport(${originalIndex})" style="padding: 4px 8px; font-size: 12px; background: #f39c12; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Remover Taxa</button>` : ''}
                <button onclick="removeReportItem(${originalIndex})" style="padding: 4px 8px; font-size: 12px; background: #e74c3c; color: #fff; border: none; border-radius: 4px; cursor: pointer;">Excluir Mesa</button>
            </div>
        `;
        reportListEl.appendChild(div);
    });

    if (dailyReport.length === 0) {
        reportListEl.innerHTML = "<p style='text-align:center; padding: 20px; color: #666;'>Nenhuma mesa salva no caixa hoje.</p>";
    }

    document.getElementById("report-count").textContent = dailyReport.length;
    document.getElementById("report-total").textContent = formatCurrency(totalSales);
    document.getElementById("report-real").textContent = formatCurrency(totalReal);
    document.getElementById("report-tax").textContent = formatCurrency(totalTax);
}

// Inicia o app
setupReportModal();
init();

// ==========================================
// FUNÇÕES GLOBAIS DE EDIÇÃO DO RELATÓRIO
// ==========================================
window.removeTaxFromReport = function (index) {
    let dailyReport = JSON.parse(localStorage.getItem('adegaDailyReport')) || [];
    if (dailyReport[index] && dailyReport[index].tax > 0) {
        if (confirm("Deseja remover a taxa desta mesa? O valor total será recalculado.")) {
            dailyReport[index].total -= dailyReport[index].tax;
            dailyReport[index].tax = 0;
            localStorage.setItem('adegaDailyReport', JSON.stringify(dailyReport));
            renderDailyReport();
        }
    }
};

window.removeReportItem = function (index) {
    let dailyReport = JSON.parse(localStorage.getItem('adegaDailyReport')) || [];
    if (dailyReport[index]) {
        if (confirm("Deseja realmente EXCLUIR esta mesa do relatório?")) {
            dailyReport.splice(index, 1);
            localStorage.setItem('adegaDailyReport', JSON.stringify(dailyReport));
            renderDailyReport();
        }
    }
};
