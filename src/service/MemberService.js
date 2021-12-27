import axios from './axios.js'

const EMPLOYEE_BASE_URI = "http://localhost:8080/api/v1/members";


class MemberService{
    
    getMembers(){
        return axios.get(EMPLOYEE_BASE_URI);
    }
    getMemberById(id){
        return axios.get(EMPLOYEE_BASE_URI + `/id/${id}`);
    }
    getMemberByName(username){
        return axios.get(EMPLOYEE_BASE_URI + `/userName/${username}`);
    }
    createMember(data){
        axios.post(EMPLOYEE_BASE_URI , data);
    }
    updateMember(data){
        axios.post(EMPLOYEE_BASE_URI + `/${data.id}`, data);
    }
    deleteMember(id){
        axios.delete(EMPLOYEE_BASE_URI + `/${id}`);
    }

}
export default new MemberService()