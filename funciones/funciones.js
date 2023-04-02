export default{

    convertirMoneda(param){
        let config = new Intl.NumberFormat("de-De",{minimumFractionDigits:2});        
        return `${config.format(param)}`;
    }

}