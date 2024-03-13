"use client";

import { createContext, useState } from "react";

interface ClipboardData {
  date: number;
  text: string;
  favorite: boolean;
  id: string;
  copy: boolean;
}

type Action = {
  id: "string";
  action: "copy";
};

interface ClipboardDataInterface {
  clipboardList: Array<ClipboardData>;
  addClipboardItem: (item: ClipboardData) => void;
  deleteClipboardItem: (id: string) => void;
  updateClipboardItem: ({ id, action }: Action) => void;
}

const ClipboardDataContext = createContext<ClipboardDataInterface>({
  clipboardList: [],
  addClipboardItem: (item: ClipboardData) => {},
  deleteClipboardItem: (id: string) => {},
  updateClipboardItem: ({ id, action }: Action) => {},
});

const ClipboardDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clipboardList, setClipboardList] = useState<Array<ClipboardData>>([]);

  const addClipboardItem = (item: ClipboardData) => {
    const newClipboardList = [...clipboardList, item];
    setClipboardList(newClipboardList);
  };

  const deleteClipboardItem = (id: string) => {
    const updateClipboardList = clipboardList.filter((clipboardItem) => {
      clipboardItem.id !== id;
    });
    setClipboardList(updateClipboardList);
  };

  const updateClipboardItem = ({ id, action }: Action) => {
    const updateClipboardList = clipboardList.map((clipboardItem) => {
      if (clipboardItem.id === id) {
        return { ...clipboardItem, [action]: !clipboardItem[action] };
      }
      return clipboardItem;
    });

    setClipboardList(updateClipboardList);
  };

  const data = {
    clipboardList,
    addClipboardItem,
    deleteClipboardItem,
    updateClipboardItem,
  };
  return (
    <ClipboardDataContext.Provider value={data}>
      {children}
    </ClipboardDataContext.Provider>
  );
};

export type { ClipboardDataInterface };

export { ClipboardDataContext, ClipboardDataProvider };
