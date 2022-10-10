<template>
    <v-form v-model="valid">
        <v-container style="max-width: 450px" fill-height>
            <v-card>
                <div class="pa-10">
                    <v-row>
                            <v-text-field
                            v-model="email"
                            :rules="emailRules"
                            label="E-mail"
                            required
                            ></v-text-field>
                

                            <v-text-field
                            v-model="name"
                            :rules="nameRules"
                            :counter="10"
                            label="Name"
                            required
                            ></v-text-field>
                        <v-col align="center" justify="space-around">
                            <v-btn tile color="success" @click="formSubmit()">
                                <v-icon left>mdi-pencil</v-icon>
                                Submit
                            </v-btn><br/>
                            <v-btn to="/login">cancel</v-btn>
                        </v-col>
                    </v-row>
                </div>
            </v-card>
        </v-container>
    </v-form>
</template>

<script>
  export default {
    data: () => ({
      valid: false,
      name: '',
      nameRules: [
        v => !!v || 'Name is required',
        v => v.length <= 10 || 'Name must be less than 10 characters',
      ],
      email: '',
      emailRules: [
        v => !!v || 'E-mail is required',
        v => /.+@.+/.test(v) || 'E-mail must be valid',
      ],
    }),
    methods:{
      formSubmit(){
        this.$axios.post("/users/signUp",{
          email:this.email,
          name:this.name
        })
        .then((res)=>{
          if(res.data.success == true){
            alert(res.data.message);
            this.$router.push('/login')
          }
          else{
            alert(res.data.message);
          }
        })
        .catch(function(err){
          alert(err)
        })
      }
    }
  }
</script>

<style>

</style>