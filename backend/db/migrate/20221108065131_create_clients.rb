class CreateClients < ActiveRecord::Migration[6.1]
  def change
    create_table :clients do |t|
      t.string :name
      t.string :email
      t.integer :phone_number
      t.string :location
      t.integer :developer_id
      t.timestamps
    end
  end
end
