import {defineStore} from "pinia";
import {WorkStore} from "~/types/typings";

export const useWorkStore = defineStore<string, WorkStore>("workStore", () => {
    const works = [
        {
            id: 1,
            name: "Elismar Gonçalves ",
            position: "Estudante",
            from: "2022",
            to: "UAB",
            link: "https://elearning.uab.pt/",
        }
    ]

    return {
        getAllWorks: works.slice()
    }
})