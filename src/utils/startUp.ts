import * as fs from 'fs';
import {GlossaryConfig} from "@/types/configFile";
import {generate} from "generate-password";
import {generatePassword} from "@/utils/general";

export default async function startUp() {
    try {
        await configFile()
    } catch (e) {
        console.log(e)
        return null
    }
}

async function configFile() {
    try {
        const filePath = './prisma/config.json'

        const exists = fs.existsSync(filePath)

        if (!exists) {
            const data: GlossaryConfig = {
                encryptionKey: generatePassword(512)
            }

            fs.writeFileSync(filePath, JSON.stringify(data))
        }

        return 200
    } catch (e) {
        console.log(e)
        return null
    }
}


async function default_function() {
    try {

    } catch (e) {
        console.log(e)
        return null
    }
}