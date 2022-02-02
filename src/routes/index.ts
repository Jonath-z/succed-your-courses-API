import { HomeRoute } from "./homeRoute";
import Get_JWT_Token from "./getTokenRoute";

const homeRoute = new HomeRoute();
const get_JWT_Token = new Get_JWT_Token();

export const routes: any[] = [
    homeRoute,
    get_JWT_Token
]