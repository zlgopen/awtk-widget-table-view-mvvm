ViewModel('main', {
  _add: function () {
    var item = {
      name: 'name:' + this.items.length,
      color: this.items.length % 3,
      value: this.items.length % 100
    }
    this.items.push(item);
  },
  data: {
    items: []
  },
  methods: {
    add: function () {
      this._add();
      this.notifyItemsChanged(this.items);
    },
    canRemove: function (args) {
      return args.index < this.items.length;
    },
    remove: function (args) {
      this.items.splice(args.index, 1);
      this.notifyItemsChanged(this.items);
    },
    canClear: function () {
      return this.items.length > 0;
    },
    clear: function () {
      this.items.splice(0, this.items.length);
      this.notifyItemsChanged(this.items);
    },
    canReset: function () {
      return true;
    },
    reset: function (args) {
      var cnt = parseInt(args);

      this.items.splice(0, this.items.length);
      for (var i = 0; i < cnt; i++) {
        this._add();
      }
      this.notifyItemsChanged(this.items);
    }
  }
});
