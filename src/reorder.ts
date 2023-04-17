export function reorder <T>(
    items: T[],
    moveIndex: number,
    targetIndex: number
): T[] {
    const moveItem = items[moveIndex];
    const newItems = [...items];

    newItems.splice(moveIndex, 1);
    newItems.splice(targetIndex, 0, moveItem);

    return newItems;
}
