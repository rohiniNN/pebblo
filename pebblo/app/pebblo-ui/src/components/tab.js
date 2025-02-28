import { CLICK, DOM_CONTENT_LOADED } from "../constants/enums.js";
import { add_Zero } from "../util.js";

function Tabs(tabsArr, tabPanel) {
  let allTabs = "";
  let tabValue = 0;
  let tabPanelEl;
  let tabPanelComponent;

  tabsArr?.myMap((tab) => (allTabs += Tab(tab)));
  document.addEventListener(DOM_CONTENT_LOADED, function () {
    tabPanelEl = document.getElementById("tab_panel");
    tabPanelComponent = tabPanel[tabValue]?.component;

    tabPanelEl.innerHTML = tabPanelComponent(tabPanel[tabValue].value);
    const tabElements = document.getElementsByClassName("tab");
    Array.from(tabElements).forEach((element) => {
      element?.addEventListener(CLICK, onClick);
    });
  });

  function onClick(e) {
    tabValue = Number(e.target.dataset.value);
    document.getElementById("tab_selected").style.left = `${
      Number(e.target.dataset.value) * 224 +
      (Number(e.target.dataset.value) ? 24 * Number(e.target.dataset.value) : 0)
    }px`;
    tabPanelEl.innerHTML = "";
    tabPanelComponent = tabPanel[tabValue]?.component;
    tabPanelEl.innerHTML = tabPanelComponent(tabPanel[tabValue].value);
  }
  return /*html*/ `
      <div class="flex flex-col">
        <div class="tabs sticky top-0 flex gap-6">
          ${allTabs}
          <div id="tab_selected"></div> 
        </div>
       ${TabPanel()}
      </div>
      `;
}

function Tab(item) {
  return /*html*/ `
          <div class="tab manrope" data-value=${item?.value}>
            <div class="inline ${
              item?.isCritical ? "critical" : "surface-10"
            } font-48 font-thin pointer-none">
             ${add_Zero(item?.critical)} ${
    item?.outOf
      ? /*html*/ `<span class="surface-10 font-24 -ml-1">/${item?.outOf}</span>`
      : ""
  }
            </div>
            <div class="font-13 inter surface-10 pointer-none">${
              item?.label
            }</div>
          </div>
         
      `;
}

export function TabPanel() {
  return /*html*/ `<div id="tab_panel"></div>`;
}

export { Tabs, Tab };
