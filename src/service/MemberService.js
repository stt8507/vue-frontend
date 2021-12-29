import axios from './axios.js'

const EMPLOYEE_BASE_URI = "http://localhost:8080/api/v1/members";


class MemberService{
    
    getMembers(){
        return axios.get(EMPLOYEE_BASE_URI).catch((err)=> console.log(err));
    }
    getMemberById(id){
        return axios.get(EMPLOYEE_BASE_URI + `/id/${id}`).catch((err)=> console.log(err));
    }
    getMemberByName(username){
        return axios.get(EMPLOYEE_BASE_URI + `/userName/${username}`);
    }
    createMember(data){
        axios.post(EMPLOYEE_BASE_URI , data).catch((err)=> console.log(err));
    }
    updateMember(data){
        axios.put(EMPLOYEE_BASE_URI + `/${data.id}`, data).catch((err)=> console.log(err));
    }
    deleteMember(id){
        axios.delete(EMPLOYEE_BASE_URI + `/${id}`).catch((err)=> console.log(err));
    }

}
export default new MemberService()