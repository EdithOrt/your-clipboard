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
  id: string;
  action: "copy" | "favorite";
};

interface AlertState {
  message: string;
  id: string;
  type: "error" | "warning" | "success";
  active: boolean;
}

interface ClipboardDataInterface {
  clipboardList: Array<ClipboardData>;
  addClipboardItem: (item: ClipboardData) => void;
  deleteClipboardItem: (id: string) => void;
  updateClipboardItem: ({ id, action }: Action) => void;
  alertList: Array<AlertState>;
  deleteAlertItem: (id: string) => void;
  getAlertAnimation: (id: string) => void;
  currentId: string;
  getSessionStorageData: (name: string) => any;
}

const ClipboardDataContext = createContext<ClipboardDataInterface>({
  clipboardList: [],
  addClipboardItem: (item: ClipboardData) => {},
  deleteClipboardItem: (id: string) => {},
  updateClipboardItem: ({ id, action }: Action) => {},
  alertList: [],
  deleteAlertItem: (id: string) => {},
  getAlertAnimation: (id: string) => {},
  currentId: "",
  getSessionStorageData: (name: string) => {},
});

const ClipboardDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clipboardList, setClipboardList] = useState<Array<ClipboardData>>([]);
  const [alertList, setAlertList] = useState<Array<AlertState>>([]);
  const [currentId, setCurrentId] = useState<string>("");

  const isInvalidClipboardItem = (
    clipboardList: Array<ClipboardData>,
    text: string,
  ): boolean => {
    const isExists = clipboardList.some((itemList) => {
      return itemList.text === text;
    });

    return isExists;
  };

  const deleteAlertItem = (id: string) => {
    const deleteAlert = alertList.filter((alertItem) => {
      alertItem.id === id;
    });

    setAlertList(deleteAlert);
  };

  const updateSessionStorage = (clipboardData: Array<ClipboardData>) => {
    sessionStorage.clear();
    const stringifyList = JSON.stringify(clipboardData);

    sessionStorage.setItem("clipboardData", stringifyList);
  };

  const addClipboardItem = (item: ClipboardData) => {
    if (!isInvalidClipboardItem(clipboardList, item.text)) {
      const newClipboardList = [...clipboardList, item];
      setClipboardList(newClipboardList);

      updateSessionStorage(newClipboardList);
    } else {
      console.log("show alert");
      setAlertList([
        ...alertList,
        {
          message: "Text not saved because it already exists",
          id: item.id,
          type: "error",
          active: true,
        },
      ]);

      /* setTimeout(() => {
        setAlertList([
          ...alertList,
          {
            message: "Text not saved because it already exists",
            id: item.id,
            type: "error",
            active: false,
          },
        ]);
      }, 4000);

      setTimeout(() => {
        deleteAlertItem(item.id);
      }, 5000); */
    }

    // setCurrentId(item.id);
  };

  const getAlertAnimation = (id: string) => {
    alertList.map((alertItem) => {
      if (alertItem.id === id) {
        return {
          ...alertItem,
          active: false,
        };
      } else {
        return alertItem;
      }
    });
  };

  const getSessionStorageData = (name: string) => {
    const data = sessionStorage.getItem(name);

    if (data) {
      const parseData = JSON.parse(data);
      setClipboardList(parseData);
    }
  };

  const deleteClipboardItem = (id: string) => {
    const updateClipboardList = clipboardList.filter((clipboardItem) => {
      clipboardItem.id !== id;
    });
    setClipboardList(updateClipboardList);

    updateSessionStorage(updateClipboardList);
  };

  const updateClipboardItem = ({ id, action }: Action) => {
    console.log("execute updateClipboardItem");
    const updateClipboardList = clipboardList.map((clipboardItem) => {
      if (clipboardItem.id === id) {
        return { ...clipboardItem, [action]: !clipboardItem[action] };
      }
      return clipboardItem;
    });

    setClipboardList(updateClipboardList);
    updateSessionStorage(updateClipboardList);
  };

  const data = {
    clipboardList,
    addClipboardItem,
    deleteClipboardItem,
    updateClipboardItem,
    alertList,
    deleteAlertItem,
    getAlertAnimation,
    currentId,
    getSessionStorageData,
  };
  return (
    <ClipboardDataContext.Provider value={data}>
      {children}
    </ClipboardDataContext.Provider>
  );
};

export type { ClipboardDataInterface };

export { ClipboardDataContext, ClipboardDataProvider };
