
const templateimg = "http://placehold.it/500x350"
const linkIcon = "http://placehold.it/150x150"


export const projects = [
    {
        name: "Kazakan 🎮",
        description: "Kazakan is a game I made where you fight through waves of enemies with a bow. Kazakan was made with C# in Unity, and I did all the artwork in Aseprite.",
        media: ["/media/kaz_1.png", "/media/kaz_2.png", "/media/kaz_3.png"],
        tech: ["C#", "Aseprite", "Unity"],
        platforms: ["iOS", "Android", "Web", "Mac", "Windows"],
        links: [{
            text: "App Store",
            icon: linkIcon,
            link: "https://apps.apple.com/us/app/kazakan/id1527181335"
        },
        {
            text: "Play Store",
            icon: linkIcon,
            link: "https://play.google.com/store/apps/details?id=com.ParssaMakesGames.KAZAKAN"
        },
        {
            text: "In Browser",
            icon: linkIcon,
            link: "https://parssa.itch.io/kazakan"
        },
        {
            text: "Medium Article",
            icon: linkIcon,
            link: "https://parssa.medium.com/lessons-learned-from-building-my-first-mobile-game-c9fbb7a7809e"
        }]
    },
    {
        name: "Darco 📖",
        description: "Darco is an app I made for iPadOS, and for the browser. As a student in 2020, I read a lot of PDFs and lecture slides. So, I made Darco to reduce eye strain by easily converting any PDF into dark mode.",
        media: ["/media/darco_1.png", "/media/darco_2.png", "/media/darco_3.png"],
        tech: ["JavaScript", "ReactJS", "Swift"],
        platforms: ["iPadOS", "Web"],
        links: [{
            text: "GitHub",
            icon: linkIcon,
            link: "https://github.com/parssak/darco"
        }, {
            text: "App Store",
            icon: linkIcon,
            link: "https://apps.apple.com/us/app/darco/id1541492663"
        },
        {
            text: "In Browser",
            icon: linkIcon,
            link: "https://www.parssak.com/darco/index.html"
        }]
    },
    {
        name: "MixBot 🎛️",
        description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aliquam iure nihil provident? Assumenda consectetur perspiciatis in pariatur itaque. Accusamus facilis consequuntur, alias voluptatem nemo ipsam nisi blanditiis facere autem sit dolores totam asperiores quis magni. Earum sint quas tenetur, alias corrupti doloremque nam cum veritatis! Obcaecati nesciunt magnam impedit dolorem.",
        media: ["/media/mix_1.png", "/media/mix_2.png", "/media/mix_3.png"],
        tech: ["JavaScript", "ReactJS", "ExpressJS", "MongoDB"],
        platforms: ["MacOS", "Windows"],
        links: [{
            text: "GitHub",
            icon: linkIcon,
            link: "https://github.com/parssak/mixbot"
        },
        {
            text: "Download for Mac and Windows",
            icon: linkIcon,
            link: ""
        }]
    },
    {
        name: "TeaBlocks 🍎",
        description: "An educational mobile app project for teaching kids to code through a node-base visual programming language and lessons.",
        media: ["/media/teab_3.png", "/media/tea_2.png", "/media/tea_3.png"],
        tech: ["TypeScript", "React Native", "ExpressJS", "PostgreSQL"],
        platforms: ["TBD"],
        links: [
        {
            text: "Browser Demo",
            icon: linkIcon,
                link: "https://parssak.github.io/teablocks-demo/"
        }]
    }
];