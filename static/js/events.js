events_json = {
    "2025": [
        "CTF@AC Quals : 18 Place",
        "CTF@AC Finals : 14 Place"
    ],
    "2024": [
        "BackdoorCTF 2024 : 29 Place",
        "SpookyCTF 2024 : 81 Place",
        "DefCamp Capture the Flag (D-CTF) 2024 Quals : 96 Place",
        "PatriotCTF 2024 : 70 Place",
        "m0leCon CTF 2025 Teaser : 52 Place",
        "San Diego CTF 2024 : 46 Place",
        "Midnight Sun CTF 2024 Quals : 79 Place"
    ],
    "2023": [
        "Hackappatoi CTF : 3 Place",
        "TUCTF : 497 Place",
        "CakeCTF : 154 Place",
        "CSAW CTF Final Round : 40 Place",
        "SunshineCTF : 15 Place",
        "TeamItaly CTF : 16 Place",
        "BRICS+ CTF Quals : 25 Place",
        "ASIS CTF Quals : 24 Place",
        "Pointer Overflow CTF : 3 Place",
        "CSAW CTF Qualification Round : 26",
        "Urmia CTF : 52 Place",
        "DownUnderCTF : 69 Place",
        "SekaiCTF : 68 Place",
        "Bauhinia CTF : 30 Place",
        "BDSec CTF : 9 Place",
        "AmateursCTF : 53 Place",
        "CrewCTF : 216 Place",
        "UIUCTF : 182 Place",
        "NahamCon CTF : 366 Place",
        "Internet Festival CTF Quals : 19 Place",
        "SEETF : 105 Place",
        "n00bzCTF : 22 Place",
        "HSCTF 10 : 48 Place",
        "DanteCTF : 62 Place",
        "BYUCTF : 70 Place",
        "Grey Cat The Flag Qualifiers : 72 Place",
        "m0leCon CTF Teaser : 51 Place",
        "Cryptoverse CTF : 280 Place",
        "San Diego CTF : 28 Place",
        "TAMUctf : 21 Place",
        "ångstromCTF : 91 Place",
        "Texas Security Awareness Week : 4 Place",
        "PlaidCTF : 243 Place",
        "LINE CTF : 141 Place",
        "Cyber Apocalypse: The Cursed Mission : 612 Place",
        "KalmarCTF : 183 Place",
        "HackTM CTF Quals : 72 Place",
        "LA CTF : 265 Place",
        "DiceCTF : 440 Place"
    ],
    "2022": [
        "NahamCon EU CTF : 170 Place",
        "Hackappatoi CTF : 37 Place",
        "TUCTF : 32 Place",
        "GlacierCTF : 33 Place",
        "SunshineCTF : 55 Place",
        "Reply Cyber Security Challenge : 209 Place",
        "Srdnlen CTF : 46 Place",
        "SekaiCTF : 139 Place",
        "CSAW CTF Qualification Round : 223 Place",
        "TeamItaly CTF : 42 Place",
        "Balsn CTF : 423 Place",
        "ImaginaryCTF : 809 Place",
        "vsCTF : 145 Place",
        "WeCTF : 108 Place",
        "justCTF : 71 Place",
        "HSCTF 9 : 98 Place",
        "n00bzCTF : 7 Place",
        "NahamCon CTF : 401 Place",
        "b01lers : 153 Place",
        "DCTF : 93 Place",
        "Wolverine Security Conference/CTF : 38 Place"
    ],
    "2021": [
        "MetaCTF CyberGames : 399 Place",
        "Reply Cyber Security Challenge : 348 Place"
    ]
};

let events = document.getElementById("events");
let events_tree = document.createElement("nav");
events_tree.className = "tree-nav";
parse(events_tree, events_json);
events.appendChild(events_tree);

