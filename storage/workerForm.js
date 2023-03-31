let workerForm = {


    showFormulario(dataForm){
        return `
        <!-- operacion -->
        <div
            class="col-2 col-md-4 pe-2 ps-2 py-1 py-md-2 d-flex justify-content-center justify-content-sm-center justify-content-md-end">
            <select class="form-select w-25 " name="operacion" aria-label="Default select example">
                ${dataForm.operacion.map((k,i) => (`<option value="${k.value}" ${i==0 ? 'selected': ''}>${k.text}</option>`))}
            </select>
        </div>
        <!--  input descripcion -->
        <div class="col-10 col-md-3 d-flex justify-content-center pe-2 py-1 py-md-2">
            <input type="text" class="form-control  text-center" placeholder="Agregar Descripcion de movimineto"
                name="descripcion" id="descripcion">
        </div>

        <!-- input valo -->
        <div class="col-12 col-md-2  d-flex justify-content-center pe-2 py-1 py-md-2 ps-2">
            <input type="text" class="form-control  text-center" placeholder="$0" name="valor" id="valor" value="0">
        </div>

        <!-- submit btn -->
        <div
            class="col-12 col-md-3 d-flex justify-content-center justify-content-md-start px-2 pb-1 pb-md-0 align-items-center">
            <button type="submit" class="rounded-circle  border-0 boton">
                <i class="fa-regular fa-circle-check" style="color: #3fd942; font-size: 30px;"></i>
            </button>
        </div>
        `
    }
}

self.addEventListener("message",(e)=>{
    //console.log(e.data.operacion);
    //let data = workerForm.showFormulario(e.data);
    let datos = e.data.operacion.map((k,i) => (`<option value="${k.value}" ${i==0 ? 'selected': ''}>${k.text}</option>`)); 

    //console.log(datos);
    //console.log(data);
})