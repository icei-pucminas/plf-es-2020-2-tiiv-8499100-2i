from firebase import firebase

firebase_op = firebase.FirebaseApplication('https://tis3-2i.firebaseio.com/', None)

class GenericDao:

    def insert(self, data, typeClass):
        firebase_op.post('app/' + typeClass, data)

    def insertKey(self, data, key, typeClass):
        firebase_op.put('app/' + typeClass,key, data)

    def get(self, data_id, typeClass):
        return firebase_op.get('app/' + typeClass, data_id)

    def get_all(self, typeClass):
        return firebase_op.get('app/' + typeClass, '')

    def update(self, data_id, data, typeClass):
        for key, value in data.items():
            if value is not None and value != '':
                firebase_op.put('app/' + typeClass + '/' + data_id, key, value)

    def delete(self, data_id, typeClass):
        firebase_op.delete('app/' + typeClass, data_id)