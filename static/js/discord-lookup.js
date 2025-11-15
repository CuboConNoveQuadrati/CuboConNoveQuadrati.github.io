let members_discord_ids = [
    "536798044939878403",
    "649350001079615491",
    "723875572622557194",
    "545158792891990016",
    "717113000024080466",
    "290522233611354113",
    "262679667134300162",
    "1064158930340692058",
    "465501045007712257",
    "201375685992906752",
    "690665428963426414",
    "814444722579963915",
    "582108359927529472",
    "575687473003233280",
    "652569634343747586",
    "428240634407813131",
    "343502456233394179",
    "421047534392180756",
    "565651758617985027",
    "691564968687960114",
    "495989571780345876",
    "679753728752091166",
    "770558769490165780",
    "457124182858268673",
    "329566380070404097"
];

function shuffle(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

shuffle(members_discord_ids);

let members_div = document.getElementById("members");

function get_default_avatar(){
    let arr = ["Tribal-Indigo.png", "Tribal-Blue.png", "Tribal-Green.png", "Tribal-Orange.png", "Tribal-Pink.png", "Tribal-Red.png", "Tribal-Violet.png", "Tribal-Yellow.png"]
    return arr[parseInt(Math.random() * (arr.length - 1)) + 1];
}

let member_div, hidden_div, global_username, alias, img;

for(let i in members_discord_ids){
    fetch(`https://discord-lookup-rest-api.deeploy.ing/v1/user/lookup/${members_discord_ids[i]}`).then(response => response.json()).then(async member => {
        member_div = document.createElement("div");
        hidden_div = document.createElement("div");
        hidden_div.className = "hidden-text";
        member_div.className = "img-container";
        member_div.style.display = "inline-block";
        member_div.style.margin = "10px";
        img = document.createElement("img");
        global_username = document.createElement("h3");
        alias = document.createElement("h4");
        member_div.style.width = "100px";
        member_div.style.fontSize = "small";
        img.style.width = "80px";
        img.style.borderRadius = "20px";
        img.src = await member.data.avatar.url || `./static/imgs/discord-default-pfps/${get_default_avatar()}`;
        global_username.textContent = await member.data.displayName;
        alias.textContent = await member.data.username;
        member_div.appendChild(img);
        hidden_div.appendChild(global_username);
        hidden_div.appendChild(alias);
        member_div.appendChild(hidden_div);
        members_div.appendChild(member_div);
    });
}
