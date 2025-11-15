// Funzione per ottenere i parametri dall'URL
function getUrlParams() {
    const params = new URLSearchParams(window.location.search);
    // URLSearchParams decodifica automaticamente, ma assicuriamoci che sia tutto ok
    return {
        year: decodeURIComponent(params.get('year') || ''),
        ctf: decodeURIComponent(params.get('ctf') || ''),
        category: decodeURIComponent(params.get('category') || ''),
        name: decodeURIComponent(params.get('name') || '')
    };
}

// Funzione per normalizzare il nome del file (rimuove caratteri speciali)
function normalizeFileName(str) {
    return str
        .toLowerCase()
        .replace(/[^a-z0-9]+/g, '')
        .replace(/^-+|-+$/g, '');
}

// Funzione per caricare il contenuto del writeup
async function loadWriteup() {
    const params = getUrlParams();
    
    if (!params.name) {
        document.getElementById('writeup-content').innerHTML = 
            '<p style="color: #ff6b6b;">Errore: Writeup non specificato.</p>';
        return;
    }

    // Imposta il titolo e i metadati
    document.getElementById('writeup-title').textContent = params.name;
    document.getElementById('writeup-year').textContent = params.year ? `Anno: ${params.year}` : '';
    document.getElementById('writeup-ctf').textContent = params.ctf ? `CTF: ${params.ctf}` : '';
    document.getElementById('writeup-category').textContent = params.category ? `Categoria: ${params.category}` : '';
    
    // Costruisci il percorso del file
    const fileName = normalizeFileName(params.name);
    const yearPath = params.year ? normalizeFileName(params.year) + '/' : '';
    const ctfPath = params.ctf ? normalizeFileName(params.ctf) + '/' : '';
    const categoryPath = params.category ? normalizeFileName(params.category) + '/' : '';
    
    const filePath = `./writeups/${yearPath}${ctfPath}${categoryPath}${fileName}.html`;
    
    // Debug: mostra i parametri e il percorso
    console.log('Parametri ricevuti:', params);
    console.log('Percorso file costruito:', filePath);
    console.log('URL corrente:', window.location.href);
    console.log('Protocollo:', window.location.protocol);
    
    // Avvisa se si sta usando file://
    if (window.location.protocol === 'file:') {
        console.warn('ATTENZIONE: Stai usando file://. Fetch potrebbe non funzionare. Usa un server HTTP locale (es. python -m http.server o live-server).');
    }
    
    try {
        const response = await fetch(filePath);
        
        if (!response.ok) {
            throw new Error(`File non trovato: ${filePath} (Status: ${response.status})`);
        }
        
        const html = await response.text();
        
        // Carica direttamente l'HTML (senza conversione)
        document.getElementById('writeup-content').innerHTML = html;
        
        // Forza tutti i link ad essere bianchi dopo il caricamento
        const links = document.querySelectorAll('#writeup-content a');
        links.forEach(link => {
            link.style.color = '#fff';
            link.style.setProperty('color', '#fff', 'important');
        });
        
        // Forza anche il codice ad essere bianco
        const codeElements = document.querySelectorAll('#writeup-content code');
        codeElements.forEach(code => {
            code.style.color = '#fff';
            code.style.setProperty('color', '#fff', 'important');
        });
        
        // Forza tutti i bottoni ad essere bianchi
        const buttons = document.querySelectorAll('button, input[type="button"], input[type="submit"]');
        buttons.forEach(button => {
            button.style.color = '#fff';
            button.style.setProperty('color', '#fff', 'important');
        });
        
        // Forza tutti i link con classe .link ad essere bianchi
        const allLinks = document.querySelectorAll('.link, a.link');
        allLinks.forEach(link => {
            link.style.color = '#fff';
            link.style.setProperty('color', '#fff', 'important');
        });
    } catch (error) {
        console.error('Errore nel caricamento del writeup:', error);
        console.error('Parametri:', params);
        console.error('Percorso tentato:', filePath);
        console.error('Normalizzazioni:', {
            year: yearPath,
            ctf: ctfPath,
            category: categoryPath,
            name: fileName
        });
        
        let errorMessage = `<div style="padding: 20px; border: 1px solid rgb(21, 30, 40); border-radius: 20px; background-color: rgb(41, 49, 51, 0.5);">
            <p style="color: #ff6b6b;">Errore nel caricamento del writeup: ${error.message}</p>
            <p style="color: #ccc; margin-top: 10px;">Percorso tentato: <code>${filePath}</code></p>
            <p style="color: #ccc; margin-top: 10px;">Parametri ricevuti:</p>
            <ul style="color: #ccc; margin-left: 20px;">
                <li>Anno: ${params.year || '(vuoto)'} → ${yearPath || '(vuoto)'}</li>
                <li>CTF: ${params.ctf || '(vuoto)'} → ${ctfPath || '(vuoto)'}</li>
                <li>Categoria: ${params.category || '(vuoto)'} → ${categoryPath || '(vuoto)'}</li>
                <li>Nome: ${params.name || '(vuoto)'} → ${fileName || '(vuoto)'}</li>
            </ul>`;
        
        if (window.location.protocol === 'file:') {
            errorMessage += `<p style="color: #ffaa00; margin-top: 15px; font-weight: bold;">
                ⚠️ ATTENZIONE: Stai aprendo il file direttamente dal filesystem (file://).<br>
                Per far funzionare il caricamento dei writeup, devi usare un server HTTP locale.<br>
                Esempi:<br>
                • Python: <code>python -m http.server 8000</code><br>
                • Node.js: <code>npx http-server</code><br>
                • VS Code: estensione "Live Server"
            </p>`;
        }
        
        errorMessage += `<p style="color: #ccc; margin-top: 10px;">Apri la console del browser (F12) per maggiori dettagli.</p>
            </div>`;
        
        document.getElementById('writeup-content').innerHTML = errorMessage;
    }
}

// Carica il writeup quando la pagina è pronta
document.addEventListener('DOMContentLoaded', loadWriteup);

