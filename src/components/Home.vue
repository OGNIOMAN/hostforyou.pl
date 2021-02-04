<template>
  <v-img
    :src="require('@/assets/background.jpg')"
    class="white--text"
    gradient="to bottom, rgba(11, 28, 61, .9), rgba(0,0,0,.4)"
  >
  <v-content> 
    <v-container>
      <v-row justify="center" class="pt-15">
        <v-col cols="12" sm="4" md="4" class="glass">
          <div color="transparent" class="gradient-border" id="box">
            <v-icon class="my-4" size="56" dark> mdi-keyboard </v-icon>
          </div> </v-col
        ><v-col cols="12" sm="4" md="4" class="glass">
          <div color="transparent" class="gradient-border" id="box">
            <v-icon class="my-4" size="56" dark> mdi-chart-bar </v-icon>
          </div></v-col
        >
        <v-col v-if="$vuetify" cols="12" sm="4" md="4"  class="hidden-md-and-down glass">
          <div
            height="100%"
            color="transparent"
            class="gradient-border"
            id="box"
          >
           <v-icon class="mt-4" size="56" dark> mdi-content-save-cog </v-icon>
          </div></v-col
        >
      </v-row>
      <!-- <v-row> 
          <v-col cols="12" md="6" style="background-color: red;" ></v-col>
          <v-col cols="12" md="6" style="background-color: blue;" ></v-col>
          <v-col cols="12" md="4" style="background-color: red;" ></v-col>
      </v-row> -->
    </v-container>
    </v-content>
  </v-img>
</template>

<script>
export default {
    data() {
        return {
            
        }
    },
    components:{
    }
};
</script>

<style scoped>
@import url("https://fonts.googleapis.com/css?family=Raleway:200");
.glass {
  background-color: rgba(95, 95, 95, 0.4);
  backdrop-filter: blur(10px);
  border-radius: 20px;
  box-shadow: 0 0 1rem 0 rgba(0, 0, 0, 0.2);
  height: 300px;
}

.gradient-border {
  --borderWidth: 4px;
  background: #1d1f20;
  position: relative;
  border-radius: 17px;
}
.gradient-border:after {
  content: "";
  position: absolute;
  top: calc(-1 * var(--borderWidth));
  left: calc(-1 * var(--borderWidth));
  height: calc(100% + var(--borderWidth) * 2);
  width: calc(100% + var(--borderWidth) * 2);
  background: linear-gradient(
    60deg,
    #6fba82,
    #07b39b,
    #1098ad,
    #4b57ff,
    #5073b8,
    #1098ad,
    #07b39b,
    #6fba82
  );
  border-radius: calc(5 * var(--borderWidth));
  z-index: -1;
  animation: animatedgradient 3s ease alternate infinite;
  background-size: 300% 300%;
}
#box {
  display: flex;
  align-items: flex-start;
  justify-content: center;
  height: 100%;
  color: white;
  font-family: "Raleway";
  font-size: 2.5rem;
}

@keyframes animatedgradient {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>
