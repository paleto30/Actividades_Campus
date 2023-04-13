export default{

    convertirMoneda(param){
        let config = new Intl.NumberFormat("de-De",{minimumFractionDigits:0});        
        return `${config.format(param)}`;
    },

    porcentajes(cien,otro){
        return Math.round((otro * 100) /cien);
    }

}