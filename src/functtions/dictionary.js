import dictionaryList from "../config/constants/dictionaryList.js"


export const dictionary = (term = "", language = "pt-br") => {

    let dic = dictionaryList()[0]

    if (term == undefined) return ""
    if (term == "") return ""

    return dic[term][process.env.REACT_APP_LANGUAGE] == undefined ? "***" : dic[term][process.env.REACT_APP_LANGUAGE]
}