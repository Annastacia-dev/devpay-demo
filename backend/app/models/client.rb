class Client < ActiveRecord::Base 
    has_many :services
    has_many :developers, :through => :services
    has_many :invoices, :through => :services
    validates_presence_of :name, :email, :phone_number, :location
end