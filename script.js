new Vue({
  el: '#app', 
  data: {
    humanHealth: 10,
    monsterHealth: 10,
    isDead: {
      human: false,
      monster: false
    }
  },
  methods: {
    
  },
  computed: {
    
  },
  watch: {
    humanHealth() {
      if ( this.humanHealth < 0 ) {
        this.humanHealth = 0;
      }
    },
    monsterHealth() {
      if ( this.monsterHealth < 0 ) {
        this.monsterHealth = 0;
      }
    }
  }
})