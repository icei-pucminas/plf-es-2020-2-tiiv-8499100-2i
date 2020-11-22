from services.firebaseauth import signUp
from sqlalchemy import Column, String, Boolean
from services.base import Base

class User(Base):
    __tablename__ = 'user'

    uid = Column(String, primary_key=True, unique=True)
    email = Column(String, nullable=False)
    name = Column(String, nullable=False)
    document = Column(String, nullable=False)
    phone = Column(String, nullable=False)
    business_name = Column(String, nullable=False)
    is_admin = Column(Boolean, nullable=False)

    def __init__(self, uid, name, document, phone, business_name, is_admin):
        self.uid = uid
        self.name = name
        self.document = document
        self.phone = phone
        self.business_name = business_name
        self.is_admin = is_admin


    def create_firebase_user(self, email, password):
        response = signUp(email, password)
        self.uid = response['localId']

