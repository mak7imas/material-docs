/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {useStyles} from "./styles";
import clsx from "clsx";

function List({children, className, style, ...props}, ref) {
    const classes = {...useStyles(), ...props.classes};
    return (
        <ul {...props} ref={ref} className={clsx(classes.root, className)} style={style}>
            {children}
        </ul>
    );
}

export default React.forwardRef(List);