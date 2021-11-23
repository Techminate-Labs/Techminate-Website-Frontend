<template>
  <v-container class="">
    <!-- Stack the columns on mobile by making one full-width and the other half-width -->
    
        <v-row>
          <v-col cols="12" md="6">
            <v-parallax
              height="600"
              class="mt-5"
              src="https://cdn.wallpapersafari.com/61/6/LgqOc8.jpg"
              >
              <div align="center" justify="center">
                <h1>Techminate</h1>
                <p>Techminate@gmail.com</p>
                <p>Uttara Dhaka-1230</p>
                <span>Bangladesh</span>
              </div>
            </v-parallax>
          </v-col>
          <v-col cols="12" md="6">
           
              <v-form class="mt-5">
                  <v-text-field v-model="first" label="First Name" outlined shaped 
                    ref="name"
                    :rules="[() => !!name || 'This field is required']"
                    :error-messages="errorMessages" 
                    required
                    placeholder="John">
                  </v-text-field>
                  <v-text-field v-model="email" label="Email Address" outlined shaped
                    ref="email"
                    :rules="[() => !!email || 'This field is required']"
                    :error-messages="errorMessages" 
                    required
                    placeholder="jhondoe@gmail.com">
                    
                  </v-text-field>
                  <v-text-field v-model="phone" label="Phone Number" outlined shaped
                    ref="phone"
                    :rules="[() => !!phone || 'This field is required']"
                    :error-messages="errorMessages" 
                    required
                    placeholder="+88018422222">
                  
                  </v-text-field>
                  <v-text-field v-model="address" label="Address" outlined shaped
                      ref="address"
                      :rules="[
                        () => !!address || 'This field is required',
                        () => !!address && address.length <= 25 || 'Address must be less than 25 characters',
                        addressCheck
                      ]"
                  placeholder="Snowy Rock Pl"
                  counter="25"
                  required>
                  </v-text-field>
                  <v-textarea  outlined auto-grow label="Your Message" rows="4" row-height="30" shaped></v-textarea>
                  <v-card-actions>
                    <v-btn color="primary"  @click="submit"> Send message</v-btn>
                  </v-card-actions>
                </v-form> 
              
            </v-col>
          </v-row>
  
  </v-container>
</template>

<script>

export default {
  data: () => ({
      first: '',
      last: '',
      email: '',
      phone: '',
      address: '',
    
    }),
  computed: {
      form () {
        return {
          name: this.name,
          email: this.email,
          phone: this.phone,
          address: this.address,
          formHasErrors: false,
        }
      },
    },

    watch: {
      name () {
        this.errorMessages = ''
      },
    },

    methods: {
      addressCheck () {
        this.errorMessages = this.address && !this.name
          ? `Hey! I'm required`
          : ''

        return true
      },
      resetForm () {
        this.errorMessages = []
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          this.$refs[f].reset()
        })
      },
      submit () {
        this.formHasErrors = false

        Object.keys(this.form).forEach(f => {
          if (!this.form[f]) this.formHasErrors = true

          this.$refs[f].validate(true)
        })
      },
    }
}
</script>

<style>

</style>