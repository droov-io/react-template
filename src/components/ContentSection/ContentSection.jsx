import React from "react";
import { Paper } from "@material-ui/core";
import { makeStyles } from "@material-ui/styles";

import WelcomePage from "pages/WelcomePage";
import Page2 from "pages/Page2";

const useStyles = makeStyles(() => ({
    paperStyles: {
        "min-height": "100vh",
        overflow: "hidden",
    },
}));

function ContentSection() {
    const classes = useStyles();

    return (
        <Paper className={classes.paperStyles}>
            <Page2 />
        </Paper>
    );
}

export default ContentSection;
