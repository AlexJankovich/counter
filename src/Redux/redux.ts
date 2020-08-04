

type btnTitleType = {
    btnTitle: string
}

export type stateType = {
    value: number
    maxValue: number
    btnTitle?: btnTitleType
    isDisabled: boolean
}
export let store: stateType = {
    value: 0,
    maxValue: 5,
    isDisabled: false,
}