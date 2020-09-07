/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPageDemo from "./Pages/Components/DocsPageDemo/index";
import DocsPageAPI from "./Pages/APIs/DocsPageAPI";
import DemoWithCodeAPI from "./Pages/APIs/DemoWithCode";

import {DocsLayout, DocsPages, PagesGroup, DocsPage} from "../lib";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import {H1, H2} from "../lib/components/Headers";
import Landing from "../lib/components/Landing/Landing";
import AutoDocsMenu from "../lib/components/AutoDocsMenu/AutoDocsMenu";
import DocsMenu from "../lib/components/DocsMenu/DocsMenu";
import DocsMenuItem from "../lib/components/DocsMenuItem/DocsMenuItem";
import GitHubIcon from '@material-ui/icons/GitHub';
import Brightness4Icon from '@material-ui/icons/Brightness4';



export default function ExampleDocumentation() {
    return (
        <DocsLayout
            autoMenu
            defaultLang={EN}
            langs={[EN, RU]}
            basename={process.env.PUBLIC_URL}
            actions={[
                {icon: <GitHubIcon />, tooltip: "asdfasdfsf", onClick: () => alert("kuku")},
                {icon: <Brightness4Icon/>, tooltip: "Hello darkness my old friend.", link: "http://google.com"}
            ]}
            name={"Material Docs testing"}
            version={"1.12.2-alpha"}
        >
            <DocsMenu dense>
                <AutoDocsMenu/>
            </DocsMenu>
            <DocsPages>
                <PagesGroup name={"Getting started"}>

                </PagesGroup>
                <PagesGroup name={"Components"}>
                    <DocsPageDemo/>
                </PagesGroup>
                <PagesGroup name={"APIs"}>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <DocsPage name={"TestPage1"} searchDescription={"sdfsfsd"}>
                        <H1>Hello Darkness my old friend</H1>
                        <H2>Darkness</H2>
                    </DocsPage>
                    <DocsPage name={"TestPage2"} searchDescription={"sdfsfsd"}>
                        <H1>HelloDarknessmyoldfriend</H1>
                        <H2>Darkness</H2>
                    </DocsPage>
                    <DocsPage name={"TestPage3"} searchDescription={"sdfsfsd"}>
                        asfasf2324
                    </DocsPage>
                </PagesGroup>
            </DocsPages>
            <Landing>

            </Landing>
        </DocsLayout>
    );
}