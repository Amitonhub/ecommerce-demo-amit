import DetailsPage from "@/components/DetailsPage/DetailsPage";
import { getProductDetails } from "@/redux/actions/ProductDetailsAction";
import { ProductDetailsActionTypes } from "@/redux/actions/actionTypes/ProductDetailsTypes";
import { RootState } from "@/redux/store";
import { useRouter } from "next/router";
import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { ThunkDispatch } from "redux-thunk";

export default function details() {
  const router = useRouter();
  const { id } = router.query;
  const dispatch = useDispatch<any>();

  useEffect(() => {
    console.log(id)
    if (id) {
      dispatch(getProductDetails(Number(id)))
    }
  }, [id, dispatch]);

  return <>
    <DetailsPage />
  </>;
}
