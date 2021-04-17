
import {ADD_TO_CART,REMOVE_ITEM,ADD_QUANTITY,SUB_QUANTITY,SUB_CART} from '../actions/action-types/cart-Type'
const  initState  =  {
    products :[
        {
            id:1,
            name:'smartphone Mi 9',
            price:300,
            description:"Le Xiaomi Mi 9 est un smartphone haut de gamme annoncé par Xiaomi le 24 février 2019. Il est équipé d'un SoC Snapdragon 855, d'un triple capteur photo, d'un écran AMOLED de 6,39 pouces et d'une batterie de 3500 mAh compatible Qi.",
            img:'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/xiaomi-mi-9-frandroid-officiel-2019.png?resize=580,580'
        },
        {
            id:2,
            name:'Redmi Note 8T',
            price:206,
            description:"Le Xiaomi Redmi Note 8T, annoncé le 6 novembre 2019 en France, est la version française du Redmi Note 8 avec une puce NFC et un chargeur rapide inclus en plus. Successeur du populaire Redmi Note 7, il est équipé d'un SoC Qualcomm Snapdragon 665, d'un écran de 6,3 pouces Full HD+, de 4 caméras dorsales dont une de 48 mégapixels et d'une batterie de 4000 mAh",
            img:'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/08/xiaomi-redmi-note-8t-frandroid-2019.png?resize=580,580'
        },
        {
            id:3,
            name:'Huawei Y9 2019',
            price:399,
            description:"Le Huawei Y9 2019 est un smartphone de milieu de gamme annoncé en janvier 2019. Il est équipé d'un écran de 6,5 pouces avec une définition Full HD+, d'un SoC Kirin 710 épaulé par 6 Go de RAM et d'un double capteur de 13+2 mégapixels.",
            img:'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/huawei-y9-2019-frandroid-packshot.png?resize=580,580'
        },
        {
            id:4,
            name:'Huawei P30',
            price:395,
            description:"Le Huawei P30 a été annoncé le 26 mars 2019. Équipé d'une puce Kirin 980, il dispose d'un triple capteur photo à son dos, d'un SoC Kirin 980 et d'un écran de 6,1 pouces borderless avec une petite encoche.",
            img:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/huawei-p30-2019-frandroid.png?resize=580,580'
        },
        {
            id:5,
            name:'Huawei P20 Lite',
            price:156,
            description:"Le Huawei P20 Lite est le petit frère du Huawei P20 reprenant quelques fonctionnalités disponibles sur son grand-frère à un prix plus abordable. Il embarque un SoC Kirign 659 épaulé par 4 Go de RAM, 64 Go de Stockage, un capteur frontal de 16 mégapixels et un double capteur dorsal de 16+2 mégapixels.",
            img:'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/huawei-p20-lite.png?resize=580,580'
        },
        {
            id:6,
            name:'Samsung Galaxy S10',
            price:649,
            description:"Le Samsung Galaxy S10 est le flagship de Samsung pour 2019. Il est équipé d'un SoC Samsung Exynos 9820 gravé en 8 nm, d'un triple capteur et d'un nouvel écran sans bord avec la caméra logée dans une bulle.",
            img:'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/samsung-galaxy-s10-2019-frandroid.png?resize=580,580'
        },
        {
            id:7,
            name:'Samsung Galaxy A10',
            price:149,
            description:"Le Samsung Galaxy A10 est un smartphone d'entrée de gamme annoncé en mars 2019. Il est équipé d'un écran IPS LCD de 6,2 pouces avec encoche, d'un SoC Exynos 7884 épaulé par 2 Go de RAM et d'une batterie de 3400 mAh.",
            img:'https://c1.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/samsung-galaxy-a10-frandroid-2019-png.png?resize=580,580'
        },
        {
            id:8,
            name:'OnePlus 6',
            price:256,
            description:"Le OnePlus 6, le successeur du OnePlus 5T, est sorti en mai 2018. Il dispose d'un écran AMOLED de 6,28 pouces, d'un SoC Qualcomm Snapdragon 845 épaulé par 6 ou 8 Go de RAM et d'un double capteur photo de 16+20 mégapixels.",
            img:'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/04/oneplus-6-rouge.png?resize=580,580'
        },
        {
            id:9,
            name:'OnePlus 7T Pro',
            price:459,
            description:"Le OnePlus 7T Pro est le successeur du OnePlus 7 Pro. Evolution de ce dernier, il est équipé d'un SoC Qualcomm Snapdragon 855+ et une nouvelle solution pour la photo avec un triple capteur arrière de 48+8+16 mégapixels.",
            img:'https://c2.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2019/09/oneplus-7t-pro-frandroid-2019.png?resize=580,580'
        },
        {
            id:10,
            name:'OnePlus 9',
            price:719,
            description:"Annoncé en mars 2021, le OnePlus 9 est le modèle haut de gamme de la marque : Soc Qualcomm Snapdragon 888 couplé à 8 ou 12 Go de RAM et 128 ou 256 Go de stockage. Il est équipé de 3 capteurs photo à l'arrière : le principal de 48 mégapixels, un ultra grand-angle de 50 mégapixels et un capteur de profondeur de 2 mégapixels. Sa batterie de 4500 mAh est compatible charge rapide (65 W).",
            img:'https://c0.lestechnophiles.com/images.frandroid.com/wp-content/uploads/2021/03/oneplus-9-frandroid-2021.png?resize=580,580'
        },
    ],
    addedItems :[],
    total : 0,
    totalQte:0

}
const cartReducer= (state = initState,action)=>{
   
    
    if(action.type === ADD_TO_CART){
          let addedItem = state.products.find(item=> item.id === action.id)
          //check if the action id exists in the addedItems
         let existed_item= state.addedItems.find(item=> action.id === item.id)
         if(existed_item)
         {
            addedItem.quantity += 1 
            state.totalQte+=1
             return{
                ...state,
                 total: state.total + addedItem.price 
                  }
        }
         else{
            state.totalQte+=1
            addedItem.quantity = 1;
            //calculating the total
            let newTotal = state.total + addedItem.price 
            
            return{
                ...state,
                addedItems: [...state.addedItems, addedItem],
                total : newTotal,
            }
            
        }
    }
    if(action.type === REMOVE_ITEM){
        
        let itemToRemove= state.addedItems.find(item=> action.id === item.id)
        let new_items = state.addedItems.filter(item=> action.id !== item.id)
        
       
        let newTotal = state.total - (itemToRemove.price * itemToRemove.quantity )
       
   
        return{
            ...state,
            addedItems: new_items,
            total: newTotal
        }
    }

    if(action.type === SUB_CART){
       
        delete state.addedItems
        return {...state,
            addedItems: [],
            total: 0
        }     
    }
  
    if(action.type=== ADD_QUANTITY){
        let addedItem = state.products.find(item=> item.id === action.id)
          addedItem.quantity += 1 
          let newTotal = state.total + addedItem.price
          return{
              ...state,
              total: newTotal
          }
    }
    if(action.type=== SUB_QUANTITY){  
        let addedItem = state.products.find(item=> item.id === action.id) 
        //if the qt == 0 then it should be removed
        if(addedItem.quantity === 1){
            let new_items = state.addedItems.filter(item=>item.id !== action.id)
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                addedItems: new_items,
                total: newTotal
            }
        }
        else {
            addedItem.quantity -= 1
            let newTotal = state.total - addedItem.price
            return{
                ...state,
                total: newTotal
            }
        }
        
    }
    
  else{
    return state
    }
    
}

export default cartReducer