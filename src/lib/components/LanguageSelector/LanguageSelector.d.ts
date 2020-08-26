/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

/// <reference types="react" />
import Stylable from "../../interfaces/Stylable";
import Containerable from "../../interfaces/Containerable";

export interface LanguageSelectorProps
    extends Stylable {
    /**
     * size - the size of an element. If small - will be displayed just locale icon, if large - locale icon with current language name.
     * @type string
     * @default "large"
     */
    size?: "small" | "large";
}

/**
 * LanguageSelector - react component, designed to provide language selection and manipulation.
 * @param {LanguageSelectorProps} props
 * @constructor
 */
export default function LanguageSelector(props: LanguageSelectorProps): JSX.Element;