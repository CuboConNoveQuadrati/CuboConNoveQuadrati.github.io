function instance(v) {
    if (Array.isArray(v)) {
        return 1; // array
    } else {
        return 2; // oggetto
    }
}

function parse(root, json, path = []) {
    for (let key in json) {
        let r = document.createElement("details");
        r.className = "tree-nav__item is-expandable";

        let sum = document.createElement("summary");
        sum.className = "tree-nav__item-title";
        sum.textContent = key;
        r.appendChild(sum);

        if (instance(json[key]) === 2) {
            // È un oggetto: ricorsione
            parse(r, json[key], [...path, key]);
        } else {
            // È un array: la chiave corrente è la categoria
            const currentPath = [...path, key];
            let div = document.createElement("div");
            div.className = "tree-nav__item";

            for (let i in json[key]) {
                let item = document.createElement("span");
                item.className = "tree-nav__item-title";
                item.textContent = json[key][i];
                item.style.cursor = "pointer";

                // Listener per click senza navigare
                item.addEventListener("click", function() {
                    const params = {
                        year: currentPath[0] || '',
                        ctf: currentPath[1] || '',
                        category: currentPath[2] || '',
                        name: json[key][i]
                    };
                    console.log("Hai cliccato su:", params);
                    // Qui puoi fare qualsiasi cosa con i parametri,
                    // es. aggiornare un div, fare fetch, ecc.
                });

                div.appendChild(item);
            }

            r.appendChild(div);
        }

        root.appendChild(r);
    }
}