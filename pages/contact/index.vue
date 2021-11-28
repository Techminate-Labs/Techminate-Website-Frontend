<template>
  <v-main>
    <v-container>
      <v-row>
        <v-col cols="12" md="6">
            <div align="center" justify="center">
              <h1 class="mb-5">Our Contacts</h1>
              <p>Email : techminate@gmail.com</p>
              <p>WhatsApp : +8801680800810</p>
              <p>Telegram : Techminate#5053</p>
              <p>Discord : Techminate#5053</p>
            </div>
        </v-col>
        <v-col cols="12" md="6">
          <div align="center" justify="center">
              <h1>Direct Message Here</h1>
            </div>
            <v-form class="mt-5" ref="form">
                <v-text-field v-model="name" type="text" color="deep-orange" label="Name" outlined shaped 
                  :rules="inputRules">
                </v-text-field>
                <v-text-field v-model="email" type="email" color="deep-orange" label="Email" outlined shaped
                  :rules="inputRules">
                </v-text-field>
                <v-text-field v-model="phone" type="number" color="deep-orange" label="Phone" outlined shaped
                  :rules="inputRules">
                </v-text-field>
                <v-text-field v-model="address" type="text" label="Address" color="deep-orange" outlined shaped
                  :rules="inputRules">
                </v-text-field>
                <v-textarea v-model="messege" type="text" label="Your Message" color="deep-orange" rows="4" row-height="30" shaped :rules="inputRules" outlined auto-grow></v-textarea>
                <v-card-actions>
                  <v-btn color="deep-orange white--text"  @click="submit">Send message</v-btn>
                </v-card-actions>
          </v-form> 
        </v-col>
      </v-row>
      <div class="text-center ma-2">
        <v-snackbar v-model="snackbar" right shaped bottom color="deep-orange white--text">
          {{ successText }}
          <template v-slot:action="{ attrs }">
            <v-btn
              color="white"
              text
              v-bind="attrs"
              @click="snackbar = false"
            >
              Close
            </v-btn>
          </template>
        </v-snackbar>
      </div>
    </v-container>
  </v-main>
</template>

<script>
import gql from 'graphql-tag'

export default {
  data: () => ({
      name: " ",
      email: " ",
      phone: " ",
      address: " ",
      messege: " ",
      snackbar: false,
      successText: '',
      errors:[],
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    }),
    methods: {
      submit () {
        if (this.$refs.form.validate()) {
         this.$apollo
        .mutate({
          mutation: gql`
            mutation(
              $name: String!
              $email: String!
              $phone: String!
              $address: String!
              $messege: String!
            ) {
              createMessege(
                name: $name
                email: $email
                phone: $phone
                address: $address
                messege: $messege
              ){
                 messege{
                  name
                  email
                  address
                  phone
                  messege
                }
              }
            }
          `,
          variables: {
            name: this.name,
            email: this.email,
            phone: this.phone,
            address: this.address,
            messege: this.messege
          }
        })
        .then(() => {
          console.log("created");
          this.successText = "Messege Has Been Sent Successfully !"
          this.snackbar = true;
         
        })
        .catch((e) => {
          this.errors = e.graphQLErrors;
          this.successText = "Please Try Again !"
          this.snackbar = true;
        })
      }
    },
  },
}
</script>

<style>

</style>