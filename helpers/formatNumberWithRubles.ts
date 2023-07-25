export function formatNumberWithRubles(number: number) {
    // Преобразуем число в строку и разделяем триады справа налево
    const numberStr = String(number);
    const reversedTriads = [];
    let currentTriad = "";

    for (let i = numberStr.length - 1; i >= 0; i--) {
        currentTriad = numberStr[i] + currentTriad;
        if (currentTriad.length === 3 || i === 0) {
            reversedTriads.push(currentTriad);
            currentTriad = "";
        }
    }

    // Обратно объединяем триады, разделяя пробелами
    const formattedStr = reversedTriads.reverse().join(" ");

    return formattedStr;
}