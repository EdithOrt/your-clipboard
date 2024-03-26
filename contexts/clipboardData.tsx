"use client";

import {
  createContext,
  useState,
  Dispatch,
  SetStateAction,
  useEffect,
} from "react";
import moment from "moment";
import { createID } from "@/app/lib/utils";

interface ClipboardData {
  date: number;
  text: string;
  favorite: boolean;
  id: string;
  copy: boolean;
  confirmDelete: boolean;
}

type Action = {
  id: string;
  action: "copy" | "favorite" | "confirmDelete";
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
  loader: boolean;
  setLoader: Dispatch<SetStateAction<boolean>>;
  deleteAllClipboardData: () => void;
  getClipboardText: (dataList: Array<ClipboardData>) => string;
  handleModal: () => void;
  modal: boolean;
  updateAlertList: (data: AlertState) => void;
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
  loader: true,
  setLoader: () => {},
  deleteAllClipboardData: () => {},
  getClipboardText: (clipboardList: Array<ClipboardData>) => "",
  handleModal: () => {},
  modal: false,
  updateAlertList: (data: AlertState) => {},
});

const timer = 500;

const ClipboardDataProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [clipboardList, setClipboardList] = useState<Array<ClipboardData>>([]);
  const [alertList, setAlertList] = useState<Array<AlertState>>([]);
  const [currentId, setCurrentId] = useState<string>("");
  const [loader, setLoader] = useState<boolean>(true);
  const [modal, setModal] = useState<boolean>(false);
  const [favoritesChange, setFavoritesChange] = useState(false);

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
      return alertItem.id !== id;
    });

    setAlertList(deleteAlert);
  };

  const updateSessionStorage = (clipboardData: Array<ClipboardData>) => {
    sessionStorage.clear();
    const stringifyList = JSON.stringify(clipboardData);

    sessionStorage.setItem("clipboardData", stringifyList);
  };

  const deleteAllClipboardData = () => {
    setLoader(true);
    setClipboardList([]);
    sessionStorage.clear();

    setModal(!modal);

    setTimeout(() => {
      setLoader(false);
    }, timer);
  };

  const getAlertAnimation = (id: string) => {
    const newAlertList = alertList.map((alertItem) => {
      if (alertItem.id === id) {
        return {
          ...alertItem,
          active: false,
        };
      } else {
        return alertItem;
      }
    });

    return newAlertList;
  };

  const updateAlertList = (data: AlertState) => {
    setAlertList([...alertList, data]);
  };

  const addClipboardItem = (item: ClipboardData) => {
    if (!isInvalidClipboardItem(clipboardList, item.text)) {
      const newClipboardList = [...clipboardList, item];
      setClipboardList(newClipboardList);

      updateSessionStorage(newClipboardList);
    } else {
      const id = createID();
      updateAlertList({
        message: "Text not saved because it already exists",
        id: id,
        type: "error",
        active: true,
      });
    }
  };

  const getSessionStorageData = (name: string) => {
    setLoader(true);
    const data = sessionStorage.getItem(name);

    if (data) {
      const parseData = JSON.parse(data);
      setClipboardList(parseData);
    }

    setTimeout(() => {
      setLoader(false);
    }, timer);
  };

  const deleteClipboardItem = (id: string) => {
    setLoader(true);
    const updateClipboardList = clipboardList.filter((clipboardItem) => {
      return clipboardItem.id !== id;
    });

    setClipboardList(updateClipboardList);

    updateSessionStorage(updateClipboardList);

    setTimeout(() => {
      setLoader(false);
    }, timer);
  };

  const handleModal = () => {
    setModal(!modal);
  };

  const updateClipboardItem = ({ id, action }: Action) => {
    if (action === "favorite") setFavoritesChange(true);

    const updateClipboardList = clipboardList.map((clipboardItem) => {
      if (clipboardItem.id === id) {
        return { ...clipboardItem, [action]: !clipboardItem[action] };
      }
      return clipboardItem;
    });

    setClipboardList(updateClipboardList);
    updateSessionStorage(updateClipboardList);
  };

  const getClipboardText = (dataList: Array<ClipboardData>): string => {
    const stringsList = dataList.map((clipboardItem) => {
      return `------ ${moment.unix(clipboardItem.date).format("LLL")} ------\n\n${clipboardItem.text}\n\n\n\n`;
    });

    const joinStrings = stringsList.join(" ");

    return "Tanks for using YOUR CLIPBOARD\n\n\n\n" + joinStrings;
  };

  useEffect(() => {
    if (alertList?.length > 11) {
      const cleaAlertList = alertList.slice(5, alertList.length - 1);

      setAlertList(cleaAlertList);
    }

    return () => {};
  }, [alertList]);

  const getListOrderByDate = (
    clipboardData: ClipboardData[],
  ): ClipboardData[] => {
    return clipboardData.sort((a, b) => a.date - b.date);
  };

  const getOrderList = (clipboardData: ClipboardData[]): ClipboardData[] => {
    const favoritesItems = clipboardData.filter((clipboardItem) => {
      return clipboardItem.favorite;
    });

    getListOrderByDate(favoritesItems);

    const noFavoritesIntems = clipboardData.filter((clipboardItem) => {
      return !clipboardItem.favorite;
    });

    getListOrderByDate(noFavoritesIntems);

    const orderList = [...favoritesItems, ...noFavoritesIntems];

    return orderList;
  };

  useEffect(() => {
    if (favoritesChange) {
      const orderList = getOrderList(clipboardList);

      setClipboardList(orderList);
      setFavoritesChange(false);
    }

    return () => {};
  }, [favoritesChange]);

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
    loader,
    setLoader,
    deleteAllClipboardData,
    getClipboardText,
    handleModal,
    modal,
    updateAlertList,
  };
  return (
    <ClipboardDataContext.Provider value={data}>
      {children}
    </ClipboardDataContext.Provider>
  );
};

export type { ClipboardDataInterface };

export { ClipboardDataContext, ClipboardDataProvider };
