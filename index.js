const fs = require("fs");
const fsp = fs.promises;

const data = [
    {
        "output": "title @p title waves 1 started\nsummon bridge:mob_checker\nsummon armor_stand ~ ~ ~"
    },
    {
        "output": "output2"
    }
];

const folderName = "outputFiles";

async function createOutputFiles() {
    try {
        await fsp.rm(folderName, { recursive: true });
    } catch (err) {
        if (err.code !== "ENOENT") {
            throw err;
        }
    }

    await fsp.mkdir(folderName);

    for (let i = 0; i < 100; i++) {
        const fileName = `${folderName}/waves${i + 1}.mcfunction`;
        await fsp.writeFile(fileName, `${folderName}/title @p title waves ${i +1 } started\nsummon bridge:mob_checker\nsummon armor_stand ~ ~ ~`);
        // await fsp.writeFile(fileName, data[i].output);
    }
}

createOutputFiles();

async function  createSingleFiles() {
    let fileContent = "";

    for (let i = 0; i < 3; i++) {
        fileContent += `test number ${i +1}\n`;
        // fileContent += `${i + 1}. ${data[i].output}\n`;
    }

    await fsp.writeFile("Output.txt", fileContent); 
}

createSingleFiles();
