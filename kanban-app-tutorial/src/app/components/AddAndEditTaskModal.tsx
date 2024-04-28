"use client";

import { useEffect, useState } from "react";
import { Modal, ModalBody } from "./Modal";
import { useAppDispatch, useAppSelector } from "../../redux/hooks";
import {
 getAddAndEditTaskModalValue,
 getAddAndEditTaskModalVariantValue,
 getAddAndEditTaskModalTitleValue,
 closeAddAndEditTaskModal,
 getCurrentBoardName,
 getAddAndEditTaskModalIndexValue,
 getAddAndEditTaskModalNameValue,
} from "../../redux/features/appSlice";
import {
 useFetchDataFromDbQuery,
 useUpdateBoardToDbMutation,
} from "../../redux/services/apiSlice";
import { id } from '../../../utils/data'

interface ITaskData {
 id: string,
 title: string;
 status: string;
}
// initial task data for the add task modal
let initialTaskData: ITaskData = {
 id: id(),
 title: "",
 status: "",
};

export default function AddOrEditTaskModal() {
    let { data } = useFetchDataFromDbQuery();
    let [updateBoardToDb, { isLoading }] = useUpdateBoardToDbMutation();
    const [taskData, setTaskData] = useState<ITaskData>();
    const [isTaskTitleEmpty, setIsTaskTitleEmpty] = useState<boolean>();
    const [isTaskStatusEmpty, setIsTaskStatusEmpty] = useState<boolean>();
    const [statusExists, setStatusExists] = useState<boolean>(true);
    const [columnNames, setColumnNames] = useState<[]>();
    const dispatch = useAppDispatch();
    const isModalOpen = useAppSelector(getAddAndEditTaskModalValue);
    const modalVariant = useAppSelector(getAddAndEditTaskModalVariantValue);
    const isVariantAdd = modalVariant === "Add New Task";
    const closeModal = () => dispatch(closeAddAndEditTaskModal());
    const currentBoardTitle = useAppSelector(getCurrentBoardName);
    // get task title, index and name from redux store
    const currentTaskTitle = useAppSelector(getAddAndEditTaskModalTitleValue);
    const currentTaskIndex = useAppSelector(getAddAndEditTaskModalIndexValue);
    const initialTaskColumn = useAppSelector(getAddAndEditTaskModalNameValue);
}