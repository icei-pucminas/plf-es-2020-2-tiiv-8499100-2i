from services.base import Base
from sqlalchemy import Column, DateTime, Integer, ForeignKey
from sqlalchemy.orm import relationship

class SymbolView(Base):
    __tablename__ = 'symbol_view'

    id = Column(Integer, primary_key=True, unique=True, autoincrement=True)
    date = Column(DateTime, nullable=False)
    uid = Column(Integer, ForeignKey('user.uid'))
    symbol_id = Column(Integer, ForeignKey('symbol.id'))

    user = relationship('User')
    symbol = relationship('Symbol')

    def __init__(self, date, uid, symbol_id):
        self.date = date
        self.uid = uid
        self.symbol_id = symbol_id

