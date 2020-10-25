from services.base import Base
from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.orm import relationship

class CalculatorView(Base):
    __tablename__ = 'calculator_view'

    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    date = Column(DateTime, nullable=False)
    uid = Column(Integer, ForeignKey('user.uid'))
    calculator_type = Column(String, nullable=False)

    user = relationship('User')
    calculator = relationship('Calculator')

    def __init__(self, date, uid, calculator_type):
        self.date = date
        self.uid = uid
        self.calculator_type = calculator_type

