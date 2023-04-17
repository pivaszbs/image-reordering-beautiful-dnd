import {ReactNode, useState} from "react";
import React from 'react';
import "./App.css";
import {createRange} from "./createRange";
import {ListManager} from "./DNDHelper";
import {reorder} from "./reorder";
import {DropResult} from "react-beautiful-dnd";
import {Image} from "./Image";

const initialItems = createRange<{ id: number; value: string }>(
    16,
    (index) => ({
        id: index,
        index,
        value: `https://picsum.photos/id/${index}/200/200`,
    })
);


function App() {
    const [items, setItems] = useState(initialItems);

    function handleDragEnd({ destination, source }: Partial<DropResult>) {
        if (!destination || !source) {
            return;
        }

        if (destination.index === source.index) {
            return;
        }

        setItems((items) => {
            return reorder(items, source.index, destination.index);
        });
    }

  return (
      <ListManager
          chunkClassName={'chunk'}
          items={items}
          maxItems={2}
          render={({ id, value }, index) => (
              <Image src={value} key={id} />
          )}
          direction={'horizontal'}
          onDragEnd={handleDragEnd} />
  );
}

export default App;
