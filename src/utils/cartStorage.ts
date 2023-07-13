// import { FData } from '../hooks/useData'

// const CartStorage = {
//     save: (item: FData)=> void
// }

// const cartStorage = (item: FData) => {
//     const cartItems = JSON.parse(localStorage.getItem('cartItems') ?? '[]')

//     if (cartItems.length !== 0) {
//         // if Cart is not empty
//         const fItemIndex = cartItems.findIndex(
//             (i: { id: number }) => i.id === item.id
//         )

//         if (fItemIndex !== -1 || fItemIndex === undefined) {
//             // if item is available on cart
//             const fItem = cartItems[fItemIndex]
//             cartItems[fItemIndex] = {
//                 id: fItem.id,
//                 qty: fItem.qty + 1,
//                 orderNote: fItem.orderNote
//             }

//             localStorage.setItem('cartItems', JSON.stringify([...cartItems]))
//         } else {
//             // if item is not available on cart
//             localStorage.setItem(
//                 'cartItems',
//                 JSON.stringify([
//                     ...cartItems,
//                     {
//                         id: item.id,
//                         qty: 1,
//                         orderNote: ''
//                     }
//                 ])
//             )
//         }
//     } else {
//         // if Cart is empty
//         localStorage.setItem(
//             'cartItems',
//             JSON.stringify([
//                 {
//                     id: item.id,
//                     qty: 1,
//                     orderNote: ''
//                 }
//             ])
//         )
//     }
// }
