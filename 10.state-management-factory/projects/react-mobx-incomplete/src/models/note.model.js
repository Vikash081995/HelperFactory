import { makeAutoObservable } from "mobx";
import { nanoid } from "nanoid";

export default class Note {
  id = nanoid();
  isDone = false;
  flag = false;
  border = "none";
  updated = false;

  constructor(text) {
    this.text = text;
    makeAutoObservable(this);
  }

  setFlag() {
    this.flag = true;
  }

  setBorderColor(borderColor) {
    this.border = borderColor;
  }

  markUpdated() {
    console.log("Note synced with database!");
    this.updated = true;
  }
}
