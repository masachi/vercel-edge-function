import { NextFetchEvent, NextRequest } from "next/server";

const telegraphBaseUrl = "https://telegra.ph";

const githubRawBaseUrl = "https://raw.githubusercontent.com/masachi/files/main"

const steamDeckMirrorBaseUrl = "https://steamdeck-packages.steamos.cloud"

const gfwListRules = "https://raw.githubusercontent.com/masachi/gfwlist/master/gfwlist-custom.txt"

export async function middleware(req, ev) {
    const { pathname, search, hash } = req.nextUrl;

    if(pathname.startsWith("/api")) {
        if (pathname.startsWith("/api/file")) {
            if(/(.*\/)*.+\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)/g.test(pathname)) {
                let fileName = `${pathname.replace("/api/file/", "")}`;
                let folder = fileName.substring(0,2);
                return fetch(`${githubRawBaseUrl}/${folder}/${fileName}`);
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