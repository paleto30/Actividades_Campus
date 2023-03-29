let wsMyFooter = {
    showData(params){
        let data = `
        <p><a href="#">${params.topPage}</a></p>
        <p>${params.creator.text}<a target="_blank" href="${params.creator.author.href}">${params.creator.author.name}</a></p>
        <p>${params.copy}</p>
        `;
        return data;
    }
}
self.addEventListener("message",(e) =>{
    postMessage(wsMyFooter.showData(e.data))
});