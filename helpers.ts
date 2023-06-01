export function pad(val: number) {
    let valString = val + ''
    if (valString.length < 2) {
        return '0' + valString
    } else {
        return valString
    }
}
