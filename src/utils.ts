export const tranObjToArr = (obj: any) => Object.keys(obj).map((item) => obj[item])
export const isValidHttpUrl = (str: string): boolean => {
    try {
        const url = new URL(str);
    } catch (_) {
        return false;
    }
    return true;
}