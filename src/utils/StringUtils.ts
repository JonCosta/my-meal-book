export function isStringEmpty(str: string): boolean {
    return (str === null) || (str.trim().length === 0);
}

export function sortElementListByName(elementList: any[]) {
    elementList = elementList.sort((elementA, elementB) => {
        return elementA.name.localeCompare(elementB.name);
    });
    return elementList;
}