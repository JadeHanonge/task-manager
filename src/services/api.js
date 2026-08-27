import axios from "axios";
import axiosClient from "./axiosClient"

export const getAllTasks = () => {
    return axiosClient.get("/tasks");
}

export const getAllStatus = () => {
    return axiosClient.get("/status");
}

export const addTask = (titre, deadline) => {
    return axiosClient.post("/addTask", {title: titre, deadline: deadline});
}

export const updateStatus = (task_id, state) => {
    return axiosClient.put(`/updateStatus/${task_id}`, {done: state});
}

export const deleteTask = (task_id) => {
    return axiosClient.delete(`/deleteTask/${task_id}`);
}