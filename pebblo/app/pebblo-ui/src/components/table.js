import { SORT_DATA, get_Text_Orientation, waitForElement } from "../util.js";
import { ACTIONS, ACTIVE, ASC, CLICK, DSC, LOAD } from "../constants/enums.js";
import { Tooltip } from "./tooltip.js";
import { MEDIA_URL } from "../constants/constant.js";

function Table(props) {
  const { tableCol, tableData, link, isSorting } = props;
  if (isSorting) {
    waitForElement("#search_field", 1000).then(function () {
      let sortedData = tableData;
      const table_head = document.getElementsByClassName("sort-column");
      Array.from(table_head).forEach((el) => {
        el.addEventListener(CLICK, () => {
          Array.from(table_head).forEach((th) => {
            th.classList.remove("active");
            th.classList.remove("asc");
            th.classList.remove("dsc");
          });
          el.classList.add("active");
          el.classList.add(el.dataset.order);
          sortedData = SORT_DATA(
            tableData,
            el.dataset.order,
            el.dataset.column
          );
          document.getElementsByTagName("tbody")[0].innerHTML = TABLE_BODY({
            tableCol,
            tableData: sortedData,
            link,
          });
          el.dataset.order = el.dataset.order === ASC ? DSC : ASC;
        });
      });
    });
  }

  return /*html*/ `
  <table cellspacing="0" cellpadding="0">
    ${Thead({ tableCol, isSorting })}
    ${Tbody({ tableCol, tableData, link })}
   </table>`;
}

function Thead(props) {
  const { tableCol, isSorting } = props;
  return /*html*/ `
      <thead>${tableCol?.myMap((col) => {
        const TEXT__ALIGN = get_Text_Orientation(col?.align);
        return `<th class="${TEXT__ALIGN} ${
          !isSorting || col?.field === ACTIONS
            ? ""
            : "cursor-pointer sort-column"
        }" data-column="${col?.field}" data-order="${DSC}">
              ${
                !isSorting || col?.field === ACTIONS
                  ? col.label
                  : /*html*/ `<div class="flex gap-1 items-center ${TEXT__ALIGN}">
              <img src="${MEDIA_URL}static/sort-icon.png" alt="Sort Icon" height="10" />
              <div>${col.label}</div>
              </div>`
              }
        </th>`;
      })}</thead>
    `;
}

function Tbody(props) {
  return /*html*/ `
      <tbody>
         ${TABLE_BODY(props)}
      </tbody>
    `;
}

function Td(props) {
  const { children, align, link, isTooltip, tooltipTitle } = props;
  const TEXT__ALIGN = get_Text_Orientation(align);
  let td;
  if (link) {
    td = /*html*/ `
      <td class="${TEXT__ALIGN} capitalize pt-3 pb-3 pl-3 pr-3 fit">
      ${children || "-"}
          <a href="${link}" id="link"></a>
      </td>
   `;
  } else {
    td = /*html*/ `
    <td class="${TEXT__ALIGN} capitalize pt-3 pb-3 pl-3 pr-3 fit">
       ${children || "-"}
       </td>
    `;
  }
  if (isTooltip) {
    return /*html*/ `
    <td class="${TEXT__ALIGN} capitalize pt-3 pb-3 pl-3 pr-3 text-ellipsis">
       ${Tooltip({
         children: children || "-",
         title: tooltipTitle,
       })}
       </td>
    `;
  }
  return td;
}

const TABLE_BODY = (props) => {
  const { tableCol, tableData, link } = props;
  return tableData?.length
    ? tableData?.myMap(
        (item) => /*html*/ `<tr class="table-row">
   ${tableCol?.myMap((col) =>
     Td({
       children: col?.render ? col?.render(item) : item[col?.field],
       align: col?.align,
       link:
         col?.field !== ACTIONS && link ? `${link}?app_name=${item?.name}` : "",
       isTooltip: col?.isTooltip,
       tooltipTitle: col?.tooltipTitle ? col?.tooltipTitle(item) : "",
     })
   )}
     </tr>`
      )
    : /*html*/ `<td class="pt-3 pb-3 pl-3 pr-3 text-center" colspan="${
        tableCol?.length + 1
      }">No Data Found</td>`;
};

export { Table, Tbody, Thead, Td };
