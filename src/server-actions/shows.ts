"use server";

import ShowModel from "@/models/show-model";

export const createNewShow = async (payload: any) => {
  try {
    await ShowModel.create(payload);

    return {
      success: true,
      message: "Show Created Successfully",
    };
  } catch (error: any) {
    return {
      success: false,
      message: error.message,
    };
  }
};
export const editShowById = async ({
  showId,
  payload,
}: {
  showId: string;
  payload: any;
}) => {
  try {
    await ShowModel.findByIdAndUpdate(showId, payload);
    return {
      success: true,
      message: "Show updated successfully",
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
export const deleteShowById = async (showId: string) => {
  try {
    await ShowModel.findByIdAndDelete(showId);
    return {
      success: true,
      message: "Show deleted successfully",
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
export const getAllShows = async () => {
  try {
    const shows = await ShowModel.find();
    return {
      success: true,
      data: JSON.parse(JSON.stringify(shows)),
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
export const getShowById = async (showId: string) => {
  try {
    const shows = await ShowModel.findById(showId);
    return {
      success: true,
      data: JSON.parse(JSON.stringify(shows)),
    };
  } catch (error: any) {
    return { success: false, message: error.message };
  }
};
