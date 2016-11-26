Meteor.methods({
  addNewQueue(data){
    let newQueues = Queues.insert(data);
    return newQueues
  }
});
