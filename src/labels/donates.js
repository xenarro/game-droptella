import Label from "./label"
import localization from "../localization";


class Donates extends Label {
  constructor(customStyle) {
    super(`${localization.donates}: 0`, customStyle)
    this.donate = 0
    this.text.y = 50
  }
  update(newValue) {
    this.set(`${localization.donates}: ${newValue}`)
    return this
  }
  increment() {
    this.donate++
    return this
  }
  incrementAndUpdate() {
    this.increment()
    this.update(this.donate)
    return this
  }
}


export default new Donates()