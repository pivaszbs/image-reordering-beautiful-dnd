import React, { ReactNode } from 'react';
import { Draggable, DraggableProvided } from 'react-beautiful-dnd';

export interface ListManagerItemProps<T> {
  item: T;
  index: number;
  render(item: T, index: number): ReactNode;
  itemClassName?: string;
  isDisabled?: boolean;
}

export function ListManagerItem<T>({ item, index, render, itemClassName, isDisabled }: ListManagerItemProps<T>) {
    return (
        // Хак с valueId для того чтобы загружающиеся картинки и кнопка загрузки картинки не была draggable
        // eslint-disable-next-line @typescript-eslint/ban-ts-comment
        // @ts-ignore
        <Draggable isDragDisabled={isDisabled || !item.valueId} draggableId={item.valueId} index={index}>
            {(provided: DraggableProvided) => (
                <div
                    ref={provided.innerRef}
                    className={itemClassName}
                    {...provided.draggableProps}
                    {...provided.dragHandleProps}>
                    {render(item, index)}
                </div>
            )}
        </Draggable>
    );
}
