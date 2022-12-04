import {defineStore} from "pinia";
import {ProjectStore} from "../types/typings";

// @ts-ignore
const images: Record<string, string> = import.meta.glob("../assets/featured/*.{png,jpg}", {as: 'url', eager: true});

export const useProjectStore = defineStore<string, ProjectStore>("projectStore", () => {
    const projects = [
        {
            id: 4,
            name: "Sexy Adventure - Ecommerce Shopp Online",
            image: images["../assets/featured/sadv.png"],
            description:
                "Ecomerce Shopping Oline para uma amiga meu, Desenvolvido no Python.",
            tech: ["TypeScript", "Python", "Django.py"],
            link: "https://www.google.com/maps/place/Sexy+Adventure/@15.2793459,-23.7510077,15z/data=!4m12!1m6!3m5!1s0x0:0xeb6f654f7273b9fb!2sSexy+Adventure!8m2!3d15.2793459!4d-23.7510077!3m4!1s0x0:0xeb6f654f7273b9fb!8m2!3d15.2793459!4d-23.7510077",
            featured: true,
        },
        {
            id: 3,
            name: "DrizzyDownloader - Youtube Video Downloader",
            image: images["../assets/featured/dvdl.png"],
            description:
                "Este projeto e capaz de fazer o download do video no youtube partir dos link, desenvolvido em Python com o framework Django",
            tech: ["Django.py", "Python"],
            link: "http://ninemillaka.pythonanywhere.com/youtube/",
            featured: true,
        },

        {
            id: 2,
            name: "SGDN - Sistema de Gestão de Desportos Nauticos",
            image: images["../assets/featured/sgdn.png"],
            description:
                "Sistema de Gestão de Desportos Nauticos para um clube de Surf e mais",
            tech: ["PHP", "Yii2 Framework"],
            link: "https://github.com/NinemillaKA/SGDN/",
            featured: false,
        },

        {
            id: 1,
            name: "FMS - Sistema de Gestão de Ficheiros",
            image: images["../assets/featured/fms.png"],
            description:
                "Sistema de Gestão de todos os tipos de ficheiros, desenvolvido no python",
            tech: ["JS", "Node.js", "MongoDB", "Heroku"],
            link: "https://github.com/NinemillaK4",
        },
        


    ];


    return {
        getAllProjects: projects.slice(),
        getFeaturedProjects: projects.filter((project) => project.featured),
    };
})

