import { createConnection } from "typeorm";

export const initializeDB = async (): Promise<void> => {
    try {
        await createConnection();
        console.log('connection successfully created');
    }
    catch (err) {
        throw err
    }
}