/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";

export default function replaceMarkdownParams(markdown, storage = {}) {
    /**
     * replaceNextParam - replaces next found variable with value from storage.
     * @function
     * @param {{current: string}} ref Ref object with markdown based text inside.
     * @return {boolean}
     */
    function replaceNextParam(ref) {
        const start = ref.current.indexOf("&&");
        if (start < 0) return false;
        let end = start + 2;
        while (end < ref.current.length && ref.current[end].match(/^[0-9a-zA-Z]+$/)) {
            end++;
        }
        const variable = ref.current.slice(start, end);
        if (variable.length <= 2) return false;
        const replacer = storage[variable.slice(2)];
        ref.current = ref.current.replace(variable, replacer ? String(replacer) : "");
        return true;
    }

    if (typeof markdown !== "string")
        throw new TypeError(`MaterialDocs: invalid param "markdown", expected "string", got "${typeof markdown}"`);
    if (typeof storage !== "object")
        throw new TypeError(`MaterialDocs: invalid param "storage", expected "object", got "${typeof storage}"`);

    const ref = React.createRef();
    ref.current = markdown;

    while (replaceNextParam(ref)) {}
    return ref.current;
}
