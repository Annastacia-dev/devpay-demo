class CreateDevelopers < ActiveRecord::Migration[6.1]
    def change
      create_table :developers do |t|
        t.string :name
        t.string :email
        t.string :password
        t.integer :phone_number
        t.string :location
        t.timestamps
    end
  end
end
