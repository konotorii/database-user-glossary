import {generate} from "generate-password";

export function generatePassword(length: number): string {
    return generate({length, uppercase: true, symbols: true, numbers: true, strict: true})
}