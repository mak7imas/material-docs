import React from "react";
import {LazyLoadImage} from 'react-lazy-load-image-component';
import {useStyles} from "./styles";
import clsx from "clsx";
import Typography from "@material-ui/core/Typography";
import CircularProgress from "@material-ui/core/CircularProgress";

export default function Image({src="", alt="", style, className, children, fullWidth, ...props}) {
    const classes = useStyles();
    return (
        <React.Fragment>
            <div style={style} className={clsx(fullWidth && classes.fullWidth, className)}>
                <LazyLoadImage
                    alt={alt}
                    style={{width: "100%"}}
                    src={src}
                    placeholder={<CircularProgress />}
                />
            </div>
            {children && <Typography color={"textSecondary"} variant={"subtitle2"}>{children}</Typography>}
        </React.Fragment>
    );
}