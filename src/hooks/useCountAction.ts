import { bindActionCreators } from "@reduxjs/toolkit";
import { useMemo } from "react";
import { useDispatch } from "react-redux";
import { decreaseBy, increaseBy } from "../redux/slices/count";

export default function useCountActions() {
  const dispatch = useDispatch();
  return useMemo(
    () => bindActionCreators({ increaseBy, decreaseBy }, dispatch),
    [dispatch],
  );
}