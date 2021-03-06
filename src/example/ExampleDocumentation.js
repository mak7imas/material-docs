/*
 * Author: Andrieiev Danil |  danssg08@gmail.com | https://github.com/DanilAndreev
 * Copyright (C) 2020.
 */

import React from "react";
import DocsPageDemo from "./Pages/Components/DocsPageDemo/index";
import DocsPageAPI from "./Pages/APIs/DocsPageAPI";
import DemoWithCodeAPI from "./Pages/APIs/DemoWithCode";

import {DocsLayout, DocsMenuItem, DocsPage, DocsPages, Image, PagesGroup} from "../lib";

import RU from "./locale/RU.json";
import EN from "./locale/EN.json";
import {H1, H2, H3, H4, H5, H6} from "../lib/components";
import Landing from "../lib/components/Landing/Landing";
import AutoDocsMenu from "../lib/components/AutoDocsMenu/AutoDocsMenu";
import DocsMenu from "../lib/components/DocsMenu/DocsMenu";
import GitHubIcon from '@material-ui/icons/GitHub';
import logo from "./../logo.svg";
import Block from "../lib/components/Block/Block";
import List from "../lib/components/List/List";
import ListItem from "../lib/components/ListItem/ListItem";
import ListItemContained from "../lib/components/ListItemContained/ListItemContained";
import Link from "../lib/components/Link/Link";
import Markdown from "../lib/components/Markdown/Markdown";
import LocalLocaleTestPage from "./Pages/Test/LocalLocaleTestPage";
import Button from "@material-ui/core/Button";
import Locale from "../lib/components/Locale";


export default function ExampleDocumentation() {
    const [text, setText] = React.useState("");
    return (
        <DocsLayout
            autoMenu
            defaultLang={EN}
            langs={[EN, RU]}
            basename={process.env.PUBLIC_URL}
            actions={[
                {icon: <GitHubIcon/>, tooltip: "asdfasdfsf", onClick: () => alert("kuku")},
                // {icon: <Brightness4Icon/>, tooltip: "Hello darkness my old friend.", link: "http://google.com"}
            ]}
            name={"Material Docs testing"}
            version={"1.12.2-alpha"}
            logo={logo}
        >
            <DocsMenu dense>
                <AutoDocsMenu/>
                <DocsMenuItem page={"Kekk"}/>
            </DocsMenu>
            <DocsPages>
                <PagesGroup name={"Getting started"} order={9}>

                </PagesGroup>
                <PagesGroup name={"Components"} order={100}>
                    <DocsPageDemo/>
                </PagesGroup>
                <PagesGroup name={"APIs"} defaultExpanded>
                    <DocsPageAPI/>
                    <DemoWithCodeAPI/>
                    <DocsPage name={"TestPage1"} searchDescription={"sdfsfsd"}>
                        <H1>Hello Darkness my old friend</H1>
                        <H2>Darkness</H2>
                        <H3>Darkness</H3>
                        <H4>Darkness</H4>
                        <H5>Darkness</H5>
                        <H6>Darkness</H6>
                    </DocsPage>
                    <DocsPage name={"TestPage2"} searchDescription={"sdfsfsd"} order={10}>
                        <H1>HelloDarknessmyoldfriend</H1>
                        <H2>{text}</H2>
                        {text}
                        <Button onClick={() => setText(prev => prev ? "" : "Hello darkness")}>Set value</Button>
                        <Markdown locale={"pages/DocsPageAPI/pageAbout"}>__This text must not be shown!__</Markdown>
                        <Locale path={"pages/DocsPageAPI/pageSearchDescription"}>__This text must not be shown
                            2!__</Locale>
                        <Markdown data={{name: "Danil Andreev", age: "14, name: __&&name__."}}>My name is __&&name__, I
                            am &&age years old!</Markdown>
                        <Markdown>```hello darkness``` my old __friend__. I`ve come ___to tall___ with you
                            again.</Markdown>
                    </DocsPage>
                    <DocsPage name={"TestPage3"} searchDescription={"sdfsfsd"} order={11}>
                        asfasf2324
                        <Block>asdfasfas</Block>
                        <List>
                            <ListItem>
                                asfsdf
                                <ListItemContained>
                                    <ListItem>adsfsa</ListItem>
                                </ListItemContained>
                            </ListItem>
                        </List>
                        <Link page={["Components", "DocsPages"]}>Hello</Link>
                        <Markdown>{`[{"text": "Hello darkness my old friend", "page": "components/docs-pages"}](https://google.com)`}</Markdown>
                        <Image
                            src={"https://www.albertjuhe.com/images/11.jpg"}
                            // placeholderSrc={"https://www.albertjuhe.com/images/11-64x48.jpg"}
                            fullWidth
                            frame
                        >
                            asdfsaf
                        </Image>
                    </DocsPage>
                    <LocalLocaleTestPage/>
                </PagesGroup>
            </DocsPages>
            <Landing>

            </Landing>
        </DocsLayout>
    );
}