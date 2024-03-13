"use client";

import { createID } from "@/app/lib/utils";
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

interface AlertState {
  message: string;
  id: string;
}

interface ClipboardDataInterface {
  clipboardList: Array<ClipboardData>;
  addClipboardItem: (item: ClipboardData) => void;
  deleteClipboardItem: (id: string) => void;
  updateClipboardItem: ({ id, action }: Action) => void;
  alertList: Array<AlertState>;
  deleteAlertItem: (id: string) => void;
}

const ClipboardDataContext = createContext<ClipboardDataInterface>({
  clipboardList: [],
  addClipboardItem: (item: ClipboardData) => {},
  deleteClipboardItem: (id: string) => {},
  updateClipboardItem: ({ id, action }: Action) => {},
  alertList: [],
  deleteAlertItem: (id) => {},
});

const ClipboardDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clipboardList, setClipboardList] = useState<Array<ClipboardData>>([]);
  const [alertList, setAlertList] = useState<Array<AlertState>>([]);

  const isInvalidClipboardItem = ({
    clipboardList,
    text,
  }: {
    clipboardList: Array<ClipboardData>;
    text: string;
  }): boolean => {
    const isExists = clipboardList.some((itemList) => {
      return itemList.text === text;
    });

    return isExists;
  };

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
    if (!isInvalidClipboardItem) {
      const updateClipboardList = clipboardList.map((clipboardItem) => {
        if (clipboardItem.id === id) {
          return { ...clipboardItem, [action]: !clipboardItem[action] };
        }
        return clipboardItem;
      });

      setClipboardList(updateClipboardList);
    } else {
      setAlertList([
        ...alertList,
        {
          message: "Text not saved because already exists",
          id: createID(),
        },
      ]);
    }
  };

  const deleteAlertItem = (id: string) => {
    const deleteAlert = alertList.filter((alertItem) => {
      alertItem.id === id;
    });

    setAlertList(deleteAlert);
  };

  const data = {
    clipboardList,
    addClipboardItem,
    deleteClipboardItem,
    updateClipboardItem,
    alertList,
    deleteAlertItem,
  };
  return (
    <ClipboardDataContext.Provider value={data}>
      {children}
    </ClipboardDataContext.Provider>
  );
};

export type { ClipboardDataInterface };

export { ClipboardDataContext, ClipboardDataProvider };
