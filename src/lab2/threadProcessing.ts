

export const threadProcessing = async (cb: (x: number) => number, interval: [number, number]): Promise<number | void> => {

    // if (interval[0] === 0) {
    //
    //     await setTimeout(() => {}, 12)
    // }
    // console.log(interval)
    // console.log('TP: ', number)

    return (cb(interval[0]) + cb(interval[1])) / 2 * (interval[1] - interval[0])
}
