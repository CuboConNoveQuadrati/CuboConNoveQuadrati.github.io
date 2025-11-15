function instance(v){
    if(Array.isArray(v)){
        return 1;
    }else{
        return 2;
    }
}

function parse(root, json, path = []){
    for(let key in json){
        let r = document.createElement("details");
        r.className = "tree-nav__item is-expandable";
        let sum = document.createElement("summary");
        sum.className = "tree-nav__item-title";
        sum.textContent = key;
        r.appendChild(sum);
        if(instance(json[key]) == 2){
            parse(r, json[key], [...path, key]);
        }else{
            // Quando è un array, la chiave corrente è la categoria
            // Aggiungiamola al path prima di processare l'array
            const currentPath = [...path, key];
            let div = document.createElement("div");
            div.className = "tree-nav__item";
            for(let i in json[key]){
                let anchor = document.createElement("a");
                anchor.className = "tree-nav__item-title";
                anchor.textContent = json[key][i];
                // Crea l'URL con i parametri: anno, ctf, categoria, nome
                const params = new URLSearchParams({
                    year: currentPath[0] || '',
                    ctf: currentPath[1] || '',
                    category: currentPath[2] || '',
                    name: json[key][i]
                });
                anchor.href = `./writeup.html?${params.toString()}`;
                anchor.style.cursor = "pointer";
                div.appendChild(anchor);
            }
            r.appendChild(div);
        }
        root.appendChild(r);
    }
}
