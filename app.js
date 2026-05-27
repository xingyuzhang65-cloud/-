const waybills = [
  ["首茂电子", "", "USDGAS2605270052", "美国", "不报关", "", "", "", "", "", "0", "", "", "大陆UPS红单包税6000", "已入仓"],
  ["首茂电子", "", "USDGAS2605270051", "美国", "不报关", "", "", "", "", "", "0", "", "", "大陆UPS红单包税6000", "已入仓"],
  ["上海绯阁", "FBA19DW4XDS", "USYWAS2605260520", "加拿大", "托管报关", "", "车牌罩", "", "", "1800", "0", "", "", "美转加加东25日达-卡派...", "已入仓"],
  ["亿迈贸易", "FBA15LTWNF7J,FBA...", "UKPYAS2605260098", "英国", "报关退税", "", "脚趾保护套", "", "", "2050", "1", "", "DPDUK", "英国普货-五日提-不包税", "已入仓"],
  ["离茧贸易yw", "FBA19DYBGXJ2", "USYWAS2605260076", "美国", "报关退税", "", "毛巾", "", "", "300", "0", "", "", "大陆UPS红单包税5000", "已入仓"],
  ["印团网", "", "USFZAS2605221721", "美国", "托管报关", "2026-06-02 00:00:00", "精装书", "2026-05-31 00:00:00", "", "100", "0", "暂扣/退件", "UPS", "美国空派普货-LAX/SFO...", "已入仓"],
  ["好事临贸易", "FBA19DSNG4CV", "USSZAS2605221708", "加拿大", "报关退税", "", "魔术贴", "", "", "332.1", "0", "暂扣/退件", "", "加拿大UPS红单5000直发", "已入仓"],
  ["金逊达电子", "FBA19DS2C38C", "USSZAS2605221271", "美国", "报关退税", "", "不锈钢保鲜盒,硅...", "", "", "7030.7", "0", "暂扣/退件", "", "安杰1号-卡派包税", "已入仓"],
  ["金逊达电子", "FBA19DRZ0QJX", "USSZAS2605221269", "美国", "报关退税", "", "梳子,不锈钢保鲜...", "", "", "7101.9", "0", "暂扣/退件", "", "安杰1号-卡派包税", "已入仓"],
  ["金逊达电子", "FBA19DRZR7PH", "USSZAS2605221268", "美国", "报关退税", "", "不锈钢保鲜盒,梳...", "", "", "6441.9", "0", "暂扣/退件", "", "安杰1号-卡派包税", "已入仓"],
  ["优简舒科技", "", "USXMAS2605220646", "加拿大", "托管报关", "", "女性内裤", "", "", "2973", "0", "暂扣/退件", "", "美转加加西MAX17日达-...", "已入仓"],
  ["天恒翼贸易", "", "USSZAS2605210700", "加拿大", "托管报关", "", "", "", "", "", "0", "暂扣/退件", "", "美转加加西25日达-卡派...", "已入仓"],
  ["纳美工艺品", "", "USPYAS2605180011", "美国", "托管报关", "", "", "", "", "", "0", "暂扣/退件", "", "萨凡纳海陆26日达-快递派", "已入仓"],
  ["隐山艺术品", "", "USSZAS2605141336", "美国", "托管报关", "", "", "", "", "", "0", "暂扣/退件", "", "标准线小包", "已入仓"],
  ["威麟电子", "", "USXMAS2605120482", "加拿大", "托管报关", "", "纸护角", "", "", "50", "0", "暂扣/退件", "", "加拿大直航小包-加西", "已入仓"],
  ["凌派科技", "FBA19DWLK1P", "USORAS2605120460", "美国", "报关退税", "", "灯具配件", "", "", "466", "0", "", "UPS", "美东UPS红单包税", "已入仓"],
  ["博鑫贸易", "FBA19DK98QW", "USNYAS2605110375", "美国", "不报关", "", "户外用品", "", "", "128", "0", "", "", "纽约空派普货", "已入仓"],
  ["鸿达优选", "", "USLAAS2605100202", "美国", "托管报关", "", "收纳架", "", "", "985", "0", "暂扣/退件", "", "洛杉矶卡派包税", "已入仓"],
  ["南亭贸易", "FBA19D8ATD1", "CAYZAS2605090150", "加拿大", "报关退税", "", "椅垫", "", "", "328", "0", "", "", "多伦多卡派", "已入仓"],
  ["智途科技", "", "USCHAS2605080148", "美国", "托管报关", "", "手机支架", "", "", "78", "0", "", "UPS", "芝加哥UPS红单", "已入仓"],
  ["森鹿家居", "FBA19D72CMP", "USSEAS2605070123", "美国", "报关退税", "", "地毯", "", "", "511", "0", "", "", "西雅图卡派包税", "已入仓"],
  ["卓益供应链", "", "UKLON2605050091", "英国", "托管报关", "", "杯垫", "", "", "260", "0", "暂扣/退件", "DPDUK", "英国普货不包税", "已入仓"],
  ["海纳通", "FBA19D0P33K", "USATL2605040066", "美国", "报关退税", "", "厨具", "", "", "1168", "0", "", "", "亚特兰大海卡", "已入仓"],
  ["瑞和电商", "", "USDFW2605030058", "美国", "托管报关", "", "儿童玩具", "", "", "92", "0", "", "UPS", "达拉斯空派", "已入仓"],
  ["立诚优品", "FBA19CZW7LX", "USMIA2605020041", "美国", "报关退税", "", "泳镜", "", "", "405", "0", "", "", "迈阿密卡派", "已入仓"],
  ["凡星家居", "", "USOAK2605010033", "美国", "托管报关", "", "置物架", "", "", "734", "0", "暂扣/退件", "", "奥克兰海派", "已入仓"],
  ["泽远贸易", "FBA19CYU91Z", "USSAV2604300026", "美国", "不报关", "", "挂钩", "", "", "67", "0", "", "", "萨凡纳快递派", "已入仓"]
];

const statusProfiles = {
  入仓: { label: "已入仓", total: 27 },
  出库: { label: "待出库", total: 11 },
  出仓: { label: "已出仓", total: 231 },
  运输: { label: "运输中", total: 26448 },
  签收: { label: "已签收", total: 347492 },
  扣货: { label: "扣货中", total: 0 },
  取消: { label: "已取消", total: 20769 },
  全部: { label: "已入仓", total: 374209 }
};

const tableBody = document.querySelector("#waybillBody");
const resultCount = document.querySelector("#resultCount");
const keywordInput = document.querySelector("#keywordInput");
const productNameInput = document.querySelector("#productNameInput");
const selectAll = document.querySelector("#selectAll");
const toast = document.querySelector("#toast");
let currentStatus = "入仓";
let currentRows = [...waybills];
let toastTimer;
const PRODUCT_NAME_INDEX = 6;
let isGlobalProductSearch = false;

function renderRows(rows) {
  const profile = statusProfiles[currentStatus];
  tableBody.innerHTML = rows
    .map((row, index) => {
      const [customer, fba, waybill, destination, customs, eta, product, etd, voyage, declared, files, issue, express, channel] = row;
      const statusLabel = currentStatus === "全部" || isGlobalProductSearch ? row[14] : profile.label;
      return `
        <tr>
          <td>${index + 1}</td>
          <td><input class="row-check" type="checkbox" /></td>
          <td title="${customer}">${customer}</td>
          <td title="${fba}">${fba}</td>
          <td><a class="link" href="#">${waybill}</a></td>
          <td>${destination}</td>
          <td>${customs}</td>
          <td>${eta}</td>
          <td title="${product}">${product}</td>
          <td>${etd}</td>
          <td>${voyage}</td>
          <td>${declared}</td>
          <td>${files}</td>
          <td>${issue}</td>
          <td>${express}</td>
          <td title="${channel}">${channel}</td>
          <td><span class="status-pill">${statusLabel}</span></td>
          <td><a class="link" href="#">日志</a></td>
        </tr>
      `;
    })
    .join("");

  resultCount.textContent = `共 ${rows.length} 条`;
  selectAll.checked = false;
}

function showToast(message) {
  window.clearTimeout(toastTimer);
  toast.textContent = message;
  toast.classList.add("show");
  toastTimer = window.setTimeout(() => toast.classList.remove("show"), 1800);
}

function splitSearchTerms(value) {
  return value
    .trim()
    .split(/[\s,，]+/)
    .filter(Boolean)
    .map((token) => token.toLowerCase());
}

function getBaseRows() {
  return currentStatus === "扣货" ? [] : [...waybills];
}

function hasActiveFilters() {
  return Boolean(keywordInput.value.trim() || productNameInput.value.trim());
}

function applySearch() {
  const keywordTokens = splitSearchTerms(keywordInput.value);
  const productTokens = splitSearchTerms(productNameInput.value);
  isGlobalProductSearch = productTokens.length > 0;

  const baseRows = isGlobalProductSearch ? [...waybills] : getBaseRows();

  currentRows = baseRows.filter((row) => {
    const rowText = row.join(" ").toLowerCase();
    const productName = String(row[PRODUCT_NAME_INDEX] || "").toLowerCase();
    const keywordMatched = !keywordTokens.length || keywordTokens.some((token) => rowText.includes(token));
    const productMatched = !productTokens.length || productTokens.every((token) => productName.includes(token));
    return keywordMatched && productMatched;
  });

  renderRows(currentRows);
  showToast(keywordTokens.length || productTokens.length ? `已筛选 ${currentRows.length} 条运单` : "已显示全部入仓运单");
}

document.querySelector("#searchBtn").addEventListener("click", (event) => {
  event.preventDefault();
  applySearch();
});

document.querySelector("#resetBtn").addEventListener("click", (event) => {
  event.preventDefault();
  document.querySelector("#filterForm").reset();
  isGlobalProductSearch = false;
  currentRows = getBaseRows();
  renderRows(currentRows);
  showToast("筛选条件已重置");
});

document.querySelector("#foldBtn").addEventListener("click", (event) => {
  event.preventDefault();
  const card = document.querySelector(".filter-card");
  const folded = card.classList.toggle("folded");
  event.currentTarget.textContent = folded ? "展开" : "收起";
});

document.querySelector("#statusTabs").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;

  document.querySelectorAll("#statusTabs button").forEach((item) => item.classList.remove("active"));
  button.classList.add("active");
  currentStatus = button.dataset.status;
  const total = statusProfiles[currentStatus].total;
  if (hasActiveFilters()) {
    applySearch();
  } else {
    isGlobalProductSearch = false;
    currentRows = getBaseRows();
    renderRows(currentRows);
    resultCount.textContent = `共 ${currentStatus === "入仓" ? currentRows.length : total} 条`;
    showToast(`已切换到${currentStatus}列表`);
  }
});

selectAll.addEventListener("change", () => {
  document.querySelectorAll(".row-check").forEach((checkbox) => {
    checkbox.checked = selectAll.checked;
  });
  showToast(selectAll.checked ? `已选择 ${currentRows.length} 条` : "已取消选择");
});

document.querySelector(".toolbar").addEventListener("click", (event) => {
  const button = event.target.closest("button");
  if (!button) return;
  showToast(`${button.textContent.trim()}功能已触发`);
});

keywordInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    applySearch();
  }
});

productNameInput.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    event.preventDefault();
    applySearch();
  }
});

renderRows(currentRows);
