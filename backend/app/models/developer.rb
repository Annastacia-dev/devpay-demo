class Developer < ActiveRecord::Base 
    has_many :services
    has_many :clients, :through => :services
    has_many :invoices, :through => :services
    validates_presence_of :name, :email, :password, :phone_number, :location
end