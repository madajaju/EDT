import {ChatGPTAPI} from "chatgpt";
import {program} from "commander";
import * as fs from "fs";

const API_KEY ="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";
program
    .option("-f, --file <filename>");

program.parse();
const options = program.opts();

async function summarize(str) {
    let groups = [];
    let lines = str.split('\r\n');
    let totalString = "";
    let count = 0;
    for(let i in lines) {
        let line = lines[i];
        if(line.length > 0) {
            if(!/^[0-9]/.test(line)) {
                count++;
               totalString += line + " ";
            }
        }
        if(count > 150) {
            count = 0;
            groups.push(totalString);
            totalString = "";
        }
    }
    if(totalString.length > 0) { groups.push(totalString); }
    await _summarize(groups);
    console.log("Done")
}
const _summarize = async (lines) => {
    const api = new ChatGPTAPI({apiKey: API_KEY});
    console.log("Summarizing:", lines);
    for(let i in lines) {
        const res = await api.sendMessage(`Write a 100 word blog post for this podcast transcript in past tense: ` + lines[i]);
        console.log(res.text);
    }
}

let filename = options.file;
(async () => {
    let str = fs.readFileSync(filename).toString('utf-8');
    await summarize(str);
})().catch(e => {
    // Deal with the fact the chain failed
    console.error("Response Error:", e);
});
