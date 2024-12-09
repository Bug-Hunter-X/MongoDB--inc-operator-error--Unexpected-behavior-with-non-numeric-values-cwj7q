```javascript
// Correct usage of $inc operator
db.collection('myCollection').updateOne({ _id: 1 }, { $inc: { numericField: 1 } });

//Alternative for string fields using $set
db.collection('myCollection').updateOne({ _id: 1 }, { $set: { stringField: 'new value' }});
```