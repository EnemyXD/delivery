import { AdvertisementType } from "../types/types";
import { BaseResponseType, instance } from "./api";

export const advertisementApi = {
  getAllAdvertisement() {
    return instance
      .get<BaseResponseType<allAdvertisementDataType>>("/alladvertisement")
      .then((res) => res.data);
  },
  getMyAdvertisement() {
    return instance
      .get<BaseResponseType<allAdvertisementDataType>>("/myadvertisement")
      .then((res) => res.data);
  },
  createAdvertisement(
    shortText: string,
    descriprtion?: string,
    images?: string[],
    tags?: string[]
  ) {
    return instance
      .post<BaseResponseType>("/createadveritsement", {
        shortText,
        descriprtion,
        images,
        tags,
      })
      .then((res) => res.data);
  },
};

type allAdvertisementDataType = AdvertisementType[];
