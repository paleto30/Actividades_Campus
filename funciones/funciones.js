export default{

    convertirMoneda(param){
        let config = new Intl.NumberFormat("de-De",{minimumFractionDigits:0});        
        return `${config.format(param)}`;
    },


    

}