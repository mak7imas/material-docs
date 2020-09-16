/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import {styles} from "./styles";
// Components
import {LazyLoadImage} from 'react-lazy-load-image-component';
// MaterialUI components
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";
// PropTypes validators
import PropTypes from "prop-types";
// Utils
import clsx from "clsx";
import {withStyles} from "@material-ui/styles";


export const displayName = "MatDocImage";

const Image = React.forwardRef(function Image(props, ref) {
    const {
        src = "",
        alt = "",
        style,
        className,
        children,
        fullWidth = false,
        classes,
        ...other
    } = props;
    return (
        <React.Fragment>
            <div style={style} className={clsx(fullWidth && classes.fullWidth, className)} ref={ref}>
                <LazyLoadImage
                    alt={alt}
                    style={{width: "100%"}}
                    src={src}
                    placeholder={<CircularProgress/>}
                />
            </div>
            {children && <Typography color={"textSecondary"} variant={"subtitle2"}>{children}</Typography>}
        </React.Fragment>
    );
});

Image.displayName = displayName;

Image.propTypes = {
    // ImageProps
    src: PropTypes.string,
    alt: PropTypes.string,
    fullWidth: PropTypes.bool,
    // Stylable
    style: PropTypes.object,
    className: PropTypes.string,
    classes: PropTypes.object,
    // Containerable
    children: PropTypes.node,
}

export default withStyles(styles, {name: displayName})(Image);