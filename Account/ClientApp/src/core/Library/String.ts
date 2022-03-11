export function IsEmpty(str: string): boolean {
    return str.trim() === "";
}

export function IsNullOrEmpty(str?: string): boolean {
    if (str) {
        return IsEmpty(str);
    }
    return true;
}