<template>
<div class="section">
    <div class="columns is-multiline is-centered">
    <div class="column is-one-third"></div>
    <div class="column is-one-third centered is-full">
    <nav class="panel" >
      <p class="panel-heading ">ORC ADMIN</p>
      <label class="panel-block" v-if="this.formError" >
        <div class="notification is-danger" >
          <button class="delete"></button>
          {{this.formError}}
        </div>
      </label>
      <div class="panel-block" >
                
      <!--button class="button" @click="activeTab = 1">Set Music</button-->
      <b-tabs v-model="activeTab" expanded>
        <b-tab-item label="Sign-In">
          <section>
            <b-field label="User Email">
              <b-input type="email"
                  maxlength="50" v-model="user.email">
              </b-input>
            </b-field>
            <b-field label="Password">
            <b-input type="password" maxlength="30" v-model="user.password"></b-input>
        </b-field>
        <b-field ><!-- Label left empty for spacing -->
            <p class="control">
                <button class="button is-primary" @click="signin()">
                  submit
                </button>
            </p>
        </b-field>
          </section>
        </b-tab-item>

        <b-tab-item label="Sign-Up">
       
        </b-tab-item>
    </b-tabs>
      </div>
  <!--
  <label class="panel-block">
    <input type="checkbox">
    remember me
  </label>
  <div class="panel-block">
    <button class="button is-link is-outlined is-fullwidth">
      reset all filters
    </button>
  </div>
  -->
  </nav>  
    </div>  
    <div class="column is-one-third"></div>  
  </div> 
</div>
</template>

<script>
import { mapActions } from 'vuex'
export default {
  name: 'Login',
  middleware: 'guest',
  data () {
    return {
      user: {
        email: '',
        password: ''
      },
      activeTab: 0,
      formError: null,
      loading: false
    }
  },
  methods: {
    ...mapActions(['login']),
    async signin () {
      this.loading = true
      await this.login(this.user).then((res) => {
        this.loading = false
        this.$router.push('/')
      }).catch((error) => {
        debugger // eslint-disable-line
        this.formError = error.message ? error.message : error
        this.$dialog.alert({title: 'Error', message: '<h1>' + this.formError + '</h1>', confirmText: 'ok'})
        // this.errors = Object.assign({}, this.errors, { error: ['Invalid credentials'] })
        this.loading = false
      })
    },
    async logout () {
      try {
        await this.$store.dispatch('logout')
      } catch (error) {
        this.formError = error.message
      }
    }
  }
}
</script>

<style scoped>

</style>
