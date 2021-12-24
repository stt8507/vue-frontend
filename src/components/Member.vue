<template>
  <div class="container">
    <div class="row">
      <form>
        <div class="input-group mb-3 col-3">
          <div class="input-group-prepend">
            <span class="input-group-text">id</span>
          </div>
          <input
            v-model="idn"
            type="text"
            class="form-control"
            placeholder="Username"
          />
          <input type="button" @click="getMemberById(idn)" value="getbyId" />

          <input type="text" class="form-control" placeholder="Your Email" />
          <div class="input-group-prepend">
            <span class="input-group-text">@example.com</span>
          </div>
        </div>
      </form>
    </div>
    <table class="table">
      <thead>
        <th>id</th>
        <th>emailId</th>
        <th>firstName</th>
        <th>lastName</th>
      </thead>
      <tbody>
        <tr v-for="e in members" v-bind:key="e.id">
          <td>{{ e.id }}</td>
          <td>{{ e.emailId }}</td>
          <td>{{ e.firstName }}</td>
          <td>{{ e.lastName }}</td>
          <td>
            <input type="button" @click="deleteMember(idn)" value="dele" />
          </td>
        </tr>
      </tbody>
    </table>
  </div>
</template>

<script>
import MemberService from "../service/MemberService";
export default {
  name: "Member",
  data() {
    return {
      members: [],
      member: {
        id: Number,
        emailId: "",
        firstName: "",
        lastName: "",
      },
      idn: 0,
    };
  },
  methods: {
    getMembers() {
      MemberService.getMembers().then((response) => {
        this.members = response.data;
      });
    },
    getMemberById(id) {
      MemberService.getMemberById(id).then((response) => {
        this.member.id = response.data.id;
        this.member.emailId = response.data.emailId;
        this.member.firstName = response.data.firstName;
        this.member.lastName = response.data.lastName;
      });
    },
    updateMember(data) {
      MemberService.updateMember(data);
    },
    deleteMember(id) {
      MemberService.deleteMember(id);
    },
  },
  created() {
    this.getMembers();
  },
};
</script>
