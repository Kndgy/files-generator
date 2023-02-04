const fs = require("fs");
const fsp = fs.promises;

const data = [
    {
        "output": "output1"
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

    for (let i = 0; i < data.length; i++) {
        const fileName = `${folderName}/output${i + 1}.mcfunction`;
        await fsp.writeFile(fileName, data[i].output);
    }
}

createOutputFiles();
