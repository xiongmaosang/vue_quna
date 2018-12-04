export default {
    changeCity(state, val) {   //state是上面所有的数据，val是接收的参数
        state.city = val
        try{
            localStorage.city= val
        }catch (e) {}
    }
}