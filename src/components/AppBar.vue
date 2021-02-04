<template>
      <v-app-bar
      id="home-app-bar"
      app
      elevation="10"
      elevate-on-scroll
      height="80"
      color="#0B1C3D"
    >
          <v-img
        :src="require('@/assets/SampleLogo.svg')"
        class="mr-1"
        contain
        max-width="300"
        width="100%"
      />
      <v-spacer></v-spacer>
      <div>
            <v-tabs background-color="transparent" color="#1685AD" dark class="hidden-sm-and-down">
    <v-tab class="font-weight-bold" text>Home</v-tab>
    <v-tab class="font-weight-bold" text>Item Two</v-tab>
    <v-tab class="font-weight-bold" text>Item Three</v-tab>
    <v-tab class="font-weight-bold" text>Item Four</v-tab>
  </v-tabs>

        <!-- <v-tabs
        style="color: white !important"
          class="hidden-sm-and-down"
          background-color="transparent"
          color="white"
        >
          <v-tab
            style="border-radius: 10px !important"
            v-for="(name, i) in items"
            :key="i"

            :ripple="false"
            class="font-weight-bold"
            min-width="96"
            text
            color="red"
          >
            {{ name }}
          </v-tab>
        </v-tabs> -->
      </div>
      <v-divider vertical/>
        <v-btn class="ml-5" to="/login" rounded>login</v-btn>
    </v-app-bar>
</template>

<script>
export default {
    data() {
        return {

        }
    },
}
</script>

<style>

</style>