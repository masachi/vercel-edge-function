import { NextFetchEvent, NextRequest } from "next/server";

const telegraphBaseUrl = "https://telegra.ph";

const steamDeckMirrorBaseUrl = "https://steamdeck-packages.steamos.cloud"

export async function middleware(req, ev) {
    const { pathname, search, hash } = req.nextUrl;

    if(pathname.startsWith("/api")) {
        if (pathname.startsWith("/api/file")) {
            if(/(.*\/)*.+\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)/g.test(pathname)) {
                return fetch(`${telegraphBaseUrl}/${pathname.replace("/api", "")}`);
            }
        }
    }

    if (pathname.startsWith("/steam-deck")) {
        return fetch(`${steamDeckMirrorBaseUrl}/${pathname.replace("/steam-deck", "")}`);
    }

    return fetch("https://www.baidu.com/");
}