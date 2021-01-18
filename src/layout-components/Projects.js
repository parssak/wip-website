import React from 'react'
import Project from './Project';
import { useSelector } from 'react-redux';


const templateimg = "http://placehold.it/500x350"
const linkIcon = "http://placehold.it/150x150"
let projects = [
    {
        name: "Kazakan 🎮",
        description: "Kazakan is a game I made where you fight through waves of enemies with a bow. Kazakan was made with C# in Unity, and I did all the artwork in Aseprite.",
        media: [templateimg, templateimg, templateimg, templateimg],
        tech: ["C#", "Aseprite", "Unity"],
        platforms: ["iOS", "Android", "Web", "Mac", "Windows"],
        links: [{
            text: "GitHub",
            icon: linkIcon,
            link: ""
        }, {
            text: "App Store",
            icon: linkIcon,
            link: ""
        },
        {
            text: "Play Store",
            icon: linkIcon,
            link: ""
        },
        {
            text: "In Browser",
            icon: linkIcon,
            link: ""
        },
        {
            text: "Article I wrote about it",
            icon: linkIcon,
            link: ""
        }]
    },
    {
        name: "Darco 📖",
        description: "Darco is an app I made for iPadOS, and for the browser. As a student in 2020, I read a lot of PDFs and lecture slides. So, I made Darco to reduce eye strain by easily converting any PDF into dark mode.",
        media: [templateimg, templateimg, templateimg, templateimg],
        tech: ["JavaScript", "ReactJS", "Swift"],
        platforms: ["iPadOS", "Web"],
        links: [{
            text: "GitHub",
            icon: linkIcon,
            link: ""
        }, {
            text: "App Store",
            icon: linkIcon,
            link: ""
        },
        {
            text: "In Browser",
            icon: linkIcon,
            link: ""
        }]
    },
    {
        name: "MixBot 🎛️",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure nihil provident? Assumenda consectetur perspiciatis in pariatur itaque. Accusamus facilis consequuntur, alias voluptatem nemo ipsam nisi blanditiis facere autem sit dolores totam asperiores quis magni. Earum sint quas tenetur, alias corrupti doloremque nam cum veritatis! Obcaecati nesciunt magnam impedit dolorem.",
        media: [templateimg, templateimg, templateimg, templateimg],
        tech: ["JavaScript", "ReactJS", "ExpressJS", "MongoDB"],
        platforms: ["MacOS", "Windows"],
        links: [{
            text: "GitHub",
            icon: linkIcon,
            link: ""
        },
        {
            text: "Download Page for Mac and Windows",
            icon: linkIcon,
            link: ""
        }]
    },
    {
        name: "TeaBlocks 🍎",
        description: "An educational mobile app project for teaching kids to code through a node-base visual programming language and lessons.",
        media: [templateimg, templateimg, templateimg, templateimg],
        tech: ["TypeScript", "React Native", "ExpressJS", "PostgreSQL"],
        platforms: ["TBD"],
        links: [{
            text: "GitHub",
            icon: linkIcon,
            link: ""
        }, {
            text: "App Store",
            icon: linkIcon,
            link: ""
        },
        {
            text: "Play Store",
            icon: linkIcon,
            link: ""
        },
        {
            text: "In Browser",
            icon: linkIcon,
            link: ""
        },
        {
            text: "Article I wrote about it",
            icon: linkIcon,
            link: ""
        }]
    }
];
export default function Projects() {
    const theme = useSelector(state => state.theme);
    return (
        <div className="projects">
            <div className={`sticky-header ${theme}`}>
                <h3>My Projects</h3>
            </div>

            {projects.map((project, x) => (
                <Project project={project} x={x} style={theme} />
            ))}
        </div>
    )
}
