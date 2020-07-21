<template>
  <header>
    <router-link to="/">
      <h1>whisp.</h1>
    </router-link>
    <div v-if="currentUser" class="btns">
      
      <router-link :to="'/user/'+currentUser.uid"> <!-- ここを追加 -->
        
        <button :style="'background-image: url('+currentUser.photoURL+')'">
        </button>
        
      </router-link> <!-- ここを追加 -->
      
      <button>
        <fa icon="sign-out-alt" @click="signOut" />
      </button>
    </div>
    <div v-else class="btns">
      <button>
        <fa icon="user" @click="signIn" />
      </button>
    </div>
  </header>
</template>

<style lang="stylus" scoped>
header
  position fixed
  top 0
  width 100%
  text-align center
  padding 10px
  h1
    width fit-content
    margin 0 auto
    font-size 1.4rem
  .btns
    position absolute
    top 10px
    right 30px 
    cursor pointer
    img
      width 100%
</style>

<script>
import { db } from '../main'
import firebase from 'firebase'

export default {

  data () {
    return {
      currentUser: {}
    }
  },
  created () {
    auth.onAuthStateChanged(user => {
      this.currentUser = user
    })
  },
  methods: {
    signIn () {
      const provider = new firebase.auth.GoogleAuthProvider()
      firebase.auth().signInWithPopup(provider)
      .then((result) => {
        
        this.$router.push('/user/'+result.user.uid)
  
        alert('Hello, '+result.user.displayName+'!')
        this.createUser(result.user)
      })
    },
    createUser (user) {
      db.collection('users').doc(user.uid).set({
        'name': user.displayName,
        'photoURL': user.photoURL,
        'email': user.email
      }, { merge: true })
    },
    signOut () {
      if (window.confirm('Are You Sure to Sign Out?')) {
        auth.signOut()
        .then(() => {
          alert('You Safely Signed Out.')
          this.$router.push('/'),
          location.reload()
        })
      }
    }
  }
}
</script>