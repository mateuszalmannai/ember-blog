import Ember from 'ember';

export default Ember.Controller.extend({
  actions: {
    createItem(){
      this.store.createRecord('post', {
        title: this.get('title'),
        body: this.get('body'),
        author: this.get('author'),
        date: this.get('date')
      }).save();
      this.set('title', '');
      this.set('body', '');
      this.set('author', '');
      this.set('date','')
    },
    destroyItem(post){
      post.destroyRecord();
    }
  }
});
