interface Standups {
  oke: boolean
  standups : StandupItem[]
}

interface StandupItem {
  id: string,
  name: string,
  no_users: number,
  state: string,
  createBy: string,
  schedule: [],
  time: string,
  users: [string],
  questions: [string]
}


interface stanupItemProps{
  standup: StandupItem
  key: number
}

interface ResGetStandupsApi extends Res {
  data: {
    standups: Standups[]
  }
}

interface ResGetProduct extends ActionRedux {
  payload: ResGetProductApi
}

interface ResGetProductItemApi extends Res {
  data: {
    product: Product
  }
}

interface ResGetProductItem extends ActionRedux {
  payload: ResGetProductItemApi
}
