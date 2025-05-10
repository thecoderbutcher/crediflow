export const justNumbers = (event: React.KeyboardEvent<HTMLInputElement>): void => { 
    const keyValue = event.key;
    const controlKeys = [
        "Backspace",
        "Tab",
        "ArrowLeft",
        "ArrowRight",
        "Delete",
        "Home",
        "End",
        "+",
        ","
    ];
    if (controlKeys.includes(keyValue)) return;
    if (!/^[0-9]$/.test(keyValue)) event.preventDefault(); 
}