export type accessoryType = {
    name: string,
    title: string,
    cost: number,
    count: number,
    type: 'Market' | 'Stock'
}

export type defaultAccessory = {
    title: string,
    cost: number,
    sellCost: number,
    count: number,
    installed: number,
    required: number,
    completed: boolean
}

export type component = {
    type: string,
    required: number,
    installed: number,
    available: number,
    completed: boolean
}

export type notification = {
    title: string,
    text: string,
    icon: string | undefined
}