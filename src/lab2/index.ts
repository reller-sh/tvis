import {threadProcessing} from "./threadProcessing";
import fp from "lodash/fp";


export const lab2 = async () => {

    let area: number = 0;
    const interval: number[] = [0, 10]

    const intervalSize: number = interval[1] - interval[0]

    let intervalCount = 3
    let startIntervalCount = intervalCount


    const errorRate = 0.0000001

    const cbValue = (arg: number) => Math.sqrt(1 + 2 * Math.pow(arg, 2))

    // let tempArea: number = ((cbValue(interval[0]) + cbValue(interval[1])) / 2) * intervalSize

    let threads: any = []
    let middleVars: number = Infinity


    while (middleVars > errorRate) {

        area = 0
        middleVars = 0
        const start = performance.now()

        for (let i = 0; i < intervalCount; i++) {
            const nowInterval: [number, number] =  [intervalSize / intervalCount * i, intervalSize / intervalCount * (i + 1)]


            if (i % startIntervalCount === 0) {

                const lockIndex = intervalSize / intervalCount * (i + startIntervalCount)
                middleVars += (
                    (cbValue(nowInterval[0]) +
                        cbValue(lockIndex)) * (lockIndex - nowInterval[0])/2
                )
            }
            threads
                .push(threadProcessing
                    (cbValue, nowInterval).then(r => {
                        area += fp.toNumber(r)
                        middleVars -= fp.toNumber(r)
                    })
                )
        }
        await (Promise.all(threads))
        threads = []

        console.log(performance.now() - start, ',', intervalCount)

        // console.log('MV at: ', middleVars)


        intervalCount = intervalCount * startIntervalCount

        // console.log('LV', area)
    }

    console.log(area)
    return 0

}
