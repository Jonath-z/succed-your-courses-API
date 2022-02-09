import Get_JWT_Token from "./getTokenRoute";
import { JWT_Verify_Token_Route } from "./verifyToken";

const get_JWT_Token = new Get_JWT_Token();
const verifyToken = new JWT_Verify_Token_Route();

export const routes: any[] = [
    get_JWT_Token,
    verifyToken
]