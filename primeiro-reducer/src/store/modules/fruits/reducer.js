const initialState = [
{
    fruit:'Banana',
    image:'https://www.bistek.com.br/media/catalog/product/cache/15b2f1f06e1cd470c80b1f3fd7ec8301/3/0/3031276.jpg'
},
,{
    fruit:'Maçã',
    image:"https://superprix.vteximg.com.br/arquivos/ids/175207-600-600/Maca-Argentina--1-unidade-aprox.-200g-.png?v=636294203590200000"
}
,{
    fruit: 'Morango',
    image: 'https://www.proativaalimentos.com.br/image/cache/catalog/img_prod/oleo-essencia-morango-100ml-fruta-puro-essencia-massagem-D_NQ_NP_960102-MLB31202671230_062019-F[1]-1000x1000.jpg'
}]
const reducerFruits = (state = initialState, action) =>{
    switch( action.type ){
        default:
            return state
    }
}
export default reducerFruits