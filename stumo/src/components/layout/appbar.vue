<template>
  <div>
    <v-navigation-drawer
        v-if="!$vuetify.breakpoint.smAndUp"
        v-model="drawer"
        :clipped="$vuetify.breakpoint.lgAndUp"
        app
        color="primary"
        dark
    >
      <v-list color="primary" nav>
        <v-list-item
            v-for="(item, i) in btnItems"
            :key="i"
            :href="item.href"
            :target="item.target"
            :to="item.to"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.text }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
        <v-list-item
            v-for="(item, i) in barItems"
            :key="i"
            :href="item.href"
            :target="item.target"
            :to="item.to"
            link
        >
          <v-list-item-content>
            <v-list-item-title>{{ item.title }}</v-list-item-title>
          </v-list-item-content>
        </v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-app-bar
        :clipped-left="$vuetify.breakpoint.lgAndUp"
        app
        color="white"
        elevate-on-scroll
        flat
    >
      <v-container :class="{ 'px-0': !$vuetify.breakpoint.smAndUp }">
        <v-row
            :no-gutters="!$vuetify.breakpoint.smAndUp"
            align="center"
            justify="space-between"
        >
          <v-col cols="3" class="d-flex align-center">
            <v-app-bar-nav-icon
                v-if="!$vuetify.breakpoint.mdAndUp"
                @click.stop="drawer = !drawer"
            />
            <v-toolbar-title
                class="font-weight-bold text-h5 primary--text"
                style="cursor: pointer"
                @click="$router.push('/')"
            >
              Stumo
            </v-toolbar-title>
          </v-col>

          <v-col v-if="$vuetify.breakpoint.mdAndUp" class="text-right">
            <v-btn
                v-for="(item, i) in btnItems"
                :key="i"
                :color="item.color"
                :outlined="item.outlined"
                :target="item.target"
                :to="item.to"
                class="ml-2 text-capitalize"
            >
              <v-icon left>{{ item.icon }}</v-icon>
              {{ item.text }}
            </v-btn>
          </v-col>

        </v-row>
      </v-container>
    </v-app-bar>
  </div>
</template>

<script>
export default {
  mounted (){
    this.getLoginInfo();
  },
  methods: {
    getLoginInfo(){
      this.$axios.get("/login/info")
                  .then((res) => {
                    this.$notify({title: "최영우님!",text: "환영합니다! "});
                    this.$store.state.userinfo = res.data;
                    if (res.data != null && res.data != "" && res.data != undefined){
                      this.btnItems = [...this.loginedBtnItems];
                    }else{
                      this.btnItems = [...this.defaultBtnItems];
                    }
                    // this.btnItems = [...this.defaultBtnItems];
                  })
                  .catch((error) => {
                    // this.btnItems = [...this.loginedBtnItems];
                    this.btnItems = [...this.defaultBtnItems];
                  })
                  .finally(()=>{
                    //console.log("finally Test");
                    // alert(1);
                  })
    }
  },
  data: () => ({
    drawer: null,
    btnItems: [
    ],
    defaultBtnItems: [
      {
        text: "새로운 모임 시작하기",
        to: "/moRegi",
        target: "_black",
        color: "primary",
        icon: "mdi-grease-pencil",
      },
      {
        text: "로그인",
        to: "/login",
        target: "_black",
        color: "primary",
        icon: "mdi-login",
      },
    ],
    loginedBtnItems: [
      {
        text: "새로운 모임 시작하기",
        to: "/moRegi",
        target: "_black",
        color: "primary",
        icon: "mdi-grease-pencil",
      },
      {
        text: "마이페이지",
        to: "/myPage",
        target: "_black",
        color: "primary",
        icon: "mdi-account",
      },
      {
        text: "채팅룸",
        to: "/myChat",
        target: "_black",
        color: "primary",
        icon: "mdi-account",
      },
      {
        text: "로그아웃",
        to: "/logout",
        target: "_black",
        color: "primary",
        icon: "mdi-account",
      },
    ],
  }),
};
</script>
