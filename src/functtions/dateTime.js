import { putOneZeroOnTheLeftSide } from './strings'

export const getDateTime = (insertTime = true) => {

    let today = new Date()
    let date = today.getFullYear() + '-' + putOneZeroOnTheLeftSide((today.getMonth() + 1)) + '-' + putOneZeroOnTheLeftSide(today.getDate())
    if (insertTime) date += " " + putOneZeroOnTheLeftSide(today.getHours()) + ":" + putOneZeroOnTheLeftSide(today.getMinutes()) + ":" + putOneZeroOnTheLeftSide(today.getSeconds())

    return date
}