import JSONBig from "json-bigint";

function smartJson(str: any) {
    if (!str) {
        return str;
    }
    if (typeof (str) == 'object' || typeof str === "number") {
        return JSON.stringify(str);
    } else {
        switch (str[0]) {
            case '{':
            case '[':
                switch (str[1]) {
                    case '}':
                        return {};
                    case ']':
                        return [];
                }
                return JSONBig({useNativeBigInt: true}).parse(str);
            default:
                return isNaN(str) ? str : Number(str);
        }
    }
}

export default smartJson
