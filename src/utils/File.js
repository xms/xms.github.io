/* 另一種做法可匯出文字檔
export function exportData(fileName, content) {
  let a = document.createElement('a');
  let blob = new Blob([content], { type: 'text/plain' });

  a.download = fileName;
  a.href = URL.createObjectURL(blob);

  a.click();
}

 */

export function exportData(fileName, blob) {
  if (window.navigator && window.navigator.msSaveOrOpenBlob) {
    // If IE, you must uses a different method.
    window.navigator.msSaveOrOpenBlob(blob, fileName);
  } else {
    let url = window.URL.createObjectURL(blob);
    let a = document.createElement('a');
    document.body.appendChild(a);
    a.href = url;
    a.download = fileName;
    a.click();
    window.URL.revokeObjectURL(url);
    document.body.removeChild(a);
  }
}

export default {
  exportData,
};
