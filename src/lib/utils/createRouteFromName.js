/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

export default function createRouteFromName(name) {
    if (typeof name !== "string") throw new TypeError("MaterialDocs: name must be string type");
    const route = name.replace(/\s+/g, " ")
        .replace(/\p{P}/gu, "")
        .replace(/=+/g, "")
        .replace(/#+/g, "")
        .replace(/\ +/g, "-")
        .replace(/'+/g, "")
        .toLowerCase();
    return route;
}