import i18n from "i18next"

import English from "./en.json"
import Spanish from "./sp.json"

const resources = {
    en: {
        translation: English
    },
    sp: {
        translation: Spanish
    }
}

i18n.init({
    resources: resources,
    lng: "sp",
    keySeparator: false,
    interpolation: {
        escapeValue: false
    }
})

export default i18n