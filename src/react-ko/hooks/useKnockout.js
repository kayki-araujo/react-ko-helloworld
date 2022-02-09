import { useContext } from "react";
import KnockoutContext from "../context/KnockoutContext";
import ko from "knockout";

import { customAlphabet } from "nanoid";
const alphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ_abcdefghijklmnopqrstuvwxyz";
const nanoid = customAlphabet(alphabet, 21);

const useKnockout = (type, value) => {
  const id = "ko_" + nanoid();
  const [ViewModel, setViewModel] = useContext(KnockoutContext);

  const tempViewModel = {};

  if (type === "observable") {
    tempViewModel[id] = ko.observable(value);
  }

  if (type === "array") {
    tempViewModel[id] = ko.observableArray(value);
  }

  if (type === "computed") {
    tempViewModel[id] = ko.computed(value, ViewModel);
  }

  if (type === "purecomputed") {
    tempViewModel[id] = ko.pureComputed(value, ViewModel);
  }

  if (type === "fn") {
    tempViewModel[id] = function () {
      value(ViewModel, this);
    };
  }

  setViewModel(Object.assign(ViewModel, tempViewModel));

  return [id, tempViewModel[id]];
};

export default useKnockout;
