import axiosConnection from "../httpCommon"

export default({
    getAllInfo(){
        return axiosConnection.get();
    }
})