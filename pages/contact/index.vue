<template>
  <v-container class="">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
        <v-row>
          <v-col cols="12" md="6">
              <div align="center" justify="center">
                <h1>Techminate</h1>
                <p>Techminate@gmail.com</p>
              </div>
          </v-col>
          <v-col cols="12" md="6"> 
              <v-form class="mt-5" ref="form">
                  <v-text-field v-model="first" color="deep-orange" label="Your Name" outlined shaped 
                    :rules="inputRules"
                    required
                    placeholder="John Doe">
                  </v-text-field>
                  <v-text-field v-model="email" color="deep-orange" label="Email Address" outlined shaped
                    :rules="inputRules"
                    placeholder="jhondoe@gmail.com">
                  </v-text-field>
                  <v-text-field v-model="phone" color="deep-orange" label="Phone Number" outlined shaped
                    :rules="inputRules"
                    required
                    placeholder="+88018422222">
                  </v-text-field>
                  <v-text-field v-model="address" label="Address" color="deep-orange" outlined shaped
                    placeholder="Snowy Rock Pl"
                    counter="25"
                    required>
                  </v-text-field>
                  <v-textarea  outlined auto-grow v-model="text" color="deep-orange" label="Your Message" rows="4" row-height="30" shaped></v-textarea>
                  <v-card-actions>
                    <v-btn color="deep-orange white--text"  @click="submit">Send message</v-btn>
                  </v-card-actions>
            </v-form> 
          </v-col>
        </v-row>
  </v-container>
</template>

<script>

export default {
  data: () => ({
      first: " ",
      email: " ",
      phone: " ",
      address: " ",
      text: " ",
      inputRules: [v => v.length >= 3 || "Minimum length is 3 characters"]
    }),
  computed: {
      form () {
        return {
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          text: this.text
          
        }
      },
    },

    methods: {
      
      submit () {
        if (this.$refs.form.validate()) {
        console.log(
         this.first,
         this.email,
         this.phone,
         this.address,
         this.text
        );
      }

      },
    }
}
</script>

<style>

</style>