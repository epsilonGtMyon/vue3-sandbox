/**
 * rowspanの解決
 * @param {any[]} records
 */
function setupRowspan(records) {
  let totalRowspan = 0;
  for (const record of records) {
    let thisRowspan = 0;
    if (record.children == undefined) {
      thisRowspan = 1;
    } else {
      thisRowspan = setupRowspan(record.children);
    }

    record.rowspan = thisRowspan;
    totalRowspan += thisRowspan;
  }
  return totalRowspan;
}

export { setupRowspan };
