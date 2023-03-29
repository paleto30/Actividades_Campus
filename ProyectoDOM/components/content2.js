import config from "../storage/config.js";
export default {
  renderWorkerData() {
    config.dataMyContent2();
    Object.assign(this, JSON.parse(localStorage.getItem("myContent2")));
    const ws = new Worker('storage/wsMyContent2.js', { type: "module" });
    let data = [this.parteUno, this.tabla];
    ws.postMessage({ datos: data });
    ws.addEventListener("message", (e) => {
      let { part1, ths, data } = e.data;
      document.querySelector("#intro").insertAdjacentHTML("beforeend", part1);
      document.querySelector("#tablaH").insertAdjacentHTML("beforeend", ths.join(""));
      document.querySelector("#tablaB").insertAdjacentHTML("beforeend", data.join(""));
      ws.terminate();
    });
  },
}