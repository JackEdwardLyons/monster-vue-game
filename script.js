/* ------------------------------- *\
 * Author: Jack Lyons              *
 * Author URL: www.jacklyons.me    *
 * TODO: add logs                  *
 * ------------------------------- */

new Vue( {
  el: '#app',
  data: {
    humanHealth: 100,
    monsterHealth: 100,
    isDead: {
      human: false,
      monster: false
    },
    gameStarted: false,
    healthLog: []
  },
  methods: {
    startGame: function() {
      this.gameStarted       = true;
      this.humanHealth       = 100;
      this.monsterHealth     = 100;
      this.healthLog         = [];
      alert( 'New game!' );
    },
    updateHealthLog: function( human, monster ) {
      this.healthLog.push( { 'health': `Human just lost ${ human - this.humanHealth }`, humanTurn: true, healed: false } );
      this.healthLog.push( { 'health': `Monster just lost ${ monster - this.monsterHealth }`, humanTurn: false } );
    },
    attackAmount: function( amount ) {
      return Math.floor( Math.random() * amount );
    },
    attack: function( hitCount ) {
      if ( this.gameStarted === true ) {
        let humanBefore = this.humanHealth;
        let monsterBefore = this.monsterHealth;
        // Attack both players
        this.humanHealth   = ( this.humanHealth - this.attackAmount( hitCount ) );
        this.monsterHealth = ( this.monsterHealth - this.attackAmount( hitCount ) );
        // Update logs
        this.updateHealthLog( humanBefore, monsterBefore );
      } else {
        alert( 'Please click START GAME to begin' );
      }
    },
    healPlayer: function() {
      var health = this.humanHealth;
      // Attack both players
      this.attack( 10 );
      // Rest & heal both players
      this.humanHealth   = this.humanHealth + 10;
      this.monsterHealth = this.monsterHealth + 5;
      
      if ( this.humanHealth > health ) {
        this.healthLog.push( { 'health': `Human just healed ${ this.humanHealth - health }`, healed: true } );
      }
    },
    normalAttack: function() {
      this.attack( 10 );
    },
    specialAttack: function() {
      this.attack( 25 );
    }
  },
  watch: {
    // How to refactor watch functions?
    humanHealth() {
      if ( this.humanHealth < 0 ) {
        this.humanHealth = 0;
        alert( 'You Lost!' );
        this.gameStarted = false;
      } else if ( this.humanHealth > 100 ) {
        this.humanHealth = 100;
      }
    },
    monsterHealth() {
      if ( this.monsterHealth < 0 ) {
        this.monsterHealth = 0;
        alert( 'You Won!' );
        this.gameStarted = false;
      } else if ( this.monsterHealth > 100 ) {
        this.monsterHealth = 100;
      }
    }
  }
} )