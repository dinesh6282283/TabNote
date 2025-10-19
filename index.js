let myLeads = JSON.parse(localStorage.getItem("myLeads")) || [];
const inputEl = document.getElementById("input-el");
const inputBtn = document.getElementById("input-btn");
const tabBtn = document.getElementById("tab-btn");
const deleteBtn = document.getElementById("delete-btn");
const ulEl = document.getElementById("ul-el");

render(myLeads);

function render(leads) {
  ulEl.innerHTML = leads
    .map((lead) => `<li><a href="${lead}" target="_blank">${lead}</a></li>`)
    .join("");
}

inputBtn.addEventListener("click", () => {
  let url = inputEl.value.trim();
  if (!url) return;
  if (!/^https?:\/\//i.test(url)) url = "https://" + url;

  myLeads.push(url);
  inputEl.value = "";
  localStorage.setItem("myLeads", JSON.stringify(myLeads));
  render(myLeads);
});

tabBtn.addEventListener("click", () => {
  chrome.tabs.query({ active: true, currentWindow: true }, (tabs) => {
    const url = tabs[0].url;
    myLeads.push(url);
    localStorage.setItem("myLeads", JSON.stringify(myLeads));
    render(myLeads);
  });
});

deleteBtn.addEventListener("click", () => {
  localStorage.removeItem("myLeads");
  myLeads = [];
  render(myLeads);
});

ulEl.addEventListener("click", (e) => {
  if (e.target.tagName === "A") {
    e.preventDefault();
    navigator.clipboard.writeText(e.target.href);
    e.target.textContent = "Copied!";
    setTimeout(() => render(myLeads), 1000);
  }
});
