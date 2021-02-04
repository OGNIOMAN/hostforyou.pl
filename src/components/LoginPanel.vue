<template>
  <div>
    <v-container>
      <v-row align="center" justify="center">
        <v-col cols="12" sm="8" xs="10" md="6" lg="5" xl="4" class="px-3">
          <v-col class="mb-5 pr-0" style="text-align: right">
            Don't have an account? Please register!
            <v-btn
              rounded
              text
              style="color: #28af4c; font-weight: bold"
              to="/register"
              >Register</v-btn
            >
          </v-col>
          <v-card elevation="2" style="border-radius: 20px">
            <v-card
              class="pa-3 mx-4 moved"
              elevation="10"
              style="
                color: white;
                background-color: #0B1C3D !important;
                border-radius: 20px;
              "
            >
              <v-row>
                <v-col>
                  <div class="display-1 font-weight-light">Sign in</div>
                </v-col>
              </v-row>
              <div class="subtitle-1 font-weight-light">
                to get to the admin panel
              </div>
            </v-card>
            <v-form
              class="mx-2"
              ref="form"
            >
              <v-container class="py-0">
                <v-row>
                  <v-col cols="12" class="pb-0">
                    <v-text-field
                      style="border-radius: 20px"
                      label="E-mail"
                      type="email"
                      autocomplete="username"
                      outlined
                    ></v-text-field>
                  </v-col>
                  <v-col cols="12" class="pt-0">
                    <v-text-field
                      style="border-radius: 20px"
                      label="Password"
                      type="password"
                      autocomplete="current-password"
                      outlined
                    ></v-text-field>
                  </v-col>
                </v-row>
                <v-row>
                  <v-col class="text-right ma-0 pa-0 pb-5">
<v-dialog v-model="dialog" width="500">
                      <template v-slot:activator="{ on, attrs }">
                        <v-btn
                          rounded
                          style="color: white"
                          color="#0B1C3D"
                          v-bind="attrs"
                          v-on="on"
                          @click="login()"
                          >Sign in</v-btn
                        >
                      </template>

                      <v-card>
                        <v-card-title class="headline grey lighten-2">
                          Check your Email
                        </v-card-title>

                        <v-card-text>
                          we have detected a new login attempt, we have sent a login link, check your e-mail
                        </v-card-text>

                        <v-divider></v-divider>

                        <v-card-actions>
                          <v-spacer></v-spacer>
                          <v-btn color="primary" text @click="dialog = false">
                            I accept
                          </v-btn>
                        </v-card-actions>
                      </v-card>
                    </v-dialog>
                  </v-col>
                </v-row>
              </v-container>
            </v-form>
          </v-card>
          </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<style scoped>
.moved {
  position: relative;
  top: -20px;
  z-index: 1;
}
.icon {
  position: relative;
  top: -3px;
}
.vdialognew {
  box-shadow: none !important;
  max-width: 610px !important;
}
</style>

<script>
export default {
  data(){
    return{
      dialog: false
    }
  },
  methods:{
        login() {
      this.dialog = true;
      this.reset()
    },
          reset () {
        this.$refs.form.reset()
      },
  }

};
</script>
