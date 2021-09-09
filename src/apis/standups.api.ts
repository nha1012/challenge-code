import axios from "axios"
import { API_URL } from "src/constants/api"

export const getStandupsListApi = ()  =>{
  return axios.get(`${API_URL}/standups`)
}

// export const getProductItemApi = (id: string): Promise<ResGetStandupsApi> =>
//   new Promise((resolve, reject) => {
//     setTimeout(() => {
//       const product = mockProducts.find(product => product.id === id)
//       if (product) {
//         resolve({
//           data: {
//             product
//           },
//           message: "Lấy sản phẩm thành công"
//         })
//       } else {
//         reject(new Error("Không tìm thấy sản phẩm"))
//       }
//     }, 100)
//   })
