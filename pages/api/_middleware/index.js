import { NextFetchEvent, NextRequest } from "next/server";

const telegraphBaseUrl = "https://telegra.ph";

export async function middleware(req, ev) {
    const { pathname, search, hash } = req.nextUrl;

    if (pathname.startsWith("/file")) {
        if(/(.*\/)*.+\.(png|jpg|gif|bmp|jpeg|PNG|JPG|GIF|BMP|JPEG)/g.test(pathname)) {
            return fetch(`${telegraphBaseUrl}/${pathname}`);
        }
    }

    return fetch("https://www.baidu.com/");
}