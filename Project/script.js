let arrayOfCharacters = [
character1 = {
    characterName:"Kamisato Ayato",
    rarity: 5,
    vision: 5,
    region: "Inazuma",
    weapon: "Sword",
    playable: true,
    favorite: true,
    affiliation: ["Yashiro Commission", "Kamisato Clan", "Shuumatsuban"]
},

character2 = { 
    characterName:"Zhongli",
    rarity: 5,
    vision: 4,
    region: "Liyue",
    weapon: "Spear",
    playable: true,
    favorite: true,
    affiliation: ["Liyue Harbor", "Wangsheng Funeral Parlor", "The Seven", "Adepti"]

},

character3 = {
    characterName:"Tartaglia",
    rarity: 5,
    vision: 5,
    region: "Snezhnaya",
    weapon: "Arrow",
    playable: true,
    favorite: true,
    affiliation: ["Fatui", "Eleven Fatui Harbingers"]
},

character4 = {
    characterName:"Dainsleif",
    rarity: 0,
    vision: 0,
    region: "Khaenri'ah",
    weapon: "Sword",
    playable: false,
    favorite: true,
    affiliation: ["Eclipse Dynasty"]
},

character5 = { 
    characterName: "Dottore",
    rarity: 0,
    vision: 0,
    region: "Snezhnaya",
    weapon: "Unknown",
    playable: false,
    favorite: true,
    affiliation: ["Fatui", "Eleven Fatui Harbingers", "Sumeru Akademiya (formely)"]
},

character6 = {
    characterName:"Alhaitham",
    rarity: 5,
    vision: 7,
    region: "Sumeru",
    weapon: "Sword",
    playable: false,
    favorite: true,
    affiliation: ["Haravatat", "Sumeru Akademiya"]
} ]

// SEMANA III
// 1.
// Option: Fuction to format the property in Array to String. 

let affiliationString ;

const arrayToString = (affiliation) => {
  affiliationString = "";
  for (i = 0; i < affiliation.length; i++) {
    if (i !== affiliation.length - 1) {
      affiliationString += affiliation[i] + ", ";
    } else {
      affiliationString += affiliation[i] + ".";
    }
  }
  return affiliationString;
};


// 2.

let character7 = { 
    characterName:"Wanderer",
    rarity: 5,
    vision: 1,
    region: "Sumeru",
    weapon: "Catalyst",
    playable: true,
    favorite: true,
    affiliation: ["None"]
}

arrayOfCharacters.push(character7)

const objectData = (character) => {
    for (property in character) {
        if (isPropertyCharacterName(property)) {
            console.log(character["characterName"].toUpperCase());
        } else if (property === "affiliation") {
            console.log(`${property}: ` + arrayToString(character[property]));
        } else {
            console.log(`${property}: ` + character[property]);
        }
    }
} 

// for (character of arrayOfCharacters) {
//     objectData(character)
//     console.log("\n \n");
// }

function isPropertyCharacterName(property) {
    return property === "characterName" ? true : false
}

// 3.

const objectReport = (character) => {
    objectData(character)
}

objectReport(character7)

// 4.

function search(arrayOfCharacters, inputName) { 
    let result 
    for (character of arrayOfCharacters) {
        if (character.characterName.toUpperCase() == inputName.toUpperCase().trim()) {
            result = character
        }
    }
    if (!result) {
        alert(inputName + " is not available yet");
    }
    return result
}
search(arrayOfCharacters, "ayato")


