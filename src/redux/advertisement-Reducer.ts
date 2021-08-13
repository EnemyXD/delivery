import { advertisementApi } from "../API/advertisementApi";
import { ResultCodeEnum } from "../API/api";
import { AdvertisementType } from "../types/types";
import { InferActionsType, ThunkType } from "./redux-store";

let initState = {
  myAdvertisement: null as AdvertisementType[] | null,
  initMy: false,
  allAdvertisement: null as AdvertisementType[] | null,
  initAll: false,
};

type initStateAdvertisementType = typeof initState;

export const AdvertisementReducer = (
  state = initState,
  action: advertisementActionType
): initStateAdvertisementType => {
  switch (action.type) {
    case "advertisement/setAllAdvertisement": {
      return {
        ...state,
        allAdvertisement: action.advertisement,
        initAll: true,
      };
    }
    case "advertisement/setMyAdvertisement": {
      return {
        ...state,
        myAdvertisement: action.advertisement,
        initMy: true,
      };
    }
    default:
      return state;
  }
};

type advertisementActionType = InferActionsType<typeof actions>;

const actions = {
  setMyAdvertisement: (advertisement: AdvertisementType[]) =>
    ({
      type: "advertisement/setMyAdvertisement",
      advertisement,
    } as const),
  setAllAdvertisement: (advertisement: AdvertisementType[]) =>
    ({
      type: "advertisement/setAllAdvertisement",
      advertisement,
    } as const),
};

export const getAllAdvertisement =
  (onSubmitProps?: any): ThunkType<advertisementActionType> =>
  async (dispatch) => {
    let response = await advertisementApi.getAllAdvertisement();
    onSubmitProps?.setSubmitting(false);
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.setAllAdvertisement(response.d));
    }
  };

export const getMyAdvertisement =
  (onSubmitProps?: any): ThunkType<advertisementActionType> =>
  async (dispatch) => {
    let response = await advertisementApi.getMyAdvertisement();
    onSubmitProps?.setSubmitting(false);
    if (response.resultCode === ResultCodeEnum.success) {
      dispatch(actions.setMyAdvertisement(response.d));
    }
  };

export const createAdvertisement =
  (
    onSubmitProps: any,
    shortText: string,
    description?: string,
    images?: string[],
    tags?: string[]
  ): ThunkType<advertisementActionType> =>
  async (dispatch) => {
    let response = await advertisementApi.createAdvertisement(
      shortText,
      description,
      images,
      tags
    );
    onSubmitProps.setSubmitting(false);
  };
