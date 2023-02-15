
self.addEventListener("message", (e) => {

    let menus = '';
    for (const menu in e.data[1].items) {
        const { href, item } = e.data[1].items[menu];
        menus += `
                <a href="${href}" class="links">
                    <li class="lis">${item}</li>
                </a>
        `;
    };
    postMessage(menus);
})