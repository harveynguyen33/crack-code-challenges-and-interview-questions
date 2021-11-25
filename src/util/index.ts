export interface IBenchMarkResult {
    name: string
    result: any
    responseTime: number
}
export const benchMark = (fn: Function, name = fn.name || 'anonymous' ): IBenchMarkResult => {
    const start = startBenchMark()
    const result = fn()
    const elapseTime = endBenchMark(start)
    console.log(`[${name}] is completed, result is ${result}, response time is ${elapseTime}ms`)
    return {
        name,
        result,
        responseTime: elapseTime,
    }
}

const startBenchMark = (): [number, number] => process.hrtime()

const endBenchMark = (startTime: [number, number]): number => {
    const diff = process.hrtime(startTime)
    return (diff[0] * 1e9 + diff[1]) / 1e6
}