import { CustomTextSettings } from "../src/ts/test/custom-text";
import { text1 } from "./texts/text1";

const myArr = text1.split(" ").filter((word) => word !== "");

console.log("ex-Plant_custom.ts:10 - myArr:", myArr);

export const exPlantCustomTextSettings: CustomTextSettings = {
  text: myArr,
  mode: "repeat",
  limit: { value: 100000, mode: "word" },
  pipeDelimiter: false,
};
