import { ComponentCustomProperties } from 'vue'
import { Store } from "vuex"
import { Prefecture } from "./util/types"

declare module '@vue/runtime-core' {
    // ストアのステートを宣言する
    interface State {
        prefectures: Prefecture[]
    }
  
    // `this.$store` の型付けを提供する
    interface ComponentCustomProperties {
      $store: Store<State>
    }
}