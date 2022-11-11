class Service < ActiveRecord::Base 
    belongs_to :client
    belongs_to :developer
    has_many :invoices
end