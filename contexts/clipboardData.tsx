"use client";

import {
  Dispatch,
  ReactNode,
  SetStateAction,
  createContext,
  useState,
} from "react";

interface ClipboardData {
  date: string;
  text: string;
  favorite: boolean;
  id: string;
  copy?: boolean;
}

interface ClipboardDataContext {
  clipboardList: object;
  addClipboardItem: (item: ClipboardData) => void;
  deleteClipboardItem: (id: string) => void;
  updateFavoriteItem: (id: string) => void;
}

const ClipboardDataContext = createContext<ClipboardDataContext | null>(null);

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

  const updateFavoriteItem = (id: string) => {
    const updateClipboardList = clipboardList.map((clipboardItem) => {
      if (clipboardItem.id === id) {
        return { ...clipboardItem, favorite: !clipboardItem.favorite };
      }
      return clipboardItem;
    });

    setClipboardList(updateClipboardList);
  };

  const data = {
    clipboardList,
    addClipboardItem,
    deleteClipboardItem,
    updateFavoriteItem,
  };
  return (
    <ClipboardDataContext.Provider value={data}>
      {children}
    </ClipboardDataContext.Provider>
  );
};

export { ClipboardDataContext, ClipboardDataProvider };
