let title, title_arr, index;

/* -------------------------
   SPLIT DI UNA STRINGA
------------------------- */
function rdc_splitString(str, n) {
    const chunks = [];
    for (let i = 0; i < str.length; i += n) {
        chunks.push(str.substring(i, i + n));
    }
    return chunks;
}

/* -------------------------
   AGGIUNGI TESTO A RIGHE
------------------------- */
function updateText(old_text, text_to_add) {
    if (!old_text) return text_to_add;

    const old_lines = old_text.split("\n");
    const add_lines = text_to_add.split("\n");
    let new_text = "";

    for (let i = 0; i < add_lines.length; i++) {
        new_text += (old_lines[i] ?? "") + add_lines[i] + "\n";
    }

    return new_text;
}

/* -------------------------
   STAMPA ANIMATA DEL TITOLO
------------------------- */
function print_title() {
    if (index < title_arr.length) {
        const obj = document.getElementById("title");
        obj.textContent = updateText(obj.textContent, title_arr[index]);
        index++;
        setTimeout(print_title, 200);
    }
}

/* -------------------------
   AGGIORNA IL TITOLO
------------------------- */
function updateTitle() {

    // ASCII a seconda della larghezza
    if (screen.width >= 1030) {
        title = `\
  ____      _            ____            _   _                 ___                  _           _   _ 
 / ___|   _| |__   ___  / ___|___  _ __ | \\ | | _____   _____ / _ \\ _   _  __ _  __| |_ __ __ _| |_(_)
| |  | | | | '_ \\ / _ \\| |   / _ \\| '_ \\|  \\| |/ _ \\ \\ / / _ \\ | | | | | |/ _\` |/ _\` | '__/ _\` | __| |
| |__| |_| | |_) | (_) | |__| (_) | | | | |\\  | (_) \\ V /  __/ |_| | |_| | (_| | (_| | | | (_| | |_| |
 \\____\\__,_|_.__/ \\___/ \\____\\___/|_| |_|_| \\_|\\___/ \\_/ \\___|\\__\\_\\\\__,_|\\__,_|\\__,_|_|  \\__,_|\\__|_|
`;
    } else {
        title = `\
/$$$$$$$        /$$  /$$$$$$  
| $$__  $$      | $$ /$$__  $$
| $$  \\\\ $$  /$$$$$$$| $$  \\\\__/
| $$$$$$$/|/$$__  $$| $$      
| $$__  $$| $$  | $$| $$      
| $$  \\\\ $$| $$  | $$| $$    $$
| $$  | $$|  $$$$$$$|  $$$$$$/
|__/  |__/ \\\\_______/ \\\\______/ 
`;
    }

    // divide in chunks per colonne
    title_arr = [];
    const lines = title.split("\n");

    lines.forEach((line) => {
        const chunks = rdc_splitString(line, 10);

        chunks.forEach((c, j) => {
            if (!title_arr[j]) title_arr[j] = "";
            title_arr[j] += c + "\n";
        });
    });

    // reset e avvia animazione
    document.getElementById("title").textContent = "";
    index = 0;
    print_title();
}

/* -------------------------
   RESIZE OBSERVER 
------------------------- */
const resize_ob = new ResizeObserver(() => {
    requestAnimationFrame(updateTitle);
});

resize_ob.observe(document.documentElement);
