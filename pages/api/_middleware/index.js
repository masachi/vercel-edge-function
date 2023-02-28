import { NextFetchEvent, NextRequest } from "next/server";

const telegraphBaseUrl = "https://telegra.ph";

const steamDeckMirrorBaseUrl = "https://steamdeck-packages.steamos.cloud"

const gfwListRules = "https://raw.githubusercontent.com/masachi/gfwlist/master/gfwlist-custom.txt"

export async function middleware(req, ev) {
    const { pathname, search, hash } = req.nextUrl;

    if(pathname.startsWith("/api")) {
        if (pathname.startsWith("/api/file")) {
            if(/(.*\/)*.+\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)/g.test(pathname)) {
                return fetch(`${telegraphBaseUrl}/${pathname.replace("/api", "")}`);
            }
        }

        // steam deck
        if (pathname.startsWith("/api/steam-deck")) {
            return fetch(`${steamDeckMirrorBaseUrl}/${pathname.replace("/api/steam-deck", "")}`);
        }

        if (pathname.startsWith("/api/rules/gfwlist")) {
            return fetch(gfwListRules);
        }
    }

    return fetch("https://www.baidu.com/");
}