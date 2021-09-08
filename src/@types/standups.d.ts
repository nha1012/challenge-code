interface Standups {
  oke: boolean
  standups : StandupItem[]
}

interface StandupItem {
  id: number,
  name: string,
  no_users: number,
  state: string,
  createBy: string,
  schedule: [],
  time: string
}

interface ResGetStandupsApi extends Res {
  data: {
    products: Product[]
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
