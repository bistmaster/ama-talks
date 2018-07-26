var app = new Vue({
    el: '#app',
    data: {
      title: 'Hello Vue!',
      browsers: ['IE', 'Mozilla', 'Safari', 'Mozilla'],
      textBrowser: '',
      user: {}
    },

    methods: {
        greet: function () {
            this.title = 'Weee';
        },

        add: function () {
            this.browsers.push(this.textBrowser);
            this.textBrowser = '';
        },

        remove(index) {
            this.browsers.splice(index, 1);
        },

        save() {
            console.log(this.user);
        }
    }
  })