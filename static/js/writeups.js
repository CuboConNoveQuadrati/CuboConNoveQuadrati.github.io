writeups_json = {
    "2025": {
        "CTF@AC Quals": {
            "Misc": [
                "Onion 1",
                "Octojail",
                "Escaping Barcelona",
                "Rugina",
                "Disco Dance",
                "Disco Rave",
                "Discord"
            ],
            "Web": [
                "Money",
                "Random Gallery",
                "Theme Generator",
                "lolchat"
            ],
            "Crypto": [
                "Repeated RSA",
                "SSS"
            ],
            "Osint": [
                "Parting ways",
                "Holiday trip",
                "Prison"
            ],
            "Forensics": [
                "Hidden in the Cartridge",
                "unknown-traffic1",
                "unknown-traffic2",
                "Baofeng",
                "3rd_child"
            ],
            "Binary": [
                "Baby-Bof",
                "Fini"
            ]
        },
        "CTF@AC Finals": {
            "Misc": [
                "full-house-poker",
                "grass-guesser",
                "love-at-first-bit",
                "stairway-to-heaven"
            ],
            "Web": [
                "silicon-dioxide",
                "retro forum",
                "not-wordle"
            ],
            "Crypto": [
                "sparse hills"
            ],
            "Forensics": [
                "Fire and Ice"
            ],
            "Binary": [
                "Baby IKEA"
            ],
            "Hardware":[
                "Baby Board"
            ]
        }
    }
};

let writeups = document.getElementById("writeups");
let writeups_tree = document.createElement("nav");
writeups_tree.className = "tree-nav";
parse(writeups_tree, writeups_json);
writeups.appendChild(writeups_tree);

