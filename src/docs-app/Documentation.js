/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPageDemo from "./pages/Components/DocsPageDemo";
import DocsPageAPI from "./pages/APIs/DocsPageAPI";
import DemoWithCodeAPI from "./pages/APIs/DemoWithCodeAPI";
import CodeAPI from "./pages/APIs/CodeAPI";
import PagesGroupAPI from "./pages/APIs/PagesGroupAPI";
import ImageAPI from "./pages/APIs/ImageAPI";
import ListItemAPI from "./pages/APIs/ListItemAPI";

import {DocsLayout, DocsPages, PagesGroup} from "@danilandreev/material-docs";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import ExpansionCodeAPI from "./pages/APIs/ExpansionCodeAPI";


export default function Documentation() {
    return (
        <DocsLayout autoMenu defaultLang={EN} langs={[EN, RU]} basename={process.env.PUBLIC_URL}>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo/>
                </PagesGroup>
                <PagesGroup name={"APIs"}>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <CodeAPI />
                    <PagesGroupAPI/>
                    <ImageAPI/>
                    <ListItemAPI/>
                    <ExpansionCodeAPI/>
                </PagesGroup>
            </DocsPages>
        </DocsLayout>
    );
}