<template>
  <div>
    <div class="pt-4">
      <div class="pt-4 pb-5">
        <v-row class="pt-4">
          <v-col v-for="i in 7" :key="i" class="flex-shrink-0" cols="auto">
            <v-chip color="accent">#Images</v-chip>
          </v-col>
        </v-row>
      </div>

      <div class="pt-4 pb-5">
        <h3 class="text-h5 font-weight-medium pb-4">Comments</h3>

        <v-divider></v-divider>

        <v-text-field label="댓글을 달아주세요!" solo type="email" outlined flat class="pt-4"></v-text-field>
        <v-btn color="accent" block large>댓글 작성!</v-btn>
      </div>

      <v-divider></v-divider>
      
      <div class="pt-4">
        <div class="d-flex align-center mb-6" v-for="i in 5" :key="i">
          <div class="pl-2">
            <div class="text-h6">둔이둔이</div>
            <div class="text-subtitle-1">저 지원하고싶은데 어떻게 지원해요?</div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>
